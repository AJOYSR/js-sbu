'use client'

import React from 'react'

const technologies = [
  {
    name: 'TensorFlow.js',
    description: 'Machine learning in JavaScript',
    features: [
      'Browser-based ML',
      'Pre-trained Models',
      'Custom Model Training',
      'Real-time Processing',
    ],
  },
  {
    name: 'Ollama',
    description: 'Open-source AI model framework',
    features: [
      'Local Model Running',
      'Model Fine-tuning',
      'Custom Deployments',
      'Efficient Inference',
    ],
  },
  {
    name: 'Llama',
    description: 'Advanced language models',
    features: [
      'Text Generation',
      'Language Understanding',
      'Context Awareness',
      'Customizable Responses',
    ],
  },
  {
    name: 'Custom Solutions',
    description: 'Tailored AI implementations',
    features: [
      'Custom Model Development',
      'Algorithm Design',
      'Performance Optimization',
      'Scalable Architecture',
    ],
  },
]

export default function TechnologiesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
            TECHNOLOGIES
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
            Technologies We Use
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
            Leveraging the most advanced AI and ML technologies for optimal results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn shadow-xl border border-white/5"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px] -z-10"></div>

                <h3 className="text-xl font-bold mb-3 text-gradient">{tech.name}</h3>
                <p className="text-foreground/80 mb-4">{tech.description}</p>

                <ul className="space-y-2">
                  {tech.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-foreground/80">
                      <span className="text-primary mr-2">•</span>
                      {feature}
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
