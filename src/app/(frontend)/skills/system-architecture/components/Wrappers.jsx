'use client'

import React, { Suspense, useEffect } from 'react'
import {
  HeroSkeleton,
  ArchitectureApproachesSkeleton,
  DesignPrinciplesSkeleton,
  BenefitsSkeleton,
  RelatedArticlesSkeleton,
  CTASkeleton,
} from './SectionSkeleton'

// Dynamically import components with lazy loading
const HeroSection = React.lazy(() => import('./HeroSection'))
const ArchitectureApproaches = React.lazy(() => import('./ArchitectureApproaches'))
const DesignPrinciples = React.lazy(() => import('./DesignPrinciples'))
const Benefits = React.lazy(() => import('./Benefits'))
const RelatedArticles = React.lazy(() => import('./RelatedArticles'))
const CTASection = React.lazy(() => import('./CTASection'))

// Preload next components after hero is loaded
const preloadComponents = () => {
  const preloadAfterHero = () => {
    import('./ArchitectureApproaches')
    import('./DesignPrinciples')
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
      {/* <HeroSection priority={true} /> */}
    </Suspense>
  )
}

export function ArchitectureApproachesWrapper() {
  useEffect(() => {
    // Preload next component
    if (typeof window !== 'undefined') {
      import('./Benefits')
    }
  }, [])

  return (
    <Suspense fallback={<ArchitectureApproachesSkeleton />}>
      <ArchitectureApproaches />
    </Suspense>
  )
}

export function DesignPrinciplesWrapper() {
  return (
    <Suspense fallback={<DesignPrinciplesSkeleton />}>
      <DesignPrinciples />
    </Suspense>
  )
}

export function BenefitsWrapper() {
  useEffect(() => {
    // Preload next components after viewing benefits
    if (typeof window !== 'undefined') {
      import('./RelatedArticles')
      import('./CTASection')
    }
  }, [])

  return (
    <Suspense fallback={<BenefitsSkeleton />}>
      <Benefits />
    </Suspense>
  )
}

export function RelatedArticlesWrapper({ posts }) {
  return (
    <Suspense fallback={<RelatedArticlesSkeleton />}>
      <RelatedArticles posts={posts} />
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
