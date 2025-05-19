'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen py-16 animate-fadeIn">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/portfolio"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8 animation-delay-200 animate-fadeIn"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>

          {/* Image Section Skeleton */}
          <div className="glass-card rounded-xl shadow-md overflow-hidden mb-12">
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="h-8 w-24 bg-gray-300 animate-pulse rounded-full mb-4"></div>
                <div className="h-12 w-3/4 bg-gray-300 animate-pulse rounded"></div>
              </div>
            </div>
          </div>

          {/* Content Skeleton */}
          <div className="glass-card rounded-xl shadow-md p-8 mb-8">
            <div className="h-6 w-full bg-gray-200 animate-pulse rounded mb-6"></div>

            <div className="mb-8">
              <div className="h-8 w-48 bg-gray-200 animate-pulse rounded mb-4"></div>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-24 bg-gray-200 animate-pulse rounded-full"></div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <div className="h-8 w-48 bg-gray-200 animate-pulse rounded mb-4"></div>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-6 w-full bg-gray-200 animate-pulse rounded"></div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <div className="h-8 w-48 bg-gray-200 animate-pulse rounded mb-4"></div>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-6 w-full bg-gray-200 animate-pulse rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
