import AmenityCard from "@/components/features/AmenityCard";
import AnimatedSection from "@/components/animations/AnimatedSection";
import ParallaxSection from "@/components/animations/ParallaxSection";
import StaggeredGroup from "@/components/animations/StaggeredGroup";
import Hero from "@/components/layout/Hero";
import LightTheme from "@/components/providers/LightTheme";
import Room from "@/components/rooms/Room";
import { Button } from "@/components/ui/button";

import { amenities } from "@/lib/data";
import Image from "next/image";

import Link from "next/link";
import { getFeaturedRooms } from "@/lib/actions/room.actions";
import type { Room as RoomType } from "@/types";
import Typography from "@/components/ui/Typography";
import { ArrowDown } from "lucide-react";
import ImageMasonDisplay from "@/components/features/ImageMasonDisplay";
import { getHomepage } from "@/lib/actions/homepage.actions";
// import ImageCarousel from "@/components/features/ImageCarousel";

export default async function Home() {
  const rooms = await getFeaturedRooms();
  const homepage = await getHomepage();

  console.log(rooms);
  return (
    <LightTheme>
      <div className="mx-auto w-screen  bg-white">
        <section className="relative h-screen flex items-center overflow-hidden">
          <Hero />
          <div className="container mx-auto px-4 z-20 text-center">
            <AnimatedSection delay={0.2}>
              <Typography variant="h3" className="text-white">
                WELCOME TO
              </Typography>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Typography variant="h1">LE MIRAGE</Typography>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Typography variant="h3" className=" text-white mb-4">
                Luxury Redefined
              </Typography>
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
        <section className="py-12 bg-amber-50">
          <div className="container mx-auto px-4 ">
            <AnimatedSection direction="up" delay={0.1}>
              <Typography variant="h2" className="pb-10">
                Breathe, Relax, Unwind.
              </Typography>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center ">
              {/* Text Column */}
              <div className="md:col-span-5 space-y-3 order-2 md:order-1 px-2 md:px-0 pt-10">
                <AnimatedSection direction="left" delay={0.2}>
                  <Typography variant="h3">Discover Tranquility</Typography>
                </AnimatedSection>
                <AnimatedSection direction="left" delay={0.3}>
                  <p className="text-cyan-700">
                    Mirage Resort is a small private property, Clothing Optional, Adults Only
                    Resort. Situated on the West End cliffs along the rugged coastline of Negril.
                    With twelve large rooms facing the Caribbean Sea, the Resort offers an intimate
                    experience - independence, quietude and the utmost privacy - great for nature
                    lovers! The cliffside location offers swimming and snorkeling on the pristine
                    coral reef. You can also swim in our gorgeous “Infinity Swimming Pool”.
                  </p>
                </AnimatedSection>
                <AnimatedSection direction="left" delay={0.4}>
                  <p className="text-cyan-700">
                    Mirage Resort is a genuine retreat from the pressures of life, yet within ten
                    minutes walk of the Rick&apos;s Café and numerous bars, restaurants &
                    attractions.
                  </p>
                </AnimatedSection>
                <AnimatedSection>
                  <p className="text-cyan-700">
                    Guests at Mirage Resort are also welcome to spend time on Negril&apos;s
                    sparkling 7 - mile beach at our sister property, the Charela Inn Hotel.
                    Swimming/sunbathing. We offer quietude, privacy and discreet service is always
                    near at hand when needed.
                  </p>
                </AnimatedSection>
                <AnimatedSection direction="left" delay={0.5}>
                  <Button
                    asChild
                    variant="link"
                    className="mt-6 border-cyan-700 text-cyan-700 hover:bg-cyan-700 hover:text-white border-2 px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
                  >
                    <a href="#amenities">
                      <ArrowDown className="w-4 h-4" />
                      Explore Our Amenities
                    </a>
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

          {/* Gallery */}
          <div className="md:mt-24 mt-16 md:mb-20 mb-10 md:pt-16 pt-8 border-t border-gray-100 px-4">
            <AnimatedSection>
              <Typography variant="h2" className="mb-8">
                Resort Gallery
              </Typography>
            </AnimatedSection>
            <div className="mb-20">
              <ImageMasonDisplay
                images={homepage?.data?.display_images}
                columns={{ default: 2, sm: 3, md: 4, lg: 4 }}
                title="Wedding Gallery"
              />
            </div>
          </div>
        </section>
        {/* Room Showcase */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="space-y-3">
              <AnimatedSection>
                <Typography variant="h2">Luxurious Accommodations</Typography>
              </AnimatedSection>
              <AnimatedSection>
                <p className="text-center pb-8">
                  With only 12 rooms, there is no overcrowding. There is ample space as we only
                  cater to our own guests.
                </p>
              </AnimatedSection>
            </div>

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
        <section className="py-12 bg-cyan-950 text-white" id="amenities">
          <div className="container mx-auto px-4 space-y-3">
            <AnimatedSection>
              <Typography variant="h2" className="text-white">
                Exceptional Amenities
              </Typography>
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

        <section className="relative py-12 overflow-hidden">
          <ParallaxSection speed={0.2} className="absolute inset-0 opacity-20">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/hotel-cta.jpg')" }}
            />
          </ParallaxSection>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <AnimatedSection>
              <Typography variant="h2">Reserve Your Perfect Getaway</Typography>
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
