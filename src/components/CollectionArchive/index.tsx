import { cn } from 'src/utilities/cn'
import React from 'react'

import type { Post } from '@/payload-types'

import { Card, CardPostData } from '@/components/Card'

export type Props = {
  posts: CardPostData[]
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts } = props

  return (
    <div className={cn('container mx-auto')}>
      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              const animationDelay =
                index % 3 === 0
                  ? 'animation-delay-200'
                  : index % 3 === 1
                    ? 'animation-delay-400'
                    : 'animation-delay-600'

              return (
                <div className={`animate-fadeIn ${animationDelay}`} key={index}>
                  <Card className="h-full" doc={result} relationTo="posts" showCategories />
                </div>
              )
            }

            return null
          })}
        </div>
      </div>
    </div>
  )
}
