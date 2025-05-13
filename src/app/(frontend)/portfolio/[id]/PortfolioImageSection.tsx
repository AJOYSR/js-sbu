import React from 'react'
import Image from 'next/image'

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
  return (
    <div className="relative h-96">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, 768px"
        unoptimized={!imageUrl.includes(process.env.NEXT_PUBLIC_SERVER_URL || 'localhost')}
      />

      {/* Dark overlay across entire image */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      {/* Additional gradient overlay for text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <span className="bg-primary/90 text-white px-4 py-2 rounded-full text-sm mb-4 inline-block shadow-md">
          {category}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          {title}
        </h1>
      </div>
    </div>
  )
}
