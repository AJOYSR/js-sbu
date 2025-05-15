import RelatedProjects from '@/components/RelatedProjects'
import { getRecentProjects } from '@/utilities/getRecentProjects'
import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Web Application | JS SBU',
  description: 'Web Application JS SBU website',
}

const technologies = [
  {
    name: 'React',
    description: 'Building dynamic and responsive user interfaces',
    features: ['Component-Based Architecture', 'Virtual DOM', 'Rich Ecosystem'],
    icon: '⚛️',
  },
  {
    name: 'Angular',
    description: 'Enterprise-grade applications with robust architecture',
    features: ['TypeScript Support', 'Dependency Injection', 'Full Framework'],
    icon: '🅰️',
  },
  {
    name: 'Vue.js',
    description: 'Progressive framework for building user interfaces',
    features: ['Reactive Data Binding', 'Component System', 'Easy Learning Curve'],
    icon: '🟢',
  },
  {
    name: 'Node.js',
    description: 'Scalable backend solutions with JavaScript',
    features: ['Event-Driven', 'Non-Blocking I/O', 'Large Package Ecosystem'],
    icon: '🔄',
  },
]

const services = [
  {
    title: 'Custom Web Applications',
    description: 'Tailored solutions to meet your specific business needs',
    features: [
      'Scalable Architecture',
      'Responsive Design',
      'Performance Optimization',
      'Security Implementation',
    ],
    icon: '🌐',
  },
  {
    title: 'Enterprise Solutions',
    description: 'Robust applications for large-scale business operations',
    features: [
      'Microservices Architecture',
      'Cloud Integration',
      'Authentication & Authorization',
      'Data Management',
    ],
    icon: '🏢',
  },
  {
    title: 'E-commerce Solutions',
    description: 'Custom online shopping experiences',
    features: [
      'Shopping Cart Implementation',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Processing',
    ],
    icon: '🛒',
  },
  {
    title: 'Progressive Web Apps',
    description: 'Web apps that work like native applications',
    features: [
      'Offline Functionality',
      'Push Notifications',
      'App-like Experience',
      'Cross-platform Support',
    ],
    icon: '⚡',
  },
]

export default async function WebAppPage() {
  const projects = await getRecentProjects('web-application')
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
              WEB TECHNOLOGY EXPERTS
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animation-delay-200 animate-fadeIn">
              Web Application <span className="text-gradient">Development</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
              Creating powerful, scalable, and user-friendly web applications using cutting-edge
              JavaScript technologies
            </p>
            <div className="animation-delay-400 animate-fadeIn">
              <Link
                href="/contact"
                className="btn-gradient text-white px-8 py-3 rounded-xl shadow-lg hover-scale btn-pop"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
              OUR TECH STACK
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              Modern JavaScript Technologies
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              We leverage advanced frameworks and tools to create innovative web solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn border border-white/5"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px] -z-10"></div>

                  <div className="w-14 h-14 flex items-center justify-center mb-6 bg-primary/10 rounded-2xl text-3xl">
                    {tech.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gradient">{tech.name}</h3>
                  <p className="text-foreground/80 mb-5">{tech.description}</p>

                  <ul className="space-y-3">
                    {tech.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-primary"
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
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
              OUR SERVICES
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              Comprehensive Web Solutions
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Tailored web development services to meet your specific business needs
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

      {/* Process Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
                OUR PROCESS
              </span>
              <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
                How We Build Your Application
              </h2>
              <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
                Our proven methodology to transform your ideas into exceptional web applications
              </p>
            </div>

            <div className="space-y-8 animation-delay-400 animate-fadeIn">
              {[
                {
                  step: 1,
                  title: 'Requirements Analysis',
                  description:
                    'We work closely with you to understand your business needs and define clear project requirements and objectives.',
                },
                {
                  step: 2,
                  title: 'Design & Architecture',
                  description:
                    'Our team creates detailed technical specifications and designs the application architecture for optimal performance.',
                },
                {
                  step: 3,
                  title: 'Development & Testing',
                  description:
                    'We follow agile development practices with regular testing and quality assurance throughout the development cycle.',
                },
                {
                  step: 4,
                  title: 'Deployment & Support',
                  description:
                    'We ensure smooth deployment and provide ongoing support and maintenance for your application.',
                },
              ].map((process, index) => (
                <div
                  key={process.step}
                  className="flex items-start gap-6"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <div className="bg-gradient-to-r from-primary to-primary-light text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    {process.step}
                  </div>
                  <div className="glass-card p-6 rounded-xl flex-1 border border-white/5">
                    <h3 className="text-xl font-bold mb-3 text-gradient">{process.title}</h3>
                    <p className="text-foreground/80">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {projects && projects.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
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
                Check out some of our successful web application projects
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
                  Ready to Build Your Web Application?
                </h2>
                <p className="text-foreground/90 text-lg mb-10 max-w-3xl mx-auto animation-delay-300 animate-fadeIn">
                  Partner with our JavaScript experts to transform your ideas into powerful digital
                  solutions that drive business growth.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center animation-delay-400 animate-fadeIn">
                  <Link
                    href="/contact"
                    className="btn-gradient text-white px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium"
                  >
                    <span>Contact Us Today</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/portfolio"
                    className="bg-white/10 border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium backdrop-blur-sm"
                  >
                    <span>View More Projects</span>
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
