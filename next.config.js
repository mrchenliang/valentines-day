/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/valentines-day',
  assetPrefix: '/valentines-day',
}

module.exports = nextConfig
