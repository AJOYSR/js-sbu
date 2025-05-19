import React, { Suspense } from 'react'
import { Metadata } from 'next'
import { FileText, BookOpen, ShieldAlert, BarChart, Pencil, ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Import client components
import HeroSection from './components/HeroSection'
import TermsContent from './components/TermsContent'
import CTASection from './components/CTASection'
import { HeroSkeleton, TermsContentSkeleton, CTASkeleton } from './components/SectionSkeleton'

export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export const metadata: Metadata = {
  title: 'Terms of Service | JS SBU',
  description: 'Terms of Service for JS SBU website',
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen animate-fadeIn">
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>

      <div className="container mx-auto px-4 py-20">
        <Suspense fallback={<TermsContentSkeleton />}>
          <TermsContent />
        </Suspense>
      </div>

      {/* Call to Action Footer */}
      <Suspense fallback={<CTASkeleton />}>
        <CTASection />
      </Suspense>
    </div>
  )
}
