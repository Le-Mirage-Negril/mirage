import ParallaxSection from "@/components/animations/ParallaxSection";
import Hero from "@/components/layout/Hero";

import React from "react";

function page() {
  return (
    <div className="mx-auto w-screen  bg-cyan-900">
      <Hero image="/wedding.jpg" />
      <ParallaxSection speed={-0.2} className="w-full h-full">
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-white font-serif text-4xl">Weddings</h1>
        </div>
      </ParallaxSection>
    </div>
  );
}

export default page;
