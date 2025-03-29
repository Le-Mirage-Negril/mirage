interface Room {
  id: number | string;
  name?: string;
  description?: string | null;
  images: string[];
  price?: number | null;
  winterRate?: number;
  summerRate?: number;
  type?: string;
  floor?: string;
  rates?: {
    double: number;
    single: number;
  };
  season?: {
    start: string;
    end: string;
  };
  isFeatured?: boolean;
  roomNumber?: number;
  roomType?: string;
  roomSize?: number;
  bedType?: string;
  amenities?: string[];
  isAvailable?: boolean;
  isBooked?: boolean;
  isCleaned?: boolean;
  isMaintenance?: boolean;
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
