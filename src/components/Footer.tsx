import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="footer">
      <Reveal>
        <h2>Vaishnavi Constructions, Jalgaon</h2>
        <p className="footer-place">Jalgaon, Maharashtra</p>
        <small>Copyright {new Date().getFullYear()} Vaishnavi Constructions, Jalgaon. All rights reserved.</small>
      </Reveal>
    </footer>
  );
}
