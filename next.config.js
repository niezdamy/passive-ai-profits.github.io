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
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // For GitHub Pages hosting
  assetPrefix: process.env.NODE_ENV === 'production' ? '/passive-ai-profits.github.io' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/passive-ai-profits.github.io' : '',
}

module.exports = nextConfig
