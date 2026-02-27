import "server-only";

import { cache } from "react";

import type { Amenity, RoomData } from "@/types";
import {
  amenities as localAmenities,
  localRooms,
  weddingCards as localWeddingCards,
  weddingGallery as localWeddingGallery,
} from "@/lib/data";
import {
  fetchCmsAmenities,
  fetchCmsPageBySlug,
  fetchCmsRoomDetails,
  isGammaCmsSourceEnabled,
} from "@/lib/cms/client";
import {
  extractHomeCmsContent,
  extractWeddingsCmsContent,
  mapCmsAmenityToAmenity,
  mapCmsRoomToRoomData,
  type HomeCmsContent,
  type WeddingsCmsContent,
} from "@/lib/cms/mappers";

const fallbackRooms = localRooms as RoomData[];
const fallbackAmenities = localAmenities as Amenity[];

export const getRoomsForSite = cache(async (): Promise<RoomData[]> => {
  if (!isGammaCmsSourceEnabled()) {
    return fallbackRooms;
  }

  try {
    const cmsRooms = await fetchCmsRoomDetails();
    const mappedRooms = cmsRooms.map(mapCmsRoomToRoomData);
    return mappedRooms.length > 0 ? mappedRooms : fallbackRooms;
  } catch (error) {
    console.error("Failed to fetch GammaCMS rooms, falling back to local rooms.", error);
    return fallbackRooms;
  }
});

export const getAmenitiesForSite = cache(async (): Promise<Amenity[]> => {
  if (!isGammaCmsSourceEnabled()) {
    return fallbackAmenities;
  }

  try {
    const cmsAmenities = await fetchCmsAmenities();
    const mappedAmenities = cmsAmenities.map(mapCmsAmenityToAmenity);
    return mappedAmenities.length > 0 ? mappedAmenities : fallbackAmenities;
  } catch (error) {
    console.error("Failed to fetch GammaCMS amenities, falling back to local amenities.", error);
    return fallbackAmenities;
  }
});

export const getHomeCmsContent = cache(async (): Promise<HomeCmsContent | null> => {
  if (!isGammaCmsSourceEnabled()) {
    return null;
  }

  try {
    const page = await fetchCmsPageBySlug("home");
    return extractHomeCmsContent(page);
  } catch (error) {
    console.error("Failed to fetch GammaCMS home page content.", error);
    return null;
  }
});

export const getWeddingsCmsContent = cache(async (): Promise<WeddingsCmsContent | null> => {
  if (!isGammaCmsSourceEnabled()) {
    return null;
  }

  try {
    const page = await fetchCmsPageBySlug("weddings");
    return extractWeddingsCmsContent(page);
  } catch (error) {
    console.error("Failed to fetch GammaCMS weddings page content.", error);
    return null;
  }
});

export const getFallbackWeddingCards = () => localWeddingCards;
export const getFallbackWeddingGallery = () => localWeddingGallery;
