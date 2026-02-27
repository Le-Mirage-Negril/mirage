export interface CmsPaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface CmsImageValue {
  id?: string | number;
  url?: string;
  file_url?: string;
  alt?: string;
  alt_text?: string;
}

export interface CmsRate {
  id: string;
  season_name: string;
  start_date: string;
  end_date: string;
  single_rate: string;
  double_rate: string;
  currency: string;
}

export interface CmsRoomSummary {
  id: string;
  name: string;
  slug: string;
  short_description?: string | null;
  featured_image_url?: string | null;
  max_guests?: number;
  bed_type?: string;
  is_featured?: boolean;
  order?: number;
}

export interface CmsRoomDetail extends CmsRoomSummary {
  description?: string | null;
  images?: CmsImageValue[];
  custom_fields?: Record<string, unknown>;
  rates?: CmsRate[];
}

export interface CmsAmenity {
  id: string;
  name: string;
  slug: string;
  icon?: string;
  description?: string;
}

export interface CmsSectionCta {
  text?: string;
  url?: string;
}

export interface CmsSectionCardItem {
  title?: string;
  description?: string;
  image?: CmsImageValue;
}

export interface CmsSectionPricingPackage {
  name?: string;
  guests?: string;
  price?: string;
  features?: string[];
}

export interface CmsPageSection {
  type: string;
  title?: string;
  subtitle?: string;
  description?: string;
  content?: string;
  currency?: string;
  image?: CmsImageValue;
  images?: CmsImageValue[];
  cta?: CmsSectionCta;
  items?: CmsSectionCardItem[];
  packages?: CmsSectionPricingPackage[];
}

export interface CmsPageDetail {
  id: string;
  title: string;
  slug: string;
  is_homepage?: boolean;
  sections?: CmsPageSection[];
}

export interface CmsPageSummary {
  id: string;
  title: string;
  slug: string;
  is_homepage?: boolean;
}

export interface CmsSiteSettings {
  primary_color?: string;
  secondary_color?: string;
  [key: string]: unknown;
}

export interface CmsSiteDetail {
  id: string;
  name: string;
  slug: string;
  domain: string;
  settings?: CmsSiteSettings;
}
