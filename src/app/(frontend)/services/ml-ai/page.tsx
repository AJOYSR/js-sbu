import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getRecentProjects } from '@/utilities/getRecentProjects'
import RelatedProjects from '@/components/RelatedProjects'
const services = [
  {
    title: 'Natural Language Processing',
    description: 'Advanced text analysis and language understanding',
    features: [
      'Text Classification',
      'Sentiment Analysis',
      'Named Entity Recognition',
      'Language Translation',
    ],
  },
  {
    title: 'Computer Vision',
    description: 'Visual data processing and analysis',
    features: ['Image Recognition', 'Object Detection', 'Face Recognition', 'Video Analysis'],
  },
  {
    title: 'Predictive Analytics',
    description: 'Data-driven forecasting and insights',
    features: [
      'Time Series Analysis',
      'Pattern Recognition',
      'Anomaly Detection',
      'Trend Prediction',
    ],
  },
  {
    title: 'Machine Learning Integration',
    description: 'Seamless ML integration into existing systems',
    features: [
      'API Development',
      'Model Deployment',
      'System Integration',
      'Performance Monitoring',
    ],
  },
]

const technologies = [
  {
    name: 'TensorFlow.js',
    description: 'Machine learning in JavaScript',
    features: [
      'Browser-based ML',
      'Pre-trained Models',
      'Custom Model Training',
      'Real-time Processing',
    ],
  },
  {
    name: 'Ollama',
    description: 'Open-source AI model framework',
    features: [
      'Local Model Running',
      'Model Fine-tuning',
      'Custom Deployments',
      'Efficient Inference',
    ],
  },
  {
    name: 'Llama',
    description: 'Advanced language models',
    features: [
      'Text Generation',
      'Language Understanding',
      'Context Awareness',
      'Customizable Responses',
    ],
  },
  {
    name: 'Custom Solutions',
    description: 'Tailored AI implementations',
    features: [
      'Custom Model Development',
      'Algorithm Design',
      'Performance Optimization',
      'Scalable Architecture',
    ],
  },
]

const applications = [
  {
    title: 'Chatbots & Virtual Assistants',
    description: 'Intelligent conversational interfaces for customer support and automation',
  },
  {
    title: 'Content Analysis',
    description: 'Automated content categorization, moderation, and recommendation systems',
  },
  {
    title: 'Business Intelligence',
    description: 'Data-driven insights and predictions for better decision making',
  },
  {
    title: 'Process Automation',
    description: 'Intelligent automation of repetitive tasks and workflows',
  },
  {
    title: 'Personalization',
    description: 'Customized user experiences based on behavior and preferences',
  },
  {
    title: 'Quality Assurance',
    description: 'Automated testing and quality control using AI',
  },
]

export default async function MLAIPage() {
  const projects = await getRecentProjects('machine-learning-ai')
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">Machine Learning & AI Solutions</h1>
          <p className="text-xl text-gray-600">
            Leveraging cutting-edge AI technologies to create intelligent solutions that drive
            innovation and efficiency
          </p>
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
        {/* Technologies Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Technologies We Use</h2>
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
        {/* Applications Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app) => (
              <div key={app.title} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{app.title}</h3>
                <p className="text-gray-600">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Implementation Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Requirements Analysis</h3>
                  <p className="text-gray-600">
                    Understanding your business needs and identifying the right AI solutions to
                    address them effectively.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Data Assessment</h3>
                  <p className="text-gray-600">
                    Evaluating available data, determining data requirements, and establishing data
                    processing pipelines.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Model Development</h3>
                  <p className="text-gray-600">
                    Creating and training custom AI models or adapting existing ones to meet your
                    specific requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Integration & Deployment</h3>
                  <p className="text-gray-600">
                    Seamlessly integrating AI solutions into your existing systems and ensuring
                    optimal performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <RelatedProjects projects={projects} />

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Ready to Implement AI in Your Business?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Let&apos;s discuss how our AI solutions can help transform your business and drive
            innovation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Get Started with AI
          </Link>
        </div>
      </div>
    </div>
  )
}
