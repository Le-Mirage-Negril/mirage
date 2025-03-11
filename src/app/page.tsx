import AmenityCard from "@/components/features/AmenityCard";
import AnimatedSection from "@/components/animations/AnimatedSection";
import ParallaxSection from "@/components/animations/ParallaxSection";
import StaggeredGroup from "@/components/animations/StaggeredGroup";
import Hero from "@/components/layout/Hero";
import LightTheme from "@/components/providers/LightTheme";
import Room from "@/components/rooms/Room";
import { Button } from "@/components/ui/button";

import { amenities, testimonials } from "@/lib/data";
import Image from "next/image";
import TestimonialCard from "@/components/features/TestimonialCard";
import Link from "next/link";
import { getFeaturedRooms } from "@/lib/actions/room.actions";
import type { Room as RoomType } from "@/types";

export default async function Home() {
  const rooms = await getFeaturedRooms();
  return (
    <LightTheme>
      <div className="mx-auto w-screen  bg-white">
        <section className="relative h-screen flex items-center overflow-hidden">
          <Hero />
          <div className="container mx-auto px-4 z-20 text-center">
            <AnimatedSection delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-serif">
                Le Mirage
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-semibold text-white mb-4">
                Luxury Redefined
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Experience the perfect blend of comfort, elegance, and exceptional service
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.6} direction="up">
              <Link href="/reservations">
                <Button
                  size="lg"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg"
                >
                  Book Your Stay
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>
        {/* NEW */}
        <section className="py-24 bg-amber-50">
          <div className="container mx-auto px-4">
            <AnimatedSection direction="up" delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-cyan-900 mb-16">
                Relax. Jump. Hedonism.
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Text Column */}
              <div className="md:col-span-5 space-y-6 order-2 md:order-1 mt-10 px-2 md:px-0">
                <AnimatedSection direction="left" delay={0.2}>
                  <h3 className="text-2xl font-semibold text-cyan-950">Discover Tranquility</h3>
                </AnimatedSection>

                <AnimatedSection direction="left" delay={0.3}>
                  <p className="text-cyan-700">
                    Founded in 1995, our resort has been a beacon of luxury and comfort for over two
                    decades. Our pristine swimming pool is designed for both relaxation and
                    recreation, offering a refreshing escape from the ordinary.
                  </p>
                </AnimatedSection>
                <AnimatedSection direction="left" delay={0.4}>
                  <p className="text-cyan-700">
                    Each of our three distinctive pool areas provides a unique atmosphere, from the
                    family-friendly lagoon to our adults-only infinity edge masterpiece overlooking
                    the coastline.
                  </p>
                </AnimatedSection>

                <AnimatedSection direction="left" delay={0.5}>
                  <Button
                    variant="outline"
                    className="mt-4 border-cyan-900 text-cyan-900 hover:bg-cyan-900 hover:text-white border-2"
                  >
                    Explore Our Amenities
                  </Button>
                </AnimatedSection>
              </div>

              {/* Images Column - Creative Layout */}
              <div className="md:col-span-7 order-1 md:order-2 grid grid-cols-12 grid-rows-6 gap-3 h-[600px]">
                {/* Larger main image */}
                <AnimatedSection direction="right" delay={0.1} className="col-span-8 row-span-6">
                  <ParallaxSection speed={0.2} className="h-full w-full">
                    <div className="overflow-hidden rounded-lg h-full shadow-lg">
                      <Image
                        src="/swim-4.jpg"
                        alt="Luxury Resort Swimming Pool"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        width={500}
                        height={500}
                      />
                    </div>
                  </ParallaxSection>
                </AnimatedSection>

                {/* Top right image */}
                <AnimatedSection direction="down" delay={0.3} className="col-span-4 row-span-3">
                  <ParallaxSection speed={0.4} className="h-full w-full">
                    <div className="overflow-hidden rounded-lg h-full shadow-lg">
                      <Image
                        src="/swim-2.jpg"
                        alt="Infinity Pool View"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        width={300}
                        height={300}
                      />
                    </div>
                  </ParallaxSection>
                </AnimatedSection>

                {/* Bottom right image */}
                <AnimatedSection direction="up" delay={0.5} className="col-span-4 row-span-3">
                  <ParallaxSection speed={-0.3} className="h-full w-full">
                    <div className="overflow-hidden rounded-lg h-full shadow-lg">
                      <Image
                        src="/swim-3.jpg"
                        alt="Poolside Lounging Area"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        width={300}
                        height={300}
                      />
                    </div>
                  </ParallaxSection>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
        {/* Room Showcase */}
        <section className="py-24 ">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-cyan-950 text-3xl md:text-4xl font-bold font-serif text-center mb-16">
                Luxurious Accommodations
              </h2>
            </AnimatedSection>

            <StaggeredGroup>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {rooms?.map((room: RoomType, index: number) => (
                  <Room key={index} room={room} buttonHref={`/rooms`} />
                ))}
              </div>
            </StaggeredGroup>
          </div>
        </section>
        {/* Amenities */}
        <section className="py-24 bg-cyan-950 text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-serif">
                Exceptional Amenities
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {amenities.map((feature, index) => (
                <AnimatedSection key={feature.id} direction="scale" delay={index * 0.1}>
                  <AmenityCard amenity={feature} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-amber-50">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-serif text-cyan-900">
                Guest Experiences
              </h2>
            </AnimatedSection>

            <StaggeredGroup>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
              </div>
            </StaggeredGroup>
          </div>
        </section>
        {/* END Testimonials */}
        <section className="relative py-24 overflow-hidden">
          <ParallaxSection speed={0.2} className="absolute inset-0 opacity-20">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/hotel-cta.jpg')" }}
            />
          </ParallaxSection>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <AnimatedSection>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-cyan-950 mb-6">
                Reserve Your Perfect Getaway
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-xl text-cyan-950/80 mb-8 max-w-2xl mx-auto">
                Book directly with us for the best rates and exclusive perks
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Link href="/reservations">
                <Button
                  size="lg"
                  className="bg-cyan-900 hover:bg-cyan-950 text-white px-8 py-6 text-lg"
                >
                  Book Now
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </LightTheme>
  );
}
