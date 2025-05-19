'use client'

import React from 'react'

export function HeroSkeleton() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-background animate-pulse">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-8 w-32 bg-white/20 rounded-full mx-auto mb-6"></div>
          <div className="h-16 bg-white/10 rounded-lg mb-6 mx-auto"></div>
          <div className="h-24 bg-white/10 rounded-lg mb-10 max-w-3xl mx-auto"></div>
        </div>
      </div>
    </section>
  )
}

export function TutorialsContentSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Filter skeleton */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <div className="h-8 w-40 bg-primary/10 rounded-full mx-auto mb-4"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-10 w-32 bg-white/10 rounded-full"></div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-10 w-24 bg-white/10 rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Search bar skeleton */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="h-12 bg-white/10 rounded-full w-full"></div>
      </div>

      {/* Tutorials grid skeleton */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="glass-card rounded-xl shadow-md overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-700/20 rounded-t-lg"></div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-4 w-20 bg-gray-700/20 rounded-full"></div>
                <div className="h-4 w-16 bg-gray-700/20 rounded-full"></div>
              </div>
              <div className="h-6 bg-gray-700/20 rounded-lg mb-3 w-3/4"></div>
              <div className="h-4 bg-gray-700/10 rounded-lg mb-2 w-full"></div>
              <div className="h-4 bg-gray-700/10 rounded-lg mb-5 w-2/3"></div>
              <div className="flex items-center justify-between">
                <div className="h-4 w-24 bg-gray-700/20 rounded-full"></div>
                <div className="h-4 w-16 bg-gray-700/20 rounded-full"></div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200/20 flex justify-end">
                <div className="h-3 w-24 bg-gray-700/20 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination skeleton */}
      <div className="flex justify-center mt-12">
        <div className="flex items-center gap-2">
          <div className="h-10 w-20 bg-white/10 rounded-lg"></div>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-10 w-10 bg-white/10 rounded-lg"></div>
          ))}
          <div className="h-10 w-20 bg-white/10 rounded-lg"></div>
        </div>
      </div>
    </div>
  )
}

export function CTASkeleton() {
  return (
    <section className="py-20 mt-8 relative">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-3xl p-10 md:p-16 animate-pulse">
          <div className="text-center">
            <div className="h-6 bg-primary/10 rounded-full w-40 mx-auto mb-4"></div>
            <div className="h-10 bg-gray-700/20 rounded-lg w-3/4 mx-auto mb-6"></div>
            <div className="h-16 bg-gray-700/10 rounded-lg mb-10 max-w-3xl mx-auto"></div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="h-14 bg-primary/20 rounded-xl w-48 mx-auto sm:mx-0"></div>
              <div className="h-14 bg-white/10 rounded-xl w-48 mx-auto sm:mx-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
