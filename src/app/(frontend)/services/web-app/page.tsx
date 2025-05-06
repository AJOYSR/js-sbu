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
    <div className="min-h-screen py-12 animate-fadeIn">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="inline-block mb-3 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium">
            Web Technology Experts
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Web Application Development
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Creating powerful, scalable, and user-friendly web applications using cutting-edge
            JavaScript technologies
          </p>
          <button className="mt-8 btn-gradient text-white px-8 py-3 rounded-full font-medium btn-pop shadow-lg">
            Get Started
          </button>
        </div>

        {/* Technologies Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-3 text-center text-gradient">Our Tech Stack</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We use modern technologies to create innovative web solutions
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="glass-card p-6 rounded-lg card-hover neon-glow animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-3 text-gradient">{tech.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{tech.description}</p>
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
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-3 text-center text-gradient">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive web development services tailored to your needs
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="gradient-border shiny-card p-7 rounded-lg shadow-md animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-3 text-gradient">{service.title}</h3>
                <p className="text-gray-600 mb-5 text-sm">{service.description}</p>
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <span className="bg-gradient-to-r from-primary to-pink-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2.5 flex-shrink-0">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-3 text-center text-gradient">
            Our Development Process
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            How we transform your ideas into exceptional web applications
          </p>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Requirements Analysis',
                description:
                  'We work closely with you to understand your business needs and define clear project requirements and objectives.',
              },
              {
                step: 2,
                title: 'Design & Architecture',
                description:
                  'Our team creates detailed technical specifications and designs the application architecture for optimal performance.',
              },
              {
                step: 3,
                title: 'Development & Testing',
                description:
                  'We follow agile development practices with regular testing and quality assurance throughout the development cycle.',
              },
              {
                step: 4,
                title: 'Deployment & Support',
                description:
                  'We ensure smooth deployment and provide ongoing support and maintenance for your application.',
              },
            ].map((process, index) => (
              <div
                key={process.step}
                className="flex items-start gap-5 bounce-hover animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-r from-primary to-pink-400 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  {process.step}
                </div>
                <div className="glass-card p-5 rounded-lg flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-gradient">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="my-20 text-center">
          <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto neon-glow">
            <div className="inline-block mb-3 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium">
              Let&apos;s Work Together
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gradient">
              Ready to Build Your Web Application?
            </h2>
            <p className="text-lg mb-8 max-w-xl mx-auto">
              Let&apos;s transform your ideas into powerful digital solutions.
            </p>
            <button className="btn-gradient text-white px-8 py-3 rounded-full font-medium btn-pop shadow-lg">
              Contact Us Today
            </button>
          </div>
        </div>

        {/* Related Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-3 text-center text-gradient">Our Recent Work</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Check out some of our successful web application projects
          </p>
          <RelatedProjects projects={projects} />
        </div>
      </div>
    </div>
  )
}
