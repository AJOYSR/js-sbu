'use client'

import React from 'react'

export default function ServicesSectionSkeleton() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block w-32 h-8 rounded-full bg-primary/10 mb-4 animate-pulse mx-auto"></div>
          <div className="h-10 bg-primary/5 rounded-lg mb-6 w-full max-w-xs mx-auto animate-pulse"></div>
          <div className="h-16 bg-primary/5 rounded-lg w-full max-w-lg mx-auto animate-pulse"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden shadow-xl border border-white/5 p-8"
            >
              <div className="animate-pulse">
                <div className="w-14 h-14 flex items-center justify-center mb-6 bg-primary/10 rounded-2xl"></div>
                <div className="h-6 bg-primary/5 rounded mb-3 w-3/4"></div>
                <div className="h-4 bg-primary/5 rounded mb-6 w-full"></div>

                <div className="space-y-4">
                  {[0, 1, 2, 3].map((featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 mr-3 mt-0.5 flex-shrink-0"></div>
                      <div className="h-4 bg-primary/5 rounded w-3/4"></div>
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
