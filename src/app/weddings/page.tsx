import AnimatedSection from "@/components/animations/AnimatedSection";

import Hero from "@/components/layout/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageCarousel } from "@/components/ui/image-carousel";

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
      <div className="bg-white px-4">
        <section className="container py-8 mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4 flex flex-col items-center">
              <AnimatedSection>
                <h2 className="text-2xl text-cyan-950 font-serif">LE MIRAGE Weddings</h2>
              </AnimatedSection>
              <AnimatedSection>
                <p>
                  Imagine saying “I do” with the Caribbean Sea and Sunset as your backdrop. Nature
                  is one of the best decorators and the panoramic view from the cliffs of Le Mirage
                  Resort is perfect to complement your wedding. Come take God&apos;s creation and
                  make it into your own, let Le Mirage be the foundation on which you build your
                  dream wedding. Our spacious venue holds up to 80 persons and the ceremony,
                  reception and cocktail can all be comfortably held on our cliffside. Get beautiful
                  wedding pictures and videos that stand out and set your wedding apart from others.
                  So grab your wedding planner, book Le Mirage Resort and make the wedding of your
                  dreams a reality.
                </p>
              </AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <CardHeader>
                    <CardTitle className="text-2xl text-cyan-950 font-serif">
                      Things to know
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-decimal list-inside">
                      <li> Wedding guests are offered a 30% discounts on Room Rates.</li>
                      <li>Venue Access from as early as 8:00 am until reception is over.</li>
                      <li>Free WiFi.</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="p-4">
                  <CardHeader>
                    <CardTitle className="text-2xl text-cyan-950 font-serif">Prices</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-decimal list-inside">
                      <ol>10-20 persons US$110.00</ol>
                      <ol>21-40 persons US$250.00</ol>
                      <ol>41-80 persons US $350.00</ol>
                    </ul>
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
      </div>
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
