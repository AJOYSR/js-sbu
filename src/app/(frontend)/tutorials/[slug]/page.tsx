import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, BookOpen, Star, ArrowLeft, GraduationCap, CheckCircle } from 'lucide-react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Tutorial } from '@/payload-types'
import RichText from '@/components/RichText'

type PageParams = Promise<{ slug: string }>

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
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

export default async function TutorialPage({ params }: { params: PageParams }) {
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

    return (
      <div className="min-h-screen py-16 animate-fadeIn">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link
            href="/tutorials"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8 animation-delay-200 animate-fadeIn btn-pop hover-scale"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tutorials
          </Link>

          {/* Tutorial Header */}
          <div className="glass-card rounded-xl shadow-md overflow-hidden mb-12 animation-delay-300 animate-fadeIn">
            <div className="relative h-[400px]">
              <Image src={imageUrl} alt={tutorial.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="btn-gradient px-3 py-1 rounded-full text-sm font-medium">
                    {tutorial.category}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    {tutorial.level}
                  </span>
                </div>
                <h1 className="text-4xl font-bold mb-4">{tutorial.title}</h1>
                <div className="flex flex-wrap items-center gap-6">
                  <span className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    {tutorial.duration}
                  </span>
                  <span className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-primary" />
                    {tutorial.lessons} lessons
                  </span>
                  <span className="flex items-center text-primary">
                    <Star className="w-5 h-5 mr-2 text-primary" />
                    {tutorial.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Tutorial Content */}
            <div className="lg:col-span-2 animation-delay-400 animate-fadeIn">
              <div className="glass-card rounded-xl shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gradient">About This Tutorial</h2>
                <p className="text-gray-600 mb-8">{tutorial.description}</p>
                <div className="prose prose-neutral prose-p:text-left prose-headings:text-left prose-ul:text-left prose-ol:text-left prose-blockquote:text-left prose-blockquote:m-0 prose-blockquote:p-0 prose-blockquote:border-0 max-w-none">
                  <RichText content={tutorial.content} enableGutter={false} />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 animation-delay-600 animate-fadeIn">
              {/* Prerequisites */}
              {tutorial.prerequisites && tutorial.prerequisites.length > 0 && (
                <div className="glass-card rounded-xl shadow-md p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center text-primary">
                    <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                    Prerequisites
                  </h3>
                  <ul className="space-y-3">
                    {tutorial.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{prereq.requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Learning Outcomes */}
              {tutorial.learningOutcomes && tutorial.learningOutcomes.length > 0 && (
                <div className="bg-card rounded-xl shadow-md p-6 soft-shadow animation-delay-600 animate-fadeIn">
                  <div className="from-primary/10 to-primary/5 rounded-lg px-4 py-2">
                    <h3 className="text-xl font-semibold flex items-center text-gradient">
                      <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                      What You&apos;ll Learn
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {tutorial.learningOutcomes.map((outcome, index) => (
                      <li
                        key={index}
                        className="flex items-start bg-card/50 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                      >
                        <div className="bg-primary/10 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground">{outcome.outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching tutorial:', error)
    return notFound()
  }
}
