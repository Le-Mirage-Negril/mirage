import AnimatedSection from "@/components/animations/AnimatedSection";
import ImageMasonDisplay from "@/components/features/ImageMasonDisplay";
import ContactForm from "@/components/forms/ContactForm";
import Hero from "@/components/layout/Hero";
import PageWrapper from "@/components/layout/PageWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageCarousel } from "@/components/ui/image-carousel";
import Typography from "@/components/ui/Typography";
import { getWedding } from "@/lib/actions/wedding.action";
import { HeartIcon, Sparkles, Camera, Palette, Calendar } from "lucide-react";
import React from "react";

async function WeddingPage() {
  const wedding = await getWedding();

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

      <PageWrapper className="bg-gradient-to-b from-cyan-950 to-white px-4">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 py-12">
            {/* Left Side: Image Display */}
            <div className="order-2 lg:order-1">
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <ImageCarousel
                    images={wedding?.data?.slide_images?.map(
                      (image: { id: string; url: string; width: number; height: number }) => ({
                        id: image.id,
                        url: image.url,
                        width: image.width,
                        height: image.height,
                      })
                    )}
                    alt={`Le Mirage Weddings`}
                  />
                </div>
              </AnimatedSection>
            </div>

            {/* Right Side: Content Sections */}
            <div className="space-y-12 order-1 lg:order-2">
              <AnimatedSection delay={0.2}>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Sparkles className="text-amber-400 mr-3 h-6 w-6" />
                    <h3 className="text-2xl font-serif text-cyan-400 font-medium">
                      A Ceremony Like No Other
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed ml-9">
                    Say &ldquo;I do&rdquo; with the Caribbean Sea and golden sunset as your witness.
                    At Le Mirage Resort, nature takes center stage—our panoramic cliffside view sets
                    a breathtaking backdrop that needs little else. It&apos;s where the ocean meets
                    the sky… and your forever begins.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <HeartIcon className="text-amber-400 mr-3 h-6 w-6" />
                    <h3 className="text-2xl font-serif text-cyan-400 font-medium">
                      Your Dream Wedding, Your Way
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed ml-9">
                    Whether you&apos;re envisioning an intimate elopement or a celebration with all
                    your closest people, our venue can host up to 80 guests comfortably. From
                    ceremony to cocktail hour to reception, every moment flows seamlessly in one
                    stunning location. No extra moving parts, just pure joy and beauty from start to
                    finish.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Camera className="text-amber-400 mr-3 h-6 w-6" />
                    <h3 className="text-2xl font-serif text-cyan-400 font-medium">
                      Picture-Perfect Memories
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed ml-9">
                    When the cliffs, the sea, and the setting sun come together—your wedding photos
                    don&apos;t just capture a moment, they become timeless. The natural light, the
                    gentle breeze, the endless horizon—it all works in your favor to create imagery
                    that sets your wedding apart.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Palette className="text-amber-400 mr-3 h-6 w-6" />
                    <h3 className="text-2xl font-serif text-cyan-400 font-medium">
                      Bring Your Vision to Life
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed ml-9">
                    Already working with a wedding planner? Amazing. Still searching? No problem.
                    We&apos;ll work alongside you (or your team) to make sure every detail feels
                    like you. Le Mirage is more than a venue—it&apos;s a canvas for your vision. Let
                    it be the foundation on which you build something unforgettable.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Gallery Title */}
          <div className="text-center mt-20 mb-8">
            <AnimatedSection>
              <h2 className="text-3xl font-serif text-cyan-500">Moments to Remember</h2>
              <p className="text-gray-300 mt-2">
                Browse our gallery of unforgettable wedding moments
              </p>
            </AnimatedSection>
          </div>

          {/* Gallery */}
          <div className="mb-20">
            <ImageMasonDisplay
              images={wedding?.data?.display_images}
              columns={{ default: 2, sm: 3, md: 4, lg: 4 }}
              title="Wedding Gallery"
            />
          </div>

          {/* Information Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <AnimatedSection delay={0.1}>
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-amber-100 bg-gradient-to-b from-white to-amber-50 h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl text-cyan-950 font-serif flex items-center">
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

                  <div className="bg-white p-4 rounded-lg border border-amber-100">
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
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-amber-100 bg-gradient-to-b from-white to-amber-50 h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl text-cyan-950 font-serif flex items-center">
                    <span className="mr-2">💍</span> Pricing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 rounded-md bg-white border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                      <span className="font-medium">10-20 persons</span>
                      <span className="text-xl font-bold text-amber-600">US$250.00</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-md bg-white border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                      <span className="font-medium">21-40 persons</span>
                      <span className="text-xl font-bold text-amber-600">US$350.00</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-md bg-white border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                      <span className="font-medium">41-80 persons</span>
                      <span className="text-xl font-bold text-amber-600">US$450.00</span>
                    </div>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg mt-6 border border-cyan-100">
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

          {/* Contact Form with special styling */}
          <div className="bg-gradient-to-r from-cyan-50 to-amber-50 rounded-2xl p-8 shadow-xl">
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
