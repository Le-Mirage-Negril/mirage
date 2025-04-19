"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ImageItem {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

interface ColumnConfig {
  default: number;
  sm?: number;
  md?: number;
  lg?: number;
}

interface ImageMasonDisplayProps {
  images: ImageItem[];
  columns?: number | ColumnConfig;
}

const ImageMasonDisplay: React.FC<ImageMasonDisplayProps> = ({
  images,
  columns = { default: 2, sm: 3, md: 4, lg: 4 },
}) => {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [columnCount, setColumnCount] = useState(3);

  // Create column arrays based on responsive settings
  const getColumnCount = () => {
    if (typeof window === "undefined") return 3;

    if (typeof columns === "number") {
      return columns;
    }

    const width = window.innerWidth;
    if (width < 640) return columns.default;
    if (width < 768) return columns.sm || columns.default;
    if (width < 1024) return columns.md || columns.sm || columns.default;
    return columns.lg || columns.md || columns.sm || columns.default;
  };

  useEffect(() => {
    const handleResize = () => {
      setColumnCount(getColumnCount());
    };

    // Initial setup
    setColumnCount(getColumnCount());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [columns]);

  const distributeImages = () => {
    const columnArrays: ImageItem[][] = Array.from({ length: columnCount }, () => []);

    images.forEach((image, index) => {
      const columnIndex = index % columnCount;
      columnArrays[columnIndex].push(image);
    });

    return columnArrays;
  };

  return (
    <>
      <div className="w-full">
        <div className="flex gap-2 md:gap-4">
          {distributeImages().map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-2 md:gap-4 flex-1">
              {column.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="relative aspect-auto overflow-hidden rounded-lg cursor-pointer transform transition-transform hover:scale-[1.02]"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt || `Image ${imageIndex}`}
                    width={image.width || 500}
                    height={image.height || 500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt || "Enlarged image"}
                width={selectedImage.width || 1200}
                height={selectedImage.height || 800}
                className="object-contain max-h-[85vh] rounded-lg mx-auto"
              />
            </div>
            <button
              className="absolute top-2 right-2 bg-black bg-opacity-60 text-white rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageMasonDisplay;
