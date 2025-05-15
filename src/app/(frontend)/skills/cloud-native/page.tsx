import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Cloud, Box, Server, Activity } from 'lucide-react'
import { SkillRelatedPosts } from '@/components/RelatedArticle/SkillRelatedPosts'
import { fetchRelatedPostsBySkill } from '@/utilities/fetchRelatedPostsBySkill'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Cloud Native | JS SBU',
  description: 'Cloud Native JS SBU website',
}
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
    icon: <Box className="h-8 w-8 text-primary" />,
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
    icon: <Server className="h-8 w-8 text-primary" />,
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
    icon: <Cloud className="h-8 w-8 text-primary" />,
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

const benefits = [
  {
    title: 'Cost Optimization',
    description: 'Pay only for resources you use with auto-scaling capabilities',
    icon: '💰',
  },
  {
    title: 'Increased Resilience',
    description: 'Build systems that are resilient to failures and downtime',
    icon: '🛡️',
  },
  {
    title: 'Global Scale',
    description: 'Deploy applications globally with ease and consistency',
    icon: '🌐',
  },
  {
    title: 'Faster Time to Market',
    description: 'Accelerate development cycles with DevOps practices',
    icon: '🚀',
  },
]

export default async function CloudNativePage() {
  // Fetch related posts from the CMS
  const relatedPosts = await fetchRelatedPostsBySkill('Cloud Native', 2)

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
              CLOUD EXPERTISE
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animation-delay-200 animate-fadeIn">
              Cloud Native <span className="text-gradient">Applications</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
              Building scalable, resilient applications designed specifically for cloud environments
              using modern architectures and best practices
            </p>
            <div className="animation-delay-400 animate-fadeIn">
              <Link
                href="/contact"
                className="btn-gradient text-white px-8 py-3 rounded-xl shadow-lg hover-scale btn-pop"
              >
                Start Your Cloud Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technologies Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
              CORE TECHNOLOGIES
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              Modern Cloud Infrastructure
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Leveraging the most powerful technologies to build cloud-native applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cloudTechnologies.map((tech, index) => (
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
                    {tech.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start">
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
                        <span className="text-foreground/90">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Services Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
              SERVICES & TOOLS
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              Cloud Services Ecosystem
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Comprehensive suite of services and tools for building modern cloud applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cloudServices.map((service, index) => (
              <div
                key={service.title}
                className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn shadow-xl border border-white/5"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px] -z-10"></div>

                  <h3 className="text-xl font-bold mb-3 text-gradient">{service.title}</h3>
                  <p className="text-foreground/80 mb-6">{service.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
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
              Benefits of Cloud Native Architecture
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Why cloud-native applications deliver exceptional business value
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
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
              Cloud Knowledge Hub
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Explore our latest articles and insights on cloud native technologies
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
                  Ready to Transform Your Applications for the Cloud?
                </h2>
                <p className="text-foreground/90 text-lg mb-10 max-w-3xl mx-auto animation-delay-300 animate-fadeIn">
                  Let&apos;s collaborate to build modern, scalable, and resilient cloud-native
                  applications that leverage the full potential of cloud platforms.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center animation-delay-400 animate-fadeIn">
                  <Link
                    href="/contact"
                    className="btn-gradient text-white px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium"
                  >
                    <span>Start Your Cloud Journey</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="/services/web-app"
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
