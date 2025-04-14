import Cta from "@/components/home/cta";
import Faq from "@/components/home/faq";
import HomeHero from "@/components/home/hero";
import HowItWorks from "@/components/home/how-it-works";
import Partners from "@/components/home/partners";
import Pricing from "@/components/home/pricing";
// import Testimonials from "@/components/home/testimonials";
import WhyChooseUs from "@/components/home/why-choose-us";
import React from "react";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HowItWorks />
      <WhyChooseUs />
      <Pricing />
      {/* <Partners /> */}
      <Faq />
      {/* <Testimonials /> */}
      <Cta />
    </div>
  );
}
