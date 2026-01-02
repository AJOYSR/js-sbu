import React, { Suspense } from 'react'
import { getRecentProjects } from '@/utilities/getRecentProjects'
import RelatedProjects from '@/components/RelatedProjects'
import { Metadata } from 'next'

// Import client components
import HeroSection from './components/HeroSection'
import TechnologiesSection from './components/TechnologiesSection'
import ServicesSection from './components/ServicesSection'
import ProcessSection from './components/ProcessSection'
import FeaturesSection from './components/FeaturesSection'
import CTASection from './components/CTASection'

// Import skeleton components
import {
  HeroSkeleton,
  TechnologiesSkeleton,
  ServicesSkeleton,
  ProcessSkeleton,
  FeaturesSkeleton,
  CTASkeleton,
  RelatedProjectsSkeleton,
} from './components/SectionSkeleton'

export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export const metadata: Metadata = {
  title: 'Mobile App | JS SBU',
  description: 'Mobile App JS SBU website',
}

export default async function MobileAppPage() {
  const projects = await getRecentProjects('mobile-development')

  return (
    <div className="min-h-screen animate-fadeIn overflow-hidden">
      {/* Hero Section with Background */}
      <Suspense fallback={<HeroSkeleton />}>{/* <HeroSection /> */}</Suspense>

      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Technologies Section */}
        <Suspense fallback={<TechnologiesSkeleton />}>
          <TechnologiesSection />
        </Suspense>

        {/* Services Section */}
        <Suspense fallback={<ServicesSkeleton />}>
          <ServicesSection />
        </Suspense>

        {/* Process Section */}
        <Suspense fallback={<ProcessSkeleton />}>
          <ProcessSection />
        </Suspense>

        {/* Features Grid */}
        <Suspense fallback={<FeaturesSkeleton />}>
          <FeaturesSection />
        </Suspense>

        {/* Related Projects */}
        <Suspense fallback={<RelatedProjectsSkeleton />}>
          <RelatedProjects projects={projects} />
        </Suspense>

        {/* CTA Section */}
        <Suspense fallback={<CTASkeleton />}>
          <CTASection />
        </Suspense>
      </div>
    </div>
  )
}
