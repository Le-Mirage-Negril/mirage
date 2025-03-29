"use client";

import AnimatedSection from "@/components/animations/AnimatedSection";
import StaggeredGroup from "@/components/animations/StaggeredGroup";
import Hero from "@/components/layout/Hero";
import RoomSection from "@/components/rooms/RoomSection";
import React from "react";

const currentYear = new Date().getFullYear();

const roomData = [
  {
    floor: "First Floor",
    id: 1,
    description:
      "Our first floor is steps away from the infinity pool, these four spacious rooms feature wide windows and glass doors that will allow you to see all of nature from the comfort of the bedroom. Whether it is to just sit on your balcony and enjoy a drink in the shade or grab a lounge chair and bask in the sunshine before diving into the pool.",
    images: ["/room-1.jpg", "/room-2.jpg", "/room-1.jpg"],
    rates: {
      double: 100,
      single: 80,
    },
    season: {
      start: `April 15th, ${currentYear}`,
      end: `December 14th, ${currentYear + 1}`,
    },
  },
  {
    floor: "Second Floor",
    id: 2,
    description:
      "Our second floor offers a scenic view of the pristine blue waters of the Caribbean Sea. These rooms are slightly more spacious than those on the ground floor and also boast more upgraded bathrooms, two of these rooms also feature a wrap around balcony.",
    images: ["/room-2.jpg", "/room-1.jpg", "/room-1.jpg"],
    rates: {
      double: 120,
      single: 100,
    },
    season: {
      start: `April 15th, ${currentYear}`,
      end: `December 14th, ${currentYear + 1}`,
    },
  },
  {
    floor: "Third Floor",
    id: 3,
    description:
      "Our third floor has a panoramic view of the Caribbean Sea and the infinity pool, these rooms are extra large, tastefully furnished. Sunsets and sunrise views from the balcony of these rooms are exquisite and a great way to open and close the day.",
    images: ["/room-2.jpg", "/room-1.jpg", "/room-2.jpg"],
    rates: {
      double: 140,
      single: 120,
    },
    season: {
      start: `April 15th, ${currentYear}`,
      end: `December 14th, ${currentYear + 1}`,
    },
  },
];

function Page() {
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
          <div className="space-y-12">
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

export { roomData };

export default Page;
