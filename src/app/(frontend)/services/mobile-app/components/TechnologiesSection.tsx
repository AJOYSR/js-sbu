'use client'

import React from 'react'

const technologies = [
  {
    name: 'React Native',
    description: 'Cross-platform mobile development with native performance',
    features: ['Native Components', 'Hot Reloading', 'Large Community', 'Code Reusability'],
  },
  {
    name: 'Flutter',
    description: 'Beautiful native apps in record time',
    features: ['Single Codebase', 'Custom Widgets', 'Hot Reload', 'Native Performance'],
  },
  {
    name: 'Native Development',
    description: 'Platform-specific development for optimal performance',
    features: ['iOS Development', 'Android Development', 'Platform APIs', 'Native UI'],
  },
  {
    name: 'Backend Services',
    description: 'Robust backend infrastructure for mobile apps',
    features: ['API Development', 'Real-time Updates', 'Data Sync', 'Push Notifications'],
  },
]

export default function TechnologiesSection() {
  return (
    <div className="mb-20 animation-delay-400 animate-fadeIn">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Our <span className="text-gradient">Tech Stack</span>
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        We use cutting-edge technologies to build fast, reliable, and scalable mobile applications
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="glass-card card-hover p-8 rounded-xl shadow-md border border-border/40"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 mr-4 flex items-center justify-center bg-primary/10 rounded-lg">
                {/* Replace with actual SVG for React Native */}
                {tech.name === 'React Native' && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  </svg>
                )}
                {/* Flutter icon */}
                {tech.name === 'Flutter' && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-primary"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                )}
                {/* Native Development icon */}
                {tech.name === 'Native Development' && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-primary"
                  >
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12" y2="18" />
                  </svg>
                )}
                {/* Backend Services icon */}
                {tech.name === 'Backend Services' && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-primary"
                  >
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                    <line x1="6" y1="6" x2="6" y2="6" />
                    <line x1="6" y1="18" x2="6" y2="18" />
                  </svg>
                )}
              </div>
              <h3 className="text-xl font-semibold text-primary">{tech.name}</h3>
            </div>
            <p className="text-gray-600 mb-4">{tech.description}</p>
            <ul className="space-y-3">
              {tech.features.map((feature) => (
                <li key={feature} className="flex items-center text-sm text-gray-600">
                  <span className="text-primary mr-2 font-bold">•</span>
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
