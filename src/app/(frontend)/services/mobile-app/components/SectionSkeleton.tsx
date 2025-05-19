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
    <div className="mb-20 animate-pulse">
      <div className="h-10 bg-gray-700/10 rounded-lg mb-4 w-1/4 mx-auto"></div>
      <div className="h-6 bg-gray-700/10 rounded-lg mb-12 w-1/2 mx-auto"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="glass-card p-8 rounded-xl shadow-md border border-border/40">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 mr-4 bg-primary/10 rounded-lg"></div>
              <div className="h-6 bg-gray-700/10 rounded-lg w-1/2"></div>
            </div>
            <div className="h-4 bg-gray-700/10 rounded-lg mb-4 w-full"></div>
            <div className="h-4 bg-gray-700/10 rounded-lg mb-4 w-3/4"></div>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((j) => (
                <div key={j} className="h-3 bg-gray-700/10 rounded-lg w-4/5"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ServicesSkeleton() {
  return (
    <div className="mb-20 animate-pulse">
      <div className="h-10 bg-gray-700/10 rounded-lg mb-4 w-1/4 mx-auto"></div>
      <div className="h-6 bg-gray-700/10 rounded-lg mb-12 w-1/2 mx-auto"></div>
      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-8 rounded-xl bg-card border border-gray-700/10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 mr-4 bg-primary/10 rounded-lg"></div>
              <div className="h-6 bg-gray-700/10 rounded-lg w-1/2"></div>
            </div>
            <div className="h-4 bg-gray-700/10 rounded-lg mb-6 w-full"></div>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((j) => (
                <div key={j} className="flex items-center">
                  <div className="w-5 h-5 bg-primary/10 rounded-full mr-2"></div>
                  <div className="h-3 bg-gray-700/10 rounded-lg w-4/5"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ProcessSkeleton() {
  return (
    <div className="mb-20 animate-pulse">
      <div className="h-10 bg-gray-700/10 rounded-lg mb-4 w-1/4 mx-auto"></div>
      <div className="h-6 bg-gray-700/10 rounded-lg mb-12 w-1/2 mx-auto"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="relative bg-card p-8 rounded-xl border border-border/40">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/20 rounded-lg"></div>
            <div className="h-6 bg-gray-700/10 rounded-lg mb-3 w-1/2 mt-6"></div>
            <div className="h-4 bg-gray-700/10 rounded-lg w-full"></div>
            <div className="h-4 bg-gray-700/10 rounded-lg w-3/4 mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function FeaturesSkeleton() {
  return (
    <div className="mb-20 animate-pulse">
      <div className="h-10 bg-gray-700/10 rounded-lg mb-4 w-1/4 mx-auto"></div>
      <div className="h-6 bg-gray-700/10 rounded-lg mb-12 w-1/2 mx-auto"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-card p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 mr-3 bg-primary/10 rounded-lg"></div>
              <div className="h-6 bg-gray-700/10 rounded-lg w-1/2"></div>
            </div>
            <div className="h-4 bg-gray-700/10 rounded-lg w-full"></div>
            <div className="h-4 bg-gray-700/10 rounded-lg w-4/5 mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function CTASkeleton() {
  return (
    <div className="max-w-5xl mx-auto animate-pulse">
      <div className="p-12 rounded-2xl border border-gray-700/10 bg-card">
        <div className="h-10 bg-gray-700/10 rounded-lg mb-6 w-1/2 mx-auto"></div>
        <div className="h-6 bg-gray-700/10 rounded-lg mb-8 w-2/3 mx-auto"></div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <div className="h-14 bg-primary/20 rounded-lg w-48 mx-auto sm:mx-0"></div>
          <div className="h-14 bg-secondary/20 rounded-lg w-48 mx-auto sm:mx-0"></div>
        </div>
      </div>
    </div>
  )
}

export function RelatedProjectsSkeleton() {
  return (
    <div className="mb-20 animate-pulse">
      <div className="h-10 bg-gray-700/10 rounded-lg mb-4 w-1/3 mx-auto"></div>
      <div className="h-6 bg-gray-700/10 rounded-lg mb-12 w-1/2 mx-auto"></div>
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
  )
}
