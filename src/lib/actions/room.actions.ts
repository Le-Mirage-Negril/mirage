"use server";

import { prisma } from "@/db/prisma";
import { convertPrismaObject } from "../utils";

export const getFeaturedRooms = async () => {
  const rooms = await prisma.room.findMany({
    where: {
      isFeatured: true,
    },
  });
  await prisma.$disconnect();
  return convertPrismaObject(rooms);
};

export const getRooms = async () => {
  // get from django api
  const rooms = await prisma.room.findMany({
    orderBy: {
      id: "asc",
    },
  });
  await prisma.$disconnect();
  return convertPrismaObject(rooms);
};
