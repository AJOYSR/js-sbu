import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { FileX } from 'lucide-react'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { notFound } from 'next/navigation'

export const revalidate = 600

type Args = {
  params: Promise<{
    pageNumber: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { pageNumber } = await paramsPromise
  const payload = await getPayload({ config: configPromise })
  const POSTS_PER_PAGE = 3

  const sanitizedPageNumber = Number(pageNumber)

  if (!Number.isInteger(sanitizedPageNumber)) notFound()

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: POSTS_PER_PAGE,
    page: sanitizedPageNumber,
    overrideAccess: false,
    sort: '-publishedAt',
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  return (
    <div className="min-h-screen py-16 animate-fadeIn">
      <PageClient />

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center animation-delay-200 animate-fadeIn">
          <h1 className="text-4xl font-bold mb-6 text-gradient">Our Blog</h1>
          <p className="text-xl text-primary mb-4">Insights & Inspiration</p>
          <p className="text-foreground">
            Explore our collection of articles, tutorials, and industry insights
          </p>
        </div>

        {posts.docs.length === 0 ? (
          <div className="glass-card rounded-xl shadow-md p-12 text-center max-w-2xl mx-auto animation-delay-300 animate-fadeIn">
            <div className="flex justify-center mb-6">
              <FileX className="w-16 h-16 text-primary/80" />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-gradient">No Posts Found</h2>
            <p className="text-foreground max-w-lg mx-auto">
              We haven&apos;t published any posts yet, but great content is on the way! Check back
              soon for insightful articles and updates.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8 animation-delay-300 animate-fadeIn">
              <PageRange
                collection="posts"
                currentPage={sanitizedPageNumber}
                limit={POSTS_PER_PAGE}
                totalDocs={posts.totalDocs}
                className="text-foreground font-medium"
              />
            </div>

            <div className="animation-delay-400 animate-fadeIn">
              <CollectionArchive posts={posts.docs} />
            </div>

            <div className="animation-delay-600 animate-fadeIn">
              {posts.totalPages > 1 && (
                <Pagination page={sanitizedPageNumber} totalPages={posts.totalPages} />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { pageNumber } = await paramsPromise
  return {
    title: `Blog | JS-SBU${pageNumber !== '1' ? ` - Page ${pageNumber}` : ''}`,
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const POSTS_PER_PAGE = 3

  const { totalDocs } = await payload.count({
    collection: 'posts',
    overrideAccess: false,
  })

  const totalPages = Math.ceil(totalDocs / POSTS_PER_PAGE)

  const pages: { pageNumber: string }[] = []

  for (let i = 1; i <= totalPages; i++) {
    pages.push({ pageNumber: String(i) })
  }

  return pages
}
