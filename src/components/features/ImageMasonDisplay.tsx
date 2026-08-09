"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

interface ImageItem {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

interface ImageMasonDisplayProps {
  images: ImageItem[];
  title?: string;
}

const MOSAIC_TILE_CLASSES = [
  "col-span-2 row-span-2 md:col-span-3 md:row-span-3",
  "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
  "col-span-1 row-span-2 md:col-span-2 md:row-span-3",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  "col-span-2 row-span-1 md:col-span-3 md:row-span-2",
];

function ImageMasonDisplay({ images, title = "Gallery" }: ImageMasonDisplayProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [loadError, setLoadError] = useState<boolean[]>([]);
  const [zoom, setZoom] = useState(1);

  const selectedImage = selectedImageIndex !== null ? images[selectedImageIndex] : null;

  const mosaicImages = useMemo(() => images.filter((image) => image?.url), [images]);

  useEffect(() => {
    setLoadError(new Array(mosaicImages.length).fill(false));
  }, [mosaicImages]);

  useEffect(() => {
    if (selectedImageIndex === null) {
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [selectedImageIndex]);

  const handleClose = useCallback(() => {
    setSelectedImageIndex(null);
    setZoom(1);
  }, []);

  const handlePrevImage = useCallback(() => {
    setSelectedImageIndex((prev) => {
      if (prev === null) {
        return mosaicImages.length > 0 ? mosaicImages.length - 1 : null;
      }

      return prev === 0 ? mosaicImages.length - 1 : prev - 1;
    });
    setZoom(1);
  }, [mosaicImages.length]);

  const handleNextImage = useCallback(() => {
    setSelectedImageIndex((prev) => {
      if (prev === null) {
        return mosaicImages.length > 0 ? 0 : null;
      }

      return prev === mosaicImages.length - 1 ? 0 : prev + 1;
    });
    setZoom(1);
  }, [mosaicImages.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImageIndex === null) {
        return;
      }

      switch (event.key) {
        case "ArrowLeft":
          handlePrevImage();
          break;
        case "ArrowRight":
          handleNextImage();
          break;
        case "Escape":
          handleClose();
          break;
        case "+":
        case "=":
          setZoom((prev) => Math.min(prev + 0.25, 3));
          break;
        case "-":
          setZoom((prev) => Math.max(prev - 0.25, 1));
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClose, handleNextImage, handlePrevImage, selectedImageIndex]);

  const handleImageError = useCallback((index: number) => {
    setLoadError((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
  }, []);

  if (mosaicImages.length === 0) {
    return null;
  }

  return (
    <>
      <section className="w-full">
        <h2 className="sr-only">{title}</h2>
        <div className="grid grid-cols-2 auto-rows-[120px] gap-3 sm:auto-rows-[150px] sm:gap-4 lg:grid-cols-6 lg:auto-rows-[92px] xl:auto-rows-[116px]">
          {mosaicImages.map((image, index) => (
            <motion.button
              key={`${image.url}-${index}`}
              type="button"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.24) }}
              className={cn(
                "group relative overflow-hidden rounded-[1.5rem] border border-white/20 bg-slate-950/10 text-left shadow-[0_18px_50px_-28px_rgba(15,23,42,0.85)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2",
                MOSAIC_TILE_CLASSES[index % MOSAIC_TILE_CLASSES.length]
              )}
              onClick={() => setSelectedImageIndex(index)}
            >
              {loadError[index] ? (
                <div className="flex h-full min-h-[12rem] items-center justify-center bg-slate-100 px-4 text-center text-sm text-slate-500">
                  Unable to load this image.
                </div>
              ) : (
                <>
                  <div className="absolute inset-0">
                    <Image
                      src={image.url}
                      alt={image.alt || `${title} image ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={() => handleImageError(index)}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-white">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-white/70">Le Mirage</p>
                      <p className="mt-1 text-sm font-medium sm:text-base">
                        {image.alt || `${title} image ${index + 1}`}
                      </p>
                    </div>
                    <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.24em] backdrop-blur-sm">
                      View
                    </span>
                  </div>
                </>
              )}
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/96 backdrop-blur-md"
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} lightbox`}
          >
            <div
              className="relative flex h-full w-full flex-col justify-between px-3 py-4 sm:px-6 sm:py-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.32em] text-white/55">{title}</p>
                  <h3 className="mt-2 truncate text-lg font-medium text-white sm:text-2xl">
                    {selectedImage.alt || `${title} image ${selectedImageIndex + 1}`}
                  </h3>
                </div>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
                  onClick={handleClose}
                  aria-label="Close gallery"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative flex min-h-0 flex-1 items-center justify-center py-4 sm:py-6">
                <button
                  type="button"
                  className="absolute left-0 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-4"
                  onClick={handlePrevImage}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 px-4 py-6 sm:px-8">
                  <motion.div
                    key={selectedImage.url}
                    initial={{ opacity: 0.8, scale: 0.98 }}
                    animate={{ opacity: 1, scale: zoom }}
                    transition={{ duration: 0.25 }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={selectedImage.url}
                      alt={selectedImage.alt || `${title} image ${selectedImageIndex + 1}`}
                      fill
                      sizes="100vw"
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </div>

                <button
                  type="button"
                  className="absolute right-0 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-4"
                  onClick={handleNextImage}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4 text-white/80">
                  <p className="text-sm">
                    {selectedImageIndex + 1} / {mosaicImages.length}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
                      onClick={() => setZoom((prev) => Math.max(prev - 0.25, 1))}
                      disabled={zoom <= 1}
                      aria-label="Zoom out"
                    >
                      <ZoomOut className="h-4 w-4" />
                    </button>
                    <span className="min-w-12 text-center text-sm">{Math.round(zoom * 100)}%</span>
                    <button
                      type="button"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
                      onClick={() => setZoom((prev) => Math.min(prev + 0.25, 3))}
                      disabled={zoom >= 3}
                      aria-label="Zoom in"
                    >
                      <ZoomIn className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto pb-1">
                  <div className="flex min-w-max gap-3">
                    {mosaicImages.map((image, index) => (
                      <button
                        key={`${image.url}-thumb-${index}`}
                        type="button"
                        className={cn(
                          "relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border transition-all",
                          index === selectedImageIndex
                            ? "border-cyan-300 ring-2 ring-cyan-300/60"
                            : "border-white/10 opacity-70 hover:opacity-100"
                        )}
                        onClick={() => {
                          setSelectedImageIndex(index);
                          setZoom(1);
                        }}
                        aria-label={`Open image ${index + 1}`}
                      >
                        <Image
                          src={image.url}
                          alt={image.alt || `${title} thumbnail ${index + 1}`}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ImageMasonDisplay;
