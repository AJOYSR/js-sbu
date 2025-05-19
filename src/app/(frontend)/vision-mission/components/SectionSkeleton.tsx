'use client'

import React from 'react'

export function SectionSkeleton() {
  return (
    <section className="py-20 relative overflow-hidden animate-pulse">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="w-32 h-6 bg-gray-700/20 rounded-full mx-auto mb-4"></div>
          <div className="h-10 bg-gray-700/20 rounded-lg w-3/4 mx-auto mb-6"></div>
          <div className="h-4 bg-gray-700/20 rounded w-full mx-auto mb-2"></div>
          <div className="h-4 bg-gray-700/20 rounded w-5/6 mx-auto mb-2"></div>
          <div className="h-4 bg-gray-700/20 rounded w-4/6 mx-auto"></div>
        </div>

        <div className="glass-card rounded-3xl p-10 shadow-xl relative overflow-hidden border border-white/5 backdrop-blur-md">
          <div className="h-20 bg-gray-700/10 rounded mb-8"></div>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-gray-700/20 flex-shrink-0 mr-3"></div>
              <div className="h-4 bg-gray-700/20 rounded w-full"></div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-gray-700/20 flex-shrink-0 mr-3"></div>
              <div className="h-4 bg-gray-700/20 rounded w-full"></div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-gray-700/20 flex-shrink-0 mr-3"></div>
              <div className="h-4 bg-gray-700/20 rounded w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HeroSkeleton() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-8 w-32 bg-white/20 rounded-full mx-auto mb-6 animate-pulse"></div>
          <div className="h-16 bg-white/10 rounded-lg mb-6 mx-auto animate-pulse"></div>
          <div className="h-24 bg-white/10 rounded-lg mb-10 max-w-3xl mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export function CardSkeleton() {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-10 shadow-xl animate-pulse h-64"></div>
        </div>
      </div>
    </div>
  )
}

export function ValuesSkeleton() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="h-8 w-32 bg-primary/10 rounded-full mx-auto mb-4 animate-pulse"></div>
            <div className="h-10 bg-gray-700/10 rounded-lg mb-8 w-3/4 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card rounded-2xl p-8 animate-pulse h-48"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
