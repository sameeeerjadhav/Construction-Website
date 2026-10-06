"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { homes, stats } from "@/data/site";

export function Overview() {
  const [active, setActive] = useState(0);
  const home = homes[active];

  return (
    <section className="overview" id="overview" aria-labelledby="overview-title">
      <div className="wrap">
        <h2 id="overview-title">An Overview</h2>
        <div className="stats">
          {stats.map((stat) => (
            <article key={stat.title}>
              <h3>{stat.title}</h3>
              <p>{stat.text}</p>
            </article>
          ))}
        </div>
        <div className="stage">
          <div className="stage-photo">
            {homes.map((item, index) => (
              <Image
                key={item.id}
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 800px) 100vw, 92vw"
                className={index === active ? "cover is-on" : "cover"}
              />
            ))}
          </div>
          <aside className="stage-card">
            <p>{home.card}</p>
            <Link href="/about" className="know">
              Know more
            </Link>
          </aside>
          <button
            type="button"
            className="switcher"
            onClick={() => setActive((current) => (current + 1) % homes.length)}
          >
            <span>{home.short}</span>
            <span className="switcher-up" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M6 14l6-6 6 6" fill="none" stroke="currentColor" strokeWidth="1.7" />
              </svg>
            </span>
            <span className="sr-only">Show the next row house</span>
          </button>
        </div>
        <p className="visual-note">
          Visuals show the planned design. Home sizes are layouts to confirm on a visit.
        </p>
      </div>
    </section>
  );
}
