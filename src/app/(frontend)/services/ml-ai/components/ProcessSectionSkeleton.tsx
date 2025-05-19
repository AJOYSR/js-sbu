'use client'

import React from 'react'

export default function ProcessSectionSkeleton() {
  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block w-32 h-8 rounded-full bg-primary/10 mb-4 animate-pulse mx-auto"></div>
          <div className="h-10 bg-primary/5 rounded-lg mb-6 w-full max-w-xs mx-auto animate-pulse"></div>
          <div className="h-16 bg-primary/5 rounded-lg w-full max-w-lg mx-auto animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 animate-pulse">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="bg-primary/20 w-12 h-12 rounded-full flex-shrink-0"></div>
                <div className="glass-card p-6 rounded-xl flex-1 border border-white/5">
                  <div className="h-6 bg-primary/5 rounded mb-3 w-3/4"></div>
                  <div className="h-16 bg-primary/5 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
