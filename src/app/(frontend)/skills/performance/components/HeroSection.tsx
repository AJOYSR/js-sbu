'use client'

import React from 'react'
import Link from 'next/link'
import HeroImage from '@/components/HeroImage'

interface HeroSectionProps {
  priority?: boolean
}

export default function HeroSection({ priority = false }: HeroSectionProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background image with Next.js Image for optimization */}
      <HeroImage
        src="https://lh7-us.googleusercontent.com/docsz/AD_4nXdi-DRVpPEu9LskgiLi9fpb48vMlWakwc0GNaCq-A4vFUimfpRaAxOeIRM7pAWKY5AxUMlbymn_H-ZapILnpWOKJlOc1wXXwSJBBwt6kTm9Bf7jn9F5WDjH3-wzk55Yqqc2iac3FQgYIygMzy0nvfcuSyEs?key=ht1ogYP4TGtrXd33nuljxw"
        alt="Performance Optimization"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVQImWP4z8DA8J+BgYGJgYGBmYGBgZmBgYEFymZmYGBgYmJiYmZmZmFhYWVlZWNj42BnZ+fg4ODk5OTi4gIAMb4HNL0LO2QAAAAASUVORK5CYII="
        brightness={0.6}
        priority={priority}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30 z-10"></div>

      {/* Background decorative elements */}
      <div className="absolute -top-32 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px] z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] z-10"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6 animate-fadeIn backdrop-blur-sm">
            PERFORMANCE EXPERTISE
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animation-delay-200 animate-fadeIn">
            Performance <span className="text-gradient">Optimization</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
            Enhancing application speed, responsiveness, and scalability through systematic
            performance optimization techniques
          </p>
          <div className="animation-delay-400 animate-fadeIn">
            <Link
              href="/contact"
              className="btn-gradient text-white px-8 py-3 rounded-xl shadow-lg hover-scale btn-pop"
            >
              Speed Up Your Application
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
