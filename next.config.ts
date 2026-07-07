import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve modern, smaller image formats first; Next.js falls back
  // automatically for browsers that don't support them.
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Standard production hygiene: gzip/brotli compression on, and don't
  // advertise the framework in response headers.
  compress: true,
  poweredByHeader: false,

  reactStrictMode: true,
};

export default nextConfig;
