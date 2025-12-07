import { PAGES_CONFIG } from "@/config/pages.config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "http",
        hostname: "192.168.0.103",
        port: "",
      },
      {
        protocol: "http",
        hostname: "192.168.240.1",
        port: "",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: PAGES_CONFIG.SHIPMENTS.path,
        destination: PAGES_CONFIG.SHIPMENTS.children.ARRIVAL.path,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
