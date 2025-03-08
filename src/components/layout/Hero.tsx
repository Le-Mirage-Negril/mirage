import React from "react";
import AnimatedSection from "../AnimatedSection";
import Image from "next/image";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="mx-auto relative">
      <AnimatedSection>
        <Image
          src="/pool-1.jpg"
          alt="Hero Image"
          width={2000}
          height={700}
          className="w-full object-cover h-[500px] md:h-[600px] lg:h-[700px] shadow-2xl  brightness-70"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white space-y-3">
          <p className=" md:text-3xl text-xl uppercase">Welcome to</p>
          <h1 className="font-extrabold md:text-8xl text-5xl font-serif">Le Mirage</h1>
          <p className="md:text-5xl text-2xl font-serif">Boutique Hotel</p>
          <Button className="mt-6 uppercase font-extrabold text-cyan-950" size="lg">
            Book Now
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default Hero;
