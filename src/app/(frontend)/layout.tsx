import type { Metadata } from 'next'
import { Suspense } from 'react'
import { cn } from 'src/utilities/cn'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'
import { PageLoadingFallback } from '@/components/PageLoadingFallback'
import { Loader } from '@/components/Loader'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className="flex flex-col min-h-screen bg-background text-foreground"
        suppressHydrationWarning
      >
        <Providers>
          <Loader />
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />
          <LivePreviewListener />

          {/* Decorative elements for visual interest */}
          <div className="fixed top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/20 via-primary to-primary/20 z-50"></div>
          <div className="fixed -top-32 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="fixed -bottom-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

          <Header />
          <main className="flex-grow pt-24 relative z-10 animate-fadeIn">
            <Suspense fallback={<PageLoadingFallback />}>{children}</Suspense>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  title: 'JS-SBU | Modern Web Solutions',
  description: 'Building innovative digital solutions for tomorrow with cutting-edge technology',
  openGraph: mergeOpenGraph({
    title: "JS-SBU  | Building Tomorrow's Digital Solutions",
    description: 'Expert web, mobile, and AI solutions for modern businesses',
    images: [
      {
        url: '/og-image.jpg',
      },
    ],
  }),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
