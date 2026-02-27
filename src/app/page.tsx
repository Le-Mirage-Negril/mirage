import AmenityCard from "@/components/features/AmenityCard";
import AnimatedSection from "@/components/animations/AnimatedSection";
import ParallaxSection from "@/components/animations/ParallaxSection";
import StaggeredGroup from "@/components/animations/StaggeredGroup";
import Hero from "@/components/layout/Hero";
import LightTheme from "@/components/providers/LightTheme";
import Room from "@/components/rooms/Room";
import { Button } from "@/components/ui/button";
import { homepageImagesData } from "@/lib/data";
import {
  getAmenitiesForSite,
  getHomeCmsContent,
  getRoomsForSite,
  getSiteBranding,
} from "@/lib/cms/content";
import Image from "next/image";
import Link from "next/link";
import type { BasicImage, RoomData } from "@/types";
import Typography from "@/components/ui/Typography";
import { ArrowDown } from "lucide-react";
import ImageMasonDisplay from "@/components/features/ImageMasonDisplay";
import { ROOM_TAX_BLURB } from "@/lib/constants";
import type { CSSProperties } from "react";

const fallbackFeatureImages: BasicImage[] = [
  {
    id: 1,
    url: "/swim-4.jpg",
    alt: "Luxury Resort Swimming Pool",
  },
  {
    id: 2,
    url: "/swim-2.jpg",
    alt: "Infinity Pool View",
  },
  {
    id: 3,
    url: "/swim-3.jpg",
    alt: "Poolside Lounging Area",
  },
];

const normalizeHexColor = (value: string | null | undefined): string | null => {
  if (!value) {
    return null;
  }

  const trimmed = value.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(trimmed)) {
    return trimmed;
  }

  if (/^#[0-9a-fA-F]{3}$/.test(trimmed)) {
    const r = trimmed.charAt(1);
    const g = trimmed.charAt(2);
    const b = trimmed.charAt(3);
    return `#${r}${r}${g}${g}${b}${b}`;
  }

  return null;
};

const getReadableTextColor = (color: string | null): string => {
  const normalized = normalizeHexColor(color);
  if (!normalized) {
    return "#ffffff";
  }

  const r = Number.parseInt(normalized.slice(1, 3), 16);
  const g = Number.parseInt(normalized.slice(3, 5), 16);
  const b = Number.parseInt(normalized.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 150 ? "#0f172a" : "#ffffff";
};

export default async function Home() {
  const [rooms, amenities, homeCmsContent, siteBranding] = await Promise.all([
    getRoomsForSite(),
    getAmenitiesForSite(),
    getHomeCmsContent(),
    getSiteBranding(),
  ]);

  const galleryImages =
    homeCmsContent?.gallery.images && homeCmsContent.gallery.images.length > 0
      ? homeCmsContent.gallery.images
      : homepageImagesData;

  const featureImages: BasicImage[] = [
    homeCmsContent?.about.image ?? galleryImages[0] ?? fallbackFeatureImages[0],
    galleryImages[1] ?? fallbackFeatureImages[1],
    galleryImages[2] ?? fallbackFeatureImages[2],
  ];

  const heroImage = homeCmsContent?.hero.image?.url;
  const heroPrimaryColor = normalizeHexColor(siteBranding?.primaryColor ?? null);
  const heroHoverColor = normalizeHexColor(siteBranding?.secondaryColor ?? null) ?? heroPrimaryColor;
  const heroButtonUsesBranding = Boolean(heroPrimaryColor && heroHoverColor);
  const heroButtonStyle = heroButtonUsesBranding
    ? ({
        "--hero-cta-bg": heroPrimaryColor,
        "--hero-cta-hover": heroHoverColor,
        "--hero-cta-text": getReadableTextColor(heroPrimaryColor),
      } as CSSProperties)
    : undefined;

  return (
    <LightTheme>
      <div className="mx-auto w-screen  bg-white">
        <section className="relative h-screen flex items-center overflow-hidden">
          <Hero image={heroImage && heroImage.length > 0 ? heroImage : undefined} />
          <div className="container mx-auto px-4 z-20 text-center">
            <AnimatedSection delay={0.2}>
              <Typography variant="h1">{homeCmsContent?.hero.title || "LE MIRAGE"}</Typography>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Typography variant="h3" className=" text-white mb-4">
                {homeCmsContent?.hero.subtitle || "Luxury Redefined"}
              </Typography>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                {homeCmsContent?.hero.description ||
                  "Experience the perfect blend of comfort, elegance, and exceptional service"}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.6} direction="up">
              <Link href={homeCmsContent?.hero.ctaUrl || "/reservations"}>
                <Button
                  size="lg"
                  className={
                    heroButtonUsesBranding
                      ? "bg-[var(--hero-cta-bg)] hover:bg-[var(--hero-cta-hover)] text-[var(--hero-cta-text)] px-8 py-6 text-lg"
                      : "bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg"
                  }
                  style={heroButtonStyle}
                >
                  {homeCmsContent?.hero.ctaText || "Book Your Stay"}
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-12 bg-amber-50">
          <div className="container mx-auto px-4 ">
            <AnimatedSection direction="up" delay={0.1}>
              <Typography variant="h2" className="pb-10">
                {homeCmsContent?.hero.subtitle || "Breathe, Relax, Unwind."}
              </Typography>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center ">
              <div className="md:col-span-5 space-y-3 order-2 md:order-1 px-2 md:px-0 pt-10">
                <AnimatedSection direction="left" delay={0.2}>
                  <Typography variant="h3">
                    {homeCmsContent?.about.title || "Discover Tranquility"}
                  </Typography>
                </AnimatedSection>
                <AnimatedSection direction="left" delay={0.3}>
                  <p className="text-cyan-700">
                    {homeCmsContent?.about.description ||
                      "Mirage Resort is a small private property, Clothing Optional, Adults Only Resort. Situated on the West End cliffs along the rugged coastline of Negril. With twelve large rooms facing the Caribbean Sea, the Resort offers an intimate experience and privacy for nature lovers."}
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

              <div className="md:col-span-7 order-1 md:order-2 grid grid-cols-12 grid-rows-6 gap-3 h-[600px]">
                <AnimatedSection direction="right" delay={0.1} className="col-span-8 row-span-6">
                  <ParallaxSection speed={0.2} className="h-full w-full">
                    <div className="overflow-hidden rounded-lg h-full shadow-lg">
                      <Image
                        src={featureImages[0].url}
                        alt={featureImages[0].alt}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        width={500}
                        height={500}
                      />
                    </div>
                  </ParallaxSection>
                </AnimatedSection>

                <AnimatedSection direction="down" delay={0.3} className="col-span-4 row-span-3">
                  <ParallaxSection speed={0.4} className="h-full w-full">
                    <div className="overflow-hidden rounded-lg h-full shadow-lg">
                      <Image
                        src={featureImages[1].url}
                        alt={featureImages[1].alt}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        width={300}
                        height={300}
                      />
                    </div>
                  </ParallaxSection>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.5} className="col-span-4 row-span-3">
                  <ParallaxSection speed={-0.3} className="h-full w-full">
                    <div className="overflow-hidden rounded-lg h-full shadow-lg">
                      <Image
                        src={featureImages[2].url}
                        alt={featureImages[2].alt}
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

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="space-y-3">
              <AnimatedSection>
                <Typography variant="h2">
                  {homeCmsContent?.roomsPreview.title || "Luxurious Accommodations"}
                </Typography>
              </AnimatedSection>
              <AnimatedSection>
                <p className="text-center pb-8">
                  {homeCmsContent?.roomsPreview.subtitle ||
                    "With only 12 rooms, there is no overcrowding. There is ample space as we only cater to our own guests."}
                </p>
              </AnimatedSection>
            </div>

            <StaggeredGroup>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {rooms?.map((room: RoomData) => (
                  <Room key={room.id} room={room} buttonHref={`/rooms`} />
                ))}
              </div>
              <p className="text-xs text-gray-600 text-center md:pt-8 pt-4">{ROOM_TAX_BLURB}</p>
            </StaggeredGroup>
          </div>
        </section>

        <section className="py-12 bg-cyan-950 text-white" id="amenities">
          <div className="container mx-auto px-4 space-y-3">
            <AnimatedSection>
              <Typography variant="h2" className="text-white">
                {homeCmsContent?.amenities.title || "Exceptional Amenities"}
              </Typography>
            </AnimatedSection>
            {homeCmsContent?.amenities.subtitle && (
              <AnimatedSection>
                <p className="text-center text-stone-300">{homeCmsContent.amenities.subtitle}</p>
              </AnimatedSection>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {amenities.map((feature, index) => (
                <AnimatedSection key={feature.id} direction="scale" delay={index * 0.1}>
                  <AmenityCard amenity={feature} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-12 overflow-hidden container mx-auto px-4">
          <ParallaxSection speed={0.2} className="absolute inset-0 opacity-20">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/hotel-cta.jpg')" }}
            />
          </ParallaxSection>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <AnimatedSection>
              <Typography variant="h2">
                {homeCmsContent?.cta.title || "Reserve Your Perfect Getaway"}
              </Typography>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-xl text-cyan-950/80 mb-8 max-w-2xl mx-auto">
                {homeCmsContent?.cta.description ||
                  "Book directly with us for the best rates and exclusive perks"}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Link href={homeCmsContent?.cta.buttonUrl || "/reservations"}>
                <Button
                  size="lg"
                  className="bg-cyan-900 hover:bg-cyan-950 text-white px-8 py-6 text-lg"
                >
                  {homeCmsContent?.cta.buttonText || "Book Now"}
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        <div className="p-4 border-t border-gray-100 container mx-auto px-4">
          <AnimatedSection>
            <Typography variant="h2" className="mb-8">
              {homeCmsContent?.gallery.title || "Resort Gallery"}
            </Typography>
          </AnimatedSection>
          <div className="mb-20 space-y-5">
            <ImageMasonDisplay
              images={galleryImages}
              title={homeCmsContent?.gallery.title || "Resort Gallery"}
            />
          </div>
        </div>
      </div>
    </LightTheme>
  );
}
