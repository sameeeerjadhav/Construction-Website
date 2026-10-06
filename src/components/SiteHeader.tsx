"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contact, leftNav, rightNav, type NavItem } from "@/data/site";
import { Logo } from "./Logo";
import { useBodyLock, useEnquire } from "./enquire";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 3.5h3.2l1.2 3.2-1.8 1.1a12 12 0 0 0 5.6 5.6l1.1-1.8 3.2 1.2V17a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 5 7.7 2 2 0 0 1 7 5.5v-2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function NavLinks({ items, onNavigate }: { items: NavItem[]; onNavigate?: () => void }) {
  const pathname = usePathname();
  const { openEnquire } = useEnquire();
  return (
    <>
      {items.map((item) =>
        item.enquire ? (
          <button
            key={item.label}
            type="button"
            onClick={() => {
              onNavigate?.();
              openEnquire();
            }}
          >
            {item.label}
          </button>
        ) : (
          <Link
            key={item.label}
            href={item.href}
            className={pathname === item.href ? "is-current" : undefined}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        ),
      )}
    </>
  );
}

export function SiteHeader({ variant = "bar" }: { variant?: "split" | "bar" }) {
  const { openEnquire } = useEnquire();
  const [menu, setMenu] = useState(false);
  useBodyLock(menu);

  useEffect(() => {
    if (!menu) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menu]);

  const call = contact.phone ? (
    <a className="call-link" href={`tel:${contact.phone.replace(/\s/g, "")}`}>
      <PhoneIcon />
      {contact.phone}
    </a>
  ) : (
    <button type="button" className="call-link" onClick={openEnquire}>
      <PhoneIcon />
      Request for Call
    </button>
  );

  return (
    <header className={`${variant === "split" ? "split-header" : "bar-header"}${menu ? " is-open" : ""}`}>
      <div className="header-left">
        <Link href="/" className="logo-link" aria-label="Vaishnavi Constructions home">
          <Logo />
        </Link>
        <div className="nav-cluster">
          <nav className="nav-left" aria-label="Primary">
            <NavLinks items={leftNav} />
          </nav>
          {variant === "split" ? (
            <nav className="nav-right" aria-label="More">
              <NavLinks items={rightNav} />
            </nav>
          ) : null}
        </div>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={menu}
          aria-label={menu ? "Close menu" : "Open menu"}
          onClick={() => setMenu((value) => !value)}
        >
          {menu ? "Close" : "Menu"}
        </button>
      </div>
      {variant === "split" ? (
        <div className="header-right">
          <div className="utility">
            <div className="utility-links">
              {call}
              <span className="utility-city">Jalgaon</span>
              {contact.email ? (
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              ) : null}
            </div>
            <Logo markOnly />
          </div>
        </div>
      ) : (
        <nav className="nav-bar" aria-label="Primary">
          <NavLinks items={[...leftNav, ...rightNav]} />
        </nav>
      )}
      {menu ? (
        <div className="mobile-nav">
          <button type="button" className="menu-close" onClick={() => setMenu(false)}>
            Close
          </button>
          <nav aria-label="Mobile">
            <NavLinks items={[...leftNav, ...rightNav]} onNavigate={() => setMenu(false)} />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
