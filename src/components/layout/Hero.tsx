import React from "react";

import Image from "next/image";

import ParallaxSection from "../animations/ParallaxSection";

function Hero() {
  return (
    <div className="absolute inset-0 z-0 bg-cyan-950">
      <ParallaxSection speed={-0.2} className="w-full h-full">
        <Image
          src="/pool-1.jpg"
          alt="Hero Image"
          width={2000}
          height={700}
          className="w-full object-cover h-full shadow-2xl  brightness-70"
        />

        <div className="absolute inset-0 bg-black/40 z-10" />
      </ParallaxSection>
    </div>
  );
}

export default Hero;
