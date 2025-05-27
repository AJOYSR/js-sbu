import type { Metadata, ResolvingMetadata } from 'next'
import { Suspense } from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { Search } from '@/search/Component'
import PageClient from './page.client'
import {
  Search as SearchIcon,
  ChevronRight,
  BookOpen,
  User,
  Briefcase,
  Lightbulb,
  ArrowRight,
} from 'lucide-react'
import { ImageMedia } from '@/components/Media/ImageMedia'
import Link from 'next/link'

// Import client components
import SearchHero from './components/SearchHero'
import SearchResults from './components/SearchResults'
import { SearchResultsSkeleton } from './components/SearchResultsSkeleton'
import CTASection from './components/CTASection'

interface PageProps {
  params: Promise<any>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

interface SearchResultItem {
  id: number
  title: string
  slug: string
  meta?: { description?: string | null; title?: string | null; image?: any }
  categories?: any
  description?: string
  bio?: string
  image?: any
  collection: string
  role?: string
  category?: string
  level?: string
}

// Cache the data fetching functions
const fetchSearchResults = React.cache(async (query: string | string[] | undefined) => {
  if (!query) return { results: [], totalResults: 0 }

  const payload = await getPayload({ config: configPromise })

  // Search posts
  const posts = await payload.find({
    collection: 'posts',
    depth: 3,
    limit: 100,
    select: { id: true, title: true, slug: true, categories: true, meta: true, image: true },
    pagination: false,
    where: {
      or: [
        { title: { like: query } },
        { 'meta.description': { like: query } },
        { 'meta.title': { like: query } },
        { slug: { like: query } },
      ],
    },
  })

  // Search team members
  const teamMembers = await payload.find({
    collection: 'team-members',
    depth: 1,
    limit: 100,
    select: { id: true, name: true, role: true, bio: true, image: true, slug: true },
    pagination: false,
    where: {
      or: [{ name: { like: query } }, { role: { like: query } }, { bio: { like: query } }],
    },
  })

  // Search portfolio
  const portfolioItems = await payload.find({
    collection: 'portfolio',
    depth: 1,
    limit: 100,
    select: {
      id: true,
      title: true,
      slug: true,
      description: true,
      category: true,
      image: true,
      meta: true,
    },
    pagination: false,
    where: {
      or: [
        { title: { like: query } },
        { description: { like: query } },
        { 'meta.description': { like: query } },
        { 'meta.title': { like: query } },
      ],
    },
  })

  // Search tutorials
  const tutorials = await payload.find({
    collection: 'tutorials',
    depth: 1,
    limit: 100,
    select: {
      id: true,
      title: true,
      slug: true,
      description: true,
      category: true,
      level: true,
      image: true,
      meta: true,
    },
    pagination: false,
    where: {
      or: [
        { title: { like: query } },
        { description: { like: query } },
        { 'meta.description': { like: query } },
        { 'meta.title': { like: query } },
      ],
    },
  })

  const formatResults = (docs: any[], collection: string): SearchResultItem[] => {
    return docs.map((doc) => ({
      ...doc,
      title: collection === 'team-members' ? doc.name : doc.title,
      collection,
    }))
  }

  const allResults = [
    ...formatResults(posts.docs, 'posts'),
    ...formatResults(teamMembers.docs, 'team-members'),
    ...formatResults(portfolioItems.docs, 'portfolio'),
    ...formatResults(tutorials.docs, 'tutorials'),
  ]

  const sortedResults = allResults.sort((a, b) => {
    const aHasInTitle = a.title.toLowerCase().includes(String(query).toLowerCase()) ? 1 : 0
    const bHasInTitle = b.title.toLowerCase().includes(String(query).toLowerCase()) ? 1 : 0
    return bHasInTitle - aHasInTitle
  })

  return {
    results: sortedResults,
    totalResults: sortedResults.length,
  }
})

export const revalidate = 3600 // Revalidate every hour

export default async function Page({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams
  const { q: query } = resolvedSearchParams || {}

  return (
    <div className="min-h-screen animate-fadeIn">
      <SearchHero />

      <div className="container mx-auto px-4 py-16 relative">
        {/* Decorative elements */}
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

        <PageClient />

        <div className="glass-card rounded-xl shadow-xl p-10 mb-12 max-w-3xl mx-auto animation-delay-300 animate-fadeIn border border-white/10 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[50px]"></div>
          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <SearchIcon className="w-5 h-5 text-primary mr-2" />
              <h2 className="text-xl font-semibold text-gradient">
                Find what you&apos;re looking for
              </h2>
            </div>
            <Search />
          </div>
        </div>

        <Suspense fallback={<SearchResultsSkeleton />}>
          {query ? (
            <SearchResultsLoader query={query} />
          ) : (
            <div className="text-center py-12 animation-delay-400 animate-fadeIn">
              <p className="text-foreground/70 text-lg">
                Enter a search term above to find content.
              </p>
            </div>
          )}
        </Suspense>

        {/* Always show the CTA section */}
        <CTASection />
      </div>
    </div>
  )
}

// This component handles data fetching with suspense
async function SearchResultsLoader({ query }: { query: string | string[] | undefined }) {
  if (!query) {
    return null
  }

  const { results, totalResults } = await fetchSearchResults(query)
  return <SearchResults results={results} totalResults={totalResults} query={query} />
}

export async function generateMetadata(
  { searchParams }: PageProps,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const resolvedSearchParams = await searchParams
  const { q: query } = resolvedSearchParams || {}

  return {
    title: query ? `Search results for "${query}" | JS SBU` : 'Search | JS SBU',
    description: query
      ? `Search results for "${query}" on JS SBU website`
      : 'Search for content on JS SBU website',
  }
}
