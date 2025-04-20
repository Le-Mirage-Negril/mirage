import { Room, RoomImage, SeasonalRate } from "@/types";

/**
 * Type representing the raw room data from Strapi
 */
export interface StrapiRoomData {
  id: number;
  documentId: string;
  name: string;
  description: string;
  price: number;
  rates: {
    double: {
      winter: number;
      summer: number;
    };
    single: {
      winter: number;
      summer: number;
    };
  };
  season: {
    summer: {
      start: string;
      end: string;
    };
    winter: {
      start: string;
      end: string;
    };
  };
  floor: string;
  type: string | null;
  isFeatured: boolean;
  currentSeason: "summer" | "winter";
  images: RoomImage[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  seasonal_rates: SeasonalRate[];
}

/**
 * Transforms the raw Strapi room data into our typed Room format
 * @param strapiRoom - Raw room data from Strapi
 * @returns A properly typed Room object
 */
export function transformStrapiRoom(strapiRoom: StrapiRoomData): Room {
  return {
    id: strapiRoom.id,
    documentId: strapiRoom.documentId,
    name: strapiRoom.name,
    description: strapiRoom.description,
    price: strapiRoom.price,
    rates: strapiRoom.rates,
    season: strapiRoom.season,
    floor: strapiRoom.floor,
    type: strapiRoom.type,
    isFeatured: strapiRoom.isFeatured,
    currentSeason: strapiRoom.currentSeason,
    images: strapiRoom.images,
    createdAt: strapiRoom.createdAt,
    updatedAt: strapiRoom.updatedAt,
    publishedAt: strapiRoom.publishedAt,
    seasonal_rates: strapiRoom.seasonal_rates,
  };
}

/**
 * Converts the Strapi image URLs to a format suitable for the ImageMasonDisplay component
 * @param roomImages - Array of RoomImage objects from Strapi
 * @returns Array of image objects ready for the ImageMasonDisplay component
 */
export function prepareImagesForMasonryDisplay(roomImages: RoomImage[]) {
  return roomImages.map((image) => ({
    src: process.env.NEXT_PUBLIC_STRAPI_URL + image.url,
    alt: image.alternativeText || image.name,
    width: image.width,
    height: image.height,
  }));
}

/**
 * Extracts room rates for the specified season from seasonal_rates array
 * @param seasonalRates - Array of SeasonalRate objects
 * @param season - The season to get rates for ('summer' or 'winter')
 * @returns Object with single and double occupancy rates
 */
export function getRatesForSeason(seasonalRates: SeasonalRate[], season: string) {
  const seasonRate = seasonalRates.find((rate) =>
    rate.season_name.toLowerCase().includes(season.toLowerCase())
  );

  if (!seasonRate) {
    return { single: null, double: null };
  }

  return {
    single: seasonRate.single_rate,
    double: seasonRate.double_rate,
  };
}

/**
 * Gets the current season based on the current date and season definitions
 * @param summer - Summer season period
 * @returns Current season ('summer' or 'winter')
 */
export function getCurrentSeason(summer: { start: string; end: string }): "summer" | "winter" {
  const now = new Date();

  // Parse dates
  const summerStart = new Date(summer.start);
  const summerEnd = new Date(summer.end);

  // Check if current date is in summer range
  if (now >= summerStart && now <= summerEnd) {
    return "summer";
  }

  // If not in summer, must be winter season
  return "winter";
}
