import { RoomImage } from "@/types";
import Image from "next/image";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface MasonryWrapperProps {
  images: RoomImage[];
}

function MasonryWrapper({ images }: MasonryWrapperProps) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>
        {images.map((image: RoomImage) => (
          <div key={image?.id}>
            <Image src={image.url} alt="Room Image" width={image.width} height={image.height} />
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default MasonryWrapper;
