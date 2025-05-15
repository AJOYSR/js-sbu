import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getRecentProjects } from '@/utilities/getRecentProjects'
import RelatedProjects from '@/components/RelatedProjects'
import { ArrowRight, Brain, Cpu } from 'lucide-react'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'ML & AI | JS SBU',
  description: 'ML & AI JS SBU website',
}
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
    icon: '🔍',
  },
  {
    title: 'Computer Vision',
    description: 'Visual data processing and analysis',
    features: ['Image Recognition', 'Object Detection', 'Face Recognition', 'Video Analysis'],
    icon: '👁️',
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
    icon: '📊',
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
    icon: '🔄',
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
    <div className="min-h-screen animate-fadeIn">
      {/* Hero Section with Background */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-background overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-32 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6 animate-fadeIn backdrop-blur-sm">
              AI & ML EXPERTISE
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animation-delay-200 animate-fadeIn">
              Machine Learning & <span className="text-gradient">AI Solutions</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
              Leveraging cutting-edge AI technologies to create intelligent solutions that drive
              innovation and efficiency
            </p>
            <div className="animation-delay-400 animate-fadeIn">
              <Link
                href="/contact"
                className="btn-gradient text-white py-2 px-6 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium inline-flex w-auto mx-auto"
              >
                <span>Start Your AI Journey</span>
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
              OUR SERVICES
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              AI & ML Solutions
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Cutting-edge artificial intelligence and machine learning services for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn shadow-xl border border-white/5"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px] -z-10"></div>

                  <div className="w-14 h-14 flex items-center justify-center mb-6 bg-primary/10 rounded-2xl text-3xl">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gradient">{service.title}</h3>
                  <p className="text-foreground/80 mb-6">{service.description}</p>

                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <svg
                            className="w-4 h-4 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
              TECHNOLOGIES
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              Technologies We Use
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Leveraging the most advanced AI and ML technologies for optimal results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn shadow-xl border border-white/5"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px] -z-10"></div>

                  <h3 className="text-xl font-bold mb-3 text-gradient">{tech.name}</h3>
                  <p className="text-foreground/80 mb-4">{tech.description}</p>

                  <ul className="space-y-2">
                    {tech.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-foreground/80">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
              APPLICATIONS
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              AI Applications
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Discover how AI can transform various aspects of your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div
                key={app.title}
                className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn shadow-xl border border-white/5"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px] -z-10"></div>

                  <h3 className="text-xl font-bold mb-3 text-gradient">{app.title}</h3>
                  <p className="text-foreground/80">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
              OUR PROCESS
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              Implementation Process
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Our systematic approach to implementing AI and ML solutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 animation-delay-400 animate-fadeIn">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-r from-primary to-primary-light text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  1
                </div>
                <div className="glass-card p-6 rounded-xl flex-1 border border-white/5">
                  <h3 className="text-xl font-bold mb-3 text-gradient">Requirements Analysis</h3>
                  <p className="text-foreground/80">
                    Understanding your business needs and identifying the right AI solutions to
                    address them effectively.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-r from-primary to-primary-light text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  2
                </div>
                <div className="glass-card p-6 rounded-xl flex-1 border border-white/5">
                  <h3 className="text-xl font-bold mb-3 text-gradient">Data Assessment</h3>
                  <p className="text-foreground/80">
                    Evaluating available data, determining data requirements, and establishing data
                    processing pipelines.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-r from-primary to-primary-light text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  3
                </div>
                <div className="glass-card p-6 rounded-xl flex-1 border border-white/5">
                  <h3 className="text-xl font-bold mb-3 text-gradient">Model Development</h3>
                  <p className="text-foreground/80">
                    Creating and training custom AI models or adapting existing ones to meet your
                    specific requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-r from-primary to-primary-light text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  4
                </div>
                <div className="glass-card p-6 rounded-xl flex-1 border border-white/5">
                  <h3 className="text-xl font-bold mb-3 text-gradient">Integration & Deployment</h3>
                  <p className="text-foreground/80">
                    Seamlessly integrating AI solutions into your existing systems and ensuring
                    optimal performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {projects && projects.length > 0 && (
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
                PORTFOLIO
              </span>
              <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
                Our Recent Work
              </h2>
              <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
                Check out some of our successful AI & ML projects
              </p>
            </div>

            <div className="animation-delay-400 animate-fadeIn">
              <RelatedProjects projects={projects} />
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-10 md:p-16 shadow-xl relative overflow-hidden border border-white/10 backdrop-blur-md animation-delay-300 animate-fadeIn">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-[80px]"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[80px]"></div>

              <div className="text-center relative z-10">
                <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
                  LET&apos;S WORK TOGETHER
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
                  Ready to Implement AI in Your Business?
                </h2>
                <p className="text-foreground/90 text-lg mb-10 max-w-3xl mx-auto animation-delay-300 animate-fadeIn">
                  Let&apos;s discuss how our AI solutions can help transform your business and drive
                  innovation.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center animation-delay-400 animate-fadeIn">
                  <Link
                    href="/contact"
                    className="btn-gradient text-white px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium"
                  >
                    <span>Start Your AI Journey</span>
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="bg-white/10 border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium backdrop-blur-sm"
                  >
                    <span>View AI Portfolio</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
