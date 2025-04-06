/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['sistema-pos.com'],
  },
  // Configuración para PWA
  experimental: {
    ppr: true,
  },
}

module.exports = nextConfig 