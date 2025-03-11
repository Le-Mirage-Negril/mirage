"use client";

import ParallaxSection from "@/components/animations/ParallaxSection";
import StaggeredGroup from "@/components/animations/StaggeredGroup";
import Hero from "@/components/layout/Hero";
import Room from "@/components/rooms/Room";
import { rooms } from "@/lib/data";

import React from "react";

function Page() {
  return (
    <div className="mx-auto w-screen bg-white ">
      <section className="relative h-screen flex items-center overflow-hidden">
        <Hero image="/room-1.jpg" />
        <ParallaxSection speed={-0.2} className="w-full h-full">
          <div className="flex justify-center items-center h-screen">
            <h1 className="text-white font-serif text-4xl">Rooms</h1>
          </div>
        </ParallaxSection>
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
