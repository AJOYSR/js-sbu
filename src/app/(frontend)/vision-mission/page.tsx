import React, { Suspense } from 'react'
import { Metadata } from 'next'

// Import client components
import HeroSection from './components/HeroSection'
import VisionSection from './components/VisionSection'
import MissionSection from './components/MissionSection'
import ValuesSection from './components/ValuesSection'
import CTASection from './components/CTASection'
import {
  SectionSkeleton,
  HeroSkeleton,
  CardSkeleton,
  ValuesSkeleton,
} from './components/SectionSkeleton'

export const metadata: Metadata = {
  title: 'Vision & Mission | JS SBU',
  description: 'Vision & Mission JS SBU website',
}

export default function VisionMissionPage() {
  return (
    <div className="min-h-screen animate-fadeIn">
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <VisionSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <MissionSection />
      </Suspense>

      <Suspense fallback={<ValuesSkeleton />}>
        <ValuesSection />
      </Suspense>

      <Suspense fallback={<CardSkeleton />}>
        <CTASection />
      </Suspense>
    </div>
  )
}
