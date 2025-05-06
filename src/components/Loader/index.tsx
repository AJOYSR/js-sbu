'use client'

import React from 'react'
import { useLoader } from '@/providers/Loader'
import { cn } from '@/utilities/cn'

export const Loader: React.FC = () => {
  const { isLoading } = useLoader()

  if (!isLoading) return null

  return (
    <div
      className={cn(
        'fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-sm',
        'transition-all duration-300',
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none',
      )}
    >
      <div className="relative flex flex-col items-center">
        {/* Pulsing circle animation */}
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 rounded-full border-4 border-primary/30"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>
        </div>

        {/* Loading text */}
        <div className="mt-4 text-primary font-medium flex items-center">
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
