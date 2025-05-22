import React from 'react'

/**
 * Loading fallback component for Suspense boundaries.
 * Shows a modern loading animation when a page or component is loading.
 */
export const PageLoadingFallback = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-b from-background to-background/95">
      {/* Primary loader animation */}
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-primary/10 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
        <div className="absolute inset-0 border-4 border-transparent border-l-primary/40 rounded-full animate-spin animate-delay-300"></div>
        <div className="absolute inset-1 border-4 border-transparent border-r-primary/20 rounded-full animate-spin animate-reverse animate-delay-150"></div>
      </div>

      {/* Loading text with fade-in animation */}
      <p className="mt-6 text-foreground/80 text-lg font-medium animate-fadeIn">
        Loading your content...
      </p>

      {/* Skeleton loader with improved styling */}
      <div className="mt-12 max-w-md w-full px-4">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-primary/10 rounded-lg w-3/4 mx-auto shadow-sm"></div>
          <div className="space-y-4">
            <div className="h-3 bg-primary/5 rounded-md w-full"></div>
            <div className="h-3 bg-primary/5 rounded-md w-5/6"></div>
            <div className="h-3 bg-primary/5 rounded-md w-4/6"></div>
            <div className="h-3 bg-primary/5 rounded-md w-full"></div>
            <div className="h-3 bg-primary/5 rounded-md w-3/4"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <div className="h-10 bg-primary/10 rounded-lg w-28 shadow-sm"></div>
            <div className="h-10 bg-primary/5 rounded-lg w-28 shadow-sm"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
