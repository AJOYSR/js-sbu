'use client'

import React from 'react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <div className="max-w-5xl mx-auto text-center glass-card p-12 rounded-2xl soft-shadow border border-border/40">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to Build Your <span className="text-gradient">Mobile App?</span>
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
        Let&apos;s discuss how we can help you create a successful mobile application that meets
        your business goals and exceeds user expectations.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href="/contact"
          className="btn-gradient btn-pop inline-block text-white px-8 py-4 rounded-lg hover-scale transition"
        >
          Get Started
        </Link>
        <Link
          href="/portfolio"
          className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg hover-scale transition"
        >
          View Portfolio
        </Link>
      </div>
    </div>
  )
}
