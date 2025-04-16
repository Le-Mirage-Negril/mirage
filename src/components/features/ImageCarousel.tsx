"use client";

import Image from "next/image";
import { Carousel, CarouselItem } from "../ui/carousel";

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <Carousel className="w-full">
      {images?.map((image: string, index: number) => (
        <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 basis-full">
          <div className="p-1">
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  );
}
