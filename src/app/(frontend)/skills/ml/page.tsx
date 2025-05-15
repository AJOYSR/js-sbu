import React from 'react'
import Link from 'next/link'
import { ArrowRight, Brain, Database, Eye, Cpu } from 'lucide-react'
import { SkillRelatedPosts } from '@/components/RelatedArticle/SkillRelatedPosts'
import { fetchRelatedPostsBySkill } from '@/utilities/fetchRelatedPostsBySkill'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Machine Learning | JS SBU',
  description: 'Machine Learning JS SBU website',
}

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
    icon: <Brain className="h-8 w-8 text-primary" />,
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
    icon: <Database className="h-8 w-8 text-primary" />,
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
    icon: <Eye className="h-8 w-8 text-primary" />,
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

const mlBenefits = [
  {
    title: 'Automated Decision Making',
    description: 'Reduce manual processes and enable data-driven automated decisions',
    icon: '🤖',
  },
  {
    title: 'Personalized Experiences',
    description: 'Create tailored user experiences based on individual preferences and behaviors',
    icon: '👤',
  },
  {
    title: 'Predictive Insights',
    description: 'Anticipate future trends and make proactive business decisions',
    icon: '📊',
  },
  {
    title: 'Competitive Advantage',
    description: 'Leverage AI capabilities to stay ahead of market competition',
    icon: '🚀',
  },
]

export default async function MachineLearningPage() {
  // Fetch related posts from the CMS
  const relatedPosts = await fetchRelatedPostsBySkill('Machine Learning', 2)

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
              AI EXPERTISE
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animation-delay-200 animate-fadeIn">
              Machine <span className="text-gradient">Learning</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
              Transforming business operations with intelligent, data-driven solutions powered by
              state-of-the-art machine learning techniques
            </p>
            <div className="animation-delay-400 animate-fadeIn">
              <Link
                href="/contact"
                className="btn-gradient text-white px-8 py-3 rounded-xl shadow-lg hover-scale btn-pop"
              >
                Start Your AI Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ML Technologies Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
              CORE TECHNOLOGIES
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              Advanced ML Capabilities
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Leveraging cutting-edge machine learning technologies to solve complex business
              problems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mlTechnologies.map((tech, index) => (
              <div
                key={tech.name}
                className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn shadow-xl border border-white/5"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px] -z-10"></div>

                  <div className="w-14 h-14 flex items-center justify-center mb-6 bg-primary/10 rounded-2xl">
                    {tech.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gradient">{tech.name}</h3>
                  <p className="text-foreground/80 mb-6">{tech.description}</p>

                  <ul className="space-y-4">
                    {tech.applications.map((application) => (
                      <li key={application} className="flex items-start">
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
                        <span className="text-foreground/90">{application}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ML Frameworks Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
              TOOLS & FRAMEWORKS
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              ML Development Ecosystem
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Comprehensive suite of frameworks and tools for building and deploying machine
              learning solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mlFrameworks.map((framework, index) => (
              <div
                key={framework.title}
                className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn shadow-xl border border-white/5"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px] -z-10"></div>

                  <h3 className="text-xl font-bold mb-3 text-gradient">{framework.title}</h3>
                  <p className="text-foreground/80 mb-6">{framework.description}</p>

                  <ul className="space-y-3">
                    {framework.features.map((feature) => (
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

      {/* Benefits Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
              THE ADVANTAGES
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              Benefits of Machine Learning
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              How AI and machine learning create transformative business value
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mlBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn shadow-xl border border-white/5"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px] -z-10"></div>

                  <div className="w-14 h-14 flex items-center justify-center mb-6 bg-primary/10 rounded-2xl text-3xl">
                    {benefit.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gradient">{benefit.title}</h3>
                  <p className="text-foreground/80">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles Section - Dynamic from CMS */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
              INSIGHTS
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              AI & ML Knowledge Hub
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Explore our latest articles and insights on artificial intelligence and machine
              learning
            </p>
          </div>

          <div className="animation-delay-400 animate-fadeIn">
            <SkillRelatedPosts posts={relatedPosts} />
          </div>
        </div>
      </section>

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
                  Ready to Leverage Machine Learning?
                </h2>
                <p className="text-foreground/90 text-lg mb-10 max-w-3xl mx-auto animation-delay-300 animate-fadeIn">
                  Let&apos;s explore how machine learning can transform your business operations,
                  enhance customer experiences, and drive innovation in your products.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center animation-delay-400 animate-fadeIn">
                  <Link
                    href="/contact"
                    className="btn-gradient text-white px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium"
                  >
                    <span>Discuss Your ML Project</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="/services/ml-ai"
                    className="bg-white/10 border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium backdrop-blur-sm"
                  >
                    <span>Explore All Services</span>
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
