import React, { Suspense } from 'react'
import { getRecentProjects } from '@/utilities/getRecentProjects'
import { Metadata } from 'next'

// Import client components
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import TechnologiesSection from './components/TechnologiesSection'
import ApplicationsSection from './components/ApplicationsSection'
import ProcessSection from './components/ProcessSection'
import CTASection from './components/CTASection'
import RelatedProjectsSection from './components/RelatedProjectsSection'

// Import skeleton components
import HeroSectionSkeleton from './components/HeroSectionSkeleton'
import ServicesSectionSkeleton from './components/ServicesSectionSkeleton'
import TechnologiesSectionSkeleton from './components/TechnologiesSectionSkeleton'
import ApplicationsSectionSkeleton from './components/ApplicationsSectionSkeleton'
import ProcessSectionSkeleton from './components/ProcessSectionSkeleton'
import RelatedProjectsSkeleton from './components/RelatedProjectsSkeleton'
import CTASectionSkeleton from './components/CTASectionSkeleton'

export const metadata: Metadata = {
  title: 'ML & AI | JS SBU',
  description: 'ML & AI JS SBU website',
}

// Force static rendering with revalidation every 24 hours
export const revalidate = 86400
export const dynamic = 'force-static'

export default async function MLAIPage() {
  const projects = await getRecentProjects('machine-learning-ai')

  return (
    <div className="min-h-screen">
      {/* Hero Section with Suspense */}
      <Suspense fallback={<HeroSectionSkeleton />}>
        <HeroSection />
      </Suspense>

      {/* Services Section with Suspense */}
      <Suspense fallback={<ServicesSectionSkeleton />}>
        <ServicesSection />
      </Suspense>

      {/* Technologies Section with Suspense */}
      <Suspense fallback={<TechnologiesSectionSkeleton />}>
        <TechnologiesSection />
      </Suspense>

      {/* Applications Section with Suspense */}
      <Suspense fallback={<ApplicationsSectionSkeleton />}>
        <ApplicationsSection />
      </Suspense>

      {/* Process Section with Suspense */}
      <Suspense fallback={<ProcessSectionSkeleton />}>
        <ProcessSection />
      </Suspense>

      {/* Related Projects with Suspense */}
      {projects && projects.length > 0 && (
        <Suspense fallback={<RelatedProjectsSkeleton />}>
          <RelatedProjectsSection projects={projects} />
        </Suspense>
      )}

      {/* CTA Section with Suspense */}
      <Suspense fallback={<CTASectionSkeleton />}>
        <CTASection />
      </Suspense>
    </div>
  )
}
