'use client'

import React, { Suspense } from 'react'
import {
  HeroSkeleton,
  PerformanceAreasSkeleton,
  OptimizationToolsSkeleton,
  BenefitsSkeleton,
  RelatedArticlesSkeleton,
  CTASkeleton,
} from './SectionSkeleton'

// Dynamically import components
import HeroSection from './HeroSection'
import PerformanceAreas from './PerformanceAreas'
import OptimizationTools from './OptimizationTools'
import Benefits from './Benefits'
import RelatedArticles from './RelatedArticles'
import CTASection from './CTASection'

export function HeroSectionWrapper() {
  return (
    <Suspense fallback={<HeroSkeleton />}>
      <HeroSection priority={true} />
    </Suspense>
  )
}

export function PerformanceAreasWrapper() {
  return (
    <Suspense fallback={<PerformanceAreasSkeleton />}>
      <PerformanceAreas />
    </Suspense>
  )
}

export function OptimizationToolsWrapper() {
  return (
    <Suspense fallback={<OptimizationToolsSkeleton />}>
      <OptimizationTools />
    </Suspense>
  )
}

export function BenefitsWrapper() {
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
