import React from 'react'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Metadata } from 'next'
import { Tutorial } from '@/payload-types'

// Import wrapper components
import {
  HeroSectionWrapper,
  TutorialsClientWrapper,
  CTASectionWrapper,
} from './components/Wrappers'

// Change from static to dynamic rendering for proper filtering
export const dynamic = 'force-dynamic'
export const revalidate = 0 // Disable caching for now to ensure filters work

export const metadata: Metadata = {
  title: 'Tutorials & Guides | Learn JavaScript Technologies',
  description:
    'Comprehensive tutorials and step-by-step guides to help you master JavaScript technologies',
}

const ITEMS_PER_PAGE = 6 // Changed to show 6 items per page

// Add generateStaticParams for common filter combinations
export async function generateStaticParams(): Promise<
  { category?: string; level?: string; page?: string }[]
> {
  // Pre-generate first page only - we'll rely on ISR for other pages
  return [{}] // Empty params will generate the default page
}

export default async function TutorialsPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string; level?: string; search?: string; page?: string }>
}) {
  const paramsData = searchParams ? await searchParams : {}
  const payload = await getPayload({ config: configPromise })
  const currentPage = Number(paramsData?.page) || 1

  const where: any = {}

  if (paramsData?.category && paramsData.category !== 'All') {
    where.category = { equals: paramsData.category }
  }

  if (paramsData?.level && paramsData.level !== 'All Levels') {
    where.level = { equals: paramsData.level.toLowerCase() }
  }

  if (paramsData?.search) {
    where.title = { contains: paramsData.search }
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
    const searchParamsObj = new URLSearchParams(paramsData as any)
    searchParamsObj.set('page', '1')
    redirect(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutorials?${searchParamsObj.toString()}`)
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
      <HeroSectionWrapper />

      <div className="container mx-auto px-4 py-16 relative">
        {/* Decorative elements */}
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

        {/* Client-side filtering & search component */}
        <TutorialsClientWrapper
          tutorials={tutorials}
          categories={categories}
          levels={levels}
          currentCategory={paramsData?.category || 'All'}
          currentLevel={paramsData?.level || 'All Levels'}
          currentSearch={paramsData?.search || ''}
          currentPage={currentPage}
          totalPages={payloadTotalPages}
          totalItems={totalDocs}
        />

        {/* CTA Section */}
        <CTASectionWrapper />
      </div>
    </div>
  )
}
