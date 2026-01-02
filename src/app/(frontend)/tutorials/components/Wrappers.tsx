'use client'

import React, { Suspense, useEffect, useState } from 'react'
import { HeroSkeleton, TutorialsContentSkeleton, CTASkeleton } from './SectionSkeleton'
import { Tutorial } from '@/payload-types'

// Preload all components upfront
import dynamic from 'next/dynamic'

// Dynamically import components with optimized loading
const HeroSection = dynamic(() => import('./HeroSection'), {
  loading: () => <HeroSkeleton />,
  ssr: true,
})

const CTASection = dynamic(() => import('./CTASection'), {
  loading: () => <CTASkeleton />,
  ssr: true,
})

const TutorialsClient = dynamic(() => import('../tutorials-client'), {
  loading: () => <TutorialsContentSkeleton />,
  ssr: true,
})

// Improved preloading strategy
const preloadComponents = () => {
  // Prefetch all components right away
  import('./HeroSection')

  // Delay non-critical components slightly
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      import('../tutorials-client')
      import('./CTASection')
    }, 100)
  }
}

export function HeroSectionWrapper() {
  useEffect(() => {
    preloadComponents()
  }, [])

  return <Suspense fallback={<HeroSkeleton />}>{/* <HeroSection /> */}</Suspense>
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
  )
}

export function CTASectionWrapper() {
  return <CTASection />
}
