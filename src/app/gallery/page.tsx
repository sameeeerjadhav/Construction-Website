import type { Metadata } from "next";
import Image from "next/image";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Project Gallery" };

export default function GalleryPage() {
  return (
    <PageShell>
      <section className="page-hero">
        <Image src="/images/garden-lane.jpg" alt="" fill className="cover is-on" sizes="100vw" />
        <div className="shade" />
        <h1>Project Gallery</h1>
      </section>
      <section className="page-section">
        <div className="wrap">
          <p className="prose">Planned views of the row houses, the lane, and life inside the home.</p>
          <GalleryGrid />
        </div>
      </section>
    </PageShell>
  );
}
