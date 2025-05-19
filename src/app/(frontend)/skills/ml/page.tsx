import React, { Suspense } from 'react'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { fetchRelatedPostsBySkill } from '@/utilities/fetchRelatedPostsBySkill'
import {
  HeroSkeleton,
  MLTechnologiesSkeleton,
  MLFrameworksSkeleton,
  BenefitsSkeleton,
  RelatedArticlesSkeleton,
  CTASkeleton,
} from './components/SectionSkeleton'

// Dynamic imports with lazy loading
const HeroSection = dynamic(() => import('./components/HeroSection'), {
  loading: () => <HeroSkeleton />,
})

const MLTechnologies = dynamic(() => import('./components/MLTechnologies'), {
  loading: () => <MLTechnologiesSkeleton />,
})

const MLFrameworks = dynamic(() => import('./components/MLFrameworks'), {
  loading: () => <MLFrameworksSkeleton />,
})

const Benefits = dynamic(() => import('./components/Benefits'), {
  loading: () => <BenefitsSkeleton />,
})

const RelatedArticles = dynamic(() => import('./components/RelatedArticles'), {
  loading: () => <RelatedArticlesSkeleton />,
})

const CTASection = dynamic(() => import('./components/CTASection'), {
  loading: () => <CTASkeleton />,
})

export const revalidate = 3600 // Revalidate every hour

export const metadata: Metadata = {
  title: 'Machine Learning | JS SBU',
  description: 'Machine Learning JS SBU website',
}

export default async function MachineLearningPage() {
  // Fetch related posts from the CMS
  const relatedPosts = await fetchRelatedPostsBySkill('Machine Learning', 2)

  return (
    <div className="min-h-screen animate-fadeIn">
      {/* Hero Section */}
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>

      {/* ML Technologies Section */}
      <Suspense fallback={<MLTechnologiesSkeleton />}>
        <MLTechnologies />
      </Suspense>

      {/* ML Frameworks Section */}
      <Suspense fallback={<MLFrameworksSkeleton />}>
        <MLFrameworks />
      </Suspense>

      {/* Benefits Section */}
      <Suspense fallback={<BenefitsSkeleton />}>
        <Benefits />
      </Suspense>

      {/* Related Articles Section */}
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
