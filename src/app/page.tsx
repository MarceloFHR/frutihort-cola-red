import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import SeasonTicker from "@/components/home/SeasonTicker";
import Statement from "@/components/home/Statement";
import Stats from "@/components/home/Stats";
import ProductStrip from "@/components/home/ProductStrip";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonial from "@/components/home/Testimonial";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SeasonTicker />
        <Statement />
        <Stats />
        <ProductStrip />
        <HowItWorks />
        <Testimonial />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
