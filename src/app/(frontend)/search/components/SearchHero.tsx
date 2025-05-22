import React from 'react'
import Image from 'next/image'

export default function SearchHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background image with Next.js Image for optimization */}
      <div className="absolute inset-0">
        <Image
          src="https://www.searchenginejournal.com/wp-content/uploads/2025/03/alternative-search-710.png"
          alt="Search background"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover object-center"
          style={{
            filter: 'brightness(0.7)',
          }}
        />
      </div>

      {/* Background decorative elements */}
      <div className="absolute -top-32 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px] z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] z-10"></div>
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6 animate-fadeIn backdrop-blur-sm">
            DISCOVER CONTENT
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animation-delay-200 animate-fadeIn">
            <span className="text-gradient">Search</span> Our Content
          </h1>
          <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
            Explore our articles, tutorials, team members, and projects to find exactly what you
            need
          </p>
        </div>
      </div>
    </section>
  )
}
