'use client'

import React from 'react'
import Link from 'next/link'

export default function AboutHero() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-32 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6 animate-fadeIn backdrop-blur-sm">
            JAVASCRIPT EXPERTS
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animation-delay-200 animate-fadeIn">
            JavaScript Solutions <span className="text-gradient">Business Unit</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
            A team of highly skilled developers and engineers at Brain Station 23 PLC, dedicated to
            building robust, efficient applications using cutting-edge JavaScript technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animation-delay-400 animate-fadeIn">
            <Link
              href="/contact"
              className="btn-gradient text-white px-8 py-3 rounded-xl shadow-lg hover-scale btn-pop"
              prefetch={false}
            >
              Start a Project
            </Link>
            <Link
              href="/portfolio"
              className="bg-white/10 border border-white/20 hover:bg-white/20 px-8 py-3 rounded-xl shadow-lg hover-scale btn-pop text-white backdrop-blur-sm"
              prefetch={false}
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
