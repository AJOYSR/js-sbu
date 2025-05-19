'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-10 md:p-16 shadow-xl relative overflow-hidden border border-white/10 backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-50"></div>

            <div className="text-center relative z-10">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                LET&apos;S WORK TOGETHER
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                Build a Solid Foundation for Your Applications
              </h2>
              <p className="text-foreground/90 text-lg mb-10 max-w-3xl mx-auto">
                Let&apos;s collaborate to design scalable, maintainable system architectures that
                grow with your business and support your long-term objectives.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="btn-gradient text-white px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/services/web-app"
                  className="bg-white/10 border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium backdrop-blur-sm"
                >
                  <span>Explore All Services</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
