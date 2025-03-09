import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();
  //   delete models
  await prisma.room.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  //   re create models
  await prisma.room.createMany({
    data: sampleData.rooms,
  });
  await prisma.user.createMany({
    data: sampleData.users,
  });
  await prisma.booking.createMany({
    data: sampleData.bookings,
  });
  console.log("data seeded");
}

main();
