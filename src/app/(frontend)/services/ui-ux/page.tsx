import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RelatedProjects from '@/components/RelatedProjects'
import { getRecentProjects } from '@/utilities/getRecentProjects'

const services = [
  {
    title: 'User Research',
    description: 'Understanding user needs and behaviors',
    features: ['User Interviews', 'Usability Testing', 'Market Research', 'Competitor Analysis'],
  },
  {
    title: 'UX Design',
    description: 'Creating seamless user experiences',
    features: ['Information Architecture', 'User Flow Mapping', 'Wireframing', 'Prototyping'],
  },
  {
    title: 'UI Design',
    description: 'Crafting beautiful and intuitive interfaces',
    features: ['Visual Design', 'Design Systems', 'Component Libraries', 'Responsive Design'],
  },
  {
    title: 'Product Design',
    description: 'End-to-end product design solutions',
    features: ['Product Strategy', 'Feature Definition', 'Design Sprints', 'Design Implementation'],
  },
]

const process = [
  {
    phase: 'Discovery',
    description: 'Understanding the project requirements and user needs',
    activities: [
      'Stakeholder Interviews',
      'User Research',
      'Market Analysis',
      'Requirements Gathering',
    ],
  },
  {
    phase: 'Definition',
    description: 'Defining the product strategy and user experience',
    activities: [
      'User Personas',
      'User Journey Mapping',
      'Information Architecture',
      'Feature Prioritization',
    ],
  },
  {
    phase: 'Design',
    description: 'Creating the visual design and user interface',
    activities: ['Wireframing', 'UI Design', 'Prototyping', 'Design System Creation'],
  },
  {
    phase: 'Validation',
    description: 'Testing and refining the design solution',
    activities: ['Usability Testing', 'Design Reviews', 'Iteration', 'Documentation'],
  },
]

const benefits = [
  {
    title: 'Increased User Satisfaction',
    description: 'Well-designed interfaces that users love to interact with',
  },
  {
    title: 'Higher Conversion Rates',
    description: 'Optimized user flows that drive better business results',
  },
  {
    title: 'Reduced Development Costs',
    description: 'Clear specifications that streamline development',
  },
  {
    title: 'Brand Consistency',
    description: 'Cohesive design systems that strengthen brand identity',
  },
  {
    title: 'Accessibility',
    description: 'Inclusive design that reaches all users',
  },
  {
    title: 'Future-Proof Design',
    description: 'Scalable solutions that grow with your business',
  },
]

export default async function UIUXPage() {
  const projects = await getRecentProjects('ui-ux-design')
  return (
    <div className="min-h-screen py-16 animate-fadeIn">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6 text-gradient">UI/UX & Product Design</h1>
          <p className="text-xl text-gray-600 animation-delay-200 animate-fadeIn">
            Creating exceptional digital experiences through user-centered design and innovative
            solutions
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-20 animation-delay-400 animate-fadeIn">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="shiny-card gradient-border p-8 bg-card"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="text-primary mr-2 font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20 animation-delay-600 animate-fadeIn">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Our Design Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={step.phase}
                className="glass-card card-hover p-6 rounded-lg shadow-md"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">{step.phase}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.activities.map((activity) => (
                    <li key={activity} className="flex items-center text-sm text-gray-600">
                      <span className="text-primary mr-2">•</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bounce-hover neon-glow bg-card p-6 rounded-lg shadow-md"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-3 text-primary">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Related Projects */}
        <RelatedProjects projects={projects} />
        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-lg soft-shadow">
          <h2 className="text-3xl font-bold mb-6 text-gradient">
            Ready to Transform Your Digital Experience?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Let&apos;s work together to create user-centered designs that drive results for your
            business.
          </p>
          <Link
            href="/contact"
            className="btn-gradient btn-pop inline-block text-white px-8 py-3 rounded-lg hover-scale transition"
          >
            Start Your Design Journey
          </Link>
        </div>
      </div>
    </div>
  )
}
