import { Amenity, Room, Testimonial } from "@/types";

const rooms: Room[] = [
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
    title: "“Infinity Swimming Pool",
    description: "Relax by our outdoor pool with a cocktail in hand",
    icon: "🏖️",
  },
  {
    id: 2,
    title: "Fine Dining",
    description:
      "Our restaurant, Cafe Au Lait is open and ready for your breakfast and lunch desires!",
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
    title: "Concierge",
    description: "24/7 service to meet all your needs during your stay",
    icon: "👨‍💼",
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

export { rooms, amenities, testimonials };
