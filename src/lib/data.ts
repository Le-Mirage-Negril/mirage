import type { Amenity, BasicImage, Season, Testimonial } from "@/types";

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
    id: 2,
    name: "Deluxe Room (Third Floor)",
    floor: "Third Floor",
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
    season: {
      summer: {
        start: "April 15th, 2025",
        end: "December 14th, 2025",
      },
      winter: {
        start: "December 15th, 2025",
        end: "April 14th, 2026",
      },
    },
  },
  {
    id: 1,
    name: "King Room (Second Floor)",
    floor: "Second Floor",
    description: `Our King Rooms on the second floor offer a scenic view of the pristine blue waters of the Caribbean Sea. These rooms are slightly more spacious than those on the ground floor and also boast more upgraded bathrooms, two of these rooms also feature a wrap around balcony.`,
    images: [
      {
        id: 1,
        url: "https://firebasestorage.googleapis.com/v0/b/le-mirage-ea3d7.firebasestorage.app/o/homepage%2Froom-2.jpg?alt=media&token=2cb5a901-f45e-4f70-97d5-b353777a68b2",
        alt: "King Room (Second Floor)",
      },
    ],
    price: 120,
    isFeatured: true,
    currentSeason: "summer",
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
    season: {
      summer: {
        start: "April 15th, 2025",
        end: "December 14th, 2025",
      },
      winter: {
        start: "December 15th, 2025",
        end: "April 14th, 2026",
      },
    },
  },
  {
    id: 3,
    name: "Standard Room (Poolside)",
    floor: "First Floor",
    description: `Our Standard Poolside Rooms on the first floor are steps away from the infinity pool, these four spacious rooms feature wide windows and glass doors that will allow you to see all of nature from the comfort of the bedroom. Whether it is to just sit on your balcony and enjoy a drink in the shade or grab a lounge chair and bask in the sunshine before diving into the pool.`,
    images: [
      {
        id: 1,
        url: "https://firebasestorage.googleapis.com/v0/b/le-mirage-ea3d7.firebasestorage.app/o/homepage%2Froom-1.jpg?alt=media&token=70dcda1c-e5cf-4ea3-973c-39b6791f080b",
        alt: "Standard Room (Poolside)",
      },
    ],
    price: 100,
    isFeatured: true,
    currentSeason: "summer",
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
    season: {
      summer: {
        start: "April 15th, 2025",
        end: "December 14th, 2025",
      },
      winter: {
        start: "December 15th, 2025",
        end: "April 14th, 2026",
      },
    },
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
    title: "Complimentary Continental Breakfast",
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

// Local Data to use for now

const weddingCards = [
  {
    id: 1,
    title: `A Ceremony Like No Other`,
    description: `Say “I do” with the Caribbean Sea and golden sunset as your witness. At Le Mirage Resort, nature takes center stage—our panoramic cliffside view sets a breathtaking backdrop that needs little else. It's where the ocean meets the sky… and your forever begins.`,
    image: {
      id: 1,
      url: "https://firebasestorage.googleapis.com/v0/b/le-mirage-ea3d7.firebasestorage.app/o/wedding%2Fwed12.jpg?alt=media&token=d1c7af0b-152c-4b9c-86c3-45b564292157",
      alt: "Wedding view",
    },
  },
  {
    id: 2,
    title: `Your Dream Wedding, Your Way`,
    description: `Whether you're envisioning an intimate elopement or a celebration with all your closest people, our venue can host up to 80 guests comfortably. From ceremony to cocktail hour to reception, every moment flows seamlessly in one stunning location. No extra moving parts, just pure joy and beauty from start to finish.`,
    image: {
      id: 1,
      url: "https://firebasestorage.googleapis.com/v0/b/le-mirage-ea3d7.firebasestorage.app/o/wedding%2Fwed1.jpg?alt=media&token=9eee440f-2e92-4b9c-9822-32d4682e28f4",
      alt: "Wedding view",
    },
  },
  {
    id: 3,
    title: `Picture-Perfect Memories`,
    description: `When the cliffs, the sea, and the setting sun come together—your wedding photos don't just capture a moment, they become timeless. The natural light, the gentle breeze, the endless horizon—it all works in your favor to create imagery that sets your wedding apart.`,
    image: {
      id: 1,
      url: "https://firebasestorage.googleapis.com/v0/b/le-mirage-ea3d7.firebasestorage.app/o/wedding%2Fwed4.jpg?alt=media&token=2f6e730c-deb0-479d-ad11-f4c0328e2c26",
      alt: "Wedding view",
    },
  },
  {
    id: 4,
    title: `Bring Your Vision to Life`,
    description: `Already working with a wedding planner? Amazing. Still searching? No problem. We'll work alongside you (or your team) to make sure every detail feels like you. Le Mirage is more than a venue—it's a canvas for your vision. Let it be the foundation on which you build something unforgettable.`,
    image: {
      id: 1,
      url: "https://firebasestorage.googleapis.com/v0/b/le-mirage-ea3d7.firebasestorage.app/o/wedding%2Fwed7.jpg?alt=media&token=94a88b6f-cf23-4b84-ac36-a8665e46c42b",
      alt: "Wedding view",
    },
  },
];

const weddingGallery = [
  {
    id: 1,
    url: "https://firebasestorage.googleapis.com/v0/b/le-mirage-ea3d7.firebasestorage.app/o/wedding%2Fwed8.jpg?alt=media&token=0338ef5d-0ec6-46ce-8c8c-27e38781aa50",
    alt: "Wedding view",
  },
  {
    id: 2,
    url: "https://firebasestorage.googleapis.com/v0/b/le-mirage-ea3d7.firebasestorage.app/o/wedding%2Fwed7.jpg?alt=media&token=94a88b6f-cf23-4b84-ac36-a8665e46c42b",
    alt: "Wedding view",
  },
  {
    id: 3,
    url: "https://firebasestorage.googleapis.com/v0/b/le-mirage-ea3d7.firebasestorage.app/o/wedding%2Fwed6.jpg?alt=media&token=40bb0afa-cc2f-4bc4-9d33-0e03e5c5e9cc",
    alt: "Wedding view",
  },
  {
    id: 4,
    url: "https://firebasestorage.googleapis.com/v0/b/le-mirage-ea3d7.firebasestorage.app/o/wedding%2Fwed5.jpg?alt=media&token=91c9d32d-aec5-44a7-9985-7c1650b0290b",
    alt: "Wedding view",
  },
  {
    id: 5,
    url: "https://firebasestorage.googleapis.com/v0/b/le-mirage-ea3d7.firebasestorage.app/o/wedding%2Fwed4.jpg?alt=media&token=2f6e730c-deb0-479d-ad11-f4c0328e2c26",
    alt: "Wedding view",
  },
  {
    id: 6,
    url: "https://firebasestorage.googleapis.com/v0/b/le-mirage-ea3d7.firebasestorage.app/o/wedding%2Fwed4.jpg?alt=media&token=2f6e730c-deb0-479d-ad11-f4c0328e2c26",
    alt: "Wedding view",
  },
];

const homepageImagesData: BasicImage[] = [
  {
    id: 1,
    url: "https://firebasestorage.googleapis.com/v0/b/le-mirage-ea3d7.firebasestorage.app/o/homepage%2Fhotelred.jpg?alt=media&token=98992f81-44b6-4cbc-9b1f-8e282364cedf",
    alt: "Luxury Resort Swimming Pool",
  },
  {
    id: 2,
    url: "https://firebasestorage.googleapis.com/v0/b/le-mirage-ea3d7.firebasestorage.app/o/homepage%2Fpool-2.jpg?alt=media&token=950d5bb8-4de7-4114-9c6f-d72c90303347",
    alt: "Infinity Pool View",
  },
  {
    id: 3,
    url: "https://firebasestorage.googleapis.com/v0/b/le-mirage-ea3d7.firebasestorage.app/o/homepage%2Fhotel-2.jpg?alt=media&token=c1f16f8b-8d3f-4b4c-8f6d-4f58b65d0443",
    alt: "Poolside Lounging Area",
  },
  {
    id: 4,
    url: "https://firebasestorage.googleapis.com/v0/b/le-mirage-ea3d7.firebasestorage.app/o/homepage%2Flanding2.jpg?alt=media&token=faef2aa6-5d43-4a38-aa5a-d8c4b8c544b9",
    alt: "Luxury Resort Swimming Pool",
  },
  {
    id: 5,
    url: "https://firebasestorage.googleapis.com/v0/b/le-mirage-ea3d7.firebasestorage.app/o/homepage%2Flanding%203.jpg?alt=media&token=0a62757b-35f2-4843-b408-c26a3b328187",
    alt: "",
  },
  {
    id: 6,
    url: "https://firebasestorage.googleapis.com/v0/b/le-mirage-ea3d7.firebasestorage.app/o/homepage%2Flanding1.png?alt=media&token=d4688769-e680-4b02-a5e1-1762f23b1a1a",
    alt: "",
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
  weddingCards,
  weddingGallery,
  homepageImagesData,
};
