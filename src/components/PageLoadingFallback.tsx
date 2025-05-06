import React from 'react'

/**
 * Loading fallback component for Suspense boundaries.
 * Shows a spinner when a page or component is loading.
 */
export function PageLoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full animate-fade-in">
      <div className="relative flex flex-col items-center">
        {/* Pulsing circle animation */}
        <div className="w-12 h-12 relative">
          <div className="absolute inset-0 rounded-full border-4 border-primary/30"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>
        </div>

        {/* Loading text */}
        <div className="mt-3 text-primary font-medium flex items-center text-sm">
          <span>Loading</span>
          <span className="ml-1 inline-flex">
            <span className="animate-bounce delay-0 mx-0.5">.</span>
            <span className="animate-bounce delay-100 mx-0.5">.</span>
            <span className="animate-bounce delay-200 mx-0.5">.</span>
          </span>
        </div>
      </div>
    </div>
  )
}
