import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { FileX } from 'lucide-react'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 3,
    overrideAccess: false,
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
                currentPage={posts.page}
                limit={12}
                totalDocs={posts.totalDocs}
                className="text-foreground font-medium"
              />
            </div>

            <div className="animation-delay-400 animate-fadeIn">
              <CollectionArchive posts={posts.docs} />
            </div>

            <div className="animation-delay-600 animate-fadeIn">
              {posts.totalPages > 1 && posts.page && (
                <Pagination page={posts.page} totalPages={posts.totalPages} />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `JS-SBU | Posts`,
  }
}
