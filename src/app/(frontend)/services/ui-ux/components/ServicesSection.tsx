'use client'

import React from 'react'

const services = [
  {
    title: 'User Research',
    description: 'Understanding user needs and behaviors',
    features: ['User Interviews', 'Usability Testing', 'Market Research', 'Competitor Analysis'],
    icon: '🔍',
  },
  {
    title: 'UX Design',
    description: 'Creating seamless user experiences',
    features: ['Information Architecture', 'User Flow Mapping', 'Wireframing', 'Prototyping'],
    icon: '📋',
  },
  {
    title: 'UI Design',
    description: 'Crafting beautiful and intuitive interfaces',
    features: ['Visual Design', 'Design Systems', 'Component Libraries', 'Responsive Design'],
    icon: '🎨',
  },
  {
    title: 'Product Design',
    description: 'End-to-end product design solutions',
    features: ['Product Strategy', 'Feature Definition', 'Design Sprints', 'Design Implementation'],
    icon: '💼',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
            OUR SERVICES
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
            Comprehensive Design Solutions
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
            Expert design services that transform your digital presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn shadow-xl border border-white/5"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px] -z-10"></div>

                <div className="w-14 h-14 flex items-center justify-center mb-6 bg-primary/10 rounded-2xl text-3xl">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-gradient">{service.title}</h3>
                <p className="text-foreground/80 mb-6">{service.description}</p>

                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
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
                      <span className="text-foreground/90">{feature}</span>
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
