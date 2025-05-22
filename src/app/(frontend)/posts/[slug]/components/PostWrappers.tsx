'use client'

import React, { Suspense, useEffect } from 'react'
import { Post } from '@/payload-types'
import dynamic from 'next/dynamic'

// Create skeleton components for loading states
const PostHeroSkeleton = () => (
  <div className="relative h-[400px] bg-gradient-to-b from-gray-900 to-background animate-pulse">
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="container mx-auto px-4 h-full flex items-end pb-12">
      <div className="max-w-4xl mx-auto w-full">
        <div className="h-6 w-32 bg-white/20 rounded-full mb-4 animate-pulse"></div>
        <div className="h-12 bg-white/10 rounded-lg mb-4 w-3/4 animate-pulse"></div>
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-white/20 animate-pulse"></div>
          <div className="h-6 w-40 bg-white/20 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
)

const RichTextSkeleton = () => (
  <div className="glass-card rounded-xl shadow-md p-8 mb-12 animate-pulse">
    <div className="space-y-4">
      <div className="h-8 bg-gray-700/20 rounded-lg w-3/4"></div>
      <div className="h-4 bg-gray-700/10 rounded-lg w-full"></div>
      <div className="h-4 bg-gray-700/10 rounded-lg w-full"></div>
      <div className="h-4 bg-gray-700/10 rounded-lg w-5/6"></div>
      <div className="h-4 bg-gray-700/10 rounded-lg w-full"></div>
      <div className="h-8 bg-gray-700/20 rounded-lg w-2/3 mt-8"></div>
      <div className="h-4 bg-gray-700/10 rounded-lg w-full"></div>
      <div className="h-4 bg-gray-700/10 rounded-lg w-full"></div>
      <div className="h-4 bg-gray-700/10 rounded-lg w-4/5"></div>
    </div>
  </div>
)

const RelatedPostsSkeleton = () => (
  <div className="animation-delay-400 animate-fadeIn">
    <div className="h-8 bg-gray-700/20 rounded-lg w-56 mb-6"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 equal-height-cards">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="glass-card rounded-xl shadow-md overflow-hidden animate-pulse h-full"
        >
          <div className="h-48 bg-gray-700/20"></div>
          <div className="p-6 flex flex-col">
            <div className="h-6 bg-gray-700/20 rounded-lg mb-3 w-3/4"></div>
            <div className="h-4 bg-gray-700/10 rounded-lg mb-4 w-full"></div>
            <div className="h-4 bg-gray-700/10 rounded-lg w-2/3"></div>
            <div className="mt-auto pt-4">
              <div className="h-4 bg-gray-700/20 rounded-lg w-24"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const CommentsSkeleton = () => (
  <div className="mt-16 glass-card rounded-xl shadow-md p-8 animate-pulse">
    <div className="h-8 bg-gray-700/20 rounded-lg w-40 mb-6"></div>
    <div className="space-y-6">
      <div className="h-24 bg-gray-700/10 rounded-lg w-full"></div>
      <div className="h-10 bg-gray-700/20 rounded-lg w-32"></div>
    </div>
  </div>
)

// Dynamically import components
const PostHeroComponent = dynamic(
  () => import('@/heros/PostHero/index').then((mod) => mod.PostHero),
  {
    loading: () => <PostHeroSkeleton />,
    ssr: true,
  },
)

const RichTextComponent = dynamic(() => import('@/components/RichText'), {
  loading: () => <RichTextSkeleton />,
  ssr: true,
})

const RelatedPostsComponent = dynamic(
  () => import('@/blocks/RelatedPosts/Component').then((mod) => mod.RelatedPosts),
  {
    loading: () => <RelatedPostsSkeleton />,
    ssr: true,
  },
)

const CommentsComponent = dynamic(
  () => import('@/components/Comments').then((mod) => mod.Comments),
  {
    loading: () => <CommentsSkeleton />,
    ssr: true,
  },
)

// Preload components strategically
const preloadComponents = () => {
  const preloadAfterHero = () => {
    import('@/components/RichText')
    import('@/blocks/RelatedPosts/Component')
    import('@/components/Comments')
  }

  // Schedule preloading
  if (typeof window !== 'undefined') {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(preloadAfterHero)
    } else {
      setTimeout(preloadAfterHero, 1000)
    }
  }
}

interface PostHeroWrapperProps {
  post: Post
}

export function PostHeroWrapper({ post }: PostHeroWrapperProps) {
  useEffect(() => {
    preloadComponents()
  }, [])

  return <PostHeroComponent post={post} />
}

interface RichTextWrapperProps {
  content: any
}

export function RichTextWrapper({ content }: RichTextWrapperProps) {
  return (
    <RichTextComponent
      className="prose-lg dark:prose-invert prose-headings:text-gradient prose-headings:font-bold prose-p:text-foreground/90 prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl prose-img:shadow-md max-w-none"
      content={content}
      enableGutter={false}
      enableProse={true}
    />
  )
}

interface RelatedPostsWrapperProps {
  posts: Post[]
}

export function RelatedPostsWrapper({ posts }: RelatedPostsWrapperProps) {
  return (
    <div className="animation-delay-400 animate-fadeIn">
      <h2 className="text-2xl font-semibold mb-6 text-gradient">Related Articles</h2>
      <RelatedPostsComponent docs={posts} />
    </div>
  )
}

interface CommentsWrapperProps {
  postId: number
}

export function CommentsWrapper({ postId }: CommentsWrapperProps) {
  return (
    <div className="mt-16 glass-card rounded-xl shadow-md p-8 animation-delay-500 animate-fadeIn">
      <CommentsComponent postId={postId} />
    </div>
  )
}
