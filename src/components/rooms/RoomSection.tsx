import React from "react";
import { ImageCarousel } from "../ui/image-carousel";
import AnimatedSection from "../animations/AnimatedSection";
import { Button } from "../ui/button";
import Link from "next/link";
import { Room, RoomImage } from "@/types";

// Helper function to normalize room images to string[] format
const normalizeRoomImages = (images: string[] | RoomImage[]): string[] => {
  if (images.length === 0) return [];

  // If images are already strings, return as is
  if (typeof images[0] === "string") {
    return images as string[];
  }


  return (images as RoomImage[]).map((img) => {
    return `${img.url}`;
  });
};

function RoomSection({ floor, description, images, rates, season, id, currentSeason }: Room) {
  const normalizedImages = normalizeRoomImages(images);
  console.log(normalizedImages);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4 py-7">
      {/* implement share feature */}
      <div className="md:order-2">
        <AnimatedSection delay={0.1}>
          <ImageCarousel images={normalizedImages} alt={`${floor} Room`} />
        </AnimatedSection>
      </div>
      {/* Room Description - Order changes on mobile */}
      <div className="md:order-1 space-y-6 p-6 flex flex-col justify-center items-center">
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
            <div className="text-sm text-gray-600 mb-2">
              <p>
                Summer Rates ({season?.summer.start} to {season?.summer.end}): Double $
                {rates?.double.summer} / Single ${rates?.single.summer}
              </p>
              <p>
                Winter Rates ({season?.winter.start} to {season?.winter.end}): Double $
                {rates?.double.winter} / Single ${rates?.single.winter}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="text-amber-700 font-medium">Double Rate</p>

                <p className="text-2xl font-bold text-amber-600">${rates?.double[currentSeason]}</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="text-amber-700 font-medium">Single Rate</p>

                <p className="text-2xl font-bold text-amber-600">${rates?.single[currentSeason]}</p>
              </div>
            </div>
            <div className="pt-4">
              <Link href={`/reservations?room=${id}`}>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                  Select Room
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Room Images - Order changes on mobile */}
    </div>
  );
}

export default RoomSection;
