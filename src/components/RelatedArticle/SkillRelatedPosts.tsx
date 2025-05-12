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
      <h2 className="text-3xl font-bold mb-6 text-center text-gradient">Related Articles</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className="glass-card p-6 rounded-lg shadow-md card-hover flex flex-col h-[420px]"
            style={{ animationDelay: `${(index + 1) * 150}ms` }}
          >
            <div className="h-48 mb-4 overflow-hidden rounded flex-shrink-0">
              {post.meta?.image && typeof post.meta.image !== 'string' ? (
                <Media
                  resource={post.meta.image}
                  size="100%"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">No image</span>
                </div>
              )}
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-primary line-clamp-2 min-h-[3.5rem]">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                {post.meta?.description?.substring(0, 60) + '...' || 'Read more about this topic.'}
              </p>
              <div className="mt-auto">
                <Link
                  href={`/posts/${post.slug}`}
                  className="btn-gradient btn-pop inline-flex items-center text-white px-4 py-2 rounded-lg hover-scale transition w-full justify-center"
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
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/posts"
          className="btn-gradient btn-pop inline-flex items-center text-white px-6 py-3 rounded-lg hover-scale transition"
        >
          See More Articles
          <svg
            className="ml-2 w-5 h-5"
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
    </div>
  )
}
