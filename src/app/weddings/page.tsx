import AnimatedSection from "@/components/animations/AnimatedSection";
import ImageMasonDisplay from "@/components/features/ImageMasonDisplay";
import ContactForm from "@/components/forms/ContactForm";
import Hero from "@/components/layout/Hero";
import PageWrapper from "@/components/layout/PageWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Typography from "@/components/ui/Typography";
import { getWedding, getWeddingGCards } from "@/lib/actions/wedding.action";
import { Calendar } from "lucide-react";
import Image from "next/image";
import React from "react";

async function WeddingPage() {
  const wedding = await getWedding();
  const weddingCards = await getWeddingGCards();
  return (
    <div className="mx-auto w-screen ">
      <Hero image="/weddings-hero5.jpg" />
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 z-20 text-center">
          <AnimatedSection delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-serif drop-shadow-lg">
              Le Mirage <span className="italic">Weddings</span>
            </h1>
            <p className="text-white text-xl max-w-3xl mx-auto mt-6 drop-shadow-lg">
              Where dreams become memories to cherish forever.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <PageWrapper className="bg-gradient-to-b from-cyan-950 to-cyan-100 px-4">
        <section className="container py-16 mx-auto">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <AnimatedSection>
              <Typography variant="h2" className="capitalize text-white mb-8">
                Your Perfect Day Awaits
              </Typography>
            </AnimatedSection>
            <AnimatedSection>
              <p className="text-white/90 text-lg leading-relaxed">
                Imagine saying &ldquo;I do&rdquo; with the Caribbean Sea and Sunset as your
                backdrop. Nature is one of the best decorators and the panoramic view from the
                cliffs of Le Mirage Resort is perfect to complement your wedding. Come take
                God&apos;s creation and make it into your own, let Le Mirage be the foundation on
                which you build your dream wedding.
              </p>
            </AnimatedSection>
          </div>

          {/* Feature Sections */}
          <div className="space-y-12 py-12 max-w-5xl mx-auto">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {weddingCards?.data?.map((card: any) => (
              <AnimatedSection delay={0.4} key={card?.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5">
                  <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={card?.image?.url}
                      alt="Wedding"
                      className="w-[350px] h-[300px] md:w-[500px] md:h-[500px] max-w-full object-cover mx-auto rounded-md"
                    />
                  </div>

                  <div className=" flex flex-col justify-center gap-5">
                    <h2 className="text-2xl lg:text-3xl text-center font-serif text-white font-medium">
                      {card?.Title}
                    </h2>
                    <p className=" leading-relaxed ml-9 text-white">{card?.description}</p>
                    <Button variant="outline" className="rounded-full w-fit mx-auto" asChild>
                      <a href="#contact">Learn More</a>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Gallery Title */}
          <div className="text-center mt-20 mb-8">
            <AnimatedSection>
              <h2 className="text-3xl lg:text-4xl font-serif text-white">Moments to Remember</h2>
              <p className="text-gray-300 mt-2">
                Browse our gallery of unforgettable wedding moments
              </p>
            </AnimatedSection>
          </div>

          {/* Gallery */}
          <div className="mb-20 space-y-5">
            <ImageMasonDisplay images={wedding?.data?.display_images} title="Wedding Gallery" />
          </div>
          <hr className="my-12 border-t border-gray-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <AnimatedSection delay={0.1}>
              <Card className="p-6 bg-transparent border-none shadow-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl lg:text-3xl text-cyan-900 font-serif flex items-center">
                    <span className="mr-2">✨</span> Things to know
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3 text-xl">•</span>
                      <span>Wedding guests are offered a 30% discount on Room Rates.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3 text-xl">•</span>
                      <span>Venue Access from as early as 8:00 am until reception is over.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3 text-xl">•</span>
                      <span>Free WiFi throughout the property.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3 text-xl">•</span>
                      <span>Free Parking for wedding guests.</span>
                    </li>
                  </ul>

                  <div className=" p-4 ">
                    <p className="italic text-cyan-900 text-center font-serif text-lg">
                      &ldquo;Ready to Make It Official? Your dream wedding deserves a dream
                      location. Book your date at Le Mirage Resort and let&apos;s bring your love
                      story to life—beautiful, bold, and bathed in sunset light.&rdquo;
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="p-6  bg-transparent border-none shadow-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl lg:text-3xl text-cyan-900 font-serif flex items-center">
                    <span className="mr-2">💍</span> Pricing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4">
                      <span className="font-medium">10-20 persons</span>
                      <span className="text-xl font-bold text-cyan-900">US$250.00</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-md  shadow-sm hover:shadow-md transition-shadow">
                      <span className="font-medium">21-40 persons</span>
                      <span className="text-xl font-bold text-cyan-900">US$350.00</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-md  shadow-sm hover:shadow-md transition-shadow">
                      <span className="font-medium">41-80 persons</span>
                      <span className="text-xl font-bold text-cyan-900">US$450.00</span>
                    </div>
                  </div>
                  <div className=" p-4  mt-6  ">
                    <p className="text-gray-700">
                      <span className="font-semibold">Security Deposit:</span> US$50.00 is refunded
                      if the property is returned in its original condition.
                    </p>
                  </div>
                  <div className="flex items-center justify-center mt-6">
                    <Calendar className="text-cyan-700 mr-2 h-5 w-5" />
                    <p className="text-cyan-800 font-medium">
                      Dates are filling up fast! Contact us today.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <div className="p-8" id="contact">
            <ContactForm
              title="Begin Your Forever"
              description="Ready to start planning your perfect day at Le Mirage Resort? Reach out to our wedding specialists."
            />
          </div>
        </section>
      </PageWrapper>
    </div>
  );
}

export default WeddingPage;
