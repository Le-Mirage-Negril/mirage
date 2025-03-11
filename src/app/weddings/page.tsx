import AnimatedSection from "@/components/animations/AnimatedSection";

import Hero from "@/components/layout/Hero";
import Image from "next/image";

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
      <div className="bg-white">
        <section className="container py-10 mx-auto space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
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
            </div>

            <div>
              {/* image slider */}
              <Image
                src="/weddings-hero1.jpg"
                height={500}
                width={400}
                className="object-cover w-full"
                alt="Wedding Image"
              />
            </div>
          </div>
          {/* things */}
          <div className="grid grid-cols md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <h2 className="text-2xl text-cyan-950 font-serif">Things to know</h2>
              <ul className="list-decimal list-inside">
                <li> Wedding guests are offered a 30% discounts on Room Rates.</li>
                <li>Venue Access from as early as 8:00 am until reception is over.</li>
                <li>Free WiFi.</li>
              </ul>
            </div>
            {/* prices */}
            <div className="space-y-4">
              <h2 className="text-2xl text-cyan-950 font-serif">Prices</h2>
              <ul className="list-decimal list-inside">
                <ol>10 – 20 persons US$110.00</ol>
                <ol>21- 40 persons US$250.00</ol>
                <ol>41-80 persons US $350.00</ol>
              </ul>
            </div>
          </div>
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
