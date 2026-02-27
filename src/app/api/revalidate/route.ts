import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

interface RevalidatePayload {
  slug?: string;
  path?: string;
  paths?: string[];
}

const defaultPaths = ["/", "/rooms", "/weddings", "/reservations"];

const normalizePath = (path: string): string => {
  if (!path || path === "home") {
    return "/";
  }

  if (path.startsWith("/")) {
    return path;
  }

  return `/${path}`;
};

export async function POST(request: NextRequest) {
  const secret = process.env.GAMMACMS_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json(
      { revalidated: false, error: "GAMMACMS_WEBHOOK_SECRET is not configured." },
      { status: 500 }
    );
  }

  const incomingSecret =
    request.headers.get("x-revalidate-secret") ?? request.nextUrl.searchParams.get("secret");
  if (incomingSecret !== secret) {
    return NextResponse.json({ revalidated: false, error: "Invalid secret." }, { status: 401 });
  }

  const payload = ((await request.json().catch(() => ({}))) ?? {}) as RevalidatePayload;
  const dynamicPaths = [
    ...(Array.isArray(payload.paths) ? payload.paths : []),
    ...(payload.path ? [payload.path] : []),
    ...(payload.slug ? [payload.slug] : []),
  ];

  const pathsToRevalidate = Array.from(
    new Set([...(dynamicPaths.length > 0 ? dynamicPaths : defaultPaths)].map(normalizePath))
  );

  revalidateTag("cms");
  pathsToRevalidate.forEach((path) => revalidatePath(path));

  return NextResponse.json({
    revalidated: true,
    paths: pathsToRevalidate,
    timestamp: new Date().toISOString(),
  });
}
