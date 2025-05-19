import React, { Suspense } from 'react'
import { Metadata } from 'next'

// Import client components
import AboutHero from './components/AboutHero'
import MissionSection from './components/MissionSection'
import TechnologiesSection from './components/TechnologiesSection'
import TeamOverview from './components/TeamOverview'
import CTASection from './components/CTASection'
import { SectionSkeleton } from './components/SectionSkeleton'

export const metadata: Metadata = {
  title: 'About | JS SBU',
  description: 'About JS SBU website',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen animate-fadeIn">
      <AboutHero />

      <Suspense fallback={<SectionSkeleton />}>
        <MissionSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <TechnologiesSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <TeamOverview />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <CTASection />
      </Suspense>
    </div>
  )
}
