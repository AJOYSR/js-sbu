import type { Metadata, ResolvingMetadata } from 'next'
import { CollectionArchive } from '@/components/CollectionArchive'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { Search } from '@/search/Component'
import PageClient from './page.client'
import { Search as SearchIcon } from 'lucide-react'
import { ImageMedia } from '@/components/Media/ImageMedia'

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
interface PageProps {
  params: Promise<any>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams
  const { q: query } = resolvedSearchParams || {}
  const payload = await getPayload({ config: configPromise })

  // Search posts
  const posts = query
    ? await payload.find({
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
    : { docs: [] }

  // Search team members
  const teamMembers = query
    ? await payload.find({
        collection: 'team-members',
        depth: 1,
        limit: 100,
        select: { id: true, name: true, role: true, bio: true, image: true, slug: true },
        pagination: false,
        where: {
          or: [{ name: { like: query } }, { role: { like: query } }, { bio: { like: query } }],
        },
      })
    : { docs: [] }

  // Search portfolio
  const portfolioItems = query
    ? await payload.find({
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
    : { docs: [] }

  // Search tutorials
  const tutorials = query
    ? await payload.find({
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
    : { docs: [] }

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

  const sortedResults = query
    ? allResults.sort((a, b) => {
        const aHasInTitle = a.title.toLowerCase().includes(String(query).toLowerCase()) ? 1 : 0
        const bHasInTitle = b.title.toLowerCase().includes(String(query).toLowerCase()) ? 1 : 0
        return bHasInTitle - aHasInTitle
      })
    : allResults

  const totalResults = sortedResults.length
  const posts = await payload.find({
    collection: 'search',
    depth: 1,
    limit: 12,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
    // pagination: false reduces overhead if you don't need totalDocs
    pagination: false,
    ...(query
      ? {
          where: {
            or: [
              { title: { like: query } },
              { 'meta.description': { like: query } },
              { 'meta.title': { like: query } },
              { slug: { like: query } },
            ],
          },
        }
      : {}),
  })

  return (
    <div className="min-h-screen py-16 animate-fadeIn">
      <PageClient />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center animation-delay-200 animate-fadeIn">
          <h1 className="text-4xl font-bold mb-6 text-gradient">Search Our Content</h1>
          <p className="text-foreground">
            Explore our articles, tutorials, team members, and projects to find exactly what you
            need
          </p>
        </div>

        <div className="glass-card rounded-xl shadow-md p-8 mb-12 max-w-2xl mx-auto animation-delay-300 animate-fadeIn">
          <div className="flex items-center mb-2">
            <SearchIcon className="w-5 h-5 text-primary mr-2" />
            <h2 className="text-lg font-semibold text-gradient">
              Find what you&apos;re looking for
            </h2>
          </div>
          <Search />
        </div>

        <div className="animation-delay-400 animate-fadeIn">
          {totalResults > 0 ? (
            <>
              <div className="mb-8">
                <p className="text-foreground/90 bg-card/30 inline-block px-4 py-2 rounded-lg">
                  Found <span className="font-semibold text-primary">{totalResults}</span>{' '}
                  {totalResults === 1 ? 'result' : 'results'}
                  {query ? ` for "${query}"` : ''}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedResults.map((result, index) => {
                  const animationDelay =
                    index % 3 === 0
                      ? 'animation-delay-200'
                      : index % 3 === 1
                        ? 'animation-delay-400'
                        : 'animation-delay-600'

                  const getPath = () => {
                    switch (result.collection) {
                      case 'team-members':
                        return '/team'
                      case 'portfolio':
                        return `/portfolio/${result.id}`
                      case 'tutorials':
                        return `/tutorials/${result.slug}`
                      case 'posts':
                        return `/posts/${result.slug}`
                      default:
                        return '/'
                    }
                  }

                  const getDescription = () => {
                    if (result.description) return result.description
                    if (result.meta?.description) return result.meta.description
                    if (result.bio) return result.bio
                    return ''
                  }

                  const getSubtitle = () => {
                    switch (result.collection) {
                      case 'team-members':
                        return result.role || 'Team Member'
                      case 'portfolio':
                        return result.category
                          ? `Portfolio - ${result.category.replace(/-/g, ' ')}`
                          : 'Portfolio'
                      case 'tutorials':
                        return result.level ? `Tutorial - ${result.level}` : 'Tutorial'
                      case 'posts':
                        return 'Article'
                      default:
                        return ''
                    }
                  }

                  return (
                    <div
                      className={`animate-fadeIn ${animationDelay}`}
                      key={`${result.collection}-${result.id}`}
                    >
                      <article className="glass-card card-hover rounded-xl shadow-md overflow-hidden transition-all hover:cursor-pointer h-full">
                        <div className="relative w-full overflow-hidden">
                          <div className="relative h-48">
                            {result.image || result.meta?.image ? (
                              <ImageMedia
                                resource={result.image || result.meta?.image}
                                fill
                                alt={result.title}
                                priority={false}
                                imgClassName="object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-card/30 flex items-center justify-center">
                                <span className="text-foreground/50">No image</span>
                              </div>
                            )}
                            <div className="absolute top-4 right-4 bg-card/80 px-3 py-1 rounded-full text-sm font-medium">
                              {getSubtitle()}
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-gradient font-semibold text-xl mb-2">
                            <a href={getPath()} className="hover:opacity-90 transition-opacity">
                              {result.title}
                            </a>
                          </h3>
                          <div className="mt-2 text-foreground/90">
                            <p className="line-clamp-3">{getDescription()}</p>
                          </div>
                          <div className="mt-4">
                            <a
                              href={getPath()}
                              className="text-primary hover:text-primary/90 font-medium flex items-center"
                            >
                              View Details
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="ml-1"
                              >
                                <path d="m9 18 6-6-6-6" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </article>
                    </div>
                  )
                })}
              </div>
            </>
          ) : (
            <div className="glass-card rounded-xl shadow-md p-12 text-center max-w-2xl mx-auto">
              <div className="flex justify-center mb-6">
                <SearchIcon className="w-16 h-16 text-primary/80" />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-gradient">No results found</h2>
              <p className="text-foreground max-w-lg mx-auto">
                We couldn&apos;t find any content matching your search. Please try different
                keywords or browse our categories.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata(
  { searchParams }: PageProps,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const resolvedSearchParams = await searchParams
  return {
    title: resolvedSearchParams.q
      ? `Search: ${resolvedSearchParams.q} | JS-SBU`
      : `Search | JS-SBU`,
  }
}
