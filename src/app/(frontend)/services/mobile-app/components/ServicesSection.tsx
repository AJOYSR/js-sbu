'use client'

import React from 'react'

const services = [
  {
    title: 'Cross-Platform Apps',
    icon: 'device_mobile',
    description: 'Build once, deploy everywhere with React Native and Flutter',
    features: ['Consistent UI/UX', 'Faster Development', 'Cost-Effective', 'Easy Maintenance'],
  },
  {
    title: 'Native Applications',
    icon: 'devices',
    description: 'Platform-specific apps for optimal performance',
    features: [
      'Platform-Specific Features',
      'High Performance',
      'Native UI Components',
      'Deep Integration',
    ],
  },
  {
    title: 'App Modernization',
    icon: 'sparkles',
    description: 'Upgrade and modernize existing mobile applications',
    features: [
      'Code Refactoring',
      'Performance Optimization',
      'UI/UX Enhancement',
      'Feature Addition',
    ],
  },
  {
    title: 'Mobile Backend',
    icon: 'server',
    description: 'Scalable backend services for mobile applications',
    features: [
      'API Development',
      'Database Design',
      'Cloud Integration',
      'Security Implementation',
    ],
  },
]

export default function ServicesSection() {
  return (
    <div id="services" className="mb-20 animation-delay-600 animate-fadeIn">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Our <span className="text-gradient">Services</span>
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Comprehensive mobile app development services tailored to your needs
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="shiny-card gradient-border p-8 rounded-xl bg-card"
            style={{ animationDelay: `${(index + 1) * 150}ms` }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 mr-4 flex items-center justify-center bg-primary/10 rounded-lg">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
            </div>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <ul className="space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-primary mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
