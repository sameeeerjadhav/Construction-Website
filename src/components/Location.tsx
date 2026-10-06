import Link from "next/link";

const pins = [
  { name: "Jalgaon Airport", distance: "About 7 km", x: 455, y: 86, kind: "plane" },
  { name: "N.M. University", distance: "About 8 km", x: 700, y: 132, kind: "book" },
  { name: "Mehrun Lake", distance: "About 5 km", x: 150, y: 188, kind: "lake" },
  { name: "M.J. College", distance: "About 2.5 km", x: 318, y: 168, kind: "book" },
  { name: "Civil Hospital", distance: "About 3 km", x: 250, y: 292, kind: "cross" },
  { name: "City Market", distance: "About 2 km", x: 500, y: 246, kind: "market" },
  { name: "Jalgaon Junction", distance: "About 3 km", x: 168, y: 400, kind: "train" },
];

function PinIcon({ kind }: { kind: string }) {
  if (kind === "plane") {
    return <path d="M-10 2h8l6-8 3 1-4 8h8l3 3h-8l2 6h-3l-4-6h-8z" />;
  }
  if (kind === "train") {
    return <path d="M-8-6h16v14h-16z M-5 8h3l-2 4h-4z M5 8h3l3 4h-4z M-4-2h4v4h-4z M2-2h4v4h-4z" />;
  }
  if (kind === "cross") {
    return <path d="M-2-8h4v6h6v4h-6v6h-4v-6h-6v-4h6z" />;
  }
  if (kind === "lake") {
    return <ellipse cx="0" cy="2" rx="12" ry="7" />;
  }
  if (kind === "market") {
    return <path d="M-10 6h20v4h-20z M-8 6v-2l4-6 4 4 4-6 4 8v2" />;
  }
  return <path d="M-8 2h6v8h-6z M2-2h8v12h-8z" />;
}

export function Location() {
  return (
    <section className="location" id="location" aria-labelledby="location-title">
      <div className="wrap">
        <h2 id="location-title">Project Location</h2>
        <div className="location-grid">
          <div className="map-frame">
            <svg viewBox="0 0 900 520" role="img" aria-label="Illustrated map of Jalgaon with approximate distances">
              <rect width="900" height="520" fill="#e3e3e3" />
              <path d="M30 70h390l40-30h250l150 70v230l-80 40H520l-40 50H90z" fill="#cfcfcf" />
              <path d="M70 150h210l30 40H110z" fill="#c4c4c4" />
              <path d="M540 90h220l40 50v120H580z" fill="#c8c8c8" />
              <path d="M40 300h820" stroke="#a5a5a5" strokeWidth="7" />
              <path d="M250 40v450" stroke="#a9a9a9" strokeWidth="6" />
              <path d="M70 200h620" stroke="#b0b0b0" strokeWidth="5" />
              <path d="M520 40v300" stroke="#b0b0b0" strokeWidth="5" />
              <path
                d="M20 430 C 160 400, 280 470, 420 430 S 680 390, 890 450"
                fill="none"
                stroke="#3f93bf"
                strokeWidth="18"
                strokeLinecap="round"
              />
              <path
                d="M168 400 C 220 340, 280 250, 318 180 S 430 210, 560 210"
                fill="none"
                stroke="#6d63b8"
                strokeWidth="4"
                strokeDasharray="1.5 8"
                strokeLinecap="round"
              />
              <text x="700" y="458" className="map-river">
                Girna River
              </text>
              {pins.map((pin) => (
                <g key={pin.name} transform={`translate(${pin.x} ${pin.y})`} className="pin">
                  <PinIcon kind={pin.kind} />
                  <text y="-36" textAnchor="middle" className="map-name">
                    {pin.name}
                  </text>
                  <text y="-22" textAnchor="middle" className="map-km">
                    {pin.distance}
                  </text>
                </g>
              ))}
              <g transform="translate(620 210)" className="project-pin">
                <text y="-78" textAnchor="middle" className="map-project">
                  Vaishnavi
                </text>
                <text y="-62" textAnchor="middle" className="map-km">
                  Row houses
                </text>
                <rect x="-18" y="-48" width="36" height="54" rx="1" />
                <path d="M-12-36h6v6h-6z M-2-36h6v6h-6z M-12-24h6v6h-6z M-2-24h6v6h-6z M-6-4h10v10h-10z" />
              </g>
            </svg>
            <p className="visual-note">
              An illustrated map of Jalgaon. Distances are approximate from the city, not a surveyed site plan.
            </p>
          </div>
          <div className="location-copy">
            <h3>Vaishnavi is in Jalgaon — the heart of Khandesh.</h3>
            <p>
              The row houses are planned inside the city, so school, the market, the hospital and Jalgaon
              Junction stay within an easy ride. The lane itself is meant to stay quiet.
            </p>
            <Link href="/about" className="know">
              Know more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
