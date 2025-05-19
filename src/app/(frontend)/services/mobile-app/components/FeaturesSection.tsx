'use client'

import React from 'react'

const features = [
  {
    title: 'User-Centric Design',
    icon: 'user_focus',
    description: 'Creating intuitive and engaging user experiences that keep users coming back.',
  },
  {
    title: 'Performance Optimization',
    icon: 'gauge',
    description: 'Ensuring smooth performance and fast load times across all devices.',
  },
  {
    title: 'Offline Functionality',
    icon: 'cloud_offline',
    description: 'Building apps that work seamlessly even without internet connectivity.',
  },
  {
    title: 'Security',
    icon: 'shield_check',
    description: 'Implementing robust security measures to protect user data and privacy.',
  },
  {
    title: 'Analytics Integration',
    icon: 'graph',
    description: 'Adding analytics to track user behavior and app performance.',
  },
  {
    title: 'Continuous Updates',
    icon: 'refresh',
    description: 'Regular updates and maintenance to keep your app running smoothly.',
  },
]

export default function FeaturesSection() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Key <span className="text-gradient">Features</span>
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        What makes our mobile applications stand out from the competition
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="bounce-hover neon-glow bg-card p-8 rounded-xl shadow-md"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 mr-3 flex items-center justify-center bg-primary/10 rounded-lg">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
