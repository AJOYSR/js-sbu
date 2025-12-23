import React, { Suspense } from 'react'
import { Metadata } from 'next'

// Import client components
import HeroSection from './components/HeroSection'
import PolicyContent from './components/PolicyContent'
import CTASection from './components/CTASection'
import { HeroSkeleton, PolicyContentSkeleton, CTASkeleton } from './components/SectionSkeleton'

export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export const metadata: Metadata = {
  title: 'Privacy Policy | JS SBU',
  description: 'Privacy Policy for JS SBU website',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen animate-fadeIn">
      <Suspense fallback={<HeroSkeleton />}>{/* <HeroSection /> */}</Suspense>

      <div className="container mx-auto px-4 py-20">
        <Suspense fallback={<PolicyContentSkeleton />}>
          <PolicyContent />
        </Suspense>
      </div>

      {/* Call to Action Footer */}
      <Suspense fallback={<CTASkeleton />}>
        <CTASection />
      </Suspense>
    </div>
  )
}
