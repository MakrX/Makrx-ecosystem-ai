/** @type {import('next').NextConfig} */
const nextConfig = {
  // Minimal configuration
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Force dynamic rendering for all pages
  experimental: {
    dynamicIO: true,
  },
  generateStaticParams: false,
};

module.exports = nextConfig;
