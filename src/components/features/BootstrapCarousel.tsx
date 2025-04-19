"use client";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

interface BootstrapCarouselProps {
  images: string[];
}

const BootstrapCarousel = ({ images }: BootstrapCarouselProps) => {
  return (
    <div className="carousel-container" style={{ height: "500px", position: "relative" }}>
      <Carousel fade>
        {images?.map((image, index) => (
          <Carousel.Item key={index} style={{ height: "500px" }}>
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ objectFit: "cover" }}
                fill
                sizes="100vw"
                priority={index === 0}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default BootstrapCarousel;
