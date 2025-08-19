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
  // Disable SSR/SSG to prevent useContext errors during build
  output: 'export',
  trailingSlash: true,
  distDir: '.next',
  experimental: {
    esmExternals: true,
  },
};

module.exports = nextConfig;
