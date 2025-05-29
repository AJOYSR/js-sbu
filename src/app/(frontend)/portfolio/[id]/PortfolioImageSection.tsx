'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import SkeletonImage from '@/components/SkeletonImage'

interface PortfolioImageSectionProps {
  imageUrl: string
  title: string
  category: string
}

export default function PortfolioImageSection({
  imageUrl,
  title,
  category,
}: PortfolioImageSectionProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Preload the image
  useEffect(() => {
    if (imageUrl) {
      const img = new window.Image()
      img.src = imageUrl
      img.onload = () => {
        setIsLoading(false)
      }
    }
  }, [imageUrl])

  return (
    <div className="relative h-96">
      {/* Loading placeholder - shows during image load */}
      <SkeletonImage isLoading={isLoading} />

      <Image
        src={imageUrl}
        alt={title}
        fill
        className={`object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        priority
        quality={80}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        unoptimized={!imageUrl.includes(process.env.NEXT_PUBLIC_SERVER_URL || 'localhost')}
        onLoadingComplete={() => setIsLoading(false)}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcvWS1LgAGJQIpt50GkgAAAABJRU5ErkJggg=="
      />

      {/* Dark overlay across entire image */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      {/* Additional gradient overlay for text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <span className="inline-flex px-4 py-2 rounded-full text-sm mb-4 bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-md">
          {category}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          {title}
        </h1>
      </div>
    </div>
  )
}
