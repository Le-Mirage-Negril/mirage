import { Amenity, Room, Season, Testimonial } from "@/types";

const homepageImages = [
  "/drone-shot.jpg",
  "/hotel-1.jpg",
  "/hotel-2.jpg",
  "/hotelred.jpg",
  "/pool-1.jpg",
  "/pool-2.jpg",
  "/swim-1.jpg",
  "/swimming.jpg",
];

const weddingPageImages = [
  {
    src: "/wed1.jpg",
    alt: "Wedding view",
    width: 2000,
    height: 1333,
  },
  {
    src: "/wed3.jpg",
    alt: "Wedding view",
    width: 1333,
    height: 700,
  },
  {
    src: "/wed10.jpg",
    alt: "Wedding view",
    width: 1333,
    height: 700,
  },
  {
    src: "/wed4.jpg",
    alt: "Wedding view",
    width: 2000,
    height: 1333,
  },

  {
    src: "/wed11.jpg",
    alt: "Wedding view",
    width: 1333,
    height: 700,
  },
  {
    src: "/wed12.jpg",
    alt: "Wedding view",
    width: 2000,
    height: 1333,
  },

  {
    src: "/wed8.jpg",
    alt: "Wedding view",
    width: 2000,
    height: 1333,
  },
];

const landingPageImages = [
  {
    src: "/pool-1.jpg",
    alt: "Pool view",
    width: 2000,
    height: 1333,
  },
  {
    src: "/hotelred.jpg",
    alt: "Hotel view",
    width: 1000,
    height: 650,
  },
  {
    src: "/landing1.png",
    alt: "Drone shot of the hotel",
    width: 2000,
    height: 1333,
  },
  {
    src: "/landing3.jpg",
    alt: "Drone shot of the hotel",
    width: 1333,
    height: 700,
  },
  {
    src: "/landing2.jpg",
    alt: "Drone shot of the hotel",
    width: 2000,
    height: 1000,
  },

  {
    src: "/hotel-1.jpg",
    alt: "Hotel view",
    width: 2000,
    height: 1333,
  },
  {
    src: "/swimming.jpg",
    alt: "Wedding view",
    width: 2000,
    height: 1333,
  },
];

const weddingImages = [
  "/wedding.jpg",
  "/weddings-hero1.jpg",
  "/weddings-hero2.jpg",
  "/weddings-hero3.jpg",
  "/weddings-hero4.jpg",
  "/weddings-hero5.jpg",
];

const rooms: Partial<Room>[] = [
  {
    id: 1,
    name: "Deluxe Suite",
    description: "Spacious suite with city views and premium amenities",
    images: ["/room-1.jpg"],
    price: 299,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Executive Room",
    description: "Perfect for business travelers with dedicated workspace",
    images: ["/room-2.jpg"],
    price: 199,
    isFeatured: true,
  },
  {
    id: 3,
    name: "Presidential Suite",
    description: "Our finest accommodation with panoramic views",
    images: ["/room-1.jpg"],
    price: 499,
    isFeatured: true,
  },
];

const amenities: Amenity[] = [
  {
    id: 1,
    title: "Infinity Swimming Pool",
    description: "Relax by our outdoor pool with a cocktail in hand",
    icon: "🏖️",
  },
  {
    id: 2,
    title: "Complementary Continental Breakfast",
    description: "We offer a complimentary continental breakfast.",
    icon: "🍽️",
  },
  {
    id: 3,
    title: "Wi-Fi",
    description: "Stay connected with complimentary high-speed internet",
    icon: "📶",
  },
  {
    id: 4,
    title: "Concierge / Front Desk",
    description: "The front desk is open from 7:30 am to 6:00 pm, there is no 24 hour concierge.",
    icon: "👨‍💼",
  },
  {
    id: 5,
    title: "Free Parking",
    description: "We offer free parking for our guests.",
    icon: "🅿️",
  },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    testimonial:
      "The attention to detail and personalized service made our anniversary celebration truly special.",
  },
  {
    id: 2,
    name: "James Chen",
    location: "Singapore",
    testimonial:
      "The best hotel I've stayed at in years. From check-in to check-out, everything was perfect.",
  },
  {
    id: 3,
    name: "Elena Petrov",
    location: "Moscow, Russia",
    testimonial:
      "The spa facilities are world-class, and the staff went above and beyond to make our stay memorable.",
  },
];

const currentYear = new Date().getFullYear();

const roomData = [
  {
    floor: "Standard Room (Poolside)",
    name: "Standard Room (Poolside)",
    id: 1,
    description:
      "Our Standard Poolside Rooms on the first floor are steps away from the infinity pool, these four spacious rooms feature wide windows and glass doors that will allow you to see all of nature from the comfort of the bedroom. Whether it is to just sit on your balcony and enjoy a drink in the shade or grab a lounge chair and bask in the sunshine before diving into the pool.",
    images: ["/room-1.jpg", "/room-2.jpg", "/room-1.jpg"],
    rates: {
      double: {
        winter: 150,
        summer: 100,
      },
      single: {
        winter: 120,
        summer: 80,
      },
    },
    season: {
      summer: {
        start: `April 15th, ${currentYear}`,
        end: `December 14th, ${currentYear}`,
      },
      winter: {
        start: `December 15th, ${currentYear}`,
        end: `April 14th, ${currentYear + 1}`,
      },
    },

    currentSeason: "" as Season,
  },
  {
    floor: "King Room (Second Floor)",
    name: "King Room (Second Floor)",
    id: 2,
    description:
      "Our King Rooms on the second floor offer a scenic view of the pristine blue waters of the Caribbean Sea. These rooms are slightly more spacious than those on the ground floor and also boast more upgraded bathrooms, two of these rooms also feature a wrap around balcony.",
    images: ["/room-2.jpg", "/room-1.jpg", "/room-1.jpg"],
    rates: {
      double: {
        winter: 180,
        summer: 120,
      },
      single: {
        winter: 140,
        summer: 90,
      },
    },
    season: {
      summer: {
        start: `April 15th, ${currentYear}`,
        end: `December 14th, ${currentYear}`,
      },
      winter: {
        start: `December 15th, ${currentYear}`,
        end: `April 14th, ${currentYear + 1}`,
      },
    },

    currentSeason: "" as Season,
  },
  {
    floor: "Deluxe Room (Third Floor)",
    name: "Deluxe Room (Third Floor)",
    id: 3,
    description:
      "Our Deluxe Rooms on the third floor offer a panoramic view of the Caribbean Sea and the infinity pool, these rooms are extra large, tastefully furnished. Sunsets and sunrise views from the balcony of these rooms are exquisite and a great way to open and close the day.",
    images: ["/room-2.jpg", "/room-1.jpg", "/room-2.jpg"],
    rates: {
      double: {
        winter: 200,
        summer: 130,
      },
      single: {
        winter: 180,
        summer: 120,
      },
    },
    season: {
      summer: {
        start: `April 15th, ${currentYear}`,
        end: `December 14th, ${currentYear}`,
      },
      winter: {
        start: `December 15th, ${currentYear}`,
        end: `April 14th, ${currentYear + 1}`,
      },
    },
    currentSeason: "" as Season,
  },
];

export {
  rooms,
  amenities,
  testimonials,
  roomData,
  homepageImages,
  weddingImages,
  landingPageImages,
  weddingPageImages,
};
