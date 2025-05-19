'use client'

import React from 'react'

export function SectionSkeleton() {
  return (
    <section className="py-20 relative overflow-hidden animate-pulse">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="w-32 h-6 bg-gray-700/20 rounded-full mx-auto mb-4"></div>
          <div className="h-10 bg-gray-700/20 rounded-lg w-3/4 mx-auto mb-6"></div>
          <div className="h-4 bg-gray-700/20 rounded w-full mx-auto mb-2"></div>
          <div className="h-4 bg-gray-700/20 rounded w-5/6 mx-auto mb-2"></div>
          <div className="h-4 bg-gray-700/20 rounded w-4/6 mx-auto"></div>
        </div>

        <div className="glass-card rounded-3xl p-10 shadow-xl relative overflow-hidden border border-white/5 backdrop-blur-md">
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <div className="h-8 bg-gray-700/20 rounded mb-4 w-2/3"></div>
              <div className="h-4 bg-gray-700/20 rounded mb-2 w-full"></div>
              <div className="h-4 bg-gray-700/20 rounded mb-6 w-5/6"></div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gray-700/20 flex-shrink-0 mr-3"></div>
                  <div className="h-4 bg-gray-700/20 rounded w-full"></div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gray-700/20 flex-shrink-0 mr-3"></div>
                  <div className="h-4 bg-gray-700/20 rounded w-full"></div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gray-700/20 flex-shrink-0 mr-3"></div>
                  <div className="h-4 bg-gray-700/20 rounded w-full"></div>
                </div>
              </div>
            </div>

            <div>
              <div className="h-8 bg-gray-700/20 rounded mb-4 w-2/3"></div>
              <div className="h-4 bg-gray-700/20 rounded mb-2 w-full"></div>
              <div className="h-4 bg-gray-700/20 rounded mb-6 w-5/6"></div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gray-700/20 flex-shrink-0 mr-3"></div>
                  <div className="h-4 bg-gray-700/20 rounded w-full"></div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gray-700/20 flex-shrink-0 mr-3"></div>
                  <div className="h-4 bg-gray-700/20 rounded w-full"></div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gray-700/20 flex-shrink-0 mr-3"></div>
                  <div className="h-4 bg-gray-700/20 rounded w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
