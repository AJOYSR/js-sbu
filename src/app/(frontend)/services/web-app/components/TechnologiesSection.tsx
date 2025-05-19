'use client'

import React from 'react'

const technologies = [
  {
    name: 'React',
    description: 'Building dynamic and responsive user interfaces',
    features: ['Component-Based Architecture', 'Virtual DOM', 'Rich Ecosystem'],
    icon: '⚛️',
  },
  {
    name: 'Angular',
    description: 'Enterprise-grade applications with robust architecture',
    features: ['TypeScript Support', 'Dependency Injection', 'Full Framework'],
    icon: '🅰️',
  },
  {
    name: 'Vue.js',
    description: 'Progressive framework for building user interfaces',
    features: ['Reactive Data Binding', 'Component System', 'Easy Learning Curve'],
    icon: '🟢',
  },
  {
    name: 'Node.js',
    description: 'Scalable backend solutions with JavaScript',
    features: ['Event-Driven', 'Non-Blocking I/O', 'Large Package Ecosystem'],
    icon: '🔄',
  },
]

export default function TechnologiesSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
            OUR TECH STACK
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
            Modern JavaScript Technologies
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
            We leverage advanced frameworks and tools to create innovative web solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn border border-white/5"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px] -z-10"></div>

                <div className="w-14 h-14 flex items-center justify-center mb-6 bg-primary/10 rounded-2xl text-3xl">
                  {tech.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-gradient">{tech.name}</h3>
                <p className="text-foreground/80 mb-5">{tech.description}</p>

                <ul className="space-y-3">
                  {tech.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-primary"
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
                      <span className="text-foreground/80 text-sm">{feature}</span>
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
