"use client";

import Image from "next/image";
import { useState } from "react";
import { standards } from "@/data/site";

const icons = [
  <svg key="design" viewBox="0 0 48 48" aria-hidden="true">
    <rect x="8" y="10" width="32" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 22h32M20 10v28" fill="none" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
  <svg key="open" viewBox="0 0 48 48" aria-hidden="true">
    <circle cx="18" cy="18" r="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="31" cy="17" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 36c2-6 6-9 10-9s8 3 10 9M28 36c1.2-4 3.4-6 6.5-6 3 0 5 2 6.5 6" fill="none" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
  <svg key="facility" viewBox="0 0 48 48" aria-hidden="true">
    <path d="M10 20h28v16H10z" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <path d="M16 20v-4h16v4M18 28h6M28 36v-6h6v6" fill="none" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
  <svg key="care" viewBox="0 0 48 48" aria-hidden="true">
    <path d="M8 34h32M14 34V22h8v12M26 34V16h8v18" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 22l6-4 6 4M24 16l6-4 6 4" fill="none" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
];

export function Standards() {
  const [active, setActive] = useState(0);
  const current = standards[active];

  return (
    <section className="standards" id="features" aria-labelledby="standards-title">
      <h2 id="standards-title">New Standards</h2>
      <div className="tabs" role="tablist" aria-label="Project features">
        {standards.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={`tab-${item.id}`}
            aria-selected={index === active}
            aria-controls="standards-panel"
            className={index === active ? "tab is-active" : "tab"}
            onClick={() => setActive(index)}
          >
            {icons[index]}
            <span>
              <strong>{item.title}</strong>
              <small>{item.subtitle}</small>
            </span>
          </button>
        ))}
      </div>
      <div
        className="standards-photo"
        id="standards-panel"
        role="tabpanel"
        aria-labelledby={`tab-${current.id}`}
      >
        {standards.map((item, index) => (
          <Image
            key={item.id}
            src={item.image}
            alt={item.alt}
            fill
            sizes="100vw"
            className={index === active ? "cover is-on" : "cover"}
          />
        ))}
      </div>
    </section>
  );
}
