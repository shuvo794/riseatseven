import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "assets.mixkit.co" },
    ],
  },
  // @ts-ignore
  allowedDevOrigins: ["192.168.201.160"],
} as any;

export default nextConfig;
