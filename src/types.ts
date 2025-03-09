interface Room {
  id: number | string;
  name: string;
  description?: string | null;
  images: string[];
  price?: number | null;
  winterRate?: number;
  summerRate?: number;
  type?: string;
  floor?: string;
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
