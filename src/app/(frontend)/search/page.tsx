import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { Post } from '@/payload-types'
import { Search } from '@/search/Component'
import PageClient from './page.client'
import { CardPostData } from '@/components/Card'
import { Search as SearchIcon } from 'lucide-react'

type Args = {
  searchParams: Promise<{
    q: string
  }>
}
export default async function Page({ searchParams: searchParamsPromise }: Args) {
  const { q: query } = await searchParamsPromise
  const payload = await getPayload({ config: configPromise })

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
              {
                title: {
                  like: query,
                },
              },
              {
                'meta.description': {
                  like: query,
                },
              },
              {
                'meta.title': {
                  like: query,
                },
              },
              {
                slug: {
                  like: query,
                },
              },
            ],
          },
        }
      : {}),
  })

  return (
    <div className="min-h-screen py-16 animate-fadeIn">
      <PageClient />

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center animation-delay-200 animate-fadeIn">
          <h1 className="text-4xl font-bold mb-6 text-gradient">Search Our Content</h1>
          <p className="text-foreground">
            Explore our articles, tutorials, and resources to find exactly what you need
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
          {posts.totalDocs > 0 ? (
            <>
              <div className="mb-8">
                <p className="text-foreground/90 bg-card/30 inline-block px-4 py-2 rounded-lg">
                  Found <span className="font-semibold text-primary">{posts.totalDocs}</span>{' '}
                  {posts.totalDocs === 1 ? 'result' : 'results'}
                  {query ? ` for "${query}"` : ''}
                </p>
              </div>
              <CollectionArchive posts={posts.docs as CardPostData[]} />
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

export function generateMetadata({ searchParams }: { searchParams: { q?: string } }): Metadata {
  return {
    title: searchParams.q ? `Search: ${searchParams.q} | JS-SBU ` : `Search | JS-SBU `,
  }
}
