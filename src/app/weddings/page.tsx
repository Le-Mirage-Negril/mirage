import AnimatedSection from "@/components/animations/AnimatedSection";
import ImageMasonDisplay from "@/components/features/ImageMasonDisplay";
import ContactForm from "@/components/forms/ContactForm";
import Hero from "@/components/layout/Hero";
import PageWrapper from "@/components/layout/PageWrapper";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Typography from "@/components/ui/Typography";
import WeddingCards from "@/components/weddings/WeddingCards";
import {
  getFallbackWeddingCards,
  getFallbackWeddingGallery,
  getWeddingsCmsContent,
} from "@/lib/cms/content";
import { Calendar } from "lucide-react";
import type { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Weddings & Events",
  description:
    "Host your destination wedding at Le Mirage in Negril, Jamaica. Intimate ceremonies and events for 10 to 80 guests at our boutique resort.",
};

const defaultPricingPackages = [
  { name: "10-20 persons", guests: "10-20", price: "US$250.00", features: [] },
  { name: "21-40 persons", guests: "21-40", price: "US$350.00", features: [] },
  { name: "41-80 persons", guests: "41-80", price: "US$450.00", features: [] },
];

async function WeddingPage() {
  const weddingsCmsContent = await getWeddingsCmsContent();

  const weddingGalleryData =
    weddingsCmsContent?.gallery.images && weddingsCmsContent.gallery.images.length > 0
      ? weddingsCmsContent.gallery.images
      : getFallbackWeddingGallery();

  const weddingCardsData =
    weddingsCmsContent?.cards && weddingsCmsContent.cards.length > 0
      ? weddingsCmsContent.cards
      : getFallbackWeddingCards();

  const pricingPackages =
    weddingsCmsContent?.pricing.packages && weddingsCmsContent.pricing.packages.length > 0
      ? weddingsCmsContent.pricing.packages
      : defaultPricingPackages;

  return (
    <div className="mx-auto w-screen ">
      <Hero
        image={
          weddingsCmsContent?.hero.image?.url ||
          "https://firebasestorage.googleapis.com/v0/b/le-mirage-ea3d7.firebasestorage.app/o/wedding%2Fweddings-hero5.jpg?alt=media&token=7abd0497-480d-45cb-98b3-34775cd32c00"
        }
      />
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 z-20 text-center">
          <AnimatedSection delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-serif drop-shadow-lg">
              {weddingsCmsContent?.hero.title || "Le Mirage Weddings"}
            </h1>
            <p className="text-white text-xl max-w-3xl mx-auto mt-6 drop-shadow-lg">
              {weddingsCmsContent?.hero.description ||
                "Where dreams become memories to cherish forever."}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <PageWrapper className="bg-gradient-to-b from-cyan-950 to-cyan-100 ">
        <section className="container md:py-16 py-8 mx-auto">
          <div className="text-center md:mb-16 mb-8 max-w-4xl mx-auto">
            <AnimatedSection>
              <Typography variant="h2" className="capitalize text-white mb-8">
                {weddingsCmsContent?.hero.subtitle || "Your Perfect Day Awaits"}
              </Typography>
            </AnimatedSection>
            <AnimatedSection>
              <p className="text-white/90 text-lg leading-relaxed">
                {weddingsCmsContent?.hero.description ||
                  "Imagine saying \"I do\" with the Caribbean Sea and Sunset as your backdrop."}
              </p>
            </AnimatedSection>
          </div>

          <WeddingCards weddingCards={weddingCardsData} />

          <div className="text-center mt-20 mb-8">
            <AnimatedSection>
              <h2 className="text-3xl lg:text-4xl font-serif text-white">
                {weddingsCmsContent?.gallery.title || "Moments to Remember"}
              </h2>
              <small className="text-gray-300">*Click on the images to view the full gallery</small>
            </AnimatedSection>
          </div>

          <div className="mb-20 space-y-5">
            <ImageMasonDisplay
              images={weddingGalleryData}
              title={weddingsCmsContent?.gallery.title || "Wedding Gallery"}
            />
          </div>
          <hr className="my-12 border-t border-gray-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <AnimatedSection delay={0.1}>
              <Card className="p-6 bg-transparent border-none shadow-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl lg:text-3xl text-cyan-900 font-serif flex items-center">
                    <span className="mr-2">✨</span>
                    {weddingsCmsContent?.cta.title || "Things to know"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-cyan-900">
                    {weddingsCmsContent?.cta.description ||
                      "Ready to make your dream wedding happen at Le Mirage? Reach out to our team to start planning."}
                  </p>

                  <div className="p-4 ">
                    <p className="italic text-cyan-900 text-center font-serif text-lg">
                      {weddingsCmsContent?.hero.subtitle ||
                        "Your wedding deserves a stunning Caribbean backdrop."}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="p-6  bg-transparent border-none shadow-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl lg:text-3xl text-cyan-900 font-serif flex items-center">
                    <span className="mr-2">💍</span>
                    {weddingsCmsContent?.pricing.title || "Pricing"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pricingPackages.map((pkg) => (
                      <div
                        key={`${pkg.name}-${pkg.guests}`}
                        className="p-4 rounded-md shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-center gap-4">
                          <div>
                            <p className="font-medium">{pkg.name}</p>
                            {pkg.guests && <p className="text-sm text-gray-600">Guests: {pkg.guests}</p>}
                          </div>
                          <span className="text-xl font-bold text-cyan-900">{pkg.price}</span>
                        </div>
                        {pkg.features.length > 0 && (
                          <ul className="mt-2 text-sm text-gray-700 list-disc pl-4">
                            {pkg.features.map((feature) => (
                              <li key={`${pkg.name}-${feature}`}>{feature}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
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
              title={weddingsCmsContent?.cta.title || "Begin Your Forever"}
              description={
                weddingsCmsContent?.cta.description ||
                "Ready to start planning your perfect day at Le Mirage Resort? Reach out to our wedding specialists."
              }
              isWeddingForm={true}
            />
          </div>
        </section>
      </PageWrapper>
    </div>
  );
}

export default WeddingPage;
