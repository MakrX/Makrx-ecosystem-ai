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
  output: 'standalone',
  experimental: {
    // Force dynamic rendering to avoid SSR issues with theme provider
    forceSwcTransforms: true,
  },
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
