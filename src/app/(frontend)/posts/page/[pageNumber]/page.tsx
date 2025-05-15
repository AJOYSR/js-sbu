import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import {
  ArrowRight,
  BookOpen,
  FileText,
  Filter,
  Grid,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { getPayload } from 'payload'
import React from 'react'
import Link from 'next/link'
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
    <div className="min-h-screen animate-fadeIn">
      {/* Hero Section with Background */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-background overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-32 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6 animate-fadeIn backdrop-blur-sm">
              BLOG & INSIGHTS
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animation-delay-200 animate-fadeIn">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
              Explore our collection of articles, tutorials, and industry insights to stay ahead in
              the world of technology
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 relative">
        {/* Decorative elements */}
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

        <PageClient />

        {posts.docs.length === 0 ? (
          <div className="glass-card rounded-xl shadow-md p-12 text-center max-w-2xl mx-auto animation-delay-300 animate-fadeIn">
            <div className="flex justify-center mb-6">
              <FileText className="w-16 h-16 text-primary/80" />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-gradient">No Posts Found</h2>
            <p className="text-foreground max-w-lg mx-auto">
              We haven&apos;t published any posts yet, but great content is on the way! Check back
              soon for insightful articles and updates.
            </p>
            <div className="mt-8">
              <Link
                href="/posts"
                className="px-6 py-3 rounded-lg btn-gradient text-white hover-scale btn-pop inline-flex items-center"
              >
                <span>Back to Blog</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-12 animation-delay-200 animate-fadeIn">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <BookOpen className="inline-block h-4 w-4 mr-1" /> LATEST ARTICLES
              </span>
              <h2 className="text-2xl font-semibold text-foreground">Page {sanitizedPageNumber}</h2>
            </div>

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

        {/* CTA Section */}
        {posts.docs.length > 0 && (
          <section className="py-20 mt-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50"></div>
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>

            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-3xl p-10 md:p-16 shadow-xl relative overflow-hidden border border-white/10 backdrop-blur-md animation-delay-300 animate-fadeIn">
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-[80px]"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[80px]"></div>

                <div className="text-center relative z-10">
                  <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
                    STAY UPDATED
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
                    Subscribe to Our Newsletter
                  </h2>
                  <p className="text-foreground/90 text-lg mb-10 max-w-3xl mx-auto animation-delay-300 animate-fadeIn">
                    Get the latest industry insights, technology updates, and exclusive content
                    delivered straight to your inbox.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center animation-delay-400 animate-fadeIn">
                    <Link
                      href="/contact"
                      className="btn-gradient text-white px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium"
                    >
                      <span>Subscribe Now</span>
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="bg-white/10 border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium backdrop-blur-sm"
                    >
                      <span>Contact Us</span>
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { pageNumber } = await paramsPromise
  return {
    title: `Blog | JS-SBU${pageNumber !== '1' ? ` - Page ${pageNumber}` : ''}`,
    description:
      'Explore our collection of articles, tutorials, and industry insights to stay ahead in the world of technology',
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
