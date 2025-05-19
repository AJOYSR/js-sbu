'use client'

import React from 'react'

const designPrinciples = [
  {
    title: 'Scalability',
    description: 'Design systems that can handle growing loads efficiently',
    practices: ['Horizontal scaling', 'Load balancing', 'Database sharding', 'Caching strategies'],
  },
  {
    title: 'Reliability',
    description: 'Build systems that are resilient to failures and maintain performance',
    practices: [
      'Redundancy and replication',
      'Circuit breakers',
      'Health monitoring',
      'Graceful degradation',
    ],
  },
  {
    title: 'Security',
    description: 'Implement robust security measures at every layer of the system',
    practices: [
      'Defense in depth',
      'Principle of least privilege',
      'Data encryption',
      'Regular security audits',
    ],
  },
  {
    title: 'Maintainability',
    description: 'Create systems that are easy to understand, modify, and extend',
    practices: [
      'Clean code practices',
      'Comprehensive documentation',
      'Automated testing',
      'Continuous integration',
    ],
  },
]

export default function DesignPrinciples() {
  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
            FOUNDATIONAL PRINCIPLES
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
            Architecture Design Principles
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
            Key principles that guide the creation of robust, scalable system architectures
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {designPrinciples.map((principle, index) => (
            <div
              key={principle.title}
              className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn shadow-xl border border-white/5"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px] -z-10"></div>

                <h3 className="text-xl font-bold mb-3 text-gradient">{principle.title}</h3>
                <p className="text-foreground/80 mb-6">{principle.description}</p>

                <ul className="space-y-3">
                  {principle.practices.map((practice) => (
                    <li key={practice} className="flex items-start">
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
                      <span className="text-foreground/90">{practice}</span>
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
