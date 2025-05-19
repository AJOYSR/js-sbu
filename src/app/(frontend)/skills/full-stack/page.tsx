import React, { Suspense } from 'react'
import { Metadata } from 'next'
import { fetchRelatedPostsBySkill } from '@/utilities/fetchRelatedPostsBySkill'

// Import client components
import HeroSection from './components/HeroSection'
import FrontendTechnologies from './components/FrontendTechnologies'
import BackendTechnologies from './components/BackendTechnologies'
import DatabaseTechnologies from './components/DatabaseTechnologies'
import Services from './components/Services'
import Benefits from './components/Benefits'
import RelatedArticles from './components/RelatedArticles'
import CTASection from './components/CTASection'
import {
  HeroSkeleton,
  TechnologySkeleton,
  ServicesSkeleton,
  BenefitsSkeleton,
  RelatedArticlesSkeleton,
  CTASkeleton,
} from './components/SectionSkeleton'

export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export const metadata: Metadata = {
  title: 'Full Stack | JS SBU',
  description: 'Full Stack JS SBU website',
}

export default async function FullStackPage() {
  // Fetch related posts from the CMS
  const relatedPosts = await fetchRelatedPostsBySkill('full stack', 2)

  return (
    <div className="min-h-screen animate-fadeIn">
      {/* Hero Section */}
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>

      {/* Frontend Technologies Section */}
      <Suspense fallback={<TechnologySkeleton />}>
        <FrontendTechnologies />
      </Suspense>

      {/* Backend Technologies Section */}
      <Suspense fallback={<TechnologySkeleton />}>
        <BackendTechnologies />
      </Suspense>

      {/* Database Technologies Section */}
      <Suspense fallback={<TechnologySkeleton />}>
        <DatabaseTechnologies />
      </Suspense>

      {/* Services Section */}
      <Suspense fallback={<ServicesSkeleton />}>
        <Services />
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
