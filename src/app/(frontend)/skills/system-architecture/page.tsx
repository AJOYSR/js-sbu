import React from 'react'
import Link from 'next/link'
import { SkillRelatedPosts } from '@/components/RelatedArticle/SkillRelatedPosts'
import { fetchRelatedPostsBySkill } from '@/utilities/fetchRelatedPostsBySkill'

const architectureApproaches = [
  {
    name: 'Microservices Architecture',
    description:
      'Building applications as collections of loosely coupled, independently deployable services',
    benefits: [
      'Scalability for individual components',
      'Technology flexibility',
      'Resilience and fault isolation',
      'Independent deployment cycles',
    ],
  },
  {
    name: 'Event-Driven Architecture',
    description: 'Designing systems that produce, detect, and react to events',
    benefits: [
      'Loose coupling between components',
      'Real-time responsiveness',
      'Scalability and resilience',
      'Asynchronous processing',
    ],
  },
  {
    name: 'Serverless Architecture',
    description: 'Building applications that run on cloud provider-managed infrastructure',
    benefits: [
      'No infrastructure management',
      'Pay-per-use pricing model',
      'Automatic scaling',
      'Reduced operational overhead',
    ],
  },
]

const designPrinciples = [
  {
    title: 'Scalability',
    description: 'Design systems that can handle growing loads efficiently',
    practices: ['Horizontal scaling', 'Load balancing', 'Database sharding', 'Caching strategies'],
  },
  {
    title: 'Reliability',
    description: 'Build systems that are resilient to failures and maintain performance',
    practices: [
      'Redundancy and replication',
      'Circuit breakers',
      'Health monitoring',
      'Graceful degradation',
    ],
  },
  {
    title: 'Security',
    description: 'Implement robust security measures at every layer of the system',
    practices: [
      'Defense in depth',
      'Principle of least privilege',
      'Data encryption',
      'Regular security audits',
    ],
  },
  {
    title: 'Maintainability',
    description: 'Create systems that are easy to understand, modify, and extend',
    practices: [
      'Clean code practices',
      'Comprehensive documentation',
      'Automated testing',
      'Continuous integration',
    ],
  },
]

const relatedBlogs = [
  {
    title: 'Microservices vs. Monoliths: Choosing the Right Architecture',
    description:
      'An in-depth analysis of when to choose microservices over monolithic architecture, and vice versa.',
    link: '/posts/microservices-vs-monoliths',
  },
  {
    title: 'Event-Driven Architecture Patterns',
    description:
      'Exploring practical patterns for implementing event-driven systems in modern applications.',
    link: '/posts/event-driven-architecture-patterns',
  },
]

export default async function SystemArchitecturePage() {
  // Fetch related posts from the CMS
  const relatedPosts = await fetchRelatedPostsBySkill('System Architecture', 2)

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">System Architecture</h1>
          <p className="text-xl text-gray-600">
            Designing scalable, resilient, and maintainable architectures to support modern
            applications and business objectives
          </p>
        </div>

        {/* Architecture Approaches Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Architecture Approaches</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {architectureApproaches.map((approach) => (
              <div key={approach.name} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-3">{approach.name}</h4>
                <p className="text-gray-600 mb-4">{approach.description}</p>
                <h5 className="font-semibold text-sm text-gray-800 mb-2">Key Benefits:</h5>
                <ul className="space-y-2">
                  {approach.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-sm text-gray-600">
                      <span className="text-primary mr-2">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Design Principles Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Design Principles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {designPrinciples.map((principle) => (
              <div key={principle.title} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{principle.title}</h3>
                <p className="text-gray-600 mb-6">{principle.description}</p>
                <h5 className="font-semibold text-sm text-gray-800 mb-2">Best Practices:</h5>
                <ul className="space-y-3">
                  {principle.practices.map((practice) => (
                    <li key={practice} className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      {practice}
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
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">
            Build a Solid Foundation for Your Applications
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Let&lsquo;s collaborate to design scalable, maintainable system architectures that grow
            with your business and support your long-term objectives.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </div>
  )
}
