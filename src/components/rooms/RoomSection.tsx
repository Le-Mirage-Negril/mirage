import React from "react";
import { CarouselImage, ImageCarousel } from "../ui/image-carousel";
import AnimatedSection from "../animations/AnimatedSection";
import { Button } from "../ui/button";
import Link from "next/link";
import { Room } from "@/types";
import { DateTime } from "luxon";
// Helper function to normalize room images to string[] format

function RoomSection({ floor, description, images, id, currentSeason, seasonal_rates }: Room) {
  console.log("images", images, seasonal_rates);
  const currentSeasonRates = seasonal_rates?.find((rate) =>
    rate.season_name.toLowerCase().includes(currentSeason)
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4 py-7">
      {/* implement share feature */}
      <div className="md:order-2">
        <AnimatedSection delay={0.1}>
          <ImageCarousel images={images as CarouselImage[]} alt={`${floor} Room`} />
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
            {seasonal_rates?.map((rate) => (
              <div className="text-sm text-gray-600 mb-2" key={rate.id}>
                <p>
                  <span className="font-bold">{rate?.season_name}</span>{" "}
                  {DateTime.fromISO(rate.start_date).toLocaleString(DateTime.DATE_MED)} to{" "}
                  {DateTime.fromISO(rate.end_date).toLocaleString(DateTime.DATE_MED)}: Double $
                  {rate.double_rate} / Single ${rate.single_rate}
                </p>
              </div>
            ))}

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="text-amber-700 font-medium">Double Rate</p>

                <p className="text-2xl font-bold text-amber-600">
                  ${currentSeasonRates?.double_rate}
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="text-amber-700 font-medium">Single Rate</p>

                <p className="text-2xl font-bold text-amber-600">
                  ${currentSeasonRates?.single_rate}
                </p>
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
