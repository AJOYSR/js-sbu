import React from 'react'
import Link from 'next/link'
import { SkillRelatedPosts } from '@/components/RelatedArticle/SkillRelatedPosts'
import { fetchRelatedPostsBySkill } from '@/utilities/fetchRelatedPostsBySkill'

const performanceAreas = [
  {
    name: 'Frontend Performance',
    description: 'Optimizing client-side code for faster load times and smoother user experiences',
    techniques: [
      'Code splitting and lazy loading',
      'Bundle size optimization',
      'Client-side caching strategies',
      'Efficient rendering techniques',
    ],
  },
  {
    name: 'Backend Performance',
    description: 'Improving server-side processing speed and efficiency',
    techniques: [
      'Database query optimization',
      'Caching strategies',
      'Asynchronous processing',
      'Load balancing and scaling',
    ],
  },
  {
    name: 'Network Performance',
    description: 'Reducing latency and optimizing data transfer between client and server',
    techniques: [
      'HTTP/2 and HTTP/3 implementation',
      'Content compression',
      'CDN integration',
      'API response optimization',
    ],
  },
]

const optimizationTools = [
  {
    title: 'Performance Monitoring',
    description: 'Tools to track and analyze application performance metrics',
    examples: ['Lighthouse', 'New Relic', 'Datadog', 'Sentry Performance'],
  },
  {
    title: 'Profiling Tools',
    description: 'Identify performance bottlenecks in your code',
    examples: [
      'Chrome DevTools Performance tab',
      'React Profiler',
      'Node.js Profiler',
      'Flame graphs',
    ],
  },
  {
    title: 'Load Testing',
    description: 'Simulate high traffic to identify performance limits',
    examples: ['JMeter', 'k6', 'Locust', 'Artillery'],
  },
  {
    title: 'Image Optimization',
    description: 'Tools for reducing image size while maintaining quality',
    examples: ['Sharp', 'next/image', 'ImageOptim', 'WebP conversion'],
  },
]

const relatedBlogs = [
  {
    title: 'Core Web Vitals: A Practical Guide to Optimization',
    description:
      'Learn how to measure and improve Core Web Vitals for better search rankings and user experience.',
    link: '/posts/core-web-vitals-optimization',
  },
  {
    title: 'Database Query Optimization Techniques for Node.js Applications',
    description: 'Practical strategies for improving database performance in your Node.js apps.',
    link: '/posts/nodejs-database-optimization',
  },
]

export default async function PerformanceOptimizationPage() {
  // Fetch related posts from the CMS
  const relatedPosts = await fetchRelatedPostsBySkill('Performance', 2)

  return (
    <div className="min-h-screen py-16 animate-fadeIn">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6 text-gradient">Performance Optimization</h1>
          <p className="text-xl text-gray-600 animation-delay-200 animate-fadeIn">
            Enhancing application speed, responsiveness, and scalability through systematic
            performance optimization techniques
          </p>
        </div>

        {/* Performance Areas Section */}
        <div className="mb-20 animation-delay-400 animate-fadeIn">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Optimization Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {performanceAreas.map((area, index) => (
              <div
                key={area.name}
                className="glass-card card-hover p-6 rounded-lg shadow-md"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <h4 className="text-xl font-semibold mb-3 text-primary">{area.name}</h4>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <h5 className="font-semibold text-sm text-primary mb-2">Key Techniques:</h5>
                <ul className="space-y-2">
                  {area.techniques.map((technique) => (
                    <li key={technique} className="flex items-center text-sm text-gray-600">
                      <span className="text-primary mr-2">•</span>
                      {technique}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Optimization Tools Section */}
        <div className="mb-20 animation-delay-600 animate-fadeIn">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Tools & Resources</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {optimizationTools.map((tool, index) => (
              <div
                key={tool.title}
                className="shiny-card gradient-border p-8 bg-card"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">{tool.title}</h3>
                <p className="text-gray-600 mb-6">{tool.description}</p>
                <h5 className="font-semibold text-sm text-primary mb-2">Popular Examples:</h5>
                <ul className="space-y-3">
                  {tool.examples.map((example) => (
                    <li key={example} className="flex items-center">
                      <span className="text-primary mr-2 font-bold">✓</span>
                      {example}
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
            Ready to Optimize Your Application?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Let&apos;s collaborate to enhance your application&apos;s performance, providing your
            users with a faster, more responsive experience while reducing operational costs.
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
