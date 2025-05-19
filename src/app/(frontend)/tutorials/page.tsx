import React, { Suspense } from 'react'
import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Metadata } from 'next'
import { Tutorial } from '@/payload-types'
import { ArrowRight } from 'lucide-react'

// Import client components
import HeroSection from './components/HeroSection'
import CTASection from './components/CTASection'
import TutorialsClientWrapper from './components/TutorialsClientWrapper'
import { HeroSkeleton, TutorialsContentSkeleton, CTASkeleton } from './components/SectionSkeleton'

export const dynamic = 'force-dynamic'
export const revalidate = 60 // Revalidate every minute

export const metadata: Metadata = {
  title: 'Tutorials & Guides | Learn JavaScript Technologies',
  description:
    'Comprehensive tutorials and step-by-step guides to help you master JavaScript technologies',
}

const ITEMS_PER_PAGE = 6 // Changed to show 6 items per page

export default async function TutorialsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; level?: string; search?: string; page?: string }>
}) {
  const params = await searchParams
  const payload = await getPayload({ config: configPromise })
  const currentPage = Number(params?.page) || 1

  const where: any = {}

  if (params?.category && params.category !== 'All') {
    where.category = { equals: params.category }
  }

  if (params?.level && params.level !== 'All Levels') {
    where.level = { equals: params.level.toLowerCase() }
  }

  if (params?.search) {
    where.title = { like: params.search }
  }

  const {
    docs: tutorials,
    totalDocs,
    totalPages: payloadTotalPages,
  } = await payload
    .find({
      collection: 'tutorials',
      sort: '-publishedAt',
      where,
      limit: ITEMS_PER_PAGE,
      page: currentPage,
      depth: 1,
    })
    .then((res) => ({
      ...res,
      docs: res.docs as Tutorial[],
      totalPages: Math.ceil(res.totalDocs / ITEMS_PER_PAGE),
    }))

  // Ensure we don't exceed the total number of pages
  if (currentPage > payloadTotalPages && payloadTotalPages > 0) {
    const params = new URLSearchParams(searchParams as any)
    params.set('page', '1')
    return Response.redirect(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutorials?${params.toString()}`)
  }

  const categories = [
    'All',
    'web-development',
    'mobile-development',
    'backend-development',
    'ai-ml',
    'devops',
  ]

  const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced']

  return (
    <div className="min-h-screen animate-fadeIn">
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>

      <div className="container mx-auto px-4 py-16 relative">
        {/* Decorative elements */}
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

        {/* Client-side filtering & search component */}
        <Suspense fallback={<TutorialsContentSkeleton />}>
          <TutorialsClientWrapper
            tutorials={tutorials}
            categories={categories}
            levels={levels}
            currentCategory={params?.category || 'All'}
            currentLevel={params?.level || 'All Levels'}
            currentSearch={params?.search || ''}
            currentPage={currentPage}
            totalPages={payloadTotalPages}
            totalItems={totalDocs}
          />
        </Suspense>

        {/* CTA Section */}
        <Suspense fallback={<CTASkeleton />}>
          <CTASection />
        </Suspense>
      </div>
    </div>
  )
}
