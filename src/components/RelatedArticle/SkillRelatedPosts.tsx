import React from 'react'
import Link from 'next/link'
import type { Post } from '@/payload-types'
import { Media } from '@/components/Media'

interface SkillRelatedPostsProps {
  posts: Post[]
}

export const SkillRelatedPosts: React.FC<SkillRelatedPostsProps> = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Related Articles</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
          >
            {post.meta?.image && typeof post.meta.image !== 'string' && (
              <div className="mb-4 h-48 overflow-hidden rounded">
                <Media resource={post.meta.image} size="250px" />
              </div>
            )}
            <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
            <p className="text-gray-600 mb-6">
              {post.meta?.description || 'Read more about this topic.'}
            </p>
            <Link
              href={`/posts/${post.slug}`}
              className="inline-flex items-center text-primary hover:underline"
            >
              Read Article
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
