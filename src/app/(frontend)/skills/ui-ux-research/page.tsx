import React from 'react'
import Link from 'next/link'
import { SkillRelatedPosts } from '@/components/RelatedArticle/SkillRelatedPosts'
import { fetchRelatedPostsBySkill } from '@/utilities/fetchRelatedPostsBySkill'

const methodologies = [
  {
    name: 'User Interviews',
    description: 'Direct conversations with users to understand their needs and pain points',
    benefits: [
      'Deep qualitative insights',
      'Uncover hidden needs',
      'Build empathy with users',
      'Validate hypotheses directly',
    ],
  },
  {
    name: 'Usability Testing',
    description: 'Observing users interact with products to identify usability issues',
    benefits: [
      'Identify navigation problems',
      'Measure task completion rates',
      'Collect direct user feedback',
      'Validate design decisions',
    ],
  },
  {
    name: 'A/B Testing',
    description: 'Comparing multiple design versions to determine which performs better',
    benefits: [
      'Data-driven decisions',
      'Quantify design impact',
      'Continuous improvement',
      'Reduce business risk',
    ],
  },
]

const designProcesses = [
  {
    name: 'User Research',
    description:
      'Understanding user behaviors, needs, and motivations through observation and feedback',
    phases: ['Stakeholder interviews', 'User interviews', 'Contextual inquiry', 'Survey research'],
  },
  {
    name: 'Information Architecture',
    description: 'Organizing and structuring content to help users find what they need',
    phases: ['Content inventory', 'User flows', 'Site mapping', 'Navigation design'],
  },
  {
    name: 'Interaction Design',
    description: 'Designing the interactive behavior of products and interfaces',
    phases: ['Wireframing', 'Prototyping', 'Interaction patterns', 'Microinteractions'],
  },
  {
    name: 'Visual Design',
    description:
      'Creating the look and feel of a product, including color, typography, and imagery',
    phases: ['Style guides', 'Design systems', 'Visual hierarchy', 'UI components'],
  },
]

export default async function UIUXResearchPage() {
  // Fetch related posts from the CMS
  const relatedPosts = await fetchRelatedPostsBySkill('UI/UX', 2)

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">UI/UX Research</h1>
          <p className="text-xl text-gray-600">
            Human-centered design approach backed by comprehensive research methodologies to create
            intuitive and engaging user experiences
          </p>
        </div>

        {/* Research Methodologies Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Research Methodologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {methodologies.map((method) => (
              <div key={method.name} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-3">{method.name}</h4>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <h5 className="font-semibold text-sm text-gray-800 mb-2">Key Benefits:</h5>
                <ul className="space-y-2">
                  {method.benefits.map((benefit) => (
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

        {/* Design Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Design Process</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {designProcesses.map((process) => (
              <div key={process.name} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{process.name}</h3>
                <p className="text-gray-600 mb-6">{process.description}</p>
                <h5 className="font-semibold text-sm text-gray-800 mb-2">Key Phases:</h5>
                <ul className="space-y-3">
                  {process.phases.map((phase) => (
                    <li key={phase} className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      {phase}
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
          <h2 className="text-3xl font-bold mb-6">Enhance Your Product&apos;s User Experience</h2>
          <p className="text-lg text-gray-700 mb-8">
            Let&lsquo;s collaborate to create intuitive, engaging, and user-centered digital
            experiences that delight your users and achieve your business goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </div>
  )
}
