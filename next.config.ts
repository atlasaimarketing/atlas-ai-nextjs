import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/qa',
        destination: '/faq',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
