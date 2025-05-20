import React from 'react'
import { HeroSkeleton, TutorialsContentSkeleton, CTASkeleton } from './components/SectionSkeleton'

export default function TutorialsLoading() {
  return (
    <div className="min-h-screen">
      <HeroSkeleton />

      <div className="container mx-auto px-4 py-16 relative">
        <TutorialsContentSkeleton />
        <CTASkeleton />
      </div>
    </div>
  )
}
