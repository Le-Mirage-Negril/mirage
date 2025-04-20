import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "strapi.le-mirage.com", "res.cloudinary.com"],
  },
  /* config options here */
};

export default nextConfig;
