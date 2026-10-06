import type { Metadata } from "next";
import Image from "next/image";
import { EnquireButton } from "@/components/EnquireButton";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { homes } from "@/data/site";

export const metadata: Metadata = { title: "Homes" };

export default function HomesPage() {
  return (
    <PageShell>
      <section className="page-hero">
        <Image src="/images/overview-row.jpg" alt="" fill className="cover is-on" sizes="100vw" />
        <div className="shade" />
        <h1>Homes</h1>
      </section>
      <section className="page-section">
        <div className="wrap">
          <p className="prose">
            Three planned row houses. Each one is ground plus one floor, with a private door on the lane.
            Sizes are layouts to confirm when you visit.
          </p>
          {homes.map((home) => (
            <Reveal key={home.id} className="home-block" id={home.id}>
              <h2>{home.name}</h2>
              <p className="home-meta">
                {home.bhk} · {home.size} · {home.label}
              </p>
              <div className="stage-photo">
                <Image src={home.image} alt={home.alt} fill className="cover is-on" sizes="100vw" />
              </div>
              <div className="home-copy">
                <p>{home.card}</p>
                <ul>
                  {home.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          <div className="actions">
            <EnquireButton className="solid-button">Enquire about a home</EnquireButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
