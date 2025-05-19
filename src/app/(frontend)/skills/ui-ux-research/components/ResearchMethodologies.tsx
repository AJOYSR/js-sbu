'use client'

import React from 'react'
import { Eye, Sparkles, Layers } from 'lucide-react'

const methodologies = [
  {
    name: 'User Interviews',
    description: 'Direct conversations with users to understand their needs and pain points',
    benefits: [
      'Deep qualitative insights',
      'Uncover hidden needs',
      'Build empathy with users',
      'Validate hypotheses directly',
    ],
    icon: <Eye className="h-8 w-8 text-primary" />,
  },
  {
    name: 'Usability Testing',
    description: 'Observing users interact with products to identify usability issues',
    benefits: [
      'Identify navigation problems',
      'Measure task completion rates',
      'Collect direct user feedback',
      'Validate design decisions',
    ],
    icon: <Sparkles className="h-8 w-8 text-primary" />,
  },
  {
    name: 'A/B Testing',
    description: 'Comparing multiple design versions to determine which performs better',
    benefits: [
      'Data-driven decisions',
      'Quantify design impact',
      'Continuous improvement',
      'Reduce business risk',
    ],
    icon: <Layers className="h-8 w-8 text-primary" />,
  },
]

export default function ResearchMethodologies() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
            RESEARCH METHODS
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
            User-Centered Research
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
            Our comprehensive research methodologies to understand user behavior and design better
            experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {methodologies.map((method, index) => (
            <div
              key={method.name}
              className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn shadow-xl border border-white/5"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px] -z-10"></div>

                <div className="w-14 h-14 flex items-center justify-center mb-6 bg-primary/10 rounded-2xl">
                  {method.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-gradient">{method.name}</h3>
                <p className="text-foreground/80 mb-6">{method.description}</p>

                <ul className="space-y-4">
                  {method.benefits.map((benefit) => (
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
