import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better dev experience
  reactStrictMode: true,
  // Compress output
  compress: true,
  // Image optimization config — allow external sources if needed later
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  // Output for deployment platforms (Vercel auto-detects, remove if self-hosting with static export)
  // output: 'standalone',
};

export default nextConfig;
