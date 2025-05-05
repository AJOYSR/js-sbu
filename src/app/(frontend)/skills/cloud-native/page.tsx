import React from 'react'
import Link from 'next/link'
import { SkillRelatedPosts } from '@/components/RelatedArticle/SkillRelatedPosts'
import { fetchRelatedPostsBySkill } from '@/utilities/fetchRelatedPostsBySkill'

const cloudTechnologies = [
  {
    name: 'Kubernetes',
    description:
      'Container orchestration platform for automating application deployment and scaling',
    capabilities: [
      'Automated rollouts and rollbacks',
      'Service discovery and load balancing',
      'Self-healing capabilities',
      'Horizontal scaling',
    ],
  },
  {
    name: 'Docker',
    description: 'Platform for developing, shipping, and running applications in containers',
    capabilities: [
      'Consistent environments',
      'Isolation and security',
      'Quick deployment',
      'Version control for containers',
    ],
  },
  {
    name: 'Serverless Computing',
    description: 'Cloud execution model where the provider manages infrastructure automatically',
    capabilities: [
      'Zero infrastructure management',
      'Automatic scaling',
      'Pay-per-execution',
      'Event-driven architecture',
    ],
  },
]

const cloudServices = [
  {
    title: 'Infrastructure as Code',
    description: 'Managing infrastructure through code rather than manual processes',
    tools: ['Terraform', 'AWS CloudFormation', 'Pulumi', 'Azure Resource Manager'],
  },
  {
    title: 'Container Registry & Deployment',
    description: 'Services for storing, managing, and deploying container images',
    tools: ['Docker Hub', 'Amazon ECR', 'Google Container Registry', 'GitHub Container Registry'],
  },
  {
    title: 'Cloud Databases',
    description: 'Managed database services for cloud-native applications',
    tools: ['Amazon DynamoDB', 'Google Cloud Firestore', 'Azure Cosmos DB', 'MongoDB Atlas'],
  },
  {
    title: 'Observability & Monitoring',
    description: 'Tools for monitoring, logging, and tracing cloud applications',
    tools: ['Prometheus', 'Grafana', 'Datadog', 'New Relic'],
  },
]

export default async function CloudNativePage() {
  // Fetch related posts from the CMS
  const relatedPosts = await fetchRelatedPostsBySkill('Cloud Native', 2)

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">Cloud Native Apps</h1>
          <p className="text-xl text-gray-600">
            Building scalable, resilient applications designed specifically for cloud environments
            using modern architectures and best practices
          </p>
        </div>

        {/* Cloud Technologies Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cloudTechnologies.map((tech) => (
              <div key={tech.name} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-3">{tech.name}</h4>
                <p className="text-gray-600 mb-4">{tech.description}</p>
                <h5 className="font-semibold text-sm text-gray-800 mb-2">Key Capabilities:</h5>
                <ul className="space-y-2">
                  {tech.capabilities.map((capability) => (
                    <li key={capability} className="flex items-center text-sm text-gray-600">
                      <span className="text-primary mr-2">•</span>
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Cloud Services Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Cloud Services & Tools</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {cloudServices.map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <h5 className="font-semibold text-sm text-gray-800 mb-2">Popular Tools:</h5>
                <ul className="space-y-3">
                  {service.tools.map((tool) => (
                    <li key={tool} className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      {tool}
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
            Ready to Transform Your Applications for the Cloud?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Let&apos;s collaborate to build modern, scalable, and resilient cloud-native
            applications that leverage the full potential of cloud platforms.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Start Your Cloud Journey
          </Link>
        </div>
      </div>
    </div>
  )
}
