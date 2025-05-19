'use client'

import React from 'react'
import { Boxes, Layers, Cpu } from 'lucide-react'

const architectureApproaches = [
  {
    name: 'Microservices Architecture',
    description:
      'Building applications as collections of loosely coupled, independently deployable services',
    benefits: [
      'Scalability for individual components',
      'Technology flexibility',
      'Resilience and fault isolation',
      'Independent deployment cycles',
    ],
    icon: <Boxes className="h-8 w-8 text-primary" />,
  },
  {
    name: 'Event-Driven Architecture',
    description: 'Designing systems that produce, detect, and react to events',
    benefits: [
      'Loose coupling between components',
      'Real-time responsiveness',
      'Scalability and resilience',
      'Asynchronous processing',
    ],
    icon: <Layers className="h-8 w-8 text-primary" />,
  },
  {
    name: 'Serverless Architecture',
    description: 'Building applications that run on cloud provider-managed infrastructure',
    benefits: [
      'No infrastructure management',
      'Pay-per-use pricing model',
      'Automatic scaling',
      'Reduced operational overhead',
    ],
    icon: <Cpu className="h-8 w-8 text-primary" />,
  },
]

export default function ArchitectureApproaches() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            MODERN APPROACHES
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gradient">Architecture Methodologies</h2>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg">
            Contemporary architectural approaches that solve complex business challenges
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {architectureApproaches.map((approach) => (
            <div
              key={approach.name}
              className="glass-card rounded-2xl overflow-hidden card-hover shadow-xl border border-white/5"
            >
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px] -z-10"></div>

                <div className="w-14 h-14 flex items-center justify-center mb-6 bg-primary/10 rounded-2xl">
                  {approach.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-gradient">{approach.name}</h3>
                <p className="text-foreground/80 mb-6">{approach.description}</p>

                <ul className="space-y-4">
                  {approach.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start">
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
                      <span className="text-foreground/90">{benefit}</span>
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
