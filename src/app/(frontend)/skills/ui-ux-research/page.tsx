import React, { Suspense } from 'react'
import { Metadata } from 'next'
import { fetchRelatedPostsBySkill } from '@/utilities/fetchRelatedPostsBySkill'

// Import client components
import HeroSection from './components/HeroSection'
import ResearchMethodologies from './components/ResearchMethodologies'
import DesignProcess from './components/DesignProcess'
import Benefits from './components/Benefits'
import RelatedArticles from './components/RelatedArticles'
import CTASection from './components/CTASection'
import {
  HeroSkeleton,
  ResearchMethodologiesSkeleton,
  DesignProcessSkeleton,
  BenefitsSkeleton,
  RelatedArticlesSkeleton,
  CTASkeleton,
} from './components/SectionSkeleton'

export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export const metadata: Metadata = {
  title: 'UI/UX Research | JS SBU',
  description: 'UI/UX Research JS SBU website',
}

export default async function UIUXResearchPage() {
  // Fetch related posts from the CMS
  const relatedPosts = await fetchRelatedPostsBySkill('UI/UX', 2)

  return (
    <div className="min-h-screen animate-fadeIn">
      {/* Hero Section */}
      <Suspense fallback={<HeroSkeleton />}>{/* <HeroSection /> */}</Suspense>

      {/* Research Methodologies Section */}
      <Suspense fallback={<ResearchMethodologiesSkeleton />}>
        <ResearchMethodologies />
      </Suspense>

      {/* Design Process Section */}
      <Suspense fallback={<DesignProcessSkeleton />}>
        <DesignProcess />
      </Suspense>

      {/* Benefits Section */}
      <Suspense fallback={<BenefitsSkeleton />}>
        <Benefits />
      </Suspense>

      {/* Related Articles Section - Dynamic from CMS */}
      <Suspense fallback={<RelatedArticlesSkeleton />}>
        <RelatedArticles posts={relatedPosts} />
      </Suspense>

      {/* CTA Section */}
      <Suspense fallback={<CTASkeleton />}>
        <CTASection />
      </Suspense>
    </div>
  )
}
