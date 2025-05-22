'use client'

import React from 'react'

interface SkeletonImageProps {
  isLoading: boolean
  className?: string
}

export default function SkeletonImage({ isLoading, className = '' }: SkeletonImageProps) {
  if (!isLoading) return null

  return (
    <div
      className={`absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse ${className}`}
      aria-hidden="true"
    >
      {/* Optional shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
    </div>
  )
}
