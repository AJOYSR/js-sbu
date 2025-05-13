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
  if (!image) return '/images/placeholder.jpg' // Fallback to a placeholder image
  if (typeof image === 'number') return '/images/placeholder.jpg'
  if (typeof image === 'object' && image?.url) {
    // Make sure we have a full URL
    let imageUrl = image?.sizes?.xlarge?.url || image.url
    // Remove dimensions from URL if present
    const result = imageUrl?.replace(/-\d+x\d+(?=\.[a-zA-Z0-9]+$)/, '')
    return result || '/images/placeholder.jpg'
  }
  return '/images/placeholder.jpg'
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

  const imageUrl = getImageUrl(post?.meta?.image)
  const modifiedPost = {
    ...post,
    meta: {
      ...post.meta,
      image: {
        ...(post.meta?.image as Media),
        url: imageUrl,
      },
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
