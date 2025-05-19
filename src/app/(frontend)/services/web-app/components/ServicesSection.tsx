'use client'

import React from 'react'

const services = [
  {
    title: 'Custom Web Applications',
    description: 'Tailored solutions to meet your specific business needs',
    features: [
      'Scalable Architecture',
      'Responsive Design',
      'Performance Optimization',
      'Security Implementation',
    ],
    icon: '🌐',
  },
  {
    title: 'Enterprise Solutions',
    description: 'Robust applications for large-scale business operations',
    features: [
      'Microservices Architecture',
      'Cloud Integration',
      'Authentication & Authorization',
      'Data Management',
    ],
    icon: '🏢',
  },
  {
    title: 'E-commerce Solutions',
    description: 'Custom online shopping experiences',
    features: [
      'Shopping Cart Implementation',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Processing',
    ],
    icon: '🛒',
  },
  {
    title: 'Progressive Web Apps',
    description: 'Web apps that work like native applications',
    features: [
      'Offline Functionality',
      'Push Notifications',
      'App-like Experience',
      'Cross-platform Support',
    ],
    icon: '⚡',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
            OUR SERVICES
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
            Comprehensive Web Solutions
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
            Tailored web development services to meet your specific business needs
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
