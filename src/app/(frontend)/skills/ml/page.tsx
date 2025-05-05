import React from 'react'
import Link from 'next/link'
import { SkillRelatedPosts } from '@/components/RelatedArticle/SkillRelatedPosts'
import { fetchRelatedPostsBySkill } from '@/utilities/fetchRelatedPostsBySkill'

const mlTechnologies = [
  {
    name: 'Deep Learning',
    description: 'Neural network-based approaches for complex pattern recognition and prediction',
    applications: [
      'Image and video recognition',
      'Natural language processing',
      'Speech recognition',
      'Generative AI',
    ],
  },
  {
    name: 'Predictive Analytics',
    description:
      'Statistical techniques to analyze data and make predictions about future outcomes',
    applications: [
      'Customer behavior prediction',
      'Demand forecasting',
      'Risk assessment',
      'Preventive maintenance',
    ],
  },
  {
    name: 'Computer Vision',
    description: 'Techniques for extracting information from digital images and videos',
    applications: [
      'Object detection and tracking',
      'Facial recognition',
      'Medical image analysis',
      'Autonomous vehicles',
    ],
  },
]

const mlFrameworks = [
  {
    title: 'TensorFlow',
    description: 'Open-source platform for machine learning and deep neural networks',
    features: [
      'End-to-end ML platform',
      'Production-ready deployment',
      'TensorFlow.js for web applications',
      'TensorFlow Lite for mobile and edge devices',
    ],
  },
  {
    title: 'PyTorch',
    description: 'Open-source deep learning framework with dynamic computational graph',
    features: [
      'Dynamic computational graph',
      'Native Python integration',
      'Strong research community',
      'TorchServe for model deployment',
    ],
  },
  {
    title: 'Scikit-learn',
    description: 'Simple and efficient tools for data analysis and machine learning',
    features: [
      'Accessible interface',
      'Comprehensive ML algorithms',
      'Integration with NumPy and SciPy',
      'Production-ready implementations',
    ],
  },
  {
    title: 'MLOps Tools',
    description: 'Tools for managing the ML lifecycle from experimentation to production',
    features: [
      'Experiment tracking',
      'Model versioning',
      'Automated deployment',
      'Monitoring and maintenance',
    ],
  },
]

export default async function MachineLearningPage() {
  // Fetch related posts from the CMS
  const relatedPosts = await fetchRelatedPostsBySkill('Machine Learning', 2)

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">Machine Learning Implementation</h1>
          <p className="text-xl text-gray-600">
            Transforming business operations with intelligent, data-driven solutions powered by
            state-of-the-art machine learning techniques
          </p>
        </div>

        {/* ML Technologies Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">ML Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mlTechnologies.map((tech) => (
              <div key={tech.name} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-3">{tech.name}</h4>
                <p className="text-gray-600 mb-4">{tech.description}</p>
                <h5 className="font-semibold text-sm text-gray-800 mb-2">Key Applications:</h5>
                <ul className="space-y-2">
                  {tech.applications.map((application) => (
                    <li key={application} className="flex items-center text-sm text-gray-600">
                      <span className="text-primary mr-2">•</span>
                      {application}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ML Frameworks Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Frameworks & Tools</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {mlFrameworks.map((framework) => (
              <div key={framework.title} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{framework.title}</h3>
                <p className="text-gray-600 mb-6">{framework.description}</p>
                <h5 className="font-semibold text-sm text-gray-800 mb-2">Key Features:</h5>
                <ul className="space-y-3">
                  {framework.features.map((feature) => (
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

        {/* Related Blogs Section - Dynamic from CMS */}
        <SkillRelatedPosts posts={relatedPosts} />

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Ready to Leverage Machine Learning?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Let&lsquo;s explore how machine learning can transform your business operations, enhance
            customer experiences, and drive innovation in your products.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Discuss Your ML Project
          </Link>
        </div>
      </div>
    </div>
  )
}
