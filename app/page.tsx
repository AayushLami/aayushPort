import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Stats />
      <Pricing />
      <Process />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  );
}
