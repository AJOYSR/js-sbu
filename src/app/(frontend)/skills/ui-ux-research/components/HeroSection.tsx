'use client'

import React from 'react'
import Link from 'next/link'
import HeroImage from '@/components/HeroImage'

export default function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background image with Next.js Image for optimization */}
      <HeroImage
        src="https://www.uxdesigninstitute.com/blog/wp-content/uploads/2024/11/101_UX_vs_UI_illustration_blog-1.png"
        alt="UI/UX Research"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nGNkYGD4z8DA8J+BAYIZoRxGBgYGRgYGhv9wDlQMIoaQQYojy2GIw9UzMAAAuSIGy2zyJ5AAAAAASUVORK5CYII="
        brightness={1} // No brightness filter in original
        quality={80}
        className="w-full"
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30 z-10"></div>

      {/* Background decorative elements */}
      <div className="absolute -top-32 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px] z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] z-10"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6 animate-fadeIn backdrop-blur-sm">
            DESIGN EXPERTISE
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animation-delay-200 animate-fadeIn">
            UI/UX <span className="text-gradient">Research</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
            Human-centered design approach backed by comprehensive research methodologies to create
            intuitive and engaging user experiences
          </p>
          <div className="animation-delay-400 animate-fadeIn">
            <Link
              href="/contact"
              className="btn-gradient text-white px-8 py-3 rounded-xl shadow-lg hover-scale btn-pop"
            >
              Start Your Design Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
