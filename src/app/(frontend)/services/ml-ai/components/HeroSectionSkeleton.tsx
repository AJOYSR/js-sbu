'use client'

import React from 'react'

export default function HeroSectionSkeleton() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-32 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6 w-40 h-8 animate-pulse"></div>
          <div className="h-14 bg-white/10 rounded-lg mb-6 w-full max-w-2xl mx-auto animate-pulse"></div>
          <div className="h-24 bg-white/10 rounded-lg mb-10 w-full max-w-3xl mx-auto animate-pulse"></div>
          <div className="flex justify-center">
            <div className="h-12 w-64 bg-white/10 rounded-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
