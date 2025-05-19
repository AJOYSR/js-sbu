'use client'

import React from 'react'

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
            OUR PROCESS
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
            Implementation Process
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
            Our systematic approach to implementing AI and ML solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 animation-delay-400 animate-fadeIn">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-r from-primary to-primary-light text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                1
              </div>
              <div className="glass-card p-6 rounded-xl flex-1 border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-gradient">Requirements Analysis</h3>
                <p className="text-foreground/80">
                  Understanding your business needs and identifying the right AI solutions to
                  address them effectively.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-r from-primary to-primary-light text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                2
              </div>
              <div className="glass-card p-6 rounded-xl flex-1 border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-gradient">Data Assessment</h3>
                <p className="text-foreground/80">
                  Evaluating available data, determining data requirements, and establishing data
                  processing pipelines.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-r from-primary to-primary-light text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                3
              </div>
              <div className="glass-card p-6 rounded-xl flex-1 border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-gradient">Model Development</h3>
                <p className="text-foreground/80">
                  Creating and training custom AI models or adapting existing ones to meet your
                  specific requirements.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-r from-primary to-primary-light text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                4
              </div>
              <div className="glass-card p-6 rounded-xl flex-1 border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-gradient">Integration & Deployment</h3>
                <p className="text-foreground/80">
                  Seamlessly integrating AI solutions into your existing systems and ensuring
                  optimal performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
