/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true, // This can help with image loading issues in development
  },
}

module.exports = nextConfig
