'use client'

import React from 'react'

const processSteps = [
  {
    step: 1,
    title: 'Requirements Analysis',
    description:
      'We work closely with you to understand your business needs and define clear project requirements and objectives.',
  },
  {
    step: 2,
    title: 'Design & Architecture',
    description:
      'Our team creates detailed technical specifications and designs the application architecture for optimal performance.',
  },
  {
    step: 3,
    title: 'Development & Testing',
    description:
      'We follow agile development practices with regular testing and quality assurance throughout the development cycle.',
  },
  {
    step: 4,
    title: 'Deployment & Support',
    description:
      'We ensure smooth deployment and provide ongoing support and maintenance for your application.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
              OUR PROCESS
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              How We Build Your Application
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Our proven methodology to transform your ideas into exceptional web applications
            </p>
          </div>

          <div className="space-y-8 animation-delay-400 animate-fadeIn">
            {processSteps.map((process, index) => (
              <div
                key={process.step}
                className="flex items-start gap-6"
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <div className="bg-gradient-to-r from-primary to-primary-light text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  {process.step}
                </div>
                <div className="glass-card p-6 rounded-xl flex-1 border border-white/5">
                  <h3 className="text-xl font-bold mb-3 text-gradient">{process.title}</h3>
                  <p className="text-foreground/80">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
