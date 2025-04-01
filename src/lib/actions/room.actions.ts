"use server";

import { Room } from "@/types";
import { roomData } from "../data";
export const getFeaturedRooms = async () => {
  // get from django api
  // const rooms = await prisma.room.findMany({
  //   where: {
  //     isFeatured: true,
  //   },
  // });
  // await prisma.$disconnect();
  // return convertPrismaObject(rooms);
  // if the date is before April 15th, 2025, then return the winter rate
  // if the date is after April 15th, 2025, then return the summer rate
  // summer rate ends on December 14th, 2025
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // Summer rate is from April 15th to December 14th
  const summerStartDate = new Date(`${currentYear}-04-15`);
  const summerEndDate = new Date(`${currentYear}-12-14`);

  // Check if current date is within summer season
  const isSummerSeason = currentDate >= summerStartDate && currentDate <= summerEndDate;
  const season = isSummerSeason ? "summer" : "winter";
  console.log(season);
  return roomData.map((room) => {
    return {
      ...room,
      price: room.rates?.["double"][season],
      currentSeason: season as Room["currentSeason"],
    };
  });
};

export const getRooms = async () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // Summer rate is from April 15th to December 14th
  const summerStartDate = new Date(`${currentYear}-04-15`);
  const summerEndDate = new Date(`${currentYear}-12-14`);

  // Check if current date is within summer season
  const isSummerSeason = currentDate >= summerStartDate && currentDate <= summerEndDate;
  const season = isSummerSeason ? "summer" : "winter";
  return roomData.map((room) => {
    return {
      ...room,
      price: room.rates?.["double"][season],
      currentSeason: season as Room["currentSeason"],
    };
  });
};
