import React from 'react'
import { Metadata } from 'next'
import { fetchRelatedPostsBySkill } from '@/utilities/fetchRelatedPostsBySkill'

// Import wrapper components
import {
  HeroSectionWrapper,
  ArchitectureApproachesWrapper,
  DesignPrinciplesWrapper,
  BenefitsWrapper,
  RelatedArticlesWrapper,
  CTASectionWrapper,
} from './components/Wrappers'

// Prefetch the HeroSection component
import('./components/HeroSection')

// Force static generation and revalidation
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour
export const fetchCache = 'force-cache'
export const preferredRegion = 'auto'

// Metadata for the page
export const metadata: Metadata = {
  title: 'System Architecture | JS SBU',
  description:
    'Expert system architecture solutions for scalable, resilient, and maintainable application designs. Build future-proof systems with JS SBU.',
  openGraph: {
    title: 'System Architecture | JS SBU',
    description:
      'Expert system architecture solutions for scalable, resilient, and maintainable application designs.',
    type: 'website',
  },
}

export default async function SystemArchitecturePage() {
  // Fetch related posts from the CMS with error handling
  const relatedPosts = await fetchRelatedPostsBySkill('System Architecture', 2).catch(() => [])

  return (
    <div className="min-h-screen animate-fadeIn">
      {/* Hero Section - Prioritized */}
      <HeroSectionWrapper />

      {/* Main content */}
      <ArchitectureApproachesWrapper />
      <DesignPrinciplesWrapper />
      <BenefitsWrapper />

      {/* Related Articles Section */}
      <RelatedArticlesWrapper posts={relatedPosts} />

      {/* CTA Section */}
      <CTASectionWrapper />
    </div>
  )
}
