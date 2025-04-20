type Season = "summer" | "winter";

interface SeasonPeriod {
  start: string;
  end: string;
}

interface RatesByOccupancy {
  double: {
    winter: number;
    summer: number;
  };
  single: {
    winter: number;
    summer: number;
  };
}

interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes?: number;
  url: string;
}

interface ImageFormats {
  thumbnail: ImageFormat;
  small: ImageFormat;
  medium: ImageFormat;
  large: ImageFormat;
}

interface RoomImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface SeasonalRate {
  id: number;
  documentId: string;
  season_name: string;
  start_date: string;
  end_date: string;
  double_rate: number;
  single_rate: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Room {
  id: number | string;
  documentId?: string;
  name?: string;
  description?: string | null;
  images: string[] | RoomImage[];
  price?: number | null;
  winterRate?: number;
  summerRate?: number;
  type?: string | null;
  floor?: string;
  rates?: RatesByOccupancy;
  season?: {
    summer: SeasonPeriod;
    winter: SeasonPeriod;
  };
  currentSeason: Season;
  isFeatured?: boolean;
  roomNumber?: number;
  roomType?: string;
  roomSize?: number;
  bedType?: string;
  amenities?: string[];
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  seasonal_rates?: SeasonalRate[];
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

export type {
  Room,
  Amenity,
  Testimonial,
  Season,
  RoomImage,
  ImageFormat,
  ImageFormats,
  SeasonalRate,
  SeasonPeriod,
  RatesByOccupancy,
};
