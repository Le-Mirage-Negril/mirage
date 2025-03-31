import AnimatedSection from "@/components/animations/AnimatedSection";

import Hero from "@/components/layout/Hero";
import PageWrapper from "@/components/layout/PageWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageCarousel } from "@/components/ui/image-carousel";
import Typography from "@/components/ui/Typography";

import React from "react";

function page() {
  return (
    <div className="mx-auto w-screen  bg-cyan-900">
      <Hero image="/weddings-hero5.jpg" />
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 z-20 text-center">
          <AnimatedSection delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-serif">Weddings</h1>
          </AnimatedSection>
        </div>
      </section>
      <PageWrapper className="bg-white px-4">
        <section className="container py-8 mx-auto space-y-8">
          <div className="pb-7">
            <AnimatedSection>
              <Typography variant="h2" className="mb-10 capitalize">
                Le Mirage Weddings
              </Typography>
            </AnimatedSection>
            <AnimatedSection>
              <p>
                Imagine saying “I do” with the Caribbean Sea and Sunset as your backdrop. Nature is
                one of the best decorators and the panoramic view from the cliffs of Le Mirage
                Resort is perfect to complement your wedding. Come take God&apos;s creation and make
                it into your own, let Le Mirage be the foundation on which you build your dream
                wedding. Our spacious venue holds up to 80 persons and the ceremony, reception and
                cocktail can all be comfortably held on our cliffside. Get beautiful wedding
                pictures and videos that stand out and set your wedding apart from others. So grab
                your wedding planner, book Le Mirage Resort and make the wedding of your dreams a
                reality.
              </p>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4 flex flex-col items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 border-amber-100 bg-gradient-to-b from-white to-amber-50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl text-cyan-950 font-serif flex items-center">
                      <span className="mr-2">✨</span> Things to know
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2 font-bold">•</span>
                        <span>Wedding guests are offered a 30% discount on Room Rates.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2 font-bold">•</span>
                        <span>Venue Access from as early as 8:00 am until reception is over.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2 font-bold">•</span>
                        <span>Free WiFi.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 border-amber-100 bg-gradient-to-b from-white to-amber-50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl text-cyan-950 font-serif flex items-center">
                      <span className="mr-2">💍</span> Pricing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-2 rounded-md bg-white border border-amber-100">
                        <span className="font-medium">10-20 persons</span>
                        <span className="text-lg font-bold text-amber-600">US$110.00</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-md bg-white border border-amber-100">
                        <span className="font-medium">21-40 persons</span>
                        <span className="text-lg font-bold text-amber-600">US$250.00</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-md bg-white border border-amber-100">
                        <span className="font-medium">41-80 persons</span>
                        <span className="text-lg font-bold text-amber-600">US$350.00</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div>
              <AnimatedSection delay={0.1}>
                <ImageCarousel images={["/weddings-hero1.jpg"]} alt={`Le Mirage Weddings`} />
              </AnimatedSection>
            </div>
          </div>
          {/* things */}
        </section>
      </PageWrapper>
    </div>
  );
}

export default page;

// LE MIRAGE Weddings
// Imagine saying “I do” with the Caribbean Sea and Sunset as your backdrop. Nature is one of the best decorators and the panoramic view from the cliffs of Le Mirage Resort is perfect to complement your wedding. Come take God’s creation and make it into your own, let Le Mirage be the foundation on which you build your dream wedding. Our spacious venue holds up to 80 persons and the ceremony, reception and cocktail can all be comfortably held on our cliffside. Get beautiful wedding pictures and videos that stand out and set your wedding apart from others. So grab your wedding planner, book Le Mirage Resort and make the wedding of your dreams a reality.
// 1
// Wedding guests are offered a 30% discounts on Room Rates.

// 2
// Free Parking for wedding guests.

// 3
// Venue Access from as early as 8:00 am until reception is over.

// 4
// Free WiFi.

// 10 – 20 persons US$110.00
// 21- 40 persons US$250.00
// 41-80 persons US$350.00
