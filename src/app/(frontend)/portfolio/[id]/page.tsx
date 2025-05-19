import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Media, Portfolio } from '@/payload-types'
import RichText from '@/components/RichText'
import PortfolioImageSection from './PortfolioImageSection'
import { Metadata, ResolvingMetadata } from 'next'

async function getProject(projectSlug: string) {
  const payload = await getPayload({ config: configPromise })

  try {
    const projectQuery = await payload.find({
      collection: 'portfolio',
      where: {
        slug: {
          equals: projectSlug,
        },
      },
      limit: 1,
    })

    const project = projectQuery.docs[0] as Portfolio
    return project
  } catch (error) {
    return null
  }
}
const getImageUrl = (image: Media | number | null | undefined): string => {
  // Default placeholder image - using a modern blur placeholder
  const placeholderImage = '/images/placeholder.jpg'

  // If no image is provided, return placeholder
  if (!image) return placeholderImage

  // If image is just a number ID, return placeholder
  if (typeof image === 'number') return placeholderImage

  // If image is an object with url property
  if (typeof image === 'object' && 'url' in image && image.url) {
    // First try to get the appropriate size image URL based on viewport
    let imageUrl: string | null = null

    // Try sizes in order of priority for portfolio detail page (optimized for performance)
    if (image.sizes) {
      // For portfolio detail page, large size is optimal balance of quality/performance
      if (image.sizes.large?.url && !image.sizes.large.url.includes('null')) {
        imageUrl = image.sizes.large.url
      } else if (image.sizes.medium?.url && !image.sizes.medium.url.includes('null')) {
        imageUrl = image.sizes.medium.url
      } else if (
        image.sizes.xlarge?.url &&
        !image.sizes.xlarge.url.includes('null') &&
        image.sizes.xlarge.url !== 'https://5zxlgj9gofvvzerw.public.blob.vercel-storage.com/null'
      ) {
        imageUrl = image.sizes.xlarge.url
      } else if (image.sizes.small?.url && !image.sizes.small.url.includes('null')) {
        imageUrl = image.sizes.small.url
      } else if (image.sizes.thumbnail?.url && !image.sizes.thumbnail.url.includes('null')) {
        imageUrl = image.sizes.thumbnail.url
      }
    }

    // If no valid size was found, fall back to the original URL
    if (!imageUrl) {
      imageUrl = image.url
    }

    // Make sure we don't have "null" in the URL
    if (!imageUrl || imageUrl.includes('null') || imageUrl.endsWith('/null')) {
      return placeholderImage
    }

    // Remove dimensions from URL if present
    const result = imageUrl.replace(/-\d+x\d+(?=\.[a-zA-Z0-9]+$)/, '')
    return result
  }

  // Fallback to placeholder if any issues
  return placeholderImage
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const projects = await payload.find({
    collection: 'portfolio',
  })

  return projects.docs.map((project) => ({
    id: String(project.slug),
  }))
}

type Args = {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata(
  { params }: Args,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const resolvedParams = await params
  const { id } = resolvedParams
  const project = await getProject(id)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  const imageUrl = getImageUrl(project?.image)

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
    openGraph: {
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  }
}

export default async function ProjectPage({ params }: Args) {
  const resolvedParams = await params
  const { id } = resolvedParams
  const project = await getProject(id)

  if (!project) {
    return notFound()
  }

  const imageUrl = getImageUrl(project?.image)

  return (
    <div className="min-h-screen py-16 animate-fadeIn">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/portfolio"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8 animation-delay-200 animate-fadeIn btn-pop hover-scale"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>

          <div className="glass-card rounded-xl shadow-md overflow-hidden mb-12 animation-delay-300 animate-fadeIn">
            {/* Client component with loading state */}
            <PortfolioImageSection
              imageUrl={imageUrl}
              title={project.title}
              category={project.category || 'Project'}
            />
          </div>

          <div className="glass-card rounded-xl shadow-md p-8 mb-8 animation-delay-400 animate-fadeIn">
            <p className="text-xl text-foreground mb-6">{project.description}</p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gradient">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech) => (
                  <span
                    key={tech.tech}
                    className="bg-primary/10 text-primary px-4 py-2 rounded-full"
                  >
                    {tech.tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gradient">Key Results</h2>
              <ul className="space-y-3">
                {project.results?.map((result, index) => (
                  <li key={result.result} className="flex items-start ml-3">
                    <div className="mr-4">
                      <span className="text-primary font-bold">•</span>
                    </div>
                    <span className="text-foreground">{result.result}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 animation-delay-600 animate-fadeIn">
              <h2 className="text-2xl font-semibold mb-4 text-gradient">Project Details</h2>
              <div className="prose prose-neutral prose-p:text-left prose-headings:text-left prose-ul:text-left prose-ol:text-left prose-blockquote:text-left prose-blockquote:m-0 prose-blockquote:p-0 prose-blockquote:border-0 max-w-none text-foreground">
                <RichText content={project.content} enableProse={false} />
              </div>
            </div>
          </div>
          <div className="shiny-card glass-card rounded-xl p-8 shadow-md animation-delay-800 animate-fadeIn text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gradient">
              Ready to Start Your Project?
            </h2>
            <p className="text-foreground mb-6">
              Interested in seeing how we can deliver similar results for your business?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="btn-gradient text-white px-6 py-3 rounded-lg shadow-md hover-scale btn-pop"
              >
                Get in Touch
              </Link>
              <Link
                href="/portfolio"
                className="glass-card px-6 py-3 rounded-lg shadow-md hover:bg-primary/10 btn-pop hover-scale"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
