'use client'

import React from 'react'
import { SearchIcon } from 'lucide-react'

export function SearchResultsSkeleton() {
  return (
    <div className="animation-delay-400 animate-pulse">
      <div className="mb-10 text-center">
        <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <SearchIcon className="inline-block h-4 w-4 mr-1" /> SEARCH RESULTS
        </span>
        <div className="glass-card inline-block px-6 py-2 rounded-full text-sm backdrop-blur-sm border border-white/10">
          <div className="h-4 bg-gray-700/20 rounded w-40"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="glass-card rounded-xl shadow-md overflow-hidden border border-white/5 h-full flex flex-col"
          >
            <div className="relative w-full overflow-hidden">
              <div className="h-48 bg-gray-700/20"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="h-6 bg-gray-700/20 rounded mb-4 w-3/4"></div>
              <div className="mt-2 flex-1">
                <div className="h-4 bg-gray-700/20 rounded mb-2 w-full"></div>
                <div className="h-4 bg-gray-700/20 rounded mb-2 w-5/6"></div>
                <div className="h-4 bg-gray-700/20 rounded w-4/6"></div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200/20 flex justify-end">
                <div className="h-4 bg-gray-700/20 rounded w-24"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
