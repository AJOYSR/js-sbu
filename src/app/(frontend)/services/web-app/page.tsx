import RelatedProjects from '@/components/RelatedProjects'
import { getRecentProjects } from '@/utilities/getRecentProjects'
import React from 'react'

const technologies = [
  {
    name: 'React',
    description: 'Building dynamic and responsive user interfaces',
    features: ['Component-Based Architecture', 'Virtual DOM', 'Rich Ecosystem'],
  },
  {
    name: 'Angular',
    description: 'Enterprise-grade applications with robust architecture',
    features: ['TypeScript Support', 'Dependency Injection', 'Full Framework'],
  },
  {
    name: 'Vue.js',
    description: 'Progressive framework for building user interfaces',
    features: ['Reactive Data Binding', 'Component System', 'Easy Learning Curve'],
  },
  {
    name: 'Node.js',
    description: 'Scalable backend solutions with JavaScript',
    features: ['Event-Driven', 'Non-Blocking I/O', 'Large Package Ecosystem'],
  },
]

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
  },
]

export default async function WebAppPage() {
  const projects = await getRecentProjects('web-application')
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">Web Application Development</h1>
          <p className="text-xl text-gray-600">
            Creating powerful, scalable, and user-friendly web applications using cutting-edge
            JavaScript technologies
          </p>
        </div>

        {/* Technologies Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Tech Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech) => (
              <div key={tech.name} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{tech.name}</h3>
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
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Development Process</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Requirements Analysis</h3>
                <p className="text-gray-600">
                  We work closely with you to understand your business needs and define clear
                  project requirements and objectives.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Design & Architecture</h3>
                <p className="text-gray-600">
                  Our team creates detailed technical specifications and designs the application
                  architecture for optimal performance.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Development & Testing</h3>
                <p className="text-gray-600">
                  We follow agile development practices with regular testing and quality assurance
                  throughout the development cycle.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Deployment & Support</h3>
                <p className="text-gray-600">
                  We ensure smooth deployment and provide ongoing support and maintenance for your
                  application.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <RelatedProjects projects={projects} />
      </div>
    </div>
  )
}
