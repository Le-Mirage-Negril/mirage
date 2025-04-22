"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";

interface ImageItem {
  url: string;
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
  title?: string;
}

const ImageMasonDisplay: React.FC<ImageMasonDisplayProps> = ({
  images,
  columns = { default: 2, sm: 3, md: 4, lg: 4 },
  title = "Gallery",
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [columnCount, setColumnCount] = useState(3);
  const [isLoading, setIsLoading] = useState<boolean[]>([]);
  const [loadError, setLoadError] = useState<boolean[]>([]);
  const [zoom, setZoom] = useState<number>(1);

  const selectedImage = selectedImageIndex !== null ? images[selectedImageIndex] : null;

  // Setup loading and error states for each image
  useEffect(() => {
    setIsLoading(new Array(images.length).fill(true));
    setLoadError(new Array(images.length).fill(false));
  }, [images]);

  // Calculate column distribution based on responsive settings
  const getColumnCount = useCallback(() => {
    if (typeof window === "undefined") return 3;

    if (typeof columns === "number") {
      return columns;
    }

    const width = window.innerWidth;
    if (width < 640) return columns.default;
    if (width < 768) return columns.sm || columns.default;
    if (width < 1024) return columns.md || columns.sm || columns.default;
    return columns.lg || columns.md || columns.sm || columns.default;
  }, [columns]);

  useEffect(() => {
    const handleResize = () => {
      setColumnCount(getColumnCount());
    };

    // Initial setup
    setColumnCount(getColumnCount());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getColumnCount]);

  // Distribute images into columns
  const distributeImages = useCallback(() => {
    if (!images || images.length === 0) return [];

    const columnArrays: ImageItem[][] = Array.from({ length: columnCount }, () => []);

    images.forEach((image, index) => {
      const columnIndex = index % columnCount;
      columnArrays[columnIndex].push(image);
    });

    return columnArrays;
  }, [images, columnCount]);

  // Navigation handlers for lightbox
  const handlePrevImage = useCallback(() => {
    if (selectedImageIndex === null) return;
    setZoom(1); // Reset zoom when changing images
    setSelectedImageIndex((prev) => {
      if (prev === null) return images.length - 1;
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  }, [selectedImageIndex, images.length]);

  const handleNextImage = useCallback(() => {
    if (selectedImageIndex === null) return;
    setZoom(1); // Reset zoom when changing images
    setSelectedImageIndex((prev) => {
      if (prev === null) return 0;
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  }, [selectedImageIndex, images.length]);

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      switch (e.key) {
        case "ArrowLeft":
          handlePrevImage();
          break;
        case "ArrowRight":
          handleNextImage();
          break;
        case "Escape":
          setSelectedImageIndex(null);
          setZoom(1);
          break;
        case "+":
          setZoom((prev) => Math.min(prev + 0.25, 3));
          break;
        case "-":
          setZoom((prev) => Math.max(prev - 0.25, 0.5));
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, handlePrevImage, handleNextImage]);

  // Find the flat index for a given image in the masonry layout
  const getImageFlatIndex = (columnIndex: number, imageIndex: number): number => {
    const columns = distributeImages();
    let flatIndex = 0;

    for (let i = 0; i < columnIndex; i++) {
      flatIndex += columns[i].length;
    }

    return flatIndex + imageIndex;
  };

  // Handle image load state
  const handleImageLoad = (index: number) => {
    setIsLoading((prev) => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });
  };

  // Handle image load error
  const handleImageError = (index: number) => {
    setLoadError((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
    setIsLoading((prev) => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });
  };

  return (
    <>
      <div className="w-full">
        <h2 className="sr-only">{title}</h2>
        <div className="flex gap-2 md:gap-4">
          {distributeImages().map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-2 md:gap-4 flex-1">
              {column.map((image, imageIndex) => {
                const flatIndex = getImageFlatIndex(columnIndex, imageIndex);
                return (
                  <motion.div
                    key={imageIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: flatIndex * 0.05 }}
                    className="relative aspect-auto overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-all hover:scale-[1.02] hover:shadow-lg"
                    onClick={() => setSelectedImageIndex(flatIndex)}
                  >
                    {isLoading[flatIndex] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        <div className="w-8 h-8 border-4 border-gray-300 border-t-amber-500 rounded-full animate-spin"></div>
                      </div>
                    )}

                    {loadError[flatIndex] ? (
                      <div className="w-full aspect-[4/3] bg-gray-100 flex items-center justify-center text-gray-500">
                        <span>Failed to load image</span>
                      </div>
                    ) : (
                      <Image
                        src={image?.url}
                        alt={image?.alt || `Gallery image ${flatIndex + 1}`}
                        width={image?.width || 500}
                        height={image?.height || 500}
                        className="w-full h-auto object-cover"
                        onLoad={() => handleImageLoad(flatIndex)}
                        onError={() => handleImageError(flatIndex)}
                        priority={flatIndex < 4} // Prioritize loading the first 4 images
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => {
              setSelectedImageIndex(null);
              setZoom(1);
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <div
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation buttons */}
              <button
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white rounded-full w-10 h-10 flex items-center justify-center z-10 transition-all"
                onClick={handlePrevImage}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white rounded-full w-10 h-10 flex items-center justify-center z-10 transition-all"
                onClick={handleNextImage}
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Close button */}
              <button
                className="absolute top-2 right-2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white rounded-full w-10 h-10 flex items-center justify-center z-10 transition-all"
                onClick={() => {
                  setSelectedImageIndex(null);
                  setZoom(1);
                }}
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Zoom controls */}
              <div className="absolute bottom-2 right-2 flex space-x-2">
                <button
                  className="bg-black bg-opacity-60 hover:bg-opacity-80 text-white rounded-full w-10 h-10 flex items-center justify-center z-10 transition-all disabled:opacity-40"
                  onClick={() => setZoom((prev) => Math.max(prev - 0.25, 0.5))}
                  disabled={zoom <= 0.5}
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                <button
                  className="bg-black bg-opacity-60 hover:bg-opacity-80 text-white rounded-full w-10 h-10 flex items-center justify-center z-10 transition-all disabled:opacity-40"
                  onClick={() => setZoom((prev) => Math.min(prev + 0.25, 3))}
                  disabled={zoom >= 3}
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
              </div>

              {/* Image counter */}
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-sm px-3 py-1 rounded-full">
                {selectedImageIndex + 1} / {images.length}
              </div>

              {/* Main image */}
              <div
                className="relative w-full h-full overflow-hidden"
                style={{ cursor: zoom > 1 ? "move" : "default" }}
              >
                <div
                  className="w-full h-full flex items-center justify-center transition-transform duration-200"
                  style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: "center",
                  }}
                >
                  <Image
                    src={selectedImage.url}
                    alt={selectedImage.alt || `Gallery image ${selectedImageIndex + 1}`}
                    width={selectedImage.width || 1200}
                    height={selectedImage.height || 800}
                    className="object-contain max-h-[85vh] rounded-lg mx-auto transition-all"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageMasonDisplay;
