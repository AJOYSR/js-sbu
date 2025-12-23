import type { Metadata } from 'next/types'
import React, { Suspense } from 'react'
import Link from 'next/link'
import { ArrowRight, BookOpen, FileText } from 'lucide-react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import PageClient from './page.client'
import HeroImage from '@/components/HeroImage'

export const dynamic = 'force-static'
export const revalidate = 600

type PageProps = {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ searchParams }: PageProps) {
  const payload = await getPayload({ config: configPromise })
  // Resolve search params if provided as a Promise (App Router typing)
  const resolvedSearchParams = searchParams ? await searchParams : undefined
  void resolvedSearchParams

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 6,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  return (
    <div className="min-h-screen animate-fadeIn">
      <div className="container mx-auto px-4 py-16 relative">
        {/* Decorative elements */}
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

        <Suspense
          fallback={
            <div className="h-12 w-full max-w-lg mx-auto animate-pulse bg-gray-100/10 rounded-lg"></div>
          }
        >
          <PageClient />
        </Suspense>

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
                href="/"
                className="px-6 py-3 rounded-lg btn-gradient text-white hover-scale btn-pop inline-flex items-center"
              >
                <span>Back to Home</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center  animation-delay-200 animate-fadeIn">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <BookOpen className="inline-block h-4 w-4 mr-1" /> LATEST ARTICLES
              </span>
            </div>

            <div className="mb-8 animation-delay-300 animate-fadeIn">
              <Suspense
                fallback={<div className="h-8 w-48 animate-pulse bg-gray-100/10 rounded-lg"></div>}
              >
                <PageRange
                  collection="posts"
                  currentPage={posts.page}
                  limit={12}
                  totalDocs={posts.totalDocs}
                  className="text-foreground font-medium"
                />
              </Suspense>
            </div>

            <div className="animation-delay-400 animate-fadeIn">
              <Suspense
                fallback={
                  <div className="min-h-[600px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="h-[350px] rounded-xl animate-pulse bg-gray-100/10"
                      ></div>
                    ))}
                  </div>
                }
              >
                <CollectionArchive posts={posts.docs} />
              </Suspense>
            </div>

            <div className="animation-delay-600 animate-fadeIn">
              {posts.totalPages > 1 && posts.page && (
                <Suspense
                  fallback={
                    <div className="h-10 w-full max-w-md mx-auto animate-pulse bg-gray-100/10 rounded-lg mt-8"></div>
                  }
                >
                  <Pagination page={posts.page} totalPages={posts.totalPages} />
                </Suspense>
              )}
            </div>
          </>
        )}

        {/* CTA Section */}
        {posts.docs.length > 0 && (
          <Suspense
            fallback={
              <div className="h-[400px] w-full max-w-4xl mx-auto animate-pulse bg-gray-100/10 rounded-3xl mt-20"></div>
            }
          >
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
          </Suspense>
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Blog | JS-SBU`,
    description:
      'Explore our collection of articles, tutorials, and industry insights to stay ahead in the world of technology',
  }
}
