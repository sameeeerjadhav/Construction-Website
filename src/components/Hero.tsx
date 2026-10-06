"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { homes } from "@/data/site";
import { SiteHeader } from "./SiteHeader";

export function Hero() {
  const [active, setActive] = useState(0);
  const slide = homes[active];

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % homes.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [active]);

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Row houses">
      <div className="hero-photo">
        {homes.map((home, index) => (
          <Image
            key={home.id}
            src={home.image}
            alt={home.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 980px) 100vw, 65vw"
            className={index === active ? "cover is-on" : "cover"}
          />
        ))}
        <div className="hero-shade" />
      </div>
      <div className="hero-panel" />
      <SiteHeader variant="split" />
      <div className="hero-copy">
        <h1>
          <span>Inspired</span>
          <span>Living</span>
        </h1>
        <p className="hero-sub">
          Premium row houses in Jalgaon, planned for families who want a private front door, a place
          to park, and a green lane outside.
        </p>
        <p className="phase" key={slide.label}>
          {slide.label}
        </p>
      </div>
      <div className="dots" role="tablist" aria-label="Choose a row">
        {homes.map((home, index) => (
          <button
            key={home.id}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={home.name}
            className={index === active ? "is-on" : ""}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  );
}
