/** @type {import('next').NextConfig} */
const nextConfig = {
  // Minimal configuration for stability
  reactStrictMode: false, // Disable to reduce hot reload issues
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Force dynamic rendering to avoid SSR issues with theme provider
    forceSwcTransforms: true,
  },
  // Disable static generation for problematic pages during development
  ...(process.env.NODE_ENV === 'development' && {
    generateStaticParams: false,
  }),
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
