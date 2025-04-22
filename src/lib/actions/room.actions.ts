"use server";

import { Room } from "@/types";
import { transformStrapiRoom } from "@/utils/dataTransformers";
import type { StrapiRoomData } from "@/utils/dataTransformers";

/**
 * Common function to fetch and handle Strapi API requests
 */
async function fetchStrapiData(endpoint: string, errorMessage: string) {
  try {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
    if (!strapiUrl) {
      throw new Error("NEXT_PUBLIC_STRAPI_URL is not defined in the environment variables");
    }

    const response = await fetch(`${strapiUrl}${endpoint}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`${errorMessage}: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(errorMessage, error);
    return null;
  }
}

/**
 * Get featured rooms
 */
export const getFeaturedRooms = async (): Promise<Room[]> => {
  const data = await fetchStrapiData(
    "/rooms?populate=*&filters[isFeatured][$eq]=true",
    "Failed to fetch featured rooms"
  );

  if (!data || !data.data) return [];

  try {
    return data.data.map((room: Record<string, unknown>) =>
      transformStrapiRoom(room as unknown as StrapiRoomData)
    );
  } catch (error) {
    console.error("Error transforming featured rooms data:", error);
    return [];
  }
};

/**
 * Get all rooms
 */
export const getRooms = async (): Promise<Room[]> => {
  const data = await fetchStrapiData("/rooms?populate=*", "Failed to fetch rooms");

  if (!data || !data.data) return [];

  try {
    return data.data.map((room: Record<string, unknown>) =>
      transformStrapiRoom(room as unknown as StrapiRoomData)
    );
  } catch (error) {
    console.error("Error transforming rooms data:", error);
    return [];
  }
};

/**
 * Get a specific room by ID
 */
export const getRoomById = async (id: string | number): Promise<Room | null> => {
  const data = await fetchStrapiData(
    `/rooms/${id}?populate=*`,
    `Failed to fetch room with id ${id}`
  );

  if (!data || !data.data) return null;

  try {
    return transformStrapiRoom(data.data as StrapiRoomData);
  } catch (error) {
    console.error(`Error transforming data for room with id ${id}:`, error);
    return null;
  }
};
