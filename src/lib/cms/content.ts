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
  fetchCmsPages,
  fetchCmsSite,
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
    const candidateSlugs = ["home", "homepage", "index"];

    for (const slug of candidateSlugs) {
      try {
        const page = await fetchCmsPageBySlug(slug);
        const content = extractHomeCmsContent(page);
        if (content) {
          return content;
        }
      } catch {
        // Continue trying fallback slugs.
      }
    }

    const pages = await fetchCmsPages();
    const homepage = pages.find((page) => page.is_homepage) ?? pages.find((page) => page.slug === "home");
    if (homepage?.slug) {
      const page = await fetchCmsPageBySlug(homepage.slug);
      return extractHomeCmsContent(page);
    }

    return null;
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
    const candidateSlugs = ["weddings", "wedding"];
    for (const slug of candidateSlugs) {
      try {
        const page = await fetchCmsPageBySlug(slug);
        const content = extractWeddingsCmsContent(page);
        if (content) {
          return content;
        }
      } catch {
        // Continue trying fallback slugs.
      }
    }

    return null;
  } catch (error) {
    console.error("Failed to fetch GammaCMS weddings page content.", error);
    return null;
  }
});

export const getFallbackWeddingCards = () => localWeddingCards;
export const getFallbackWeddingGallery = () => localWeddingGallery;

export interface SiteBranding {
  primaryColor: string | null;
  secondaryColor: string | null;
}

export const getSiteBranding = cache(async (): Promise<SiteBranding | null> => {
  if (!isGammaCmsSourceEnabled()) {
    return null;
  }

  try {
    const site = await fetchCmsSite();
    return {
      primaryColor:
        typeof site.settings?.primary_color === "string" ? site.settings.primary_color : null,
      secondaryColor:
        typeof site.settings?.secondary_color === "string" ? site.settings.secondary_color : null,
    };
  } catch (error) {
    console.error("Failed to fetch GammaCMS site branding.", error);
    return null;
  }
});
