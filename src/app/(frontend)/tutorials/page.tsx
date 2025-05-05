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
  searchParams?: { category?: string; level?: string; search?: string }
}) {
  const payload = await getPayload({ config: configPromise })

  const where: any = {}

  if (searchParams?.category && searchParams.category !== 'All') {
    where.category = { equals: searchParams.category }
  }

  if (searchParams?.level && searchParams.level !== 'All Levels') {
    where.level = { equals: searchParams.level.toLowerCase() }
  }

  if (searchParams?.search) {
    where.title = { like: searchParams.search }
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
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">Tutorials & Guides</h1>
          <p className="text-xl text-gray-600">
            Comprehensive tutorials and step-by-step guides to help you master JavaScript
            technologies
          </p>
        </div>

        {/* Client-side filtering & search component */}
        <TutorialsClient
          initialTutorials={tutorials}
          categories={categories}
          levels={levels}
          initialCategory={searchParams?.category || 'All'}
          initialLevel={searchParams?.level || 'All Levels'}
          initialSearch={searchParams?.search || ''}
        />

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Want to Contribute?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Share your knowledge with the community by creating your own tutorials and guides.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Become an Author
          </Link>
        </div>
      </div>
    </div>
  )
}
