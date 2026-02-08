/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  // Only use static export in production builds
  // Dev server needs normal Next.js routing
  ...(isProd && { output: 'export' }),
  images: {
    unoptimized: true,
  },
  // Only use basePath in production (for GitHub Pages)
  // In dev mode, basePath is empty so localhost works
  basePath: isProd ? '/valentines-day' : '',
  assetPrefix: isProd ? '/valentines-day' : '',
}

module.exports = nextConfig
