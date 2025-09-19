import { PAGES_CONFIG } from "@/config/pages.config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [""],
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
