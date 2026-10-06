import Image from "next/image";
import Link from "next/link";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";

export function Situated() {
  return (
    <section className="situated" aria-labelledby="situated-title">
      <Image
        src="/images/lane-dusk.jpg"
        alt="Row houses at dusk along a quiet lane in Jalgaon"
        fill
        sizes="100vw"
        className="cover is-on"
      />
      <div className="situated-shade" />
      <Reveal className="situated-mark">
        <Logo markOnly />
      </Reveal>
      <Reveal className="situated-copy">
        <p className="eyebrow light">Situated in</p>
        <h2 id="situated-title">Jalgaon</h2>
        <p>
          A city where home, school and the market can share the same day, without giving up a private
          front door.
        </p>
        <Link href="/#location" className="know light">
          Know more about Jalgaon
        </Link>
      </Reveal>
    </section>
  );
}
