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
};

module.exports = nextConfig;
