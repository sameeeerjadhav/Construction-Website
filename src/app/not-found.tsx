import Link from "next/link";

export default function NotFound() {
  return (
    <main className="footer" style={{ minHeight: "100svh", display: "grid", placeItems: "center" }}>
      <div>
        <h1>This page is not on the site</h1>
        <p style={{ marginTop: 18 }}>
          <Link href="/" className="know light">
            Back to Jalgaon
          </Link>
        </p>
      </div>
    </main>
  );
}
