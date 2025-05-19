'use client'

import React from 'react'
import { Zap, Server, Globe } from 'lucide-react'

const performanceAreas = [
  {
    name: 'Frontend Performance',
    description: 'Optimizing client-side code for faster load times and smoother user experiences',
    techniques: [
      'Code splitting and lazy loading',
      'Bundle size optimization',
      'Client-side caching strategies',
      'Efficient rendering techniques',
    ],
    icon: <Zap className="h-8 w-8 text-primary" />,
  },
  {
    name: 'Backend Performance',
    description: 'Improving server-side processing speed and efficiency',
    techniques: [
      'Database query optimization',
      'Caching strategies',
      'Asynchronous processing',
      'Load balancing and scaling',
    ],
    icon: <Server className="h-8 w-8 text-primary" />,
  },
  {
    name: 'Network Performance',
    description: 'Reducing latency and optimizing data transfer between client and server',
    techniques: [
      'HTTP/2 and HTTP/3 implementation',
      'Content compression',
      'CDN integration',
      'API response optimization',
    ],
    icon: <Globe className="h-8 w-8 text-primary" />,
  },
]

export default function PerformanceAreas() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
            KEY AREAS
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
            Optimization Focus Areas
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
            Comprehensive approaches to improving performance across your entire application stack
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {performanceAreas.map((area, index) => (
            <div
              key={area.name}
              className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn shadow-xl border border-white/5"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px] -z-10"></div>

                <div className="w-14 h-14 flex items-center justify-center mb-6 bg-primary/10 rounded-2xl">
                  {area.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-gradient">{area.name}</h3>
                <p className="text-foreground/80 mb-6">{area.description}</p>

                <ul className="space-y-4">
                  {area.techniques.map((technique) => (
                    <li key={technique} className="flex items-start">
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
                      <span className="text-foreground/90">{technique}</span>
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
