'use client'

import React from 'react'
import HeroImage from '@/components/HeroImage'

export default function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background image */}
      <HeroImage
        src="https://www.thoughtco.com/thmb/2XQUFDikVdXBS_bBZUzAGS140ck=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/533766325-56a2af1c5f9b58b7d0cd61b8.jpg"
        alt="Tutorials and Guides"
        brightness={0.7}
        quality={75}
      />

      {/* Background decorative elements */}
      <div className="absolute -top-32 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px] z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] z-10"></div>
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6 animate-fadeIn backdrop-blur-sm">
            LEARN WITH US
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animation-delay-200 animate-fadeIn">
            Tutorials & <span className="text-gradient">Guides</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
            Comprehensive tutorials and step-by-step guides to help you master JavaScript
            technologies and build amazing applications
          </p>
        </div>
      </div>
    </section>
  )
}
