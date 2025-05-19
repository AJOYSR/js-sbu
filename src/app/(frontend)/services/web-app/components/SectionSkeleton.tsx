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

export function TechnologiesSkeleton() {
  return (
    <section className="py-20 animate-pulse">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="h-8 w-32 bg-primary/10 rounded-full mx-auto mb-4"></div>
          <div className="h-10 bg-gray-700/10 rounded-lg mb-6 w-1/2 mx-auto"></div>
          <div className="h-6 bg-gray-700/10 rounded-lg mb-16 w-2/3 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="glass-card rounded-2xl p-8 border border-white/5">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl mb-6"></div>
              <div className="h-6 bg-gray-700/10 rounded-lg mb-3 w-1/2"></div>
              <div className="h-4 bg-gray-700/10 rounded-lg mb-5 w-3/4"></div>
              <div className="space-y-3">
                {[1, 2, 3].map((j) => (
                  <div key={j} className="flex items-start">
                    <div className="w-5 h-5 bg-primary/10 rounded-full mr-3 mt-0.5"></div>
                    <div className="h-3 bg-gray-700/10 rounded-lg w-2/3"></div>
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
    <section className="py-20 bg-gradient-to-b from-card/30 to-background animate-pulse">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="h-8 w-32 bg-primary/10 rounded-full mx-auto mb-4"></div>
          <div className="h-10 bg-gray-700/10 rounded-lg mb-6 w-1/2 mx-auto"></div>
          <div className="h-6 bg-gray-700/10 rounded-lg mb-16 w-2/3 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="glass-card rounded-2xl p-8 border border-white/5">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl mb-6"></div>
              <div className="h-6 bg-gray-700/10 rounded-lg mb-3 w-1/2"></div>
              <div className="h-4 bg-gray-700/10 rounded-lg mb-6 w-3/4"></div>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="flex items-start">
                    <div className="w-6 h-6 bg-primary/10 rounded-full mr-3 mt-0.5"></div>
                    <div className="h-4 bg-gray-700/10 rounded-lg w-3/4"></div>
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

export function ProcessSkeleton() {
  return (
    <section className="py-20 animate-pulse">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-8 w-32 bg-primary/10 rounded-full mx-auto mb-4"></div>
            <div className="h-10 bg-gray-700/10 rounded-lg mb-6 w-1/2 mx-auto"></div>
            <div className="h-6 bg-gray-700/10 rounded-lg mb-16 w-2/3 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full"></div>
                <div className="glass-card p-6 rounded-xl flex-1 border border-white/5">
                  <div className="h-6 bg-gray-700/10 rounded-lg mb-3 w-1/3"></div>
                  <div className="h-4 bg-gray-700/10 rounded-lg w-full"></div>
                  <div className="h-4 bg-gray-700/10 rounded-lg w-3/4 mt-1"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProjectsSkeleton() {
  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background animate-pulse">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="h-8 w-32 bg-primary/10 rounded-full mx-auto mb-4"></div>
          <div className="h-10 bg-gray-700/10 rounded-lg mb-6 w-1/2 mx-auto"></div>
          <div className="h-6 bg-gray-700/10 rounded-lg mb-16 w-2/3 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass-card overflow-hidden rounded-xl">
              <div className="h-48 bg-gray-700/10"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-700/10 rounded-lg mb-2 w-3/4"></div>
                <div className="h-4 bg-gray-700/10 rounded-lg mb-4 w-full"></div>
                <div className="h-4 bg-gray-700/10 rounded-lg w-1/3"></div>
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
    <section className="py-20 animate-pulse">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-10 md:p-16 border border-white/10 bg-card">
            <div className="text-center">
              <div className="h-8 w-48 bg-primary/10 rounded-full mx-auto mb-4"></div>
              <div className="h-10 bg-gray-700/10 rounded-lg mb-6 w-3/4 mx-auto"></div>
              <div className="h-6 bg-gray-700/10 rounded-lg mb-10 w-5/6 mx-auto"></div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div className="h-14 bg-primary/20 rounded-xl w-56 mx-auto sm:mx-0"></div>
                <div className="h-14 bg-white/10 rounded-xl w-56 mx-auto sm:mx-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
