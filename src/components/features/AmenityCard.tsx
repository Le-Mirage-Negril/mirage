import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Amenity } from "@/types";

interface AmenityCardProps {
  amenity: Amenity;
}

function AmenityCard({ amenity }: AmenityCardProps) {
  return (
    <Card className="bg-cyan-900 border-none h-full">
      <CardHeader>
        <div className="text-4xl mb-4">{amenity.icon}</div>
        <CardTitle className="text-xl text-white">{amenity.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-stone-300">{amenity.description}</p>
      </CardContent>
    </Card>
  );
}

export default AmenityCard;
