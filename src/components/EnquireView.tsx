"use client";

import Image from "next/image";
import { EnquireForm } from "./enquire";
import { Logo } from "./Logo";
import { SiteHeader } from "./SiteHeader";

export function EnquireView() {
  return (
    <>
      <section className="hero enquire-hero" aria-labelledby="enquire-hero-title">
        <div className="hero-photo">
          <Image
            src="/images/overview-row.jpg"
            alt="A curved row of brick and glass row houses facing a lawn"
            fill
            priority
            className="cover is-on"
            sizes="(max-width: 1060px) 100vw, 65vw"
          />
          <div className="hero-shade" />
        </div>
        <div className="hero-panel" />
        <SiteHeader variant="split" />
        <div className="enquire-title">
          <h1 id="enquire-hero-title">
            Enquire
            <br />
            now
          </h1>
          <button
            type="button"
            className="enquire-down"
            onClick={() => document.getElementById("enquire-sheet")?.scrollIntoView({ behavior: "smooth" })}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            <span className="sr-only">Scroll to the form</span>
          </button>
        </div>
      </section>
      <section className="enquire-sheet" id="enquire-sheet">
        <div className="enquire-watermark" aria-hidden="true">
          <Logo markOnly />
        </div>
        <div className="wrap">
          <div className="enquire-info">
            <h2>Enquire now</h2>
            <h3>Jalgaon</h3>
            <p>
              Vaishnavi Constructions
              <br />
              Jalgaon, Maharashtra
            </p>
            <p>
              Tell us which row you want to walk through. We call you back on the number you share
              and fix a time to see the lane.
            </p>
          </div>
          <EnquireForm variant="page" />
        </div>
      </section>
    </>
  );
}
