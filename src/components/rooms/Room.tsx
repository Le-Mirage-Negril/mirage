import type { BasicImage, Room } from "@/types";
import React from "react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

import { Button } from "../ui/button";
import Link from "next/link";
import Typography from "../ui/Typography";
import { ImageCarousel } from "../ui/image-carousel";

interface RoomProps {
  room: Room;
  buttonTitle?: string;
  buttonHref?: string;
  buttonVariant?: "primary" | "secondary" | "outline";
  isBookingForm?: boolean;
}

function Room({ room, buttonHref = "/rooms", buttonTitle = "View Detail" }: RoomProps) {
  console.log(room);

  const roomImage = room.images?.[0]?.url as string;
  console.log("roomImage", roomImage);
  return (
    <Card className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 pt-0">
      <div className="h-80 overflow-hidden">
        <ImageCarousel
          images={room.images as unknown as BasicImage[]}
          alt={`Le Mirage - ${room.name}`}
        />
      </div>
      <CardHeader>
        <CardTitle>
          <Typography variant="h3">{room.name}</Typography>
        </CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between items-center">
        <span className="text-lg font-semibold text-amber-500">${room.price} \ night</span>
        <Link href={buttonHref}>
          <Button
            size="sm"
            variant="outline"
            className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white"
          >
            {buttonTitle}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default Room;
