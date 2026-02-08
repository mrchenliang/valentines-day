/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to a subdirectory, uncomment and set your repo name:
  // basePath: '/valentines-day',
  // assetPrefix: '/valentines-day',
}

module.exports = nextConfig
