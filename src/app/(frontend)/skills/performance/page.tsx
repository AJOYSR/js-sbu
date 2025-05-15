import React from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, Server, Globe, BarChart } from 'lucide-react'
import { SkillRelatedPosts } from '@/components/RelatedArticle/SkillRelatedPosts'
import { fetchRelatedPostsBySkill } from '@/utilities/fetchRelatedPostsBySkill'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Performance Optimization | JS SBU',
  description: 'Performance Optimization JS SBU website',
}

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
    icon: <Zap className="h-8 w-8 text-primary" />,
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
    icon: <Server className="h-8 w-8 text-primary" />,
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
    icon: <Globe className="h-8 w-8 text-primary" />,
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

const performanceBenefits = [
  {
    title: 'Improved User Experience',
    description: 'Faster load times and smoother interactions lead to happier users',
    icon: '😊',
  },
  {
    title: 'Higher Conversion Rates',
    description: 'Better performance directly impacts business metrics and revenue',
    icon: '📈',
  },
  {
    title: 'Better SEO Rankings',
    description: 'Search engines favor faster, more responsive websites',
    icon: '🔍',
  },
  {
    title: 'Reduced Infrastructure Costs',
    description: 'Efficient applications require fewer server resources to operate',
    icon: '💰',
  },
]

export default async function PerformanceOptimizationPage() {
  // Fetch related posts from the CMS
  const relatedPosts = await fetchRelatedPostsBySkill('Performance', 2)

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
              PERFORMANCE EXPERTISE
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animation-delay-200 animate-fadeIn">
              Performance <span className="text-gradient">Optimization</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
              Enhancing application speed, responsiveness, and scalability through systematic
              performance optimization techniques
            </p>
            <div className="animation-delay-400 animate-fadeIn">
              <Link
                href="/contact"
                className="btn-gradient text-white px-8 py-3 rounded-xl shadow-lg hover-scale btn-pop"
              >
                Speed Up Your Application
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Areas Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
              KEY AREAS
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              Optimization Focus Areas
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Comprehensive approaches to improving performance across your entire application stack
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {performanceAreas.map((area, index) => (
              <div
                key={area.name}
                className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn shadow-xl border border-white/5"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px] -z-10"></div>

                  <div className="w-14 h-14 flex items-center justify-center mb-6 bg-primary/10 rounded-2xl">
                    {area.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gradient">{area.name}</h3>
                  <p className="text-foreground/80 mb-6">{area.description}</p>

                  <ul className="space-y-4">
                    {area.techniques.map((technique) => (
                      <li key={technique} className="flex items-start">
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
                        <span className="text-foreground/90">{technique}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Tools Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
              TOOLS & RESOURCES
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              Performance Optimization Tools
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Industry-leading tools and technologies to measure, analyze, and enhance performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {optimizationTools.map((tool, index) => (
              <div
                key={tool.title}
                className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn shadow-xl border border-white/5"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px] -z-10"></div>

                  <h3 className="text-xl font-bold mb-3 text-gradient">{tool.title}</h3>
                  <p className="text-foreground/80 mb-6">{tool.description}</p>

                  <ul className="space-y-3">
                    {tool.examples.map((example) => (
                      <li key={example} className="flex items-start">
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
                        <span className="text-foreground/90">{example}</span>
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
              Benefits of Performance Optimization
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              The measurable impact of performance improvements on business success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceBenefits.map((benefit, index) => (
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
              Performance Knowledge Hub
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Explore our latest articles and insights on performance optimization techniques
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
                  Ready to Optimize Your Application?
                </h2>
                <p className="text-foreground/90 text-lg mb-10 max-w-3xl mx-auto animation-delay-300 animate-fadeIn">
                  Let&apos;s collaborate to enhance your application&apos;s performance, providing
                  your users with a faster, more responsive experience while reducing operational
                  costs.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center animation-delay-400 animate-fadeIn">
                  <Link
                    href="/contact"
                    className="btn-gradient text-white px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium"
                  >
                    <span>Get Started</span>
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
