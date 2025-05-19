import React, { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Briefcase, Filter, Grid, ChevronLeft, ChevronRight } from 'lucide-react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import type { Portfolio, Media } from '@/payload-types'
import { Metadata } from 'next'

// Client components

import PortfolioHero from './components/PortfolioHero'
import PortfolioGrid from './components/PortfolioGrid'
import { PortfolioSkeleton } from './components/PortfolioSkeleton'
import PortfolioCategories from './components/PortfolioCategories'

export const metadata: Metadata = {
  title: 'Portfolio | JS SBU',
  description: 'Portfolio JS SBU website',
}

// Categories for filtering
const categoryOptions = [
  { label: 'All', value: 'all' },
  { label: 'Web Application', value: 'web-application' },
  { label: 'Mobile Development', value: 'mobile-development' },
  { label: 'Machine Learning & AI', value: 'machine-learning-ai' },
  { label: 'UI/UX Design', value: 'ui-ux-design' },
]

// Number of items per page
const ITEMS_PER_PAGE = 6

async function getProjects(page = 1, category?: string) {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const query =
    category && category !== 'all'
      ? {
          and: [
            {
              category: {
                equals: category,
              },
            },
          ],
        }
      : undefined

  try {
    const projects = await payload.find({
      collection: 'portfolio',
      limit: ITEMS_PER_PAGE,
      page,
      where: query,
      draft,
      overrideAccess: draft,
    })
    return projects
  } catch (error) {
    console.error('Error fetching projects:', error)
    return {
      docs: [],
      totalDocs: 0,
      totalPages: 0,
      page: 1,
    }
  }
}

type Args = {
  searchParams: Promise<{
    page?: string
    category?: string
  }>
}

export default async function PortfolioPage({ searchParams: searchParamsPromise }: Args) {
  const searchParams = await searchParamsPromise
  const currentPage = Number(searchParams.page) || 1
  const currentCategory = searchParams.category || 'all'

  return (
    <div className="min-h-screen animate-fadeIn">
      <PortfolioHero />

      {/* Categories & Projects Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
              <Filter className="inline-block h-4 w-4 mr-1" /> FILTER BY CATEGORY
            </span>
          </div>

          <PortfolioCategories categories={categoryOptions} currentCategory={currentCategory} />

          <Suspense fallback={<PortfolioSkeleton />}>
            <ProjectsLoader currentPage={currentPage} currentCategory={currentCategory} />
          </Suspense>
        </div>
      </section>
    </div>
  )
}

// This component handles data fetching with suspense
async function ProjectsLoader({
  currentPage,
  currentCategory,
}: {
  currentPage: number
  currentCategory: string
}) {
  const { docs: projects, totalPages } = await getProjects(currentPage, currentCategory)

  return (
    <PortfolioGrid
      projects={projects}
      totalPages={totalPages}
      currentPage={currentPage}
      currentCategory={currentCategory}
    />
  )
}
