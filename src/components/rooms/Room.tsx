import type { Room } from "@/types";
import React from "react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

interface RoomProps {
  room: Room;
  key: number | string;
}

function Room({ room, key }: RoomProps) {
  return (
    <Card
      key={key}
      className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="h-64 overflow-hidden">
        <Image
          src={room.image}
          alt={`Le Mirage - ${room.title}`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale:110"
          width={500}
          height={500}
        />
      </div>
      <CardHeader>
        <CardTitle>{room.title}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between items-center">
        <span className="text-lg font-semibold text-amber-500">{room.price} \ night</span>
        <Button
          size="sm"
          variant="outline"
          className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white"
        >
          View Detail
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Room;
