import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'About | JS SBU',
  description: 'About JS SBU website',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen  animate-fadeIn">
      {/* Hero Section with Background */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-background overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-32 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6 animate-fadeIn backdrop-blur-sm">
              JAVASCRIPT EXPERTS
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animation-delay-200 animate-fadeIn">
              JavaScript Solutions <span className="text-gradient">Business Unit</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
              A team of highly skilled developers and engineers at Brain Station 23 PLC, dedicated
              to building robust, efficient applications using cutting-edge JavaScript technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animation-delay-400 animate-fadeIn">
              <Link
                href="/contact"
                className="btn-gradient text-white px-8 py-3 rounded-xl shadow-lg hover-scale btn-pop"
              >
                Start a Project
              </Link>
              <Link
                href="/portfolio"
                className="bg-white/10 border border-white/20 hover:bg-white/20 px-8 py-3 rounded-xl shadow-lg hover-scale btn-pop text-white backdrop-blur-sm"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
              OUR MISSION
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              Creating Exceptional Digital Experiences
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed animation-delay-300 animate-fadeIn">
              We strive to be the leading JavaScript solutions provider, delivering innovative and
              impactful digital solutions that transform businesses and enhance user experiences.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-10 shadow-xl relative overflow-hidden border border-white/5 backdrop-blur-md animation-delay-400 animate-fadeIn">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[120px]"></div>

            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div className="animation-delay-500 animate-fadeIn">
                <h2 className="text-2xl font-bold mb-4 text-gradient">Our Expertise</h2>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  We excel in developing robust and scalable applications using the latest
                  JavaScript technologies. Our team&apos;s expertise spans across:
                </p>
                <ul className="space-y-4">
                  {[
                    'Full-stack JavaScript development with Node.js and modern frameworks',
                    'Cross-platform mobile development with React Native and Flutter',
                    'Modern front-end development with React, Angular, and Vue.js',
                    'E-commerce solutions with Shopify and custom implementations',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
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
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="animation-delay-600 animate-fadeIn">
                <h2 className="text-2xl font-bold mb-4 text-gradient">Our Approach</h2>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  We believe in delivering solutions that not only meet current needs but are also
                  future-proof. Our approach combines:
                </p>
                <ul className="space-y-4">
                  {[
                    'Agile development methodology for flexible and efficient delivery',
                    'Best practices in code quality and performance optimization',
                    'Continuous integration and deployment for reliable releases',
                    'User-centered design principles for optimal user experience',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
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
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Showcase */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
              OUR TECH STACK
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              Cutting-Edge JavaScript Technologies
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              We leverage the latest JavaScript frameworks and tools to build high-performance,
              scalable applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: '⚛️',
                title: 'React',
                description:
                  'Building responsive, dynamic user interfaces with the leading JavaScript library for frontend development',
                animation: 'animation-delay-400',
              },
              {
                icon: '🅰️',
                title: 'Angular',
                description:
                  'Creating robust, enterprise-grade web applications with this comprehensive framework',
                animation: 'animation-delay-500',
              },
              {
                icon: '📱',
                title: 'React Native',
                description:
                  'Developing cross-platform mobile apps that deliver native performance and seamless user experience',
                animation: 'animation-delay-600',
              },
              {
                icon: '🔄',
                title: 'Node.js',
                description:
                  'Building scalable server-side applications and APIs using JavaScript for end-to-end development',
                animation: 'animation-delay-700',
              },
              {
                icon: '🛒',
                title: 'Shopify',
                description:
                  'Customizing e-commerce solutions with tailored storefronts and optimized shopping experiences',
                animation: 'animation-delay-800',
              },
              {
                icon: '💎',
                title: 'Flutter',
                description:
                  'Creating beautiful, natively compiled mobile applications from a single codebase',
                animation: 'animation-delay-900',
              },
            ].map((tech, index) => (
              <div
                key={tech.title}
                className={`glass-card rounded-2xl overflow-hidden card-hover ${tech.animation} animate-fadeIn border border-white/5`}
              >
                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px]"></div>
                  <div className="w-16 h-16 flex items-center justify-center mb-6 bg-primary/10 rounded-2xl text-3xl">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gradient">{tech.title}</h3>
                  <p className="text-foreground/80">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animation-delay-1000 animate-fadeIn">
            <Link
              href="/skills"
              className="inline-flex items-center text-primary hover:text-primary/80 group relative overflow-hidden px-6 py-3 rounded-full"
            >
              <span className="relative z-10 text-gradient font-medium">
                Explore our full technology stack
              </span>
              <span className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
                OUR TEAM
              </span>
              <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
                Meet the JavaScript Experts
              </h2>
              <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
                Our team consists of highly skilled developers, designers, and engineers who are
                passionate about creating innovative solutions and delivering exceptional results
              </p>
            </div>

            <div className="glass-card rounded-3xl p-10 shadow-xl relative overflow-hidden border border-white/5 backdrop-blur-md animation-delay-400 animate-fadeIn">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-[120px]"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[120px]"></div>

              <div className="relative z-10 text-center">
                <p className="text-foreground/90 text-lg leading-relaxed mb-10">
                  We continuously invest in learning and staying updated with the latest
                  technologies and industry trends. Our developers are certified in various
                  JavaScript technologies and have years of experience working on complex projects
                  across different industries.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 animation-delay-500 animate-fadeIn">
                  {[
                    { number: '25+', label: 'JavaScript Experts' },
                    { number: '100+', label: 'Projects Delivered' },
                    { number: '95%', label: 'Client Satisfaction' },
                    { number: '8+', label: 'Years Experience' },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="glass-card p-6 rounded-2xl text-center transition-all duration-500 hover:scale-105 border border-white/5"
                    >
                      <div className="text-3xl font-bold mb-2 text-gradient">{stat.number}</div>
                      <p className="text-foreground/80 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/team"
                  className="inline-flex items-center text-primary hover:text-primary/80 group relative overflow-hidden px-6 py-3 rounded-full animation-delay-600 animate-fadeIn"
                >
                  <span className="relative z-10 text-gradient font-medium">
                    Meet our full team
                  </span>
                  <span className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="glass-card rounded-3xl p-10 md:p-16 shadow-xl relative overflow-hidden border border-white/10 backdrop-blur-md animation-delay-300 animate-fadeIn">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-[80px]"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[80px]"></div>

              <div className="text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
                  Ready to Build Your Next JavaScript Project?
                </h2>
                <p className="text-foreground/90 text-lg md:text-xl mb-10 max-w-3xl mx-auto animation-delay-300 animate-fadeIn">
                  Partner with our JavaScript experts to build innovative, high-performance
                  applications that drive business growth and deliver exceptional user experiences.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center animation-delay-400 animate-fadeIn">
                  <Link
                    href="/contact"
                    className="btn-gradient text-white px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="glass-card hover:bg-primary/10 px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium"
                  >
                    <span>Explore Our Projects</span>
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
