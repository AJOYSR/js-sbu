import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { fetchDocs } from '@/utilities/fetchDocs'
import { Portfolio, Post, Slide, Partner } from '@/payload-types'
import { ArrowRight } from 'lucide-react'
import HeroSlider from '@/components/HeroSlider'

// Define the props for the HomeSection component
interface HomeSectionProps {
  slides?: Slide[]
  partners?: Partner[]
  projects?: Portfolio[]
  posts?: Post[]
}

const HomeSection = async () => {
  // Fetch slides data
  const slides = (await fetchDocs('slides', {
    limit: 5,
    sort: 'order',
  })) as Slide[]

  // Fetch partners data (for the "Trusted By" section)
  const partners = (await fetchDocs('partners', {
    limit: 8,
    sort: 'order',
    where: {
      featured: {
        equals: true,
      },
    },
  })) as Partner[]

  // Fetch featured portfolio projects
  const projects = (await fetchDocs('portfolio', {
    limit: 3,
    where: {
      _status: {
        equals: 'published',
      },
    },
  })) as Portfolio[]

  // Fetch latest blog posts
  const posts = (await fetchDocs('posts', {
    limit: 3,
    sort: '-publishedAt',
    where: {
      _status: {
        equals: 'published',
      },
    },
  })) as Post[]

  return (
    <div className="relative z-10">
      {/* Hero Section (Slider) */}
      <section className="relative bg-gradient-to-b from-gray-900 to-background text-white">
        <HeroSlider slides={slides} />
      </section>

      {/* Trusted By Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-32 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fadeIn">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3 animate-fadeIn">
              PARTNERSHIPS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Trusted By Industry Leaders
            </h2>
            <p className="text-foreground/80 max-w-xl mx-auto animation-delay-200 animate-fadeIn">
              We&apos;re proud to work with forward-thinking companies that share our commitment to
              innovation and excellence
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-12 shadow-md relative overflow-hidden">
            {/* Inner card decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center relative z-10">
              {partners && partners.length > 0
                ? partners.map((partner, index) => (
                    <div
                      key={partner.id}
                      className="shiny-card group w-full max-w-[180px] animate-fadeIn"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      {partner.logo ? (
                        partner.website ? (
                          <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                            <div className="glass-card p-4 rounded-xl text-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                              <Image
                                src={
                                  typeof partner.logo === 'object' && partner.logo?.url
                                    ? partner.logo.url
                                    : '/placeholder.jpg'
                                }
                                alt={partner.name}
                                width={160}
                                height={80}
                                className="object-contain h-20 mx-auto filter grayscale hover:grayscale-0 transition-all duration-500"
                              />
                              <p className="mt-3 text-foreground font-medium text-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {partner.name}
                              </p>
                            </div>
                          </Link>
                        ) : (
                          <div className="glass-card p-4 rounded-xl text-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                            <Image
                              src={
                                typeof partner.logo === 'object' && partner.logo?.url
                                  ? partner.logo.url
                                  : '/placeholder.jpg'
                              }
                              alt={partner.name}
                              width={160}
                              height={80}
                              className="object-contain h-20 mx-auto filter grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            <p className="mt-3 text-foreground font-medium text-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {partner.name}
                            </p>
                          </div>
                        )
                      ) : (
                        <div className="glass-card p-4 rounded-xl text-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                          <div className="gradient-border h-20 w-full flex items-center justify-center mx-auto neon-glow">
                            <span className="text-primary font-bold text-3xl">
                              {partner.name.substring(0, 1)}
                            </span>
                          </div>
                          <p className="mt-3 text-foreground font-medium text-gradient">
                            {partner.name}
                          </p>
                        </div>
                      )}
                    </div>
                  ))
                : ['Tennant', 'Long Shot', 'Meed', 'TechCorp'].map((client, index) => (
                    <div
                      key={client}
                      className="shiny-card group w-full max-w-[180px] animate-fadeIn"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="glass-card p-4 rounded-xl text-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                        <div className="gradient-border h-20 w-full flex items-center justify-center mx-auto neon-glow">
                          <span className="text-primary font-bold text-3xl">
                            {client.substring(0, 1)}
                          </span>
                        </div>
                        <p className="mt-3 text-foreground font-medium text-gradient">{client}</p>
                      </div>
                    </div>
                  ))}
            </div>

            <div className="mt-12 text-center animation-delay-400 animate-fadeIn">
              <Link
                href="/about"
                className="inline-flex items-center text-primary hover:text-primary/80 group"
              >
                <span className="text-gradient">Learn about our partnerships</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient animation-delay-200 animate-fadeIn">
              Our Services
            </h2>
            <p className="text-foreground/90 max-w-2xl mx-auto animation-delay-300 animate-fadeIn">
              Transforming ideas into powerful digital solutions with cutting-edge technology and
              innovative design
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Building responsive and scalable web applications',
                icon: '🌐',
                delay: 200,
                href: '/services/web-app',
              },
              {
                title: 'Mobile Development',
                description: 'Native and cross-platform mobile solutions',
                icon: '📱',
                delay: 300,
                href: '/services/mobile-app',
              },
              {
                title: 'UI/UX Design',
                description: 'Creating intuitive and engaging user experiences',
                icon: '🎨',
                delay: 400,
                href: '/services/ui-ux',
              },
              {
                title: 'Cloud Solutions',
                description: 'Scalable and secure cloud infrastructure',
                icon: '☁️',
                delay: 500,
                href: '/skills/cloud-solutions',
              },
              {
                title: 'AI Integration',
                description: 'Implementing intelligent solutions for business',
                icon: '🤖',
                delay: 600,
                href: '/services/ml-ai',
              },
              {
                title: 'DevOps',
                description: 'Streamlining development and operations',
                icon: '⚙️',
                delay: 700,
                href: '/skills/system-architecture',
              },
            ].map((service) => (
              <div
                key={service.title}
                className={`glass-card rounded-xl p-6 shadow-md card-hover animation-delay-${service.delay} animate-fadeIn`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gradient">{service.title}</h3>
                <p className="text-foreground/90">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center mt-4 text-primary hover:text-primary/80 group"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              Ready to Transform Your Ideas Into Reality?
            </h2>
            <p className="text-foreground/90 mb-8 animation-delay-300 animate-fadeIn">
              We help businesses innovate and grow through cutting-edge technology solutions
              tailored to their unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animation-delay-400 animate-fadeIn">
              <Link
                href="/contact"
                className="btn-gradient text-white px-8 py-3 rounded-lg shadow-md hover-scale btn-pop"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="glass-card hover:bg-primary/10 px-8 py-3 rounded-lg shadow-md hover-scale btn-pop"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      </section>
    </div>
  )
}

export default HomeSection
