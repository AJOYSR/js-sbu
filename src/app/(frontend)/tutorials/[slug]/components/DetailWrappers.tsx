'use client'

import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import {
  TutorialHeaderSkeleton,
  TutorialContentSkeleton,
  TutorialSidebarSkeleton,
} from './SectionSkeleton'

// Dynamically import components with optimized loading
const TutorialHeader = dynamic(() => import('./TutorialHeader'), {
  loading: () => <TutorialHeaderSkeleton />,
  ssr: true,
})

const TutorialContent = dynamic(() => import('./TutorialContent'), {
  loading: () => <TutorialContentSkeleton />,
  ssr: true,
})

const TutorialSidebar = dynamic(() => import('./TutorialSidebar'), {
  loading: () => <TutorialSidebarSkeleton />,
  ssr: true,
})

// Improved preloading strategy
const preloadComponents = () => {
  // Prefetch header component immediately
  import('./TutorialHeader')

  // Slightly delay loading content components
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      import('./TutorialContent')
      import('./TutorialSidebar')
    }, 100)
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
    <TutorialHeader
      title={title}
      category={category}
      level={level}
      duration={duration}
      lessons={lessons}
      rating={rating}
      imageUrl={imageUrl}
    />
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
    <TutorialContent
      title={title}
      description={description}
      content={content}
      youtubeUrl={youtubeUrl}
    />
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
  return <TutorialSidebar prerequisites={prerequisites} learningOutcomes={learningOutcomes} />
}
