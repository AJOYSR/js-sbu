import React, { Suspense } from 'react'
import { Metadata } from 'next'
import { fetchRelatedPostsBySkill } from '@/utilities/fetchRelatedPostsBySkill'

// Import client components
import HeroSection from './components/HeroSection'
import CoreTechnologies from './components/CoreTechnologies'
import CloudServices from './components/CloudServices'
import Benefits from './components/Benefits'
import RelatedArticles from './components/RelatedArticles'
import CTASection from './components/CTASection'
import {
  HeroSkeleton,
  CoreTechnologiesSkeleton,
  CloudServicesSkeleton,
  BenefitsSkeleton,
  RelatedArticlesSkeleton,
  CTASkeleton,
} from './components/SectionSkeleton'

export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export const metadata: Metadata = {
  title: 'Cloud Native | JS SBU',
  description: 'Cloud Native JS SBU website',
}

export default async function CloudNativePage() {
  // Fetch related posts from the CMS
  const relatedPosts = await fetchRelatedPostsBySkill('Cloud Native', 2)

  return (
    <div className="min-h-screen animate-fadeIn">
      {/* Hero Section */}
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>

      {/* Core Technologies Section */}
      <Suspense fallback={<CoreTechnologiesSkeleton />}>
        <CoreTechnologies />
      </Suspense>

      {/* Cloud Services Section */}
      <Suspense fallback={<CloudServicesSkeleton />}>
        <CloudServices />
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
