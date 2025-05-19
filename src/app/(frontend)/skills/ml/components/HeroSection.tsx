'use client'

import React from 'react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-32 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6 animate-fadeIn backdrop-blur-sm">
            AI EXPERTISE
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animation-delay-200 animate-fadeIn">
            Machine <span className="text-gradient">Learning</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
            Transforming business operations with intelligent, data-driven solutions powered by
            state-of-the-art machine learning techniques
          </p>
          <div className="animation-delay-400 animate-fadeIn">
            <Link
              href="/contact"
              className="btn-gradient text-white px-8 py-3 rounded-xl shadow-lg hover-scale btn-pop"
            >
              Start Your AI Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
