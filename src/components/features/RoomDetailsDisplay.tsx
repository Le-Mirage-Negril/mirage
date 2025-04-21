"use client";

import React from "react";
import { Room, RoomImage } from "@/types";
import ImageMasonDisplay from "./ImageMasonDisplay";
import { prepareImagesForMasonryDisplay, getRatesForSeason } from "@/utils/dataTransformers";

interface RoomDetailsDisplayProps {
  room: Room;
}

const RoomDetailsDisplay: React.FC<RoomDetailsDisplayProps> = ({ room }) => {
  const images =
    Array.isArray(room?.images) && room?.images?.length > 0 && typeof room?.images[0] !== "string"
      ? prepareImagesForMasonryDisplay(room?.images as RoomImage[])
      : [];

  // Determine which rate to display based on current season
  const displayRate = room.rates
    ? room.rates.double[room.currentSeason]
    : room.seasonal_rates
    ? getRatesForSeason(room.seasonal_rates, room.currentSeason).double
    : room.price;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Room details section */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <h1 className="text-3xl font-bold mb-4">{room.name}</h1>

          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Room Details</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700">Current Rate</h3>
                <p className="text-2xl font-bold">
                  ${displayRate} <span className="text-sm text-gray-500">per night</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {room.currentSeason === "summer" ? "Summer" : "Winter"} Season
                </p>
              </div>

              {room.floor && (
                <div>
                  <h3 className="font-medium text-gray-700">Floor</h3>
                  <p>{room.floor}</p>
                </div>
              )}

              {room.roomSize && (
                <div>
                  <h3 className="font-medium text-gray-700">Room Size</h3>
                  <p>{room.roomSize} sq ft</p>
                </div>
              )}

              {room.bedType && (
                <div>
                  <h3 className="font-medium text-gray-700">Bed Type</h3>
                  <p>{room.bedType}</p>
                </div>
              )}

              {room.amenities && room.amenities.length > 0 && (
                <div>
                  <h3 className="font-medium text-gray-700">Amenities</h3>
                  <ul className="list-disc list-inside">
                    {room.amenities.map((amenity, index) => (
                      <li key={index}>{amenity}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Seasonal Rates Section */}
          {room.rates && (
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Seasonal Rates</h2>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b text-left">Season</th>
                      <th className="py-2 px-4 border-b text-right">Single</th>
                      <th className="py-2 px-4 border-b text-right">Double</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b">Summer</td>
                      <td className="py-2 px-4 border-b text-right">${room.rates.single.summer}</td>
                      <td className="py-2 px-4 border-b text-right">${room.rates.double.summer}</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Winter</td>
                      <td className="py-2 px-4 border-b text-right">${room.rates.single.winter}</td>
                      <td className="py-2 px-4 border-b text-right">${room.rates.double.winter}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                <p>
                  Summer: {room.season?.summer.start} - {room.season?.summer.end}
                </p>
                <p>
                  Winter: {room.season?.winter.start} - {room.season?.winter.end}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Image gallery section */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <p className="text-gray-700 mb-4">{room.description}</p>
          </div>

          {images?.length > 0 && (
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Room Gallery</h2>
              <p className="text-sm text-gray-500 mb-4">
                Click on any image to view it in full size
              </p>
              <ImageMasonDisplay
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                images={images as any}
                columns={{ default: 1, sm: 2, md: 2, lg: 2 }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsDisplay;
