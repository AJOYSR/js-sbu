import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, BookOpen, Star } from 'lucide-react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Metadata } from 'next'
import { Tutorial, Media } from '@/payload-types'
import TutorialsClient from './tutorials-client'

export const metadata: Metadata = {
  title: 'Tutorials & Guides | Learn JavaScript Technologies',
  description:
    'Comprehensive tutorials and step-by-step guides to help you master JavaScript technologies',
}

export default async function TutorialsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; level?: string; search?: string }>
}) {
  const params = await searchParams
  const payload = await getPayload({ config: configPromise })

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

  const { docs: tutorials } = await payload
    .find({
      collection: 'tutorials',
      sort: '-publishedAt',
      where,
    })
    .then((res) => ({ ...res, docs: res.docs as Tutorial[] }))

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
    <div className="min-h-screen py-16 animate-fadeIn">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6 text-gradient">Tutorials & Guides</h1>
          <p className="text-xl text-gray-600 animation-delay-200 animate-fadeIn">
            Comprehensive tutorials and step-by-step guides to help you master JavaScript
            technologies
          </p>
        </div>

        {/* Client-side filtering & search component */}
        <div className="animation-delay-400 animate-fadeIn">
          <TutorialsClient
            initialTutorials={tutorials}
            categories={categories}
            levels={levels}
            initialCategory={params?.category || 'All'}
            initialLevel={params?.level || 'All Levels'}
            initialSearch={params?.search || ''}
          />
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-lg soft-shadow animation-delay-600 animate-fadeIn">
          <h2 className="text-3xl font-bold mb-6 text-gradient">Want to Contribute?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Share your knowledge with the community by creating your own tutorials and guides.
          </p>
          <Link
            href="/contact"
            className="btn-gradient btn-pop inline-block text-white px-8 py-3 rounded-lg hover-scale transition"
          >
            Become an Author
          </Link>
        </div>
      </div>
    </div>
  )
}
