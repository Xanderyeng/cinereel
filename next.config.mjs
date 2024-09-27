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
  }
};

export default withPlaiceholder(nextConfig);
