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

// Define the props for the HomeSection component up
interface HomeSectionProps {
  slides?: Slide[]
  partners?: Partner[]
  projects?: IPortfolio[]
  posts?: IPost[]
}

const getImageUrl = (media: Media | number | null | undefined): string => {
  if (typeof media === 'object' && media !== null && 'url' in media && media.url) {
    return media.url
  }
  return '/placeholder.jpg'
}

const getUserName = (user: User | number | null | undefined): string => {
  if (typeof user === 'object' && user !== null && 'name' in user && user.name) {
    return user.name
  }
  return ''
}

const formatDate = (date: string | null | undefined): string => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
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

          <div className="glass-card rounded-3xl p-10  shadow-xl relative overflow-hidden border border-white/5 backdrop-blur-md">
            {/* Inner card decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[100px]"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-items-center relative z-10">
              {partners && partners.length > 0
                ? partners.map((partner, index) => (
                    <div
                      key={partner.id}
                      className="shiny-card group w-full max-w-[200px] animate-fadeIn"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {partner.logo ? (
                        partner.website ? (
                          <Link href={partner?.website} target="_blank" rel="noopener noreferrer">
                            <div className="glass-card p-6 rounded-2xl text-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary/5 border border-white/5">
                              <Image
                                src={
                                  typeof partner?.logo === 'object' && partner?.logo?.url
                                    ? partner?.logo?.url
                                    : '/placeholder.jpg'
                                }
                                alt={partner.name}
                                width={180}
                                height={90}
                                className="object-contain h-24 mx-auto opacity-95 hover:opacity-100 transition-all duration-500"
                                unoptimized={true}
                              />
                              <div className="h-px w-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent my-4 mx-auto group-hover:w-full transition-all duration-700"></div>
                              <p className="mt-3 text-foreground font-medium text-sm tracking-wide uppercase">
                                {partner.name}
                              </p>
                            </div>
                          </Link>
                        ) : (
                          <div className="glass-card p-6 rounded-2xl text-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary/5 border border-white/5">
                            <Image
                              src={
                                typeof partner?.logo === 'object' && partner?.logo?.url
                                  ? partner?.logo?.url
                                  : '/placeholder.jpg'
                              }
                              alt={partner.name}
                              width={180}
                              height={90}
                              className="object-contain h-24 mx-auto opacity-95 hover:opacity-100 transition-all duration-500"
                              unoptimized={true}
                            />
                            <div className="h-px w-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent my-4 mx-auto group-hover:w-full transition-all duration-700"></div>
                            <p className="mt-3 text-foreground font-medium text-sm tracking-wide uppercase">
                              {partner.name}
                            </p>
                          </div>
                        )
                      ) : (
                        <div className="glass-card p-6 rounded-2xl text-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary/5 border border-white/5">
                          <div className="bg-gradient-to-br from-primary/10 to-primary/5 h-24 w-full flex items-center justify-center mx-auto rounded-lg">
                            <span className="font-bold text-3xl bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                              {partner.name.substring(0, 2).toUpperCase()}
                            </span>
                          </div>
                          <div className="h-px w-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent my-4 mx-auto group-hover:w-full transition-all duration-700"></div>
                          <p className="mt-3 text-foreground font-medium text-sm tracking-wide uppercase">
                            {partner.name}
                          </p>
                        </div>
                      )}
                    </div>
                  ))
                : ['Tennant', 'Long Shot', 'Meed', 'TechCorp'].map((client, index) => (
                    <div
                      key={client}
                      className="shiny-card group w-full max-w-[200px] animate-fadeIn"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="glass-card p-6 rounded-2xl text-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary/5 border border-white/5">
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 h-24 w-full flex items-center justify-center mx-auto rounded-lg relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                          <span className="font-bold text-3xl bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent relative z-10">
                            {client.substring(0, 2).toUpperCase()}
                          </span>
                        </div>
                        <div className="h-px w-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent my-4 mx-auto group-hover:w-full transition-all duration-700"></div>
                        <p className="mt-3 text-foreground font-medium text-sm tracking-wide uppercase">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies?.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1.5 rounded-full bg-white/20 text-white backdrop-blur-sm font-medium"
                          >
                            {tech.tech}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary/90 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-white/90 text-sm line-clamp-2 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 bg-card/50 backdrop-blur-sm border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                        {project.category}
                      </span>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts &&
              posts.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/posts/${post.slug}`}
                  className={`group relative glass-card rounded-2xl overflow-hidden card-hover animation-delay-${200 + index * 100} animate-fadeIn hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col h-[420px]`}
                >
                  <div className="relative h-48 flex-shrink-0 overflow-hidden">
                    <Image
                      src={getImageUrl(post.meta?.image)}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white backdrop-blur-sm">
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center space-x-2 mb-4 flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold text-sm">
                          {getUserName(post.authors?.[0])?.charAt(0) || 'A'}
                        </span>
                      </div>
                      <span className="text-sm text-foreground/60">
                        {getUserName(post.authors?.[0])}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gradient line-clamp-2 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-foreground/80 text-sm mb-4 line-clamp-3 flex-grow">
                      {post.meta?.description}
                    </p>
                    <div className="flex items-center text-primary group/link mt-auto flex-shrink-0">
                      <span className="font-medium text-sm">Read Article</span>
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* About JS SBU Section */}
      <section className="py-10 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3 animate-fadeIn">
                OUR STORY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient animation-delay-200 animate-fadeIn">
                JavaScript Solutions Business Unit
              </h2>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-12 shadow-md relative overflow-hidden animation-delay-300 animate-fadeIn">
              <div className="prose prose-lg dark:prose-invert mx-auto">
                <p className="text-foreground/90 text-lg leading-relaxed mb-6">
                  At the JavaScript Solutions Business Unit, we&apos;re passionate about crafting
                  exceptional digital experiences that drive business growth and innovation. Our
                  team of expert developers and designers specializes in modern JavaScript
                  frameworks and technologies.
                </p>
                <p className="text-foreground/90 text-lg leading-relaxed mb-6">
                  With a deep understanding of both front-end and back-end development, we deliver
                  comprehensive solutions that help businesses thrive in the digital age. From
                  enterprise-level applications to innovative startups, we&apos;re committed to
                  excellence in every project we undertake.
                </p>
                <div className="flex justify-center mt-8">
                  <Link
                    href="/about"
                    className="inline-flex items-center text-primary hover:text-primary/80 group"
                  >
                    <span className="text-gradient">Learn more about our team</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-10">
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
      <section className="py-10 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
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
