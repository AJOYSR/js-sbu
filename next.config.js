import { withPayload } from '@payloadcms/next/withPayload'

import redirects from './redirects.js'

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined || process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL /* 'https://example.com' */].map((item) => {
        const url = new URL(item)

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', ''),
        }
      }),
      // For Vercel Blob Storage in production
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
      },
      // Allow local development images
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      // External image domains
      {
        protocol: 'https',
        hostname: 'www.searchenginejournal.com',
      },
      {
        protocol: 'https',
        hostname: 'searchenginejournal.com',
      },
      {
        protocol: 'https',
        hostname: 'agrovimltd.com',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
      {
        protocol: 'https',
        hostname: 'www.thoughtco.com',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
      {
        protocol: 'https',
        hostname: 'www.uxdesigninstitute.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'www.iiot-world.com',
      },
      {
        protocol: 'https',
        hostname: 'lh7-us.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
      },
      {
        protocol: 'https',
        hostname: 'www.adviseable.com.au',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'cilantro-erp.com',
      },
      {
        protocol: 'https',
        hostname: 'thenthbit.com',
      },
      {
        protocol: 'https',
        hostname: 'bridgestacks.com',
      },
      {
        protocol: 'https',
        hostname: 'www.linkedin.com',
      },
      {
        protocol: 'https',
        hostname: 'shehala.com',
      },
      {
        protocol: 'https',
        hostname: 'png.pngtree.com',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  reactStrictMode: true,
  redirects,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default withPayload(nextConfig)
