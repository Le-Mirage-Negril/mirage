import type { Room } from "@/types";
import React from "react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface RoomProps {
  room: Room;
  key: number | string;
  buttonTitle?: string;
  buttonHref?: string;
  buttonVariant?: "primary" | "secondary" | "outline";
}

function Room({ room, key, buttonHref = "/rooms", buttonTitle = "View Detail" }: RoomProps) {
  return (
    <Card
      key={key}
      className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 pt-0"
    >
      <div className="h-80 overflow-hidden">
        <Image
          src={room.images?.[0]}
          alt={`Le Mirage - ${room.name}`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale:110"
          width={500}
          height={500}
        />
      </div>
      <CardHeader>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between items-center">
        <span className="text-lg font-semibold text-amber-500">{room.price} \ night</span>
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
