import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { fetchDocs } from '@/utilities/fetchDocs'
import type {
  Slide,
  Partner,
  Portfolio as IPortfolio,
  Post as IPost,
  Media,
  User,
} from '@/payload-types'
import { ArrowRight } from 'lucide-react'
import HeroSlider from '@/components/HeroSlider'

const getImageUrl = (media: Media | number | null | undefined): string => {
  if (typeof media === 'object' && media !== null && 'url' in media && media.url) {
    return media.url
  }
  return '/placeholder.jpg'
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
    sort: '-publishedAt',
    where: {
      _status: {
        equals: 'published',
      },
    },
  })) as IPortfolio[]

  // Fetch latest blog posts
  const posts = (await fetchDocs('posts', {
    limit: 3,
    sort: '-publishedAt',
    where: {
      _status: {
        equals: 'published',
      },
    },
  })) as IPost[]

  return (
    <div className="relative z-10">
      {/* Hero Section (Slider) */}
      <section className="relative bg-gradient-to-b from-gray-900 to-background text-white">
        <HeroSlider slides={slides} />
      </section>

      {/* About JS SBU Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-32 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
              JAVASCRIPT EXPERTS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient bg-clip-text animation-delay-200 animate-fadeIn">
              JavaScript Solutions Business Unit
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              A team of highly skilled developers and engineers specializing in cutting-edge
              JavaScript technologies
            </p>
          </div>

          <div className="glass-card rounded-3xl shadow-xl relative overflow-hidden border border-white/5 backdrop-blur-md animation-delay-400 animate-fadeIn">
            {/* Inner card decorative elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-[120px]"></div>

            <div className="p-8 lg:p-12 relative z-10">
              <div className="prose prose-lg dark:prose-invert mx-auto mb-10">
                <p className="text-foreground/90 text-lg leading-relaxed mb-6">
                  At Brain Station 23 PLC, our JavaScript Solutions Business Unit (JS-SBU) delivers
                  exceptional digital solutions that drive innovation and growth. We leverage
                  advanced JavaScript technologies to build robust, scalable, and high-performance
                  applications tailored to your business objectives.
                </p>
                <p className="text-foreground/90 text-lg leading-relaxed mb-8">
                  With a deep understanding of both front-end and back-end development, we provide
                  comprehensive solutions for businesses of all sizes, from startups to
                  enterprise-level organizations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                {[
                  {
                    icon: '⚛️',
                    title: 'React & Next.js',
                    description:
                      'Building responsive, dynamic user interfaces and applications with industry-leading performance',
                    delay: 500,
                  },
                  {
                    icon: '🅰️',
                    title: 'Angular',
                    description:
                      'Developing robust, enterprise-grade web applications with a comprehensive framework',
                    delay: 600,
                  },
                  {
                    icon: '📱',
                    title: 'React Native & Flutter',
                    description:
                      'Creating cross-platform mobile apps that deliver native performance and user experience',
                    delay: 700,
                  },
                  {
                    icon: '🛒',
                    title: 'Shopify',
                    description:
                      'Customizing e-commerce solutions with tailored storefronts and integrated experiences',
                    delay: 800,
                  },
                  {
                    icon: '🔄',
                    title: 'Node.js',
                    description:
                      'Building scalable, high-performance backend services and APIs for modern applications',
                    delay: 900,
                  },
                  {
                    icon: '🧰',
                    title: 'Full-Stack JavaScript',
                    description:
                      'Delivering end-to-end solutions using the latest JavaScript frameworks and tools',
                    delay: 1000,
                  },
                ].map((tech, index) => (
                  <div
                    key={tech.title}
                    className="glass-card p-6 rounded-2xl text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/5 border border-white/5"
                    style={{ animationDelay: `${tech.delay}ms` }}
                  >
                    <div className="text-4xl mb-4">{tech.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-gradient">{tech.title}</h3>
                    <p className="text-foreground/80 text-sm">{tech.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/skills/full-stack"
                  className="inline-flex items-center text-primary hover:text-primary/80 group relative overflow-hidden px-6 py-3 rounded-full"
                >
                  <span className="relative z-10 text-gradient font-medium">
                    Explore our JavaScript expertise
                  </span>
                  <span className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-8 text-center animation-delay-600 animate-fadeIn card-hover">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gradient">Fast Performance</h3>
              <p className="text-foreground/80">
                We build applications with optimal performance, ensuring fast load times and smooth
                user experiences.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 text-center animation-delay-700 animate-fadeIn card-hover">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gradient">Secure Solutions</h3>
              <p className="text-foreground/80">
                Security is our priority. We implement best practices to protect your data and
                applications.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 text-center animation-delay-800 animate-fadeIn card-hover">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gradient">Scalable Architecture</h3>
              <p className="text-foreground/80">
                Our solutions are built to grow with your business, ensuring long-term success and
                adaptability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fadeIn">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
              PARTNERSHIPS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient bg-clip-text">
              Trusted By Industry Leaders
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto text-lg animation-delay-200 animate-fadeIn">
              We&apos;re proud to work with forward-thinking companies that share our commitment to
              innovation and excellence
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden border border-white/5 backdrop-blur-md">
            {/* Inner card decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[100px]"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 items-start justify-items-center relative z-10">
              {partners && partners.length > 0
                ? partners.map((partner, index) => (
                    <div
                      key={partner.id}
                      className="shiny-card group w-full animate-fadeIn"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {partner.logo ? (
                        partner.website ? (
                          <Link href={partner?.website} target="_blank" rel="noopener noreferrer">
                            <div className="glass-card p-4 sm:p-6 rounded-2xl text-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary/5 border border-white/5 h-full">
                              <div className="h-16 sm:h-24 flex items-center justify-center">
                                <Image
                                  src={
                                    typeof partner?.logo === 'object' && partner?.logo?.url
                                      ? partner?.logo?.url
                                      : '/placeholder.jpg'
                                  }
                                  alt={partner.name}
                                  width={180}
                                  height={90}
                                  className="object-contain max-h-full mx-auto opacity-95 hover:opacity-100 transition-all duration-500"
                                  unoptimized={true}
                                />
                              </div>
                              <div className="h-px w-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent my-3 sm:my-4 mx-auto group-hover:w-full transition-all duration-700"></div>
                              <p className="mt-2 sm:mt-3 text-foreground font-medium text-xs sm:text-sm tracking-wide uppercase px-1 sm:px-2 break-words hyphens-auto min-h-[2.5rem] flex items-center justify-center">
                                {partner.name}
                              </p>
                            </div>
                          </Link>
                        ) : (
                          <div className="glass-card p-4 sm:p-6 rounded-2xl text-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary/5 border border-white/5 h-full">
                            <div className="h-16 sm:h-24 flex items-center justify-center">
                              <Image
                                src={
                                  typeof partner?.logo === 'object' && partner?.logo?.url
                                    ? partner?.logo?.url
                                    : '/placeholder.jpg'
                                }
                                alt={partner.name}
                                width={180}
                                height={90}
                                className="object-contain max-h-full mx-auto opacity-95 hover:opacity-100 transition-all duration-500"
                                unoptimized={true}
                              />
                            </div>
                            <div className="h-px w-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent my-3 sm:my-4 mx-auto group-hover:w-full transition-all duration-700"></div>
                            <p className="mt-2 sm:mt-3 text-foreground font-medium text-xs sm:text-sm tracking-wide uppercase px-1 sm:px-2 break-words hyphens-auto min-h-[2.5rem] flex items-center justify-center">
                              {partner.name}
                            </p>
                          </div>
                        )
                      ) : (
                        <div className="glass-card p-4 sm:p-6 rounded-2xl text-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary/5 border border-white/5 h-full">
                          <div className="bg-gradient-to-br from-primary/10 to-primary/5 h-16 sm:h-24 w-full flex items-center justify-center mx-auto rounded-lg">
                            <span className="font-bold text-2xl sm:text-3xl bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                              {(
                                partner.name.split(' ')[0].substring(0, 1) +
                                (partner.name.split(' ').length > 1
                                  ? partner.name.split(' ')[1].substring(0, 1)
                                  : partner.name.substring(1, 2))
                              ).toUpperCase()}
                            </span>
                          </div>
                          <div className="h-px w-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent my-3 sm:my-4 mx-auto group-hover:w-full transition-all duration-700"></div>
                          <p className="mt-2 sm:mt-3 text-foreground font-medium text-xs sm:text-sm tracking-wide uppercase px-1 sm:px-2 break-words hyphens-auto min-h-[2.5rem] flex items-center justify-center">
                            {partner.name}
                          </p>
                        </div>
                      )}
                    </div>
                  ))
                : ['Tennant', 'Long Shot', 'Shanta Securities', 'Rehive'].map((client, index) => (
                    <div
                      key={client}
                      className="shiny-card group w-full animate-fadeIn"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="glass-card p-4 sm:p-6 rounded-2xl text-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary/5 border border-white/5 h-full">
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 h-16 sm:h-24 w-full flex items-center justify-center mx-auto rounded-lg relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                          <span className="font-bold text-2xl sm:text-3xl bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent relative z-10">
                            {(
                              client.split(' ')[0].substring(0, 1) +
                              (client.split(' ').length > 1
                                ? client.split(' ')[1].substring(0, 1)
                                : client.substring(1, 2))
                            ).toUpperCase()}
                          </span>
                        </div>
                        <div className="h-px w-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent my-3 sm:my-4 mx-auto group-hover:w-full transition-all duration-700"></div>
                        <p className="mt-2 sm:mt-3 text-foreground font-medium text-xs sm:text-sm tracking-wide uppercase px-1 sm:px-2 break-words hyphens-auto min-h-[2.5rem] flex items-center justify-center">
                          {client}
                        </p>
                      </div>
                    </div>
                  ))}
            </div>

            <div className="mt-8 text-center animation-delay-400 animate-fadeIn">
              <Link
                href="/about"
                className="inline-flex items-center text-primary hover:text-primary/80 group relative overflow-hidden px-6 py-3 rounded-full"
              >
                <span className="relative z-10 text-gradient font-medium">
                  Learn about our partnerships
                </span>
                <span className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio Section */}
      <section className="py-10 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3 animate-fadeIn">
              FEATURED WORK
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient animation-delay-200 animate-fadeIn">
              Recent Success Stories
            </h2>
            <p className="text-foreground/90 max-w-2xl mx-auto animation-delay-300 animate-fadeIn">
              Explore some of our most impactful projects and see how we help businesses transform
              their digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects &&
              projects.map((project, index) => (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className={`group relative glass-card rounded-2xl overflow-hidden card-hover animation-delay-${200 + index * 100} animate-fadeIn hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300`}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={getImageUrl(project.image)}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary/90 transition-colors duration-300 drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]">
                        {project.title}
                      </h3>
                      <p className="text-white/95 text-sm line-clamp-2 mb-4 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 bg-card/50 backdrop-blur-sm border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-primary group/link">
                        <span className="font-medium">View Case Study</span>
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="py-10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3 animate-fadeIn">
              INSIGHTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient animation-delay-200 animate-fadeIn">
              Latest from Our Blog
            </h2>
            <p className="text-foreground/90 max-w-2xl mx-auto animation-delay-300 animate-fadeIn">
              Stay updated with our latest thoughts on technology, innovation, and digital
              transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts &&
              posts.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/posts/${post.slug}`}
                  className={`group relative glass-card rounded-2xl overflow-hidden card-hover animation-delay-${200 + index * 100} animate-fadeIn hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300`}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={getImageUrl(post.meta?.image)}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary/90 transition-colors duration-300 drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]">
                        {post.title}
                      </h3>
                      <p className="text-white/95 text-sm line-clamp-2 mb-4 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                        {post.meta?.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 bg-card/50 backdrop-blur-sm border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-primary group/link">
                        <span className="font-medium">Read Article</span>
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
              OUR SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient bg-clip-text animation-delay-200 animate-fadeIn">
              JavaScript Development Services
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Transforming your ideas into powerful digital solutions with cutting-edge JavaScript
              technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                title: 'Modern Web Applications',
                description:
                  'Building responsive, high-performance web applications with React, Next.js, and Angular',
                icon: '🌐',
                delay: 200,
                href: '/services/web-app',
              },
              {
                title: 'Mobile App Development',
                description:
                  'Creating cross-platform mobile solutions with React Native and Flutter',
                icon: '📱',
                delay: 300,
                href: '/services/mobile-app',
              },
              {
                title: 'E-commerce Solutions',
                description:
                  'Customized Shopify development for online stores with enhanced user experience',
                icon: '🛒',
                delay: 400,
                href: '/services/web-app',
              },
              {
                title: 'Backend & API Development',
                description:
                  'Scalable Node.js solutions with modern API architectures and database integrations',
                icon: '⚙️',
                delay: 500,
                href: '/services/web-app',
              },
              {
                title: 'Progressive Web Apps',
                description:
                  'Building offline-capable web applications with lightning-fast performance',
                icon: '⚡',
                delay: 600,
                href: '/services/web-app',
              },
              {
                title: 'Machine Learning & AI Solutions',
                description:
                  'Machine Learning & AI solutions to automate tasks, improve decision-making, and drive business growth',
                icon: '🧩',
                delay: 700,
                href: '/services/ml-ai',
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className={`glass-card rounded-2xl overflow-hidden card-hover animation-delay-${service.delay} animate-fadeIn hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-white/5`}
              >
                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[80px] -z-10"></div>

                  <div className="w-16 h-16 flex items-center justify-center mb-6 bg-primary/10 rounded-xl text-3xl">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-gradient">{service.title}</h3>
                  <p className="text-foreground/80 mb-6">{service.description}</p>

                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary group/link"
                  >
                    <span className="font-medium text-gradient">Learn More</span>
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="glass-card rounded-3xl p-10 md:p-16 shadow-xl relative overflow-hidden border border-white/10 backdrop-blur-md animation-delay-300 animate-fadeIn">
              {/* Inner card decorative elements */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-[80px]"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[80px]"></div>

              <div className="text-center relative z-10">
                <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
                  WORK WITH US
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
                  Ready to Elevate Your JavaScript Projects?
                </h2>
                <p className="text-foreground/90 text-lg md:text-xl mb-10 max-w-3xl mx-auto animation-delay-300 animate-fadeIn">
                  Partner with our JavaScript experts to build innovative, high-performance
                  applications that drive business growth and exceptional user experiences.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center animation-delay-400 animate-fadeIn">
                  <Link
                    href="/contact"
                    className="btn-gradient text-white px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium"
                  >
                    <span>Start Your Project</span>
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
                    className="glass-card hover:bg-primary/10 px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium"
                  >
                    <span>View Our Work</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-4 text-foreground/70 text-sm animation-delay-500 animate-fadeIn">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary mr-2"
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
                    <span>Expert JavaScript Developers</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary mr-2"
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
                    <span>Modern Tech Stack</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary mr-2"
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
                    <span>Agile Development</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary mr-2"
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
                    <span>Ongoing Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeSection
