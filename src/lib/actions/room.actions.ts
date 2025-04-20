"use server";

import { Room } from "@/types";
import { transformStrapiRoom } from "@/utils/dataTransformers";
import type { StrapiRoomData } from "@/utils/dataTransformers";

export const getFeaturedRooms = async (): Promise<Room[]> => {
  try {
    // const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
    const response = await fetch(`https://mirage-be.onrender.com/api/rooms?populate=*`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch featured rooms: ${response.status}`);
    }

    const data = await response.json();

    // Transform and return the data
    return (
      data?.data?.map((room: Record<string, unknown>) =>
        transformStrapiRoom(room as unknown as StrapiRoomData)
      ) || []
    );
  } catch (error) {
    console.error("Error fetching featured rooms:", error);
    return [];
  }
};

export const getRooms = async (): Promise<Room[]> => {
  try {
    // const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
    const response = await fetch(`https://mirage-be.onrender.com/api/rooms?populate=*`);

    if (!response.ok) {
      throw new Error(`Failed to fetch rooms: ${response.status}`);
    }

    const data = await response.json();

    // Transform and return the data
    return (
      data?.data?.map((room: Record<string, unknown>) =>
        transformStrapiRoom(room as unknown as StrapiRoomData)
      ) || []
    );
  } catch (error) {
    console.error("Error fetching rooms:", error);
    return [];
  }
};
