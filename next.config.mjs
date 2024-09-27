/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next'

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'image.tmdb.org',
        protocol: 'https',
      },
      {
        hostname: 'plaiceholder.co',
        protocol: 'https',
      }
    ],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', '@radix-ui'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default withPlaiceholder(nextConfig);
