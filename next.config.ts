import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow Unsplash images for Next.js <Image />
  images: {
    domains: ["source.unsplash.com"],
  },
  /* config options here */
};

export default nextConfig;
