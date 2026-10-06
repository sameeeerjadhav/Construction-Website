"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { gallery } from "@/data/site";
import { useBodyLock } from "@/components/enquire";

const filters = ["All", "Exteriors", "Interiors"] as const;

export function GalleryGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  const items = gallery.filter((item) => filter === "All" || item.group === filter);
  useBodyLock(open !== null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") setOpen((current) => (current === null ? current : (current + 1) % items.length));
      if (event.key === "ArrowLeft") {
        setOpen((current) => (current === null ? current : (current - 1 + items.length) % items.length));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, items.length]);

  return (
    <>
      <div className="filters" role="tablist" aria-label="Filter gallery">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            className={item === filter ? "is-on" : ""}
            onClick={() => {
              setFilter(item);
              setOpen(null);
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {items.map((item, index) => (
          <button key={item.src} type="button" onClick={() => setOpen(index)}>
            <Image src={item.src} alt={item.alt} fill sizes="(max-width: 800px) 100vw, 33vw" />
          </button>
        ))}
      </div>
      {open !== null ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={items[open].alt}>
          <button type="button" onClick={() => setOpen((open - 1 + items.length) % items.length)} aria-label="Previous photo">
            ‹
          </button>
          <Image src={items[open].src} alt={items[open].alt} width={1600} height={1000} />
          <button type="button" onClick={() => setOpen((open + 1) % items.length)} aria-label="Next photo">
            ›
          </button>
          <button type="button" className="lightbox-close" onClick={() => setOpen(null)}>
            Close
          </button>
        </div>
      ) : null}
    </>
  );
}
