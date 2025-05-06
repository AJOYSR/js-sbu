import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getRecentProjects } from '@/utilities/getRecentProjects'
import RelatedProjects from '@/components/RelatedProjects'

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

const services = [
  {
    title: 'Cross-Platform Apps',
    description: 'Build once, deploy everywhere with React Native and Flutter',
    features: ['Consistent UI/UX', 'Faster Development', 'Cost-Effective', 'Easy Maintenance'],
  },
  {
    title: 'Native Applications',
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
    description: 'Scalable backend services for mobile applications',
    features: [
      'API Development',
      'Database Design',
      'Cloud Integration',
      'Security Implementation',
    ],
  },
]

const features = [
  {
    title: 'User-Centric Design',
    description: 'Creating intuitive and engaging user experiences that keep users coming back.',
  },
  {
    title: 'Performance Optimization',
    description: 'Ensuring smooth performance and fast load times across all devices.',
  },
  {
    title: 'Offline Functionality',
    description: 'Building apps that work seamlessly even without internet connectivity.',
  },
  {
    title: 'Security',
    description: 'Implementing robust security measures to protect user data and privacy.',
  },
  {
    title: 'Analytics Integration',
    description: 'Adding analytics to track user behavior and app performance.',
  },
  {
    title: 'Continuous Updates',
    description: 'Regular updates and maintenance to keep your app running smoothly.',
  },
]

export default async function MobileAppPage() {
  const projects = await getRecentProjects('mobile-development')
  return (
    <div className="min-h-screen py-16 animate-fadeIn">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6 text-gradient">Mobile App Development</h1>
          <p className="text-xl text-gray-600 animation-delay-200 animate-fadeIn">
            Creating powerful, engaging, and scalable mobile applications for iOS and Android
            platforms using modern technologies
          </p>
        </div>

        {/* Technologies Section */}
        <div className="mb-20 animation-delay-400 animate-fadeIn">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Our Tech Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="glass-card card-hover p-6 rounded-lg shadow-md"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">{tech.name}</h3>
                <p className="text-gray-600 mb-4">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <span className="text-primary mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20 animation-delay-600 animate-fadeIn">
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

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bounce-hover neon-glow bg-card p-6 rounded-lg shadow-md"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Projects */}
        <RelatedProjects projects={projects} />

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-lg soft-shadow">
          <h2 className="text-3xl font-bold mb-6 text-gradient">Ready to Build Your Mobile App?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Let&apos;s discuss how we can help you create a successful mobile application that meets
            your business goals.
          </p>
          <Link
            href="/contact"
            className="btn-gradient btn-pop inline-block text-white px-8 py-3 rounded-lg hover-scale transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}
