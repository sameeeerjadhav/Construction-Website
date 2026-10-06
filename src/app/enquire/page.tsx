import type { Metadata } from "next";
import { EnquireView } from "@/components/EnquireView";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: "Enquire Now" };

export default function EnquirePage() {
  return (
    <main>
      <EnquireView />
      <Footer />
    </main>
  );
}
