import type { Metadata } from "next";
import Image from "next/image";
import { EnquireButton } from "@/components/EnquireButton";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { buyerSteps } from "@/data/site";

export const metadata: Metadata = { title: "Buyers" };

export default function BuyersPage() {
  return (
    <PageShell>
      <section className="page-hero">
        <Image src="/images/gate-day.jpg" alt="" fill className="cover is-on" sizes="100vw" />
        <div className="shade" />
        <h1>Buyers</h1>
      </section>
      <section className="page-section">
        <div className="wrap">
          <div className="prose">
            <p>
              Buying a row house should be clear before any money moves. Walk the lane, choose the home,
              and hear the payment stages in person.
            </p>
          </div>
          <Reveal stagger className="steps">
            {buyerSteps.map((step) => (
              <article key={step.n}>
                <span>{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </Reveal>
          <Reveal className="actions">
            <EnquireButton className="solid-button">Request a call</EnquireButton>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
