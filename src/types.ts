type Season = "summer" | "winter";
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
    double: {
      winter: number;
      summer: number;
    };
    single: {
      winter: number;
      summer: number;
    };
  };
  season?: {
    summer: {
      start: string;
      end: string;
    };
    winter: {
      start: string;
      end: string;
    };
  };
  currentSeason: Season;
  isFeatured?: boolean;
  roomNumber?: number;
  roomType?: string;
  roomSize?: number;
  bedType?: string;
  amenities?: string[];
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

export type { Room, Amenity, Testimonial, Season };
