'use client'
import { cn } from '@/utilities/cn'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, categories, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`

  return (
    <article
      className={cn(
        'glass-card card-hover rounded-xl shadow-md overflow-hidden transition-all hover:cursor-pointer flex flex-col h-full',
        className,
      )}
      ref={card.ref}
    >
      <div className="relative w-full h-48 flex-shrink-0 overflow-hidden">
        {!metaImage && (
          <div className="bg-primary/10 flex items-center justify-center h-full text-primary font-medium">
            No image available
          </div>
        )}
        {metaImage && typeof metaImage !== 'string' && (
          <div className="h-full hover:scale-105 transition-transform duration-700">
            <Media resource={metaImage} size="33vw" className="object-cover" />
          </div>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        {showCategories && hasCategories && (
          <div className="mb-3 flex-shrink-0">
            {showCategories && hasCategories && (
              <div className="flex flex-wrap gap-2">
                {categories?.map((category, index) => {
                  if (typeof category === 'object') {
                    const { title: titleFromCategory } = category
                    const categoryTitle = titleFromCategory || 'Untitled category'

                    return (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {categoryTitle}
                      </span>
                    )
                  }
                  return null
                })}
              </div>
            )}
          </div>
        )}
        {titleToUse && (
          <div className="prose flex-shrink-0">
            <h3 className="text-gradient font-semibold text-xl mb-2">
              <Link
                className="not-prose hover:opacity-90 transition-opacity"
                href={href}
                ref={link.ref}
              >
                {titleToUse}
              </Link>
            </h3>
          </div>
        )}
        {description && (
          <div className="mt-2 flex-grow">
            {description && (
              <p className="line-clamp-3 text-foreground/90">{sanitizedDescription}</p>
            )}
          </div>
        )}
        <div className="mt-4 flex-shrink-0">
          <Link
            href={href}
            ref={link.ref}
            className="text-primary hover:text-primary/90 font-medium flex items-center"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
