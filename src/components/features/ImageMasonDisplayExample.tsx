"use client";

import React from "react";
import ImageMasonDisplay from "./ImageMasonDisplay";

const ImageMasonDisplayExample = () => {
  // Example images with different dimensions to demonstrate the masonry layout
  const images = [
    {
      src: "/images/sample1.jpg", // Replace with actual image paths in your project
      alt: "Sample image 1",
      width: 800,
      height: 600,
    },
    {
      src: "/images/sample2.jpg",
      alt: "Sample image 2",
      width: 600,
      height: 800,
    },
    {
      src: "/images/sample3.jpg",
      alt: "Sample image 3",
      width: 800,
      height: 500,
    },
    {
      src: "/images/sample4.jpg",
      alt: "Sample image 4",
      width: 900,
      height: 600,
    },
    {
      src: "/images/sample5.jpg",
      alt: "Sample image 5",
      width: 600,
      height: 900,
    },
    {
      src: "/images/sample6.jpg",
      alt: "Sample image 6",
      width: 800,
      height: 800,
    },
    {
      src: "/images/sample7.jpg",
      alt: "Sample image 7",
      width: 700,
      height: 500,
    },
    {
      src: "/images/sample8.jpg",
      alt: "Sample image 8",
      width: 500,
      height: 700,
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Image Gallery</h2>
      <p className="mb-4 text-gray-600">Click on any image to view it in full size</p>

      <ImageMasonDisplay images={images} columns={{ default: 2, sm: 3, md: 4, lg: 5 }} />
    </div>
  );
};

export default ImageMasonDisplayExample;
