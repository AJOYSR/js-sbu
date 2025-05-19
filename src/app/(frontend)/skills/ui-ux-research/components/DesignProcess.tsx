'use client'

import React from 'react'

const designProcesses = [
  {
    name: 'User Research',
    description:
      'Understanding user behaviors, needs, and motivations through observation and feedback',
    phases: ['Stakeholder interviews', 'User interviews', 'Contextual inquiry', 'Survey research'],
  },
  {
    name: 'Information Architecture',
    description: 'Organizing and structuring content to help users find what they need',
    phases: ['Content inventory', 'User flows', 'Site mapping', 'Navigation design'],
  },
  {
    name: 'Interaction Design',
    description: 'Designing the interactive behavior of products and interfaces',
    phases: ['Wireframing', 'Prototyping', 'Interaction patterns', 'Microinteractions'],
  },
  {
    name: 'Visual Design',
    description:
      'Creating the look and feel of a product, including color, typography, and imagery',
    phases: ['Style guides', 'Design systems', 'Visual hierarchy', 'UI components'],
  },
]

export default function DesignProcess() {
  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
            OUR APPROACH
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
            Design Process
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
            A systematic approach to creating user-centered digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {designProcesses.map((process, index) => (
            <div
              key={process.name}
              className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn shadow-xl border border-white/5"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px] -z-10"></div>

                <h3 className="text-xl font-bold mb-3 text-gradient">{process.name}</h3>
                <p className="text-foreground/80 mb-6">{process.description}</p>

                <ul className="space-y-3">
                  {process.phases.map((phase) => (
                    <li key={phase} className="flex items-start">
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
                      <span className="text-foreground/90">{phase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
