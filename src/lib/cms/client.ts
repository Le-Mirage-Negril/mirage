import "server-only";

import type {
  CmsAmenity,
  CmsPageDetail,
  CmsPaginatedResponse,
  CmsRoomDetail,
  CmsRoomSummary,
} from "@/lib/cms/types";

const DEFAULT_API_URL = "https://api.gammacms.com/api/public/v1";
const DEFAULT_REVALIDATE_SECONDS = 300;

const cmsSource = (process.env.CMS_SOURCE ?? "local").toLowerCase();

export const isGammaCmsSourceEnabled = (): boolean => cmsSource === "gamma";

interface CmsConfig {
  apiUrl: string;
  apiKey: string;
  organizationId: string;
  siteDomain: string;
  revalidateSeconds: number;
}

const getRequiredEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

const getCmsConfig = (): CmsConfig => {
  const revalidateValue = Number(process.env.CMS_REVALIDATE_SECONDS ?? DEFAULT_REVALIDATE_SECONDS);
  const revalidateSeconds = Number.isFinite(revalidateValue)
    ? Math.max(0, Math.floor(revalidateValue))
    : DEFAULT_REVALIDATE_SECONDS;

  return {
    apiUrl: (process.env.GAMMACMS_API_URL ?? DEFAULT_API_URL).replace(/\/$/, ""),
    apiKey: getRequiredEnv("GAMMACMS_API_KEY"),
    organizationId: getRequiredEnv("GAMMACMS_ORGANIZATION_ID"),
    siteDomain: getRequiredEnv("GAMMACMS_SITE_DOMAIN"),
    revalidateSeconds,
  };
};

const safeJson = async (response: Response): Promise<unknown> => {
  try {
    return await response.json();
  } catch {
    return null;
  }
};

const makeTag = (path: string): string => {
  const value = path.replace(/[^a-zA-Z0-9]/g, "_").slice(0, 45);
  return `cms_${value || "root"}`;
};

async function requestCms<T>(path: string): Promise<T> {
  const config = getCmsConfig();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${config.apiUrl}/sites/${config.siteDomain}${normalizedPath}`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "X-API-Key": config.apiKey,
      "X-Organization-ID": config.organizationId,
    },
    next: {
      revalidate: config.revalidateSeconds,
      tags: ["cms", makeTag(normalizedPath)],
    },
  });

  if (!response.ok) {
    const errorBody = await safeJson(response);
    throw new Error(
      `GammaCMS request failed (${response.status} ${response.statusText}): ${JSON.stringify(errorBody)}`
    );
  }

  return (await response.json()) as T;
}

export const normalizeCmsListResponse = <T>(
  payload: T[] | CmsPaginatedResponse<T>
): T[] => {
  if (Array.isArray(payload)) {
    return payload;
  }

  return payload.results ?? [];
};

export const fetchCmsPageBySlug = async (slug: string): Promise<CmsPageDetail> =>
  requestCms<CmsPageDetail>(`/pages/${slug}/`);

export const fetchCmsRooms = async (): Promise<CmsRoomSummary[]> => {
  const payload = await requestCms<CmsRoomSummary[] | CmsPaginatedResponse<CmsRoomSummary>>(
    "/rooms/"
  );
  return normalizeCmsListResponse(payload);
};

export const fetchCmsRoomBySlug = async (slug: string): Promise<CmsRoomDetail> =>
  requestCms<CmsRoomDetail>(`/rooms/${slug}/`);

export const fetchCmsRoomDetails = async (): Promise<CmsRoomDetail[]> => {
  const rooms = await fetchCmsRooms();

  const detailedRooms = await Promise.all(
    rooms.map(async (room) => {
      try {
        return await fetchCmsRoomBySlug(room.slug);
      } catch (error) {
        console.error(`Failed to fetch room detail for ${room.slug}`, error);
        return null;
      }
    })
  );

  return detailedRooms.filter((room): room is CmsRoomDetail => room !== null);
};

export const fetchCmsAmenities = async (): Promise<CmsAmenity[]> => {
  const payload = await requestCms<CmsAmenity[] | CmsPaginatedResponse<CmsAmenity>>("/amenities/");
  return normalizeCmsListResponse(payload);
};
