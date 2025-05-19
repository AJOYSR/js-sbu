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
          <div className="h-12 w-48 bg-primary/20 rounded-xl mx-auto"></div>
        </div>
      </div>
    </section>
  )
}

export function TechnologySkeleton() {
  return (
    <section className="py-20 relative animate-pulse">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="h-8 w-40 bg-primary/10 rounded-full mx-auto mb-6"></div>
          <div className="h-12 bg-white/10 rounded-lg mb-6 w-3/4 mx-auto"></div>
          <div className="h-6 bg-white/10 rounded-lg mb-10 max-w-3xl mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass-card rounded-2xl p-8 shadow-xl">
              <div className="h-14 w-14 bg-primary/10 rounded-2xl mb-6"></div>
              <div className="h-8 bg-gray-700/20 rounded mb-4 w-1/2"></div>
              <div className="h-20 bg-gray-700/10 rounded mb-6"></div>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 mr-3 flex-shrink-0"></div>
                    <div className="h-4 bg-gray-700/10 rounded w-full"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServicesSkeleton() {
  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background relative animate-pulse">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="h-8 w-40 bg-primary/10 rounded-full mx-auto mb-6"></div>
          <div className="h-12 bg-white/10 rounded-lg mb-6 w-3/4 mx-auto"></div>
          <div className="h-6 bg-white/10 rounded-lg mb-10 max-w-3xl mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="glass-card rounded-2xl p-8 shadow-xl">
              <div className="h-8 bg-gray-700/20 rounded mb-4 w-1/2"></div>
              <div className="h-16 bg-gray-700/10 rounded mb-6"></div>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 mr-3 flex-shrink-0"></div>
                    <div className="h-4 bg-gray-700/10 rounded w-full"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BenefitsSkeleton() {
  return (
    <section className="py-20 relative animate-pulse">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="h-8 w-40 bg-primary/10 rounded-full mx-auto mb-6"></div>
          <div className="h-12 bg-white/10 rounded-lg mb-6 w-3/4 mx-auto"></div>
          <div className="h-6 bg-white/10 rounded-lg mb-10 max-w-3xl mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="glass-card rounded-2xl p-8 shadow-xl">
              <div className="h-14 w-14 bg-primary/10 rounded-2xl mb-6"></div>
              <div className="h-8 bg-gray-700/20 rounded mb-4"></div>
              <div className="h-12 bg-gray-700/10 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function RelatedArticlesSkeleton() {
  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background relative animate-pulse">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="h-8 w-40 bg-primary/10 rounded-full mx-auto mb-6"></div>
          <div className="h-12 bg-white/10 rounded-lg mb-6 w-3/4 mx-auto"></div>
          <div className="h-6 bg-white/10 rounded-lg mb-10 max-w-3xl mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden shadow-xl">
              <div className="h-48 bg-gray-800"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-700/20 rounded mb-2 w-1/3"></div>
                <div className="h-8 bg-gray-700/20 rounded mb-4"></div>
                <div className="h-20 bg-gray-700/10 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTASkeleton() {
  return (
    <section className="py-20 relative animate-pulse">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-10 md:p-16">
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
      </div>
    </section>
  )
}
