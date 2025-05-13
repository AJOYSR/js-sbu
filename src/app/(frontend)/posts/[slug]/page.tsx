import type { Metadata } from 'next'

import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'
import { Comments } from '@/components/Comments'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

import type { Media, Post } from '@/payload-types'

import { PostHero } from '@/heros/PostHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    select: {
      slug: true,
    },
  })

  const params = posts.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}
const getImageUrl = (image: Media | number | null | undefined): string => {
  // Default placeholder image
  const placeholderImage = '/images/placeholder.jpg'

  // If no image is provided, return placeholder
  if (!image) return placeholderImage

  // If image is just a number ID, return placeholder
  if (typeof image === 'number') return placeholderImage

  // If image is an object with url property
  if (typeof image === 'object' && 'url' in image && image.url) {
    // First try to get the largest available size image URL
    let imageUrl: string | null = null

    // Try each size from largest to smallest until we find a valid URL
    if (image.sizes) {
      if (
        image.sizes.xlarge?.url &&
        !image.sizes.xlarge.url.includes('null') &&
        image.sizes.xlarge.url !== 'https://5zxlgj9gofvvzerw.public.blob.vercel-storage.com/null'
      ) {
        imageUrl = image.sizes.xlarge.url
      } else if (image.sizes.large?.url && !image.sizes.large.url.includes('null')) {
        imageUrl = image.sizes.large.url
      } else if (image.sizes.medium?.url && !image.sizes.medium.url.includes('null')) {
        imageUrl = image.sizes.medium.url
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
type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const url = '/posts/' + slug
  const post = await queryPostBySlug({ slug })
  if (!post) return <PayloadRedirects url={url} />

  // Get a safe image URL that won't contain 'null'
  const imageUrl = getImageUrl(post?.meta?.image)

  // Ensure image sizes don't contain any null URLs
  const sanitizedImage =
    post?.meta?.image && typeof post.meta.image === 'object'
      ? ({
          ...post.meta.image,
          url: imageUrl,
          // Sanitize sizes to prevent null URLs
          sizes: post.meta.image.sizes
            ? {
                ...post.meta.image.sizes,
                xlarge: post.meta.image.sizes.xlarge?.url?.includes('null')
                  ? null
                  : post.meta.image.sizes.xlarge,
              }
            : undefined,
        } as Media)
      : post?.meta?.image

  // Create a properly structured post with validated image
  const modifiedPost = {
    ...post,
    meta: {
      ...post.meta,
      image: sanitizedImage,
    },
  }

  return (
    <article className="min-h-screen animate-fadeIn">
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      <PostHero post={modifiedPost} />

      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto mt-8 animation-delay-200 animate-fadeIn">
          <Link
            href="/posts"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8 btn-pop hover-scale"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="glass-card rounded-xl shadow-md p-8 mb-12 animation-delay-300 animate-fadeIn">
            <RichText
              className="prose-lg dark:prose-invert prose-headings:text-gradient prose-headings:font-bold prose-p:text-foreground/90 prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl prose-img:shadow-md max-w-none"
              content={post.content}
              enableGutter={false}
              enableProse={true}
            />
          </div>

          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="animation-delay-400 animate-fadeIn">
              <h2 className="text-2xl font-semibold mb-6 text-gradient">Related Articles</h2>
              <RelatedPosts
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                docs={post.relatedPosts.filter((post) => typeof post === 'object')}
              />
            </div>
          )}

          {/* Add Comments section */}
          <div className="mt-16 glass-card rounded-xl shadow-md p-8 animation-delay-500 animate-fadeIn">
            <Comments postId={typeof post.id === 'string' ? parseInt(post.id, 10) : post.id} />
          </div>
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })

  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
