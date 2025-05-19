'use client'

import React from 'react'

export function PortfolioSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="glass-card rounded-2xl overflow-hidden shadow-xl border border-white/5"
          >
            <div className="h-52 bg-gray-700/20"></div>
            <div className="p-6">
              <div className="h-6 bg-gray-700/20 rounded mb-4 w-3/4"></div>
              <div className="h-4 bg-gray-700/20 rounded mb-2 w-full"></div>
              <div className="h-4 bg-gray-700/20 rounded mb-5 w-5/6"></div>

              <div className="mb-2 h-4 bg-gray-700/20 rounded w-1/3"></div>
              <div className="flex flex-wrap gap-2 mb-5">
                <div className="h-5 bg-gray-700/20 rounded-full w-16"></div>
                <div className="h-5 bg-gray-700/20 rounded-full w-20"></div>
                <div className="h-5 bg-gray-700/20 rounded-full w-14"></div>
              </div>

              <div className="mb-2 h-4 bg-gray-700/20 rounded w-1/3"></div>
              <div className="space-y-2 mb-5">
                <div className="h-4 bg-gray-700/20 rounded w-full"></div>
                <div className="h-4 bg-gray-700/20 rounded w-5/6"></div>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-200/20 flex justify-end">
                <div className="h-4 bg-gray-700/20 rounded w-24"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-2">
        <div className="w-20 h-10 bg-gray-700/20 rounded-lg"></div>
        <div className="w-10 h-10 bg-gray-700/20 rounded-lg"></div>
        <div className="w-10 h-10 bg-gray-700/20 rounded-lg"></div>
        <div className="w-10 h-10 bg-gray-700/20 rounded-lg"></div>
        <div className="w-20 h-10 bg-gray-700/20 rounded-lg"></div>
      </div>
    </div>
  )
}
