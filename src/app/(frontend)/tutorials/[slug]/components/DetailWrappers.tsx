'use client'

import React, { Suspense, useEffect } from 'react'
import {
  TutorialHeaderSkeleton,
  TutorialContentSkeleton,
  TutorialSidebarSkeleton,
} from './SectionSkeleton'

// Dynamically import components with lazy loading
const TutorialHeader = React.lazy(() => import('./TutorialHeader'))
const TutorialContent = React.lazy(() => import('./TutorialContent'))
const TutorialSidebar = React.lazy(() => import('./TutorialSidebar'))

// Preload components strategically
const preloadComponents = () => {
  const preloadAfterHeader = () => {
    import('./TutorialContent')
    import('./TutorialSidebar')
  }

  // Schedule preloading
  if (typeof window !== 'undefined') {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(preloadAfterHeader)
    } else {
      setTimeout(preloadAfterHeader, 1000)
    }
  }
}

interface TutorialHeaderProps {
  title: string
  category: string
  level: string
  duration: string
  lessons: number
  rating: number
  imageUrl: string
}

export function TutorialHeaderWrapper({
  title,
  category,
  level,
  duration,
  lessons,
  rating,
  imageUrl,
}: TutorialHeaderProps) {
  useEffect(() => {
    preloadComponents()
  }, [])

  return (
    <Suspense fallback={<TutorialHeaderSkeleton />}>
      <TutorialHeader
        title={title}
        category={category}
        level={level}
        duration={duration}
        lessons={lessons}
        rating={rating}
        imageUrl={imageUrl}
      />
    </Suspense>
  )
}

interface TutorialContentProps {
  title: string
  description: string
  content: any
  youtubeUrl?: string
}

export function TutorialContentWrapper({
  title,
  description,
  content,
  youtubeUrl,
}: TutorialContentProps) {
  return (
    <Suspense fallback={<TutorialContentSkeleton />}>
      <TutorialContent
        title={title}
        description={description}
        content={content}
        youtubeUrl={youtubeUrl}
      />
    </Suspense>
  )
}

interface Prerequisite {
  requirement: string
}

interface LearningOutcome {
  outcome: string
}

interface TutorialSidebarProps {
  prerequisites?: Prerequisite[]
  learningOutcomes?: LearningOutcome[]
}

export function TutorialSidebarWrapper({ prerequisites, learningOutcomes }: TutorialSidebarProps) {
  return (
    <Suspense fallback={<TutorialSidebarSkeleton />}>
      <TutorialSidebar prerequisites={prerequisites} learningOutcomes={learningOutcomes} />
    </Suspense>
  )
}
