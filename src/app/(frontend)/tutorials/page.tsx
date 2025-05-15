import React from 'react'
import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Metadata } from 'next'
import { Tutorial } from '@/payload-types'
import { ArrowRight } from 'lucide-react'
import TutorialsClient from './tutorials-client'

export const metadata: Metadata = {
  title: 'Tutorials & Guides | Learn JavaScript Technologies',
  description:
    'Comprehensive tutorials and step-by-step guides to help you master JavaScript technologies',
}

const ITEMS_PER_PAGE = 6 // Changed to show 6 items per page

export default async function TutorialsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; level?: string; search?: string; page?: string }>
}) {
  const params = await searchParams
  const payload = await getPayload({ config: configPromise })
  const currentPage = Number(params?.page) || 1

  const where: any = {}

  if (params?.category && params.category !== 'All') {
    where.category = { equals: params.category }
  }

  if (params?.level && params.level !== 'All Levels') {
    where.level = { equals: params.level.toLowerCase() }
  }

  if (params?.search) {
    where.title = { like: params.search }
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
    const params = new URLSearchParams(searchParams as any)
    params.set('page', '1')
    return Response.redirect(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutorials?${params.toString()}`)
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
      {/* Hero Section with Background */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-background overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-32 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6 animate-fadeIn backdrop-blur-sm">
              LEARN WITH US
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animation-delay-200 animate-fadeIn">
              Tutorials & <span className="text-gradient">Guides</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
              Comprehensive tutorials and step-by-step guides to help you master JavaScript
              technologies and build amazing applications
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 relative">
        {/* Decorative elements */}
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

        {/* Client-side filtering & search component */}
        <div className="animation-delay-400 animate-fadeIn">
          <TutorialsClient
            tutorials={tutorials}
            categories={categories}
            levels={levels}
            currentCategory={params?.category || 'All'}
            currentLevel={params?.level || 'All Levels'}
            currentSearch={params?.search || ''}
            currentPage={currentPage}
            totalPages={payloadTotalPages}
            totalItems={totalDocs}
          />
        </div>

        {/* CTA Section */}
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
                  SHARE YOUR EXPERTISE
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
                  Want to Contribute?
                </h2>
                <p className="text-foreground/90 text-lg mb-10 max-w-3xl mx-auto animation-delay-300 animate-fadeIn">
                  Share your knowledge with the community by creating your own tutorials and guides.
                  Help others learn and grow while establishing yourself as an expert.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center animation-delay-400 animate-fadeIn">
                  <Link
                    href="/contact"
                    className="btn-gradient text-white px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium"
                  >
                    <span>Become an Author</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="/tutorials"
                    className="bg-white/10 border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium backdrop-blur-sm"
                  >
                    <span>Explore Tutorials</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
