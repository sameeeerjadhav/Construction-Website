"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import Link from "next/link";
import { homes } from "@/data/site";

type EnquireContextValue = {
  openEnquire: () => void;
  closeEnquire: () => void;
  lockBody: () => () => void;
};

const EnquireContext = createContext<EnquireContextValue | null>(null);

export function useEnquire() {
  const value = useContext(EnquireContext);
  if (!value) {
    throw new Error("useEnquire must be used within EnquireProvider");
  }
  return value;
}

export function useBodyLock(active: boolean) {
  const { lockBody } = useEnquire();
  useEffect(() => {
    if (!active) return;
    return lockBody();
  }, [active, lockBody]);
}

export function EnquireProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const locks = useRef(0);

  const lockBody = useCallback(() => {
    locks.current += 1;
    document.body.style.overflow = "hidden";
    return () => {
      locks.current = Math.max(0, locks.current - 1);
      if (locks.current === 0) document.body.style.overflow = "";
    };
  }, []);

  const openEnquire = useCallback(() => setOpen(true), []);
  const closeEnquire = useCallback(() => setOpen(false), []);

  return (
    <EnquireContext.Provider value={{ openEnquire, closeEnquire, lockBody }}>
      {children}
      <EnquireDrawer open={open} onClose={closeEnquire} />
      <EnquireRail />
      <ScrollTop />
    </EnquireContext.Provider>
  );
}

function EnquireRail() {
  return (
    <Link href="/enquire#enquire-sheet" className="enquire-rail">
      Enquire Now
    </Link>
  );
}

function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      className="to-top"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 14l6-6 6 6" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    </button>
  );
}

export function EnquireForm({
  variant = "drawer",
  autoFocus = false,
}: {
  variant?: "drawer" | "page";
  autoFocus?: boolean;
}) {
  const firstField = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (autoFocus) firstField.current?.focus();
  }, [autoFocus]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("company") || "").trim()) {
      setStatus("sent");
      return;
    }

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const home = String(data.get("home") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (name.length < 2) {
      setError("Please add your name.");
      setStatus("error");
      return;
    }
    if (!/^[0-9+\-\s]{10,16}$/.test(phone)) {
      setError("Please add a phone number we can call.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, home, message }),
      });
      if (!response.ok) throw new Error("Could not save");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError("We could not save this just now. Please try again in a moment.");
    }
  }

  if (status === "sent") {
    return (
      <p className="success" role="status">
        Thank you. Your enquiry is with the Jalgaon desk. Please keep your phone nearby.
      </p>
    );
  }

  const page = variant === "page";

  return (
    <form className={page ? "enquire-card" : undefined} onSubmit={onSubmit} noValidate>
      {page ? <h2>Enquire now</h2> : null}
      <label className="hp" aria-hidden="true">
        Company
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <label>
        {page ? "Full name *" : "Name"}
        <input ref={firstField} name="name" autoComplete="name" required />
      </label>
      <label>
        {page ? "Phone number *" : "Phone"}
        <input name="phone" inputMode="tel" autoComplete="tel" required />
      </label>
      <label>
        {page ? "E-mail address" : "Email"} <span>optional</span>
        <input name="email" type="email" autoComplete="email" />
      </label>
      <label>
        {page ? "Home *" : "Home"}
        <select name="home" defaultValue="Lane Row · 2 BHK">
          {homes.map((home) => (
            <option key={home.id}>
              {home.short} · {home.bhk}
            </option>
          ))}
          <option>Not sure yet</option>
        </select>
      </label>
      <label>
        {page ? "Note" : "Note"} <span>optional</span>
        <textarea name="message" rows={page ? 2 : 3} />
      </label>
      {status === "error" ? <p className="form-error">{error}</p> : null}
      <button
        type="submit"
        className={page ? "enquire-submit" : "solid-button"}
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : page ? "Submit now" : "Request a call"}
      </button>
    </form>
  );
}

function EnquireDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  useBodyLock(open);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="drawer-root">
      <button type="button" className="drawer-backdrop" aria-label="Close enquiry" onClick={onClose} />
      <div className="drawer" role="dialog" aria-modal="true" aria-labelledby="enquire-title">
        <div className="drawer-top">
          <p className="eyebrow">Vaishnavi Constructions</p>
          <button type="button" className="text-button" onClick={onClose}>
            Close
          </button>
        </div>
        <h2 id="enquire-title">Enquire now</h2>
        <p className="lede">
          Tell us which row you want to walk through. We will call you back on the number you share.
        </p>
        <EnquireForm autoFocus />
      </div>
    </div>
  );
}
