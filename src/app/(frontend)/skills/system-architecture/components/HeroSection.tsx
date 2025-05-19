'use client'

import React from 'react'
import Link from 'next/link'

interface HeroSectionProps {
  priority?: boolean
}

export default function HeroSection({ priority = false }: HeroSectionProps) {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-background overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute -top-32 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
            ARCHITECTURE EXPERTISE
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            System <span className="text-gradient">Architecture</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Designing scalable, resilient, and maintainable architectures to support modern
            applications and business objectives
          </p>
          <div>
            <Link
              href="/contact"
              className="btn-gradient text-white px-8 py-3 rounded-xl shadow-lg hover-scale btn-pop"
            >
              Start Your Architecture Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
