interface Room {
  id: number | string;
  title: string;
  description: string;
  image: string;
  price: string;
  isFeatured: boolean;
}
interface Amenity {
  id: number | string;
  title: string;
  description: string;
  icon: string;
}

interface Testimonial {
  id: number | string;
  name: string;
  location: string;
  testimonial: string;
}

export type { Room, Amenity, Testimonial };
