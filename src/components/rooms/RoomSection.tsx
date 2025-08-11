import React from "react";
import { ImageCarousel } from "../ui/image-carousel";
import AnimatedSection from "../animations/AnimatedSection";
import { Button } from "../ui/button";
import Link from "next/link";
import { BasicImage, RoomData, SeasonalRate } from "@/types";
import { DateTime } from "luxon";

import { Skeleton } from "../ui/skeleton";
import { ROOM_TAX_BLURB } from "@/lib/constants";

// Helper function to get current season rates
const getCurrentSeasonRates = (
  rates: SeasonalRate[] | undefined,
  season: string
): SeasonalRate | undefined => {
  if (!rates || rates.length === 0) return undefined;
  return rates.find((rate) => rate.season_name.toLowerCase().includes(season.toLowerCase()));
};

// Helper function to process images for the carousel
const processImages = (images: (string | BasicImage)[]): BasicImage[] => {
  if (!images || images.length === 0) return [];

  // Handle both string URLs and complex image objects
  return images.map((img): BasicImage => {
    if (typeof img === "string") {
      return {
        id: Math.floor(Math.random() * 1000000),
        url: img,
        alt: "Room image",
        // width: 0,
        // height: 0,
        // alternativeText: "Room image",
      };
    }

    // Handle Strapi image format
    if ("url" in img) {
      return {
        id: img.id,
        url: img.url,
        alt: img.alt,
      };
      // const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "";
      // return {
      //   id: typeof img.id === "number" ? img.id : Math.floor(Math.random() * 1000000),
      //   url: img.url.startsWith("http") ? img.url : `${baseUrl}${img.url}`,
      //   width: img.width || 0,
      //   height: img.height || 0,
      //   alternativeText: img.alternativeText || img.name || undefined,
      //   caption: img.caption || undefined,
      //   createdAt: img.createdAt || undefined,
      // };
    }

    return {
      id: Math.floor(Math.random() * 1000000),
      url: "/placeholder-room.jpg",
      alt: "Room image placeholder",
      // width: 0,
      // height: 0,
      // alternativeText: "Room image placeholder",
    };
  });
};

// Format date to a user-friendly string
const formatDate = (dateString: string): string => {
  try {
    if (DateTime.fromISO(dateString).isValid) {
      return DateTime.fromISO(dateString).toLocaleString(DateTime.DATE_MED);
    }
    return dateString;
  } catch {
    return dateString; // Fallback to the original string if parsing fails
  }
};

function RoomSection({
  floor = "Room",
  description = "No description available",
  images = [],
  id,
  currentSeason = "summer",
  seasonal_rates = [],
}: RoomData) {
  const currentSeasonRates = getCurrentSeasonRates(seasonal_rates, currentSeason);
  const carouselImages = processImages(images as (string | BasicImage)[]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4 md:py-7 py-4">
      {/* Room Images - Changes order on mobile */}
      <div className="md:order-2">
        <AnimatedSection delay={0.1}>
          {carouselImages.length > 0 ? (
            <ImageCarousel images={carouselImages} alt={`${floor} Room`} />
          ) : (
            <div className="w-full h-[300px] bg-gray-200 rounded-lg animate-pulse"></div>
          )}
        </AnimatedSection>
      </div>

      {/* Room Description - Changes order on mobile */}
      <div className="md:order-1 space-y-6 md:p-6 p-4 flex flex-col justify-center items-center">
        <AnimatedSection>
          <h2 className="text-3xl font-serif text-cyan-950">{floor}</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-cyan-950">
              Current Season: {currentSeason === "summer" ? "Summer" : "Winter"} Rates
            </h3>

            {/* Show all seasonal rates */}
            {seasonal_rates && seasonal_rates.length > 0 ? (
              seasonal_rates.map((rate) => (
                <div
                  className={`text-sm mb-2 ${
                    rate.season_name.toLowerCase().includes(currentSeason)
                      ? "text-amber-700 font-medium"
                      : "text-gray-600"
                  }`}
                  key={rate.id}
                >
                  <p>
                    <span className="font-bold">{rate.season_name}</span>{" "}
                    {formatDate(rate.start_date)} to {formatDate(rate.end_date)}:
                    <br className="md:hidden" /> Double ${rate.double_rate} / Single $
                    {rate.single_rate}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-sm text-gray-600 mb-2">
                <p>Rate information not available</p>
              </div>
            )}

            {currentSeasonRates ? (
              <>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="text-amber-700 font-medium">Double Rate</p>
                    <p className="text-2xl font-bold text-amber-600">
                      ${currentSeasonRates?.double_rate || "N/A"}
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="text-amber-700 font-medium">Single Rate</p>
                    <p className="text-2xl font-bold text-amber-600">
                      ${currentSeasonRates?.single_rate || "N/A"}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Skeleton className="w-full h-[300px] rounded-lg" />
                <Skeleton className="w-full h-[300px] rounded-lg" />
              </div>
            )}

            {/* CTA Button */}
            <div className="pt-4">
              <Link href={`/reservations?room=${id}`}>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                  Select Room
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
        <p className="text-xs text-gray-600">{ROOM_TAX_BLURB}</p>
      </div>
    </div>
  );
}

export default RoomSection;
