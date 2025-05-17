"use client"
import Cta from "@/components/home/cta";
import Faq from "@/components/home/faq";
import HomeHero from "@/components/home/hero";
import HowItWorks from "@/components/home/how-it-works";
// import Partners from "@/components/home/partners";
import Pricing from "@/components/home/pricing";
// import Testimonials from "@/components/home/testimonials";
import WhyChooseUs from "@/components/home/why-choose-us";
// import { handleSignIn, handleSignOut } from "@/lib/auth";
// import { useSession } from "next-auth/react";
import React from "react";

export default function Home() {

  // const { data: session } = useSession();

  return (
    <div>
      {/* <main className="flex items-center justify-center min-h-screen bg-gray-100">
        {session ? (
          <div>
            <h2 className="text-lg font-medium text-gray-700">
              Welcome, {session.user?.name}!
            </h2>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-600"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            onClick={handleSignIn}
            className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Sign in with Google
          </button>
        )}
      </main> */}
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
