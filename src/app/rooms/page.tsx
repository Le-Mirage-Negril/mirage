import AnimatedSection from "@/components/animations/AnimatedSection";
import StaggeredGroup from "@/components/animations/StaggeredGroup";
import Hero from "@/components/layout/Hero";
import RoomSection from "@/components/rooms/RoomSection";
import { roomData } from "@/lib/data";
import React from "react";

function Page() {
  console.log(roomData);
  return (
    <div className="mx-auto w-screen bg-white">
      <Hero image="/room-1.jpg" />
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 z-20 text-center">
          <AnimatedSection delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-serif">
              Rooms & Rates
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <AnimatedSection delay={0.4} className="space-y-4">
          <p className="font-bold text-center mb-4">
            Please contact us to find out more about our seasonal discounts of up to 20% off room
            rates.
          </p>
          <p className="text-center">
            Mirage Resort is a three level property with three room preference choices.
          </p>
        </AnimatedSection>

        <StaggeredGroup>
          <div className="md:space-y-12 space-y-4">
            {roomData.map((room, index) => (
              <RoomSection key={index} {...room} />
            ))}
          </div>
        </StaggeredGroup>

        <AnimatedSection delay={0.6} className="mt-12">
          <div className="w-full max-w-3xl mx-auto">
            <p className="text-center font-semibold">
              All rooms come fully equipped with a ceiling fan, A/C, cable television, refrigerator,
              coffee maker and a spacious bathroom. King and double beds are available. Free Wifi is
              also available throughout the entire property.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

export default Page;
