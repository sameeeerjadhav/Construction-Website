import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <PageShell>
      <section className="page-hero">
        <Image src="/images/hero-row.jpg" alt="" fill className="cover is-on" sizes="100vw" />
        <div className="shade" />
        <h1>About Us</h1>
      </section>
      <section className="page-section">
        <div className="wrap prose">
          <p>
            Vaishnavi Constructions builds row houses in Jalgaon. The home sits on the ground, with
            your own front door on the lane, a bay for the scooter or car, and rooms planned for the
            way a family here actually lives.
          </p>
          <p>
            A tower puts neighbours above and below you. A row house keeps them beside you. The living
            room faces the lane, the kitchen opens to a utility, the bedrooms are upstairs, and the
            terrace is there for the evening. Between the rows, the garden and the sit-outs are shared.
          </p>
          <h2>What we plan into each home</h2>
          <p>
            Cross-ventilation, a place to park at the door, and a gate for the lane. Sizes on this site
            are planned layouts — about 1,150 sq ft for a 2 BHK, and about 1,550 to 1,800 sq ft for a
            3 BHK. Confirm the drawing on a visit before you decide.
          </p>
          <h2>Jalgaon</h2>
          <p>
            The city is the centre of Khandesh. Jalgaon Junction, the colleges, the hospital, the market
            and Mehrun are an easy ride from a home inside the city. The lane is planned to stay quieter
            than the road it connects to.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
