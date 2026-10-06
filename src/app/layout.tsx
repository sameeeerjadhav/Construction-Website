import type { Metadata } from "next";
import { Libre_Baskerville, Montserrat } from "next/font/google";
import { EnquireProvider } from "@/components/enquire";
import "./globals.css";

const sans = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const serif = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    default: "Vaishnavi Constructions | Row Houses in Jalgaon",
    template: "%s | Vaishnavi Constructions",
  },
  description:
    "Vaishnavi Constructions builds row houses in Jalgaon — private front doors, parking on the lane, and a garden between the rows.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Vaishnavi Constructions",
    description: "Row house builder in Jalgaon, Maharashtra.",
    areaServed: "Jalgaon",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jalgaon",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`} data-scroll-behavior="smooth">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <EnquireProvider>{children}</EnquireProvider>
      </body>
    </html>
  );
}
