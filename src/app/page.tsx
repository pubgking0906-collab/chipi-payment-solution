import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustLine from "@/components/TrustLine";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Payouts from "@/components/Payouts";
import Compliance from "@/components/Compliance";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustLine />
      <Services />
      <HowItWorks />
      <Payouts />
      <Compliance />
      <About />
      <Footer />
    </main>
  );
}
