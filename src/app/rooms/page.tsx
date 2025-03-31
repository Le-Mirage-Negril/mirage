import AnimatedSection from "@/components/animations/AnimatedSection";
import StaggeredGroup from "@/components/animations/StaggeredGroup";
import Hero from "@/components/layout/Hero";
import PageWrapper from "@/components/layout/PageWrapper";
import RoomSection from "@/components/rooms/RoomSection";
import Typography from "@/components/ui/Typography";
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
            <Typography variant="h1">Rooms & Rates</Typography>
          </AnimatedSection>
        </div>
      </section>

      <PageWrapper className="pt-7">
        <AnimatedSection delay={0.4} className="space-y-4 pb-4">
          <Typography variant="h2" className="mb-8">
            Our Rooms
          </Typography>
          <p className="font-bold text-center mb-4">
            Please contact us to find out more about our seasonal discounts of up to 20% off room
            rates.
          </p>
          <p className="text-center">
            Mirage Resort is a three level property with three room preference choices.
          </p>
        </AnimatedSection>

        <StaggeredGroup>
          <div className="md:space-y-12">
            {roomData.map((room, index) => (
              <RoomSection key={index} {...room} />
            ))}
          </div>
        </StaggeredGroup>

        <AnimatedSection delay={0.6}>
          <div className="w-full max-w-3xl mx-auto pb-20">
            <p className="text-center font-semibold">
              All rooms come fully equipped with a ceiling fan, A/C, cable television, refrigerator,
              coffee maker and a spacious bathroom. King and double beds are available. Free Wifi is
              also available throughout the entire property.
            </p>
          </div>
        </AnimatedSection>
      </PageWrapper>
    </div>
  );
}

export default Page;
