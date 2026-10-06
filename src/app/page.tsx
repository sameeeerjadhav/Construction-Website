import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Overview } from "@/components/Overview";
import { Situated } from "@/components/Situated";
import { Standards } from "@/components/Standards";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Overview />
      <Standards />
      <Location />
      <Situated />
      <Footer />
    </main>
  );
}
