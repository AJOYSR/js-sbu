'use client'

import React from 'react'

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description:
      'We analyze your requirements, target audience, and business goals to create a comprehensive plan.',
  },
  {
    step: '02',
    title: 'UI/UX Design',
    description: 'Our designers create intuitive, engaging interfaces that your users will love.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Our developers bring the designs to life with clean, efficient code.',
  },
  {
    step: '04',
    title: 'Testing & QA',
    description: 'Rigorous testing across devices ensures your app works flawlessly.',
  },
  {
    step: '05',
    title: 'Deployment',
    description: 'We handle the app store submission process and launch your app.',
  },
  {
    step: '06',
    title: 'Maintenance & Support',
    description: 'Ongoing support and updates keep your app running smoothly.',
  },
]

export default function ProcessSection() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Our <span className="text-gradient">Process</span>
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        A proven development approach to ensure successful project delivery
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {process.map((step, index) => (
          <div
            key={index}
            className="relative bg-card p-8 rounded-xl border border-border/40 hover-scale"
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
              {step.step}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary mt-6">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
