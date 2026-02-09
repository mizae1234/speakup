import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSafety from "@/components/TrustSafety";
import HowItWorks from "@/components/HowItWorks";
import WhatYouCanShare from "@/components/WhatYouCanShare";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustSafety />
        <HowItWorks />
        <WhatYouCanShare />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
