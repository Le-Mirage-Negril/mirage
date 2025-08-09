import { Amenity, Season, Testimonial } from "@/types";

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

const localRooms = [
  {
    id: 1,
    name: "King Room (Second Floor)",
    description: `Our King Rooms on the second floor offer a scenic view of the pristine blue waters of the Caribbean Sea. These rooms are slightly more spacious than those on the ground floor and also boast more upgraded bathrooms, two of these rooms also feature a wrap around balcony.`,
    images: [
      {
        id: 1,
        url: "https://firebasestorage.googleapis.com/v0/b/le-mirage-ea3d7.firebasestorage.app/o/homepage%2Froom-2.jpg?alt=media&token=2cb5a901-f45e-4f70-97d5-b353777a68b2",
        alt: "King Room (Second Floor)",
      },
    ],
    price: 140,
    isFeatured: true,
    currentSeason: "summer",
    seasonal_rates: [
      {
        id: 1,
        season_name: "Summer",
        start_date: "April 15th, 2025",
        end_date: "December 14th, 2025",
        double_rate: 120,
        single_rate: 90,
      },
      {
        id: 2,
        season_name: "Winter",
        start_date: "December 15th, 2025",
        end_date: "April 14th, 2026",
        double_rate: 180,
        single_rate: 140,
      },
    ],
  },
  {
    id: 2,
    name: "Deluxe Room (Third Floor)",
    description: `Our Deluxe Rooms on the third floor offer a panoramic view of the Caribbean Sea and the infinity pool, these rooms are extra large, tastefully furnished. Sunsets and sunrise views from the balcony of these rooms are exquisite and a great way to open and close the day.`,
    images: [
      {
        id: 1,
        url: "https://firebasestorage.googleapis.com/v0/b/le-mirage-ea3d7.firebasestorage.app/o/homepage%2Froom-1.jpg?alt=media&token=70dcda1c-e5cf-4ea3-973c-39b6791f080b",
        alt: "Deluxe Room (Third Floor)",
      },
    ],
    price: 130,
    isFeatured: true,
    currentSeason: "summer",
    seasonal_rates: [
      {
        id: 1,
        season_name: "Summer",
        start_date: "April 15th, 2025",
        end_date: "December 14th, 2025",
        double_rate: 130,
        single_rate: 120,
      },
      {
        id: 2,
        season_name: "Winter",
        start_date: "December 15th, 2025",
        end_date: "April 14th, 2026",
        double_rate: 200,
        single_rate: 180,
      },
    ],
  },
  {
    id: 3,
    name: "Standard Room (Poolside)",
    description: `Our Standard Poolside Rooms on the first floor are steps away from the infinity pool, these four spacious rooms feature wide windows and glass doors that will allow you to see all of nature from the comfort of the bedroom. Whether it is to just sit on your balcony and enjoy a drink in the shade or grab a lounge chair and bask in the sunshine before diving into the pool.`,
    images: [
      {
        id: 1,
        url: "https://firebasestorage.googleapis.com/v0/b/le-mirage-ea3d7.firebasestorage.app/o/homepage%2Froom-1.jpg?alt=media&token=70dcda1c-e5cf-4ea3-973c-39b6791f080b",
        alt: "Standard Room (Poolside)",
      },
    ],
    price: 120,
    isFeatured: true,
    currentSeason: "summer",
    seasonal_rates: [
      {
        id: 1,
        season_name: "Summer",
        start_date: "April 15th, 2025",
        end_date: "December 14th, 2025",
        double_rate: 100,
        single_rate: 80,
      },
      {
        id: 2,
        season_name: "Winter",
        start_date: "December 15th, 2025",
        end_date: "April 14th, 2026",
        double_rate: 150,
        single_rate: 120,
      },
    ],
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
  localRooms,
  amenities,
  testimonials,
  roomData,
  homepageImages,
  weddingImages,
  landingPageImages,
  weddingPageImages,
};
