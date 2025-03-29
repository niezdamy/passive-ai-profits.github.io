/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Enable static HTML export
  distDir: 'out',    // Output directory for export
  trailingSlash: true, // Add trailing slashes to all routes
  images: {
    domains: [],
    unoptimized: true, // Required for static exports
  },
  // This is optional, but can be useful for GitHub Pages to understand paths properly
  basePath: process.env.NODE_ENV === 'production' ? '/passive-ai-profits.github.io' : '',
}

module.exports = nextConfig
