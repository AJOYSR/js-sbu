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

export function FormSkeleton() {
  return (
    <div className="glass-card rounded-xl shadow-md p-8 animate-pulse">
      <div className="h-8 bg-gray-700/20 rounded mb-6 w-64"></div>
      <div className="space-y-6">
        <div>
          <div className="h-5 bg-gray-700/20 rounded mb-2 w-24"></div>
          <div className="h-12 bg-gray-700/10 rounded w-full"></div>
        </div>
        <div>
          <div className="h-5 bg-gray-700/20 rounded mb-2 w-32"></div>
          <div className="h-12 bg-gray-700/10 rounded w-full"></div>
        </div>
        <div>
          <div className="h-5 bg-gray-700/20 rounded mb-2 w-24"></div>
          <div className="h-12 bg-gray-700/10 rounded w-full"></div>
        </div>
        <div>
          <div className="h-5 bg-gray-700/20 rounded mb-2 w-24"></div>
          <div className="h-32 bg-gray-700/10 rounded w-full"></div>
        </div>
        <div className="h-12 bg-primary/20 rounded w-full"></div>
      </div>
    </div>
  )
}

export function InfoSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-700/20 rounded mb-8 w-64"></div>
      <div className="grid sm:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="glass-card rounded-xl shadow-md p-6 h-40"></div>
        ))}
      </div>
      <div className="mt-8 glass-card rounded-xl shadow-md p-6">
        <div className="h-6 bg-gray-700/20 rounded mb-4 w-32"></div>
        <div className="aspect-video rounded-lg bg-gray-700/10"></div>
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
