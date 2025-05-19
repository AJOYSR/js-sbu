'use client'

import React from 'react'

export function HeroSkeleton() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-background overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block w-40 h-6 bg-gray-700/40 rounded-full mb-6 mx-auto"></div>
          <div className="h-14 bg-gray-700/40 rounded-xl mb-6 max-w-lg mx-auto"></div>
          <div className="h-24 bg-gray-700/40 rounded-xl mb-10 max-w-2xl mx-auto"></div>
          <div className="h-12 w-48 bg-gray-700/40 rounded-xl mx-auto"></div>
        </div>
      </div>
    </section>
  )
}

export function PerformanceAreasSkeleton() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block w-40 h-6 bg-gray-200/10 rounded-full mb-4 mx-auto"></div>
          <div className="h-10 bg-gray-200/10 rounded-xl mb-6 max-w-md mx-auto"></div>
          <div className="h-12 bg-gray-200/10 rounded-xl mb-6 max-w-xl mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl overflow-hidden shadow-xl border border-white/5 h-96"
            >
              <div className="p-8 relative">
                <div className="w-14 h-14 bg-gray-200/10 rounded-2xl mb-6"></div>
                <div className="h-6 bg-gray-200/10 rounded-md mb-3 w-2/3"></div>
                <div className="h-12 bg-gray-200/10 rounded-md mb-6"></div>
                <div className="space-y-4">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="flex items-start">
                      <div className="w-6 h-6 bg-gray-200/10 rounded-full mr-3"></div>
                      <div className="h-4 bg-gray-200/10 rounded-md w-3/4"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function OptimizationToolsSkeleton() {
  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block w-40 h-6 bg-gray-200/10 rounded-full mb-4 mx-auto"></div>
          <div className="h-10 bg-gray-200/10 rounded-xl mb-6 max-w-md mx-auto"></div>
          <div className="h-12 bg-gray-200/10 rounded-xl mb-6 max-w-xl mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl overflow-hidden shadow-xl border border-white/5 h-80"
            >
              <div className="p-8 relative">
                <div className="h-6 bg-gray-200/10 rounded-md mb-3 w-2/3"></div>
                <div className="h-12 bg-gray-200/10 rounded-md mb-6"></div>
                <div className="space-y-3">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="flex items-start">
                      <div className="w-6 h-6 bg-gray-200/10 rounded-full mr-3"></div>
                      <div className="h-4 bg-gray-200/10 rounded-md w-3/4"></div>
                    </div>
                  ))}
                </div>
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
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block w-40 h-6 bg-gray-200/10 rounded-full mb-4 mx-auto"></div>
          <div className="h-10 bg-gray-200/10 rounded-xl mb-6 max-w-md mx-auto"></div>
          <div className="h-12 bg-gray-200/10 rounded-xl mb-6 max-w-xl mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl overflow-hidden shadow-xl border border-white/5 h-60"
            >
              <div className="p-8 relative">
                <div className="w-14 h-14 bg-gray-200/10 rounded-2xl mb-6"></div>
                <div className="h-6 bg-gray-200/10 rounded-md mb-3 w-2/3"></div>
                <div className="h-12 bg-gray-200/10 rounded-md"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function RelatedArticlesSkeleton() {
  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block w-40 h-6 bg-gray-200/10 rounded-full mb-4 mx-auto"></div>
          <div className="h-10 bg-gray-200/10 rounded-xl mb-6 max-w-md mx-auto"></div>
          <div className="h-12 bg-gray-200/10 rounded-xl mb-6 max-w-xl mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl overflow-hidden shadow-xl border border-white/5 h-80"
            >
              <div className="aspect-video w-full bg-gray-200/10"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-200/10 rounded-md mb-3 w-2/3"></div>
                <div className="h-12 bg-gray-200/10 rounded-md mb-4"></div>
                <div className="h-4 bg-gray-200/10 rounded-md w-1/4"></div>
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
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-10 md:p-16 shadow-xl relative overflow-hidden border border-white/10 backdrop-blur-md">
            <div className="text-center relative z-10">
              <div className="inline-block w-40 h-6 bg-gray-200/10 rounded-full mb-4 mx-auto"></div>
              <div className="h-10 bg-gray-200/10 rounded-xl mb-6 max-w-md mx-auto"></div>
              <div className="h-16 bg-gray-200/10 rounded-xl mb-10 max-w-xl mx-auto"></div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div className="h-12 w-48 bg-gray-200/10 rounded-xl mx-auto"></div>
                <div className="h-12 w-48 bg-gray-200/10 rounded-xl mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
