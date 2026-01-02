import React, { Suspense } from 'react'
import { getRecentProjects } from '@/utilities/getRecentProjects'
import { Metadata } from 'next'

// Import client components
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import ProcessSection from './components/ProcessSection'
import BenefitsSection from './components/BenefitsSection'
import ProjectsSection from './components/ProjectsSection'
import CTASection from './components/CTASection'

// Import skeleton components
import {
  HeroSkeleton,
  ServicesSkeleton,
  ProcessSkeleton,
  BenefitsSkeleton,
  ProjectsSkeleton,
  CTASkeleton,
} from './components/SectionSkeleton'

export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export const metadata: Metadata = {
  title: 'UI/UX & Product Design | JS SBU',
  description: 'UI/UX & Product Design JS SBU website',
}

export default async function UIUXPage() {
  const projects = await getRecentProjects('ui-ux-design')

  return (
    <div className="min-h-screen animate-fadeIn">
      {/* Hero Section */}
      <Suspense fallback={<HeroSkeleton />}>{/* <HeroSection /> */}</Suspense>

      {/* Services Section */}
      <Suspense fallback={<ServicesSkeleton />}>
        <ServicesSection />
      </Suspense>

      {/* Process Section */}
      <Suspense fallback={<ProcessSkeleton />}>
        <ProcessSection />
      </Suspense>

      {/* Benefits Section */}
      <Suspense fallback={<BenefitsSkeleton />}>
        <BenefitsSection />
      </Suspense>

      {/* Projects Section */}
      <Suspense fallback={<ProjectsSkeleton />}>
        <ProjectsSection projects={projects} />
      </Suspense>

      {/* CTA Section */}
      <Suspense fallback={<CTASkeleton />}>
        <CTASection />
      </Suspense>
    </div>
  )
}
