import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [100, 75],
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
