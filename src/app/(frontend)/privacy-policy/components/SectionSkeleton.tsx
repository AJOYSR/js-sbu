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

export function PolicyContentSkeleton() {
  return (
    <div className="max-w-4xl mx-auto animate-pulse">
      <div className="glass-card rounded-2xl p-6 md:p-10 shadow-xl border border-white/10">
        <div className="space-y-10">
          {[1, 2, 3, 4, 5].map((i) => (
            <React.Fragment key={i}>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl h-12 w-12"></div>
                <div className="flex-1">
                  <div className="h-8 bg-gray-700/20 rounded mb-4 w-3/4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-700/10 rounded w-full"></div>
                    <div className="h-4 bg-gray-700/10 rounded w-full"></div>
                    <div className="h-4 bg-gray-700/10 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
              {i < 5 && (
                <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export function CTASkeleton() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
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
      </div>
    </section>
  )
}
