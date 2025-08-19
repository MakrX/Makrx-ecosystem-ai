/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force app router
  experimental: {
    appDir: true,
  },
  // Optimize images
  images: {
    domains: ['cdn.builder.io'],
    formats: ['image/webp', 'image/avif'],
  },
  // Environment variables
  env: {
    APP_VERSION: process.env.npm_package_version || '1.0.0',
    BUILD_TIME: new Date().toISOString(),
  },
  // Output configuration for deployment
  output: 'standalone',
  // Compress responses
  compress: true,
  // Generate ETags for better caching
  generateEtags: true,
  // Power off in case of development
  poweredByHeader: false,
  // Bundle analyzer in development
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Custom webpack config if needed
    return config;
  },
  // Redirect configuration
  async redirects() {
    return [
      {
        source: '/privacy',
        destination: '/legal/privacy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/legal/terms',
        permanent: true,
      },
    ];
  },
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ],
      },
    ];
  },
  // TypeScript configuration
  typescript: {
    // Dangerously allow production builds to complete even with type errors
    ignoreBuildErrors: false,
  },
  // ESLint configuration
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
  // Server external packages
  serverExternalPackages: [],
};

module.exports = nextConfig;
