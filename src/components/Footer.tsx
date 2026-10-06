import Link from "next/link";
import { leftNav, rightNav } from "@/data/site";
import { EnquireButton } from "./EnquireButton";
import { Reveal } from "./Reveal";

export function Footer() {
  const links = [...leftNav, ...rightNav];

  return (
    <footer className="footer">
      <Reveal>
        <h2>
          <Link href="/">Vaishnavi Constructions, Jalgaon</Link>
        </h2>
        <Link href="/#location" className="footer-place">
          Jalgaon, Maharashtra
        </Link>
        <nav className="footer-nav" aria-label="Footer">
          {links.map((item) =>
            item.enquire ? (
              <EnquireButton key={item.label} className="footer-link">
                {item.label}
              </EnquireButton>
            ) : (
              <Link key={item.label} href={item.href} className="footer-link">
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <small>Copyright {new Date().getFullYear()} Vaishnavi Constructions, Jalgaon. All rights reserved.</small>
      </Reveal>
    </footer>
  );
}
