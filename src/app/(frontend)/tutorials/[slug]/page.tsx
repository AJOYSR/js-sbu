import React from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Tutorial } from '@/payload-types'

// Import wrapper components
import {
  TutorialHeaderWrapper,
  TutorialContentWrapper,
  TutorialSidebarWrapper,
} from './components/DetailWrappers'

// Change from dynamic to static with ISR
export const dynamic = 'force-static'
export const revalidate = 300 // Revalidate every 5 minutes

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  try {
    const { slug } = await params
    const payload = await getPayload({ config: configPromise })

    const tutorial = await payload
      .find({
        collection: 'tutorials',
        where: {
          slug: {
            equals: slug,
          },
        },
        depth: 1,
      })
      .then((res) => res.docs[0] as Tutorial)

    if (!tutorial)
      return {
        title: 'Tutorial Not Found',
        description: 'The requested tutorial could not be found.',
      }

    let metaImageUrl: string | undefined
    if (
      tutorial.meta?.image &&
      typeof tutorial.meta.image === 'object' &&
      'url' in tutorial.meta.image
    ) {
      metaImageUrl = tutorial.meta.image.url as string
    }

    return {
      title: tutorial.meta?.title || tutorial.title,
      description: tutorial.meta?.description || tutorial.description,
      openGraph: {
        title: tutorial.meta?.title || tutorial.title,
        description: tutorial.meta?.description || tutorial.description,
        images: metaImageUrl ? [metaImageUrl] : undefined,
      },
    }
  } catch (error) {
    console.error('Error fetching tutorial metadata:', error)
    return {
      title: 'Tutorial - Error',
      description: 'There was an error loading this tutorial.',
    }
  }
}

// Generate static paths for popular tutorials
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  try {
    const payload = await getPayload({ config: configPromise })

    // Get top tutorials by rating to pre-render
    const tutorials = await payload
      .find({
        collection: 'tutorials',
        sort: '-rating',
        limit: 10, // Pre-render top 10 tutorials
        depth: 0,
      })
      .then((res) => res.docs as Tutorial[])

    // Filter out any tutorials without a valid slug
    return tutorials
      .filter((tutorial) => typeof tutorial.slug === 'string')
      .map((tutorial) => ({
        slug: tutorial.slug as string,
      }))
  } catch (error) {
    console.error('Error generating static paths:', error)
    return []
  }
}

// Update the component to handle Promise-based params in Next.js 15
type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function TutorialPage({ params }: PageProps) {
  try {
    const { slug } = await params
    const payload = await getPayload({ config: configPromise })

    const tutorial = await payload
      .find({
        collection: 'tutorials',
        where: {
          slug: {
            equals: slug,
          },
        },
        depth: 1,
      })
      .then((res) => res.docs[0] as Tutorial)

    if (!tutorial) {
      return notFound()
    }

    // Ensure imageUrl is always a string and never undefined
    const imageUrl: string =
      typeof tutorial.image === 'object' &&
      tutorial.image !== null &&
      'url' in tutorial.image &&
      typeof tutorial.image.url === 'string'
        ? tutorial.image.url
        : '/placeholder-tutorial.jpg'

    // Handle youtubeUrl - ensure it's a string or undefined, not null
    const youtubeUrl = tutorial.youtubeUrl || undefined

    // Handle prerequisites and learningOutcomes safely
    const prerequisites = tutorial.prerequisites || undefined
    const learningOutcomes = tutorial.learningOutcomes || undefined

    return (
      <div className="min-h-screen py-16 animate-fadeIn">
        <div className="container mx-auto px-4">
          <TutorialHeaderWrapper
            title={tutorial.title}
            category={tutorial.category}
            level={tutorial.level}
            duration={tutorial.duration}
            lessons={tutorial.lessons}
            rating={tutorial.rating}
            imageUrl={imageUrl}
          />

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            <TutorialContentWrapper
              title={tutorial.title}
              description={tutorial.description}
              content={tutorial.content}
              youtubeUrl={youtubeUrl}
            />

            <TutorialSidebarWrapper
              prerequisites={prerequisites}
              learningOutcomes={learningOutcomes}
            />
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching tutorial:', error)
    return notFound()
  }
}
