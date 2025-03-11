"use client";

import AnimatedSection from "@/components/animations/AnimatedSection";

import StaggeredGroup from "@/components/animations/StaggeredGroup";
import Hero from "@/components/layout/Hero";
import Room from "@/components/rooms/Room";
import { rooms } from "@/lib/data";

import React from "react";

function Page() {
  return (
    <div className="mx-auto w-screen bg-white ">
      <Hero image="/room-1.jpg" />
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 z-20 text-center">
          <AnimatedSection delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-serif">Rooms</h1>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-24 px-2 md:px-4 bg-amber-50">
        <StaggeredGroup>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 z-50">
            {rooms.map((room, index) => (
              <Room
                key={index}
                room={room}
                buttonHref={`/reservations?room=${room.id}#booking-form`}
                buttonTitle="Select"
              />
            ))}
          </div>
        </StaggeredGroup>
      </section>
    </div>
  );
}

export default Page;
