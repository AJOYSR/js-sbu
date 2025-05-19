import React from 'react'
import { Metadata } from 'next'
import { fetchRelatedPostsBySkill } from '@/utilities/fetchRelatedPostsBySkill'

// Import wrapper components
import {
  HeroSectionWrapper,
  PerformanceAreasWrapper,
  OptimizationToolsWrapper,
  BenefitsWrapper,
  RelatedArticlesWrapper,
  CTASectionWrapper,
} from './components/Wrappers'

// Force static generation and revalidation
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

// Metadata for the page
export const metadata: Metadata = {
  title: 'Performance Optimization | JS SBU',
  description: 'Performance Optimization JS SBU website',
}

export default async function PerformanceOptimizationPage() {
  // Fetch related posts from the CMS
  const relatedPosts = await fetchRelatedPostsBySkill('Performance', 2)

  return (
    <div className="min-h-screen animate-fadeIn">
      {/* Hero Section with Background - Prioritized */}
      <HeroSectionWrapper />

      {/* Performance Areas Section */}
      <PerformanceAreasWrapper />

      {/* Optimization Tools Section */}
      <OptimizationToolsWrapper />

      {/* Benefits Section */}
      <BenefitsWrapper />

      {/* Related Articles Section */}
      <RelatedArticlesWrapper posts={relatedPosts} />

      {/* CTA Section */}
      <CTASectionWrapper />
    </div>
  )
}
