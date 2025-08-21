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
  // Allow cross-origin requests for hot reload in development
  allowedDevOrigins: [
    '*.fly.dev',
    '*.builder.io',
    'localhost:*'
  ],
  // Development optimizations
  ...(process.env.NODE_ENV === 'development' && {
    webpack: (config, { dev, isServer }) => {
      if (dev && !isServer) {
        // Optimize for better hot reload
        config.watchOptions = {
          poll: 1000,
          aggregateTimeout: 300,
        };

        // Reduce bundle splitting to avoid fetch issues
        config.optimization = config.optimization || {};
        config.optimization.splitChunks = {
          chunks: 'all',
          minSize: 0,
          cacheGroups: {
            default: {
              chunks: 'all',
              minChunks: 1,
              priority: -20,
              reuseExistingChunk: true,
            },
            vendor: {
              chunks: 'all',
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: -10,
              reuseExistingChunk: true,
            },
          },
        };
      }
      return config;
    },
  }),
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
