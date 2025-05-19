import React from 'react'

/**
 * Loading fallback component for Suspense boundaries.
 * Shows a spinner when a page or component is loading.
 */
export const PageLoadingFallback = () => {
  return (
    <div className="animate-fadeIn min-h-[70vh] flex flex-col items-center justify-center">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
      </div>
      <p className="mt-6 text-foreground/70 text-lg">Loading content...</p>
      <div className="mt-10 max-w-md w-full">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-gray-700/20 rounded-lg w-3/4 mx-auto"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-700/20 rounded w-full"></div>
            <div className="h-4 bg-gray-700/20 rounded w-5/6"></div>
            <div className="h-4 bg-gray-700/20 rounded w-4/6"></div>
          </div>
          <div className="flex justify-center">
            <div className="h-10 bg-gray-700/20 rounded-lg w-32"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
