import type {
  CmsAmenity,
  CmsImageValue,
  CmsPageDetail,
  CmsPageSection,
  CmsRoomDetail,
} from "@/lib/cms/types";
import type { Amenity, BasicImage, RoomData, SeasonalRate, WeddingCard } from "@/types";

const defaultAltText = (fallback: string): string => (fallback.trim() ? fallback : "Image");

export const mapCmsImageToBasicImage = (
  image: CmsImageValue | undefined,
  fallbackId: number,
  fallbackAlt: string
): BasicImage => ({
  id: typeof image?.id === "number" ? image.id : fallbackId,
  url: image?.url ?? image?.file_url ?? "",
  alt: image?.alt ?? image?.alt_text ?? defaultAltText(fallbackAlt),
});

const parseMoney = (value: string | number | null | undefined): number => {
  if (typeof value === "number") {
    return value;
  }

  if (!value) {
    return 0;
  }

  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const toSeasonalRates = (rates: CmsRoomDetail["rates"]): SeasonalRate[] =>
  (rates ?? []).map((rate, index) => ({
    id: index + 1,
    season_name: rate.season_name,
    start_date: rate.start_date,
    end_date: rate.end_date,
    double_rate: parseMoney(rate.double_rate),
    single_rate: parseMoney(rate.single_rate),
  }));

const getCurrentSeason = (rates: SeasonalRate[]): "summer" | "winter" => {
  const now = new Date();

  const currentRate = rates.find((rate) => {
    const start = new Date(rate.start_date);
    const end = new Date(rate.end_date);
    return Number.isFinite(start.getTime()) && Number.isFinite(end.getTime()) && now >= start && now <= end;
  });

  const seasonName = currentRate?.season_name?.toLowerCase() ?? "";
  return seasonName.includes("summer") ? "summer" : "winter";
};

export const mapCmsRoomToRoomData = (room: CmsRoomDetail): RoomData => {
  const floorValue = String(room.custom_fields?.floor ?? room.name);
  const seasonalRates = toSeasonalRates(room.rates);

  const imagesFromRoom = (room.images ?? []).map((image, index) =>
    mapCmsImageToBasicImage(image, index + 1, room.name)
  );

  const images =
    imagesFromRoom.length > 0
      ? imagesFromRoom
      : [
          {
            id: 1,
            url: room.featured_image_url ?? "",
            alt: defaultAltText(room.name),
          },
        ];

  const currentSeason = seasonalRates.length > 0 ? getCurrentSeason(seasonalRates) : "summer";
  const currentSeasonRate =
    seasonalRates.find((rate) => rate.season_name.toLowerCase().includes(currentSeason)) ?? seasonalRates[0];

  return {
    id: room.id,
    name: room.name,
    floor: floorValue,
    description: room.description ?? room.short_description ?? "",
    images,
    price: currentSeasonRate?.double_rate ?? 0,
    isFeatured: room.is_featured ?? false,
    currentSeason,
    seasonal_rates: seasonalRates,
  };
};

const iconByName = (name: string): string => {
  const key = name.toLowerCase();
  if (key.includes("wifi")) return "📶";
  if (key.includes("pool")) return "🏖️";
  if (key.includes("parking")) return "🅿️";
  if (key.includes("breakfast")) return "🍽️";
  if (key.includes("front desk") || key.includes("concierge")) return "👨‍💼";
  if (key.includes("air")) return "❄️";
  return "✨";
};

export const mapCmsAmenityToAmenity = (amenity: CmsAmenity): Amenity => ({
  id: amenity.id,
  title: amenity.name,
  description: amenity.description ?? "",
  icon: amenity.icon && amenity.icon.trim() ? amenity.icon : iconByName(amenity.name),
});

const findSection = (sections: CmsPageSection[] | undefined, type: string): CmsPageSection | null =>
  sections?.find((section) => section.type === type) ?? null;

export interface HomeCmsContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: BasicImage | null;
    ctaText: string;
    ctaUrl: string;
  };
  about: {
    title: string;
    description: string;
    image: BasicImage | null;
  };
  amenities: {
    title: string;
    subtitle: string;
  };
  roomsPreview: {
    title: string;
    subtitle: string;
  };
  gallery: {
    title: string;
    images: BasicImage[];
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
  };
}

export const extractHomeCmsContent = (page: CmsPageDetail | null): HomeCmsContent | null => {
  if (!page?.sections?.length) {
    return null;
  }

  const hero = findSection(page.sections, "hero");
  const about = findSection(page.sections, "about");
  const amenities = findSection(page.sections, "amenities");
  const roomsPreview = findSection(page.sections, "rooms_preview");
  const gallery = findSection(page.sections, "gallery");
  const cta = findSection(page.sections, "cta");

  const galleryImages = (gallery?.images ?? []).map((image, index) =>
    mapCmsImageToBasicImage(image, index + 1, gallery?.title ?? "Resort image")
  );

  return {
    hero: {
      title: hero?.title ?? "",
      subtitle: hero?.subtitle ?? "",
      description: hero?.description ?? "",
      image: hero?.image ? mapCmsImageToBasicImage(hero.image, 1, hero.title ?? "Hero image") : null,
      ctaText: hero?.cta?.text ?? "Book Your Stay",
      ctaUrl: hero?.cta?.url ?? "/reservations",
    },
    about: {
      title: about?.title ?? "",
      description: about?.description ?? "",
      image: about?.image ? mapCmsImageToBasicImage(about.image, 1, about.title ?? "About image") : null,
    },
    amenities: {
      title: amenities?.title ?? "",
      subtitle: amenities?.subtitle ?? "",
    },
    roomsPreview: {
      title: roomsPreview?.title ?? "",
      subtitle: roomsPreview?.subtitle ?? "",
    },
    gallery: {
      title: gallery?.title ?? "Gallery",
      images: galleryImages,
    },
    cta: {
      title: cta?.title ?? "",
      description: cta?.description ?? "",
      buttonText: cta?.cta?.text ?? "Book Now",
      buttonUrl: cta?.cta?.url ?? "/reservations",
    },
  };
};

export interface WeddingPricingPackage {
  name: string;
  guests: string;
  price: string;
  features: string[];
}

export interface WeddingsCmsContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: BasicImage | null;
  };
  cards: WeddingCard[];
  gallery: {
    title: string;
    images: BasicImage[];
  };
  pricing: {
    title: string;
    currency: string;
    packages: WeddingPricingPackage[];
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
  };
}

export const extractWeddingsCmsContent = (page: CmsPageDetail | null): WeddingsCmsContent | null => {
  if (!page?.sections?.length) {
    return null;
  }

  const hero = findSection(page.sections, "hero");
  const cardsSection = findSection(page.sections, "cards");
  const pricingSection = findSection(page.sections, "pricing_table");
  const gallerySection = findSection(page.sections, "gallery");
  const ctaSection = findSection(page.sections, "cta");

  const cards: WeddingCard[] = (cardsSection?.items ?? []).map((item, index) => ({
    id: index + 1,
    title: item.title ?? "Wedding Option",
    description: item.description ?? "",
    image: mapCmsImageToBasicImage(item.image, index + 1, item.title ?? "Wedding image"),
  }));

  const galleryImages = (gallerySection?.images ?? []).map((image, index) =>
    mapCmsImageToBasicImage(image, index + 1, "Wedding gallery image")
  );

  const packages: WeddingPricingPackage[] = (pricingSection?.packages ?? []).map((item) => ({
    name: item.name ?? "Package",
    guests: item.guests ?? "",
    price: item.price ?? "",
    features: item.features ?? [],
  }));

  return {
    hero: {
      title: hero?.title ?? "",
      subtitle: hero?.subtitle ?? "",
      description: hero?.description ?? "",
      image: hero?.image ? mapCmsImageToBasicImage(hero.image, 1, hero.title ?? "Wedding hero") : null,
    },
    cards,
    gallery: {
      title: gallerySection?.title ?? "Wedding Gallery",
      images: galleryImages,
    },
    pricing: {
      title: pricingSection?.title ?? "Wedding Packages",
      currency: pricingSection?.currency ?? "USD",
      packages,
    },
    cta: {
      title: ctaSection?.title ?? "Start Planning Your Dream Wedding",
      description: ctaSection?.description ?? "",
      buttonText: ctaSection?.cta?.text ?? "Contact Us",
      buttonUrl: ctaSection?.cta?.url ?? "/reservations",
    },
  };
};
