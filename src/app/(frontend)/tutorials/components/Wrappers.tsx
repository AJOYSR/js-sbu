'use client'

import React, { Suspense, useEffect } from 'react'
import { HeroSkeleton, TutorialsContentSkeleton, CTASkeleton } from './SectionSkeleton'
import { Tutorial } from '@/payload-types'

// Dynamically import components with lazy loading
const HeroSection = React.lazy(() => import('./HeroSection'))
const CTASection = React.lazy(() => import('./CTASection'))
const TutorialsClient = React.lazy(() => import('../tutorials-client'))

// Preload components strategically
const preloadComponents = () => {
  const preloadAfterHero = () => {
    import('../tutorials-client')
    import('./CTASection')
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

export function HeroSectionWrapper() {
  useEffect(() => {
    preloadComponents()
  }, [])

  return (
    <Suspense fallback={<HeroSkeleton />}>
      <HeroSection />
    </Suspense>
  )
}

interface TutorialsClientWrapperProps {
  tutorials: Tutorial[]
  categories: string[]
  levels: string[]
  currentCategory: string
  currentLevel: string
  currentSearch: string
  currentPage: number
  totalPages: number
  totalItems: number
}

export function TutorialsClientWrapper({
  tutorials,
  categories,
  levels,
  currentCategory,
  currentLevel,
  currentSearch,
  currentPage,
  totalPages,
  totalItems,
}: TutorialsClientWrapperProps) {
  return (
    <Suspense fallback={<TutorialsContentSkeleton />}>
      <div className="animation-delay-400 animate-fadeIn">
        <TutorialsClient
          tutorials={tutorials}
          categories={categories}
          levels={levels}
          currentCategory={currentCategory}
          currentLevel={currentLevel}
          currentSearch={currentSearch}
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
        />
      </div>
    </Suspense>
  )
}

export function CTASectionWrapper() {
  return (
    <Suspense fallback={<CTASkeleton />}>
      <CTASection />
    </Suspense>
  )
}
