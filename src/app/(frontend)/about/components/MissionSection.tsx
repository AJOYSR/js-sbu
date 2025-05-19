'use client'

import React from 'react'

export default function MissionSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
            OUR MISSION
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
            Creating Exceptional Digital Experiences
          </h2>
          <p className="text-foreground/80 text-lg leading-relaxed animation-delay-300 animate-fadeIn">
            We strive to be the leading JavaScript solutions provider, delivering innovative and
            impactful digital solutions that transform businesses and enhance user experiences.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-10 shadow-xl relative overflow-hidden border border-white/5 backdrop-blur-md animation-delay-400 animate-fadeIn">
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[120px]"></div>

          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div className="animation-delay-500 animate-fadeIn">
              <h2 className="text-2xl font-bold mb-4 text-gradient">Our Expertise</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                We excel in developing robust and scalable applications using the latest JavaScript
                technologies. Our team&apos;s expertise spans across:
              </p>
              <ul className="space-y-4">
                {[
                  'Full-stack JavaScript development with Node.js and modern frameworks',
                  'Cross-platform mobile development with React Native and Flutter',
                  'Modern front-end development with React, Angular, and Vue.js',
                  'E-commerce solutions with Shopify and custom implementations',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animation-delay-600 animate-fadeIn">
              <h2 className="text-2xl font-bold mb-4 text-gradient">Our Approach</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                We believe in delivering solutions that not only meet current needs but are also
                future-proof. Our approach combines:
              </p>
              <ul className="space-y-4">
                {[
                  'Agile development methodology for flexible and efficient delivery',
                  'Best practices in code quality and performance optimization',
                  'Continuous integration and deployment for reliable releases',
                  'User-centered design principles for optimal user experience',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
