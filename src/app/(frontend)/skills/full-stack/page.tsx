import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SkillRelatedPosts } from '@/components/RelatedArticle/SkillRelatedPosts'
import { fetchRelatedPostsBySkill } from '@/utilities/fetchRelatedPostsBySkill'

const technologies = {
  frontend: [
    {
      name: 'React',
      description: 'Building interactive user interfaces',
      features: ['Component-Based', 'Virtual DOM', 'JSX', 'Hooks'],
    },
    {
      name: 'Angular',
      description: 'Enterprise-grade application framework',
      features: ['TypeScript', 'RxJS', 'Dependency Injection', 'CLI'],
    },
    {
      name: 'Vue.js',
      description: 'Progressive JavaScript framework',
      features: ['Reactive Data', 'Component System', 'Vue Router', 'Vuex'],
    },
  ],
  backend: [
    {
      name: 'Node.js',
      description: 'JavaScript runtime environment',
      features: ['Event-Driven', 'Non-Blocking I/O', 'NPM', 'Express.js'],
    },
    {
      name: 'NestJS',
      description: 'Progressive Node.js framework',
      features: ['TypeScript', 'Modular', 'Dependency Injection', 'OOP'],
    },
    {
      name: 'Express.js',
      description: 'Web application framework',
      features: ['Routing', 'Middleware', 'REST API', 'Template Engines'],
    },
  ],
  database: [
    {
      name: 'MongoDB',
      description: 'NoSQL database',
      features: ['Document Store', 'Scalable', 'Flexible Schema', 'Aggregation'],
    },
    {
      name: 'PostgreSQL',
      description: 'Relational database',
      features: ['ACID Compliant', 'JSON Support', 'Extensions', 'Performance'],
    },
    {
      name: 'Redis',
      description: 'In-memory data store',
      features: ['Caching', 'Pub/Sub', 'Data Structures', 'Persistence'],
    },
  ],
}

const services = [
  {
    title: 'Web Application Development',
    description: 'End-to-end web application development with modern technologies',
    features: [
      'Single Page Applications',
      'Progressive Web Apps',
      'RESTful APIs',
      'Real-time Applications',
    ],
  },
  {
    title: 'Database Design & Integration',
    description: 'Robust database solutions for your applications',
    features: ['Schema Design', 'Data Modeling', 'Performance Optimization', 'Data Migration'],
  },
  {
    title: 'API Development',
    description: 'Building scalable and secure APIs',
    features: ['REST Architecture', 'GraphQL', 'Authentication', 'Documentation'],
  },
  {
    title: 'DevOps Integration',
    description: 'Streamlined development and deployment processes',
    features: ['CI/CD Pipelines', 'Docker Containerization', 'Cloud Deployment', 'Monitoring'],
  },
]

export default async function FullStackPage() {
  // Fetch related posts from the CMS
  const relatedPosts = await fetchRelatedPostsBySkill('Full Stack', 2)

  return (
    <div className="min-h-screen py-16 animate-fadeIn">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6 text-gradient">Full Stack Development</h1>
          <p className="text-xl text-gray-600 animation-delay-200 animate-fadeIn">
            Comprehensive full-stack development solutions using cutting-edge JavaScript
            technologies for building modern web applications
          </p>
        </div>

        {/* Technology Stacks */}
        <div className="mb-20 animation-delay-400 animate-fadeIn">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">
            Our Technology Stack
          </h2>

          {/* Frontend */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-primary">Frontend Technologies</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {technologies.frontend.map((tech, index) => (
                <div
                  key={tech.name}
                  className="glass-card card-hover p-6 rounded-lg shadow-md"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <h4 className="text-xl font-semibold mb-3 text-primary">{tech.name}</h4>
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

          {/* Backend */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-primary">Backend Technologies</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {technologies.backend.map((tech, index) => (
                <div
                  key={tech.name}
                  className="glass-card card-hover p-6 rounded-lg shadow-md"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <h4 className="text-xl font-semibold mb-3 text-primary">{tech.name}</h4>
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

          {/* Database */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-primary">Database Technologies</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {technologies.database.map((tech, index) => (
                <div
                  key={tech.name}
                  className="glass-card card-hover p-6 rounded-lg shadow-md"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <h4 className="text-xl font-semibold mb-3 text-primary">{tech.name}</h4>
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

        {/* Related Articles Section - Dynamic from CMS */}
        <SkillRelatedPosts posts={relatedPosts} />

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-lg soft-shadow">
          <h2 className="text-3xl font-bold mb-6 text-gradient">
            Ready to Build Your Application?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Let&apos;s discuss how our full-stack development expertise can help bring your ideas to
            life.
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
