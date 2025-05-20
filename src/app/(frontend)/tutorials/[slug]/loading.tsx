import React from 'react'
import {
  TutorialHeaderSkeleton,
  TutorialContentSkeleton,
  TutorialSidebarSkeleton,
} from './components/SectionSkeleton'

export default function TutorialLoading() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <TutorialHeaderSkeleton />

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <TutorialContentSkeleton />
          <TutorialSidebarSkeleton />
        </div>
      </div>
    </div>
  )
}
