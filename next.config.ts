import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend-api.helpappafrica.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/download',
        destination: 'https://backend-api.helpappafrica.com/download',
      },
    ];
  },
};

export default nextConfig;
