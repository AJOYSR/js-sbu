'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'

// Vision Point Component
const VisionPoint = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start group hover:translate-x-1 transition-transform duration-300">
    <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-primary/20 transition-colors duration-300">
      <ArrowRight className="w-4 h-4 text-primary" />
    </div>
    <p className="text-foreground/90 text-lg">{children}</p>
  </div>
)

export default function VisionSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
              OUR VISION
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              Setting New Standards in JavaScript Solutions
            </h2>
          </div>

          <div className="glass-card rounded-3xl p-10 shadow-xl relative overflow-hidden border border-white/5 backdrop-blur-md animation-delay-400 animate-fadeIn">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[120px]"></div>

            <div className="relative z-10">
              <p className="text-foreground/90 text-lg leading-relaxed mb-10">
                To be the global leader in JavaScript technology solutions, recognized for our
                innovation, expertise, and commitment to delivering exceptional value to our
                clients.
              </p>

              <div className="space-y-6 animation-delay-600 animate-fadeIn">
                {[
                  'Pioneer innovative JavaScript solutions that set industry standards',
                  'Create transformative digital experiences that drive business growth',
                  'Build a community of excellence in JavaScript development',
                ].map((item, index) => (
                  <VisionPoint key={index}>{item}</VisionPoint>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
