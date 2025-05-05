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
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />

      {posts.docs.length === 0 ? (
        <div className="container text-center py-16">
          <div className="flex justify-center mb-6">
            <FileX className="w-16 h-16 text-gray-400 dark:text-gray-500" />
          </div>
          <h2 className="text-2xl font-medium text-gray-600 dark:text-gray-400 mb-4">
            No Posts Found
          </h2>
          <p className="text-gray-500 dark:text-gray-500 max-w-lg mx-auto">
            We haven&apos;t published any posts yet, but great content is on the way! Check back
            soon for insightful articles and updates.
          </p>
        </div>
      ) : (
        <>
          <div className="container mb-8">
            <PageRange
              collection="posts"
              currentPage={posts.page}
              limit={12}
              totalDocs={posts.totalDocs}
            />
          </div>

          <CollectionArchive posts={posts.docs} />

          <div className="container">
            {posts.totalPages > 1 && posts.page && (
              <Pagination page={posts.page} totalPages={posts.totalPages} />
            )}
          </div>
        </>
      )}
    </div>
  )
}
export function generateMetadata(): Metadata {
  return {
    title: `JS-SBU | Posts`,
  }
}
