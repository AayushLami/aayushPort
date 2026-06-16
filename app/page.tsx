import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Process />
      <About />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
