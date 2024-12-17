/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.polymet.ai'
      },
    ],
  },
}

module.exports = nextConfig 