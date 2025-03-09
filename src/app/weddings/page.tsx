import ParallaxSection from "@/components/animations/ParallaxSection";
import Hero from "@/components/layout/Hero";

import React from "react";

function page() {
  return (
    <div className="mx-auto w-screen  bg-cyan-900">
      <Hero />
      <ParallaxSection speed={-0.2} className="w-full h-full">
        <div className="flex justify-center items-center h-screen">page</div>
      </ParallaxSection>
    </div>
  );
}

export default page;
