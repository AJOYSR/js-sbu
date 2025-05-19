'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl p-10 md:p-16 shadow-xl relative overflow-hidden border border-white/10 backdrop-blur-md animation-delay-300 animate-fadeIn">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[80px]"></div>

            <div className="text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
                Ready to Build Your Next JavaScript Project?
              </h2>
              <p className="text-foreground/90 text-lg md:text-xl mb-10 max-w-3xl mx-auto animation-delay-300 animate-fadeIn">
                Partner with our JavaScript experts to build innovative, high-performance
                applications that drive business growth and deliver exceptional user experiences.
              </p>

              <div className="flex flex-col md:flex-row gap-6 justify-center animation-delay-400 animate-fadeIn">
                <Link
                  href="/contact"
                  className="btn-gradient text-white px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium"
                  prefetch={false}
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
                <Link
                  href="/portfolio"
                  className="glass-card hover:bg-primary/10 px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium"
                  prefetch={false}
                >
                  <span>Explore Our Projects</span>
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
