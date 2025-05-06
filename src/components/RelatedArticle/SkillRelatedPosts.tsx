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
    <div className="mb-20 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-3 text-center text-gradient">Related Articles</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className="glass-card p-6 rounded-lg shadow-md card-hover"
            style={{ animationDelay: `${(index + 1) * 150}ms` }}
          >
            {post.meta?.image && typeof post.meta.image !== 'string' && (
              <div className="mb-4 h-48 overflow-hidden rounded">
                <Media resource={post.meta.image} size="100%" />
              </div>
            )}
            <h3 className="text-xl font-semibold mb-3 text-primary">{post.title}</h3>
            <p className="text-gray-600 mb-5">
              {post.meta?.description || 'Read more about this topic.'}
            </p>
            <Link
              href={`/posts/${post.slug}`}
              className="btn-gradient btn-pop inline-flex items-center text-white px-4 py-2 rounded-lg hover-scale transition"
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
