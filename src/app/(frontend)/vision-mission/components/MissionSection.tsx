'use client'

import React from 'react'

// Mission Point Component
const MissionPoint = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start">
    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span className="text-foreground/90">{children}</span>
  </div>
)

export default function MissionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
              OUR MISSION
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              Delivering Excellence Through Innovation
            </h2>
          </div>

          <div className="glass-card rounded-3xl p-10 shadow-xl relative overflow-hidden border border-white/5 backdrop-blur-md animation-delay-400 animate-fadeIn">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[120px]"></div>

            <div className="relative z-10">
              <p className="text-foreground/90 text-lg leading-relaxed mb-10">
                To deliver cutting-edge JavaScript solutions that empower businesses to succeed in
                the digital age through innovation, expertise, and unwavering commitment to quality.
              </p>

              <div className="grid md:grid-cols-2 gap-10 animation-delay-600 animate-fadeIn">
                <div>
                  <h3 className="text-xl font-bold mb-6 text-gradient">For Our Clients</h3>
                  <div className="space-y-4">
                    {[
                      'Deliver innovative and scalable solutions',
                      'Ensure highest quality and performance',
                      'Provide exceptional support and maintenance',
                    ].map((item, index) => (
                      <MissionPoint key={index}>{item}</MissionPoint>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-6 text-gradient">For Our Team</h3>
                  <div className="space-y-4">
                    {[
                      'Foster continuous learning and growth',
                      'Promote innovation and creativity',
                      'Build a collaborative and inclusive culture',
                    ].map((item, index) => (
                      <MissionPoint key={index}>{item}</MissionPoint>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
