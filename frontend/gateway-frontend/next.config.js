/** @type {import('next').NextConfig} */
const nextConfig = {
  // Minimal stable configuration
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
