'use client'

import React from 'react'

const process = [
  {
    phase: 'Discovery',
    description: 'Understanding the project requirements and user needs',
    activities: [
      'Stakeholder Interviews',
      'User Research',
      'Market Analysis',
      'Requirements Gathering',
    ],
  },
  {
    phase: 'Definition',
    description: 'Defining the product strategy and user experience',
    activities: [
      'User Personas',
      'User Journey Mapping',
      'Information Architecture',
      'Feature Prioritization',
    ],
  },
  {
    phase: 'Design',
    description: 'Creating the visual design and user interface',
    activities: ['Wireframing', 'UI Design', 'Prototyping', 'Design System Creation'],
  },
  {
    phase: 'Validation',
    description: 'Testing and refining the design solution',
    activities: ['Usability Testing', 'Design Reviews', 'Iteration', 'Documentation'],
  },
]

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
              OUR PROCESS
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              Our Design Process
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              A systematic approach to creating exceptional user experiences
            </p>
          </div>

          <div className="space-y-8 animation-delay-400 animate-fadeIn">
            {process.map((step, index) => (
              <div
                key={step.phase}
                className="flex items-start gap-6"
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <div className="bg-gradient-to-r from-primary to-primary-light text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  {index + 1}
                </div>
                <div className="glass-card p-6 rounded-xl flex-1 border border-white/5">
                  <h3 className="text-xl font-bold mb-3 text-gradient">{step.phase}</h3>
                  <p className="text-foreground/80 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.activities.map((activity) => (
                      <li key={activity} className="flex items-center text-sm text-foreground/80">
                        <span className="text-primary mr-2">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
