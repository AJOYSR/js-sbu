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
            AI & ML EXPERTISE
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animation-delay-200 animate-fadeIn">
            Machine Learning & <span className="text-gradient">AI Solutions</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
            Leveraging cutting-edge AI technologies to create intelligent solutions that drive
            innovation and efficiency
          </p>
          <div className="animation-delay-400 animate-fadeIn">
            <Link
              href="/contact"
              className="btn-gradient text-white py-2 px-6 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium inline-flex w-auto mx-auto"
            >
              <span>Start Your AI Journey</span>
              <svg
                className="h-5 w-5 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
