import { PAGES_CONFIG } from "@/config/pages.config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "encrypted-tbn0.gstatic.com",
      "192.168.0.103",
      "192.168.240.1"
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
