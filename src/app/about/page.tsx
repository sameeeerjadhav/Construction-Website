import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EnquireButton } from "@/components/EnquireButton";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { stats } from "@/data/site";

export const metadata: Metadata = { title: "About Us" };

const ways = [
  {
    title: "Ground floor",
    text: "The living room faces the lane. The kitchen sits beside a utility. The parking bay is at your own front door, for a scooter or a car.",
  },
  {
    title: "Upstairs",
    text: "Bedrooms are on the floor above, with the terrace for the evening. A 2 BHK has two bedrooms. A 3 BHK adds a room for study or a grandparent.",
  },
  {
    title: "The lane",
    text: "Neighbours live beside you, not above and below. Gardens and sit-outs between the rows are shared, and the lane is planned to stay quieter than the road it joins.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="page-hero">
        <Image src="/images/living-row.jpg" alt="" fill className="cover is-on" sizes="100vw" priority />
        <div className="shade" />
        <div className="page-hero-copy">
          <p className="eyebrow light">Vaishnavi Constructions</p>
          <h1>About Us</h1>
        </div>
      </section>
      <section className="page-section">
        <div className="wrap">
          <div className="about-lead">
            <Reveal className="about-photo">
              <Image
                src="/images/overview-row.jpg"
                alt="A curved row of brick and glass row houses facing a lawn"
                fill
                className="cover is-on"
                sizes="(max-width: 1060px) 100vw, 50vw"
              />
            </Reveal>
            <Reveal>
              <p className="eyebrow">Row houses in Jalgaon</p>
              <h2>A front door on the lane</h2>
              <p>
                Vaishnavi Constructions builds row houses in Jalgaon. The home sits on the ground,
                with your own front door, a bay for the scooter or car, and rooms planned for the way
                a family here actually lives.
              </p>
              <p>
                A tower puts neighbours above and below you. A row house keeps them beside you. Air
                moves across the house, the evening is on your terrace, and the city — the junction,
                the colleges, the hospital, the market — stays an easy ride away.
              </p>
            </Reveal>
          </div>
          <Reveal stagger className="stats">
            {stats.map((stat) => (
              <article key={stat.title}>
                <h3>{stat.title}</h3>
                <p>{stat.text}</p>
              </article>
            ))}
          </Reveal>
          <Reveal>
            <h2>How each home is planned</h2>
          </Reveal>
          <Reveal stagger className="about-points">
            {ways.map((way) => (
              <article key={way.title}>
                <h3>{way.title}</h3>
                <p>{way.text}</p>
              </article>
            ))}
          </Reveal>
          <Reveal className="about-close">
            <p>
              Sizes on this site are planned layouts — about 1,150 sq ft for a 2 BHK, and about 1,550
              to 1,800 sq ft for a 3 BHK. The photographs show the planned design. Confirm the drawing
              on a visit before you decide.
            </p>
            <div className="actions">
              <Link href="/homes" className="solid-button">
                See the homes
              </Link>
              <EnquireButton className="line-button">Enquire now</EnquireButton>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
