import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Code, Server, Database, Layout, Layers, GitBranch } from 'lucide-react'
import { SkillRelatedPosts } from '@/components/RelatedArticle/SkillRelatedPosts'
import { fetchRelatedPostsBySkill } from '@/utilities/fetchRelatedPostsBySkill'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Full Stack | JS SBU',
  description: 'Full Stack JS SBU website',
}

const technologies = {
  frontend: [
    {
      name: 'React',
      description: 'Building interactive user interfaces',
      features: ['Component-Based', 'Virtual DOM', 'JSX', 'Hooks'],
      icon: <Layout className="h-8 w-8 text-primary" />,
    },
    {
      name: 'Angular',
      description: 'Enterprise-grade application framework',
      features: ['TypeScript', 'RxJS', 'Dependency Injection', 'CLI'],
      icon: <Code className="h-8 w-8 text-primary" />,
    },
    {
      name: 'Vue.js',
      description: 'Progressive JavaScript framework',
      features: ['Reactive Data', 'Component System', 'Vue Router', 'Vuex'],
      icon: <Layers className="h-8 w-8 text-primary" />,
    },
  ],
  backend: [
    {
      name: 'Node.js',
      description: 'JavaScript runtime environment',
      features: ['Event-Driven', 'Non-Blocking I/O', 'NPM', 'Express.js'],
      icon: <Server className="h-8 w-8 text-primary" />,
    },
    {
      name: 'NestJS',
      description: 'Progressive Node.js framework',
      features: ['TypeScript', 'Modular', 'Dependency Injection', 'OOP'],
      icon: <GitBranch className="h-8 w-8 text-primary" />,
    },
    {
      name: 'Express.js',
      description: 'Web application framework',
      features: ['Routing', 'Middleware', 'REST API', 'Template Engines'],
      icon: <Server className="h-8 w-8 text-primary" />,
    },
  ],
  database: [
    {
      name: 'MongoDB',
      description: 'NoSQL database',
      features: ['Document Store', 'Scalable', 'Flexible Schema', 'Aggregation'],
      icon: <Database className="h-8 w-8 text-primary" />,
    },
    {
      name: 'PostgreSQL',
      description: 'Relational database',
      features: ['ACID Compliant', 'JSON Support', 'Extensions', 'Performance'],
      icon: <Database className="h-8 w-8 text-primary" />,
    },
    {
      name: 'Redis',
      description: 'In-memory data store',
      features: ['Caching', 'Pub/Sub', 'Data Structures', 'Persistence'],
      icon: <Database className="h-8 w-8 text-primary" />,
    },
  ],
}

const services = [
  {
    title: 'Web Application Development',
    description: 'End-to-end web application development with modern technologies',
    features: [
      'Single Page Applications',
      'Progressive Web Apps',
      'RESTful APIs',
      'Real-time Applications',
    ],
  },
  {
    title: 'Database Design & Integration',
    description: 'Robust database solutions for your applications',
    features: ['Schema Design', 'Data Modeling', 'Performance Optimization', 'Data Migration'],
  },
  {
    title: 'API Development',
    description: 'Building scalable and secure APIs',
    features: ['REST Architecture', 'GraphQL', 'Authentication', 'Documentation'],
  },
  {
    title: 'DevOps Integration',
    description: 'Streamlined development and deployment processes',
    features: ['CI/CD Pipelines', 'Docker Containerization', 'Cloud Deployment', 'Monitoring'],
  },
]

const benefits = [
  {
    title: 'Rapid Development',
    description: 'Accelerate time-to-market with efficient development processes',
    icon: '🚀',
  },
  {
    title: 'Integrated Solutions',
    description: 'Seamless integration between frontend and backend systems',
    icon: '🔄',
  },
  {
    title: 'Scalable Architecture',
    description: 'Build applications that grow with your business needs',
    icon: '📈',
  },
  {
    title: 'Unified Tech Stack',
    description: 'JavaScript throughout the entire application stack',
    icon: '⚡',
  },
]

export default async function FullStackPage() {
  // Fetch related posts from the CMS
  const relatedPosts = await fetchRelatedPostsBySkill('Full Stack', 2)

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
              JAVASCRIPT EXPERTISE
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animation-delay-200 animate-fadeIn">
              Full Stack <span className="text-gradient">Development</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
              Comprehensive full-stack development solutions using cutting-edge JavaScript
              technologies for building modern web applications
            </p>
            <div className="animation-delay-400 animate-fadeIn">
              <Link
                href="/contact"
                className="btn-gradient text-white px-8 py-3 rounded-xl shadow-lg hover-scale btn-pop"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Frontend Technologies Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
              FRONTEND
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              Frontend Technologies
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Powerful JavaScript frameworks for building interactive user interfaces
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {technologies.frontend.map((tech, index) => (
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
                    {tech.features.map((feature) => (
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

      {/* Backend Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
              BACKEND
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              Backend Technologies
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Robust server-side solutions for building scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {technologies.backend.map((tech, index) => (
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
                    {tech.features.map((feature) => (
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

      {/* Database Technologies Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
              DATABASE
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              Database Technologies
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Powerful data storage solutions for modern applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {technologies.database.map((tech, index) => (
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
                    {tech.features.map((feature) => (
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

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
              SERVICES
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              Our Full Stack Services
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Comprehensive development services to bring your ideas to life
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
              Benefits of Full Stack Development
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Why full-stack JavaScript development delivers exceptional results
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
              Full Stack Knowledge Hub
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Explore our latest articles on full stack development
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
                  Ready to Build Your Application?
                </h2>
                <p className="text-foreground/90 text-lg mb-10 max-w-3xl mx-auto animation-delay-300 animate-fadeIn">
                  Let&apos;s discuss how our full-stack development expertise can help bring your
                  ideas to life.
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
                    <span>Explore Web Services</span>
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
