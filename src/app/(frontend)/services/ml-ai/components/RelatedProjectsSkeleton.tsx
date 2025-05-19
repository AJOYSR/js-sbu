'use client'

import React from 'react'

export default function RelatedProjectsSkeleton() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block w-32 h-8 rounded-full bg-primary/10 mb-4 animate-pulse mx-auto"></div>
          <div className="h-10 bg-primary/5 rounded-lg mb-6 w-full max-w-xs mx-auto animate-pulse"></div>
          <div className="h-16 bg-primary/5 rounded-lg w-full max-w-lg mx-auto animate-pulse"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="glass-card overflow-hidden rounded-xl shadow-lg border border-white/10"
            >
              <div className="h-48 bg-primary/5"></div>
              <div className="p-6">
                <div className="h-5 bg-primary/5 rounded w-1/3 mb-2"></div>
                <div className="h-6 bg-primary/5 rounded w-3/4 mb-4"></div>
                <div className="h-16 bg-primary/5 rounded w-full mb-4"></div>
                <div className="h-8 bg-primary/5 rounded-lg w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
