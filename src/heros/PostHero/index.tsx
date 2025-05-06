import { formatDateTime } from 'src/utilities/formatDateTime'
import React from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'

export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const { categories, meta: { image: metaImage } = {}, populatedAuthors, publishedAt, title } = post

  return (
    <div className="relative animate-fadeIn">
      <div className="absolute inset-0 w-full min-h-[85vh] z-0">
        {metaImage && typeof metaImage !== 'string' && (
          <Media fill imgClassName="object-cover" resource={metaImage} />
        )}
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-2/3 bg-gradient-to-t from-background via-background/90 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-40">
        <div className="max-w-4xl mx-auto text-white">
          <div className="flex flex-wrap gap-2 mb-6 animation-delay-200 animate-fadeIn">
            {categories?.map((category, index) => {
              if (typeof category === 'object' && category !== null) {
                const { title: categoryTitle } = category
                const titleToUse = categoryTitle || 'Untitled category'

                return (
                  <span
                    key={index}
                    className="bg-primary/80 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md"
                  >
                    {titleToUse}
                  </span>
                )
              }
              return null
            })}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fadeIn animation-delay-300">
            {title}
          </h1>

          <div className="glass-card rounded-xl p-6 shadow-lg flex flex-col md:flex-row gap-8 animation-delay-400 animate-fadeIn">
            {populatedAuthors && populatedAuthors.length > 0 && (
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <p className="text-foreground/60 text-sm">Author</p>
                  <p className="text-foreground font-medium">
                    {populatedAuthors.map((author, index) => {
                      const { name } = author
                      const isLast = index === populatedAuthors.length - 1

                      return (
                        <React.Fragment key={index}>
                          <span className="text-gradient">{name}</span>
                          {!isLast && <span className="mx-1">&</span>}
                        </React.Fragment>
                      )
                    })}
                  </p>
                </div>
              </div>
            )}

            {publishedAt && (
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                </div>
                <div>
                  <p className="text-foreground/60 text-sm">Published</p>
                  <time className="text-foreground font-medium" dateTime={publishedAt}>
                    {formatDateTime(publishedAt)}
                  </time>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
