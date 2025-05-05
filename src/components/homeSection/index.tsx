import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { fetchDocs } from '@/utilities/fetchDocs'
import { Portfolio, Post, Slide, Partner } from '@/payload-types'

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
  console.log('🚀 ~ HomeSection ~ partners:', partners)

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
      <section className="relative bg-gray-900 text-white">
        {slides && slides.length > 0 ? (
          <div className="relative h-[500px] md:h-[600px] overflow-hidden">
            {/* This would need client-side JS for actual slider functionality */}
            <div className="absolute inset-0">
              {slides[0]?.backgroundImage && (
                <Image
                  src={
                    typeof slides[0].backgroundImage === 'object' && slides[0].backgroundImage?.url
                      ? slides[0].backgroundImage.url
                      : '/placeholder.jpg'
                  }
                  alt={slides[0]?.title || 'Hero image'}
                  fill
                  className={`object-cover ${slides[0]?.gradientOverlay ? 'opacity-70' : ''}`}
                  priority
                />
              )}
              {slides[0]?.gradientOverlay && (
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${slides[0].gradientOverlay} opacity-80`}
                ></div>
              )}
            </div>
            <div className="container mx-auto px-4 h-full flex items-center relative z-10">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {slides[0]?.title || 'Welcome'}
                </h1>
                <p className="text-xl md:text-2xl mb-8">
                  {slides[0]?.description || 'Building innovative solutions for tomorrow'}
                </p>
                {slides[0]?.ctaButton?.label && (
                  <Link
                    href={slides[0]?.ctaButton?.link || '/services'}
                    className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 inline-block"
                  >
                    {slides[0].ctaButton.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[500px] md:h-[600px] flex items-center justify-center bg-gray-800">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Innovative Digital Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8">Building tomorrow&apos;s technology today</p>
              <Link
                href="/services"
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 inline-block"
              >
                Explore Services
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8 text-gray-700">
            Trusted By Industry Leaders
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {partners && partners.length > 0
              ? partners.map((partner) => (
                  <div
                    key={partner.id}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    {partner.logo ? (
                      partner.website ? (
                        <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                          <div className="text-center">
                            <Image
                              src={
                                typeof partner.logo === 'object' && partner.logo?.url
                                  ? partner.logo.url
                                  : '/placeholder.jpg'
                              }
                              alt={partner.name}
                              width={160}
                              height={80}
                              className="object-contain h-20 mx-auto"
                            />
                            <p className="mt-2 text-gray-700 font-medium">{partner.name}</p>
                          </div>
                        </Link>
                      ) : (
                        <div className="text-center">
                          <Image
                            src={
                              typeof partner.logo === 'object' && partner.logo?.url
                                ? partner.logo.url
                                : '/placeholder.jpg'
                            }
                            alt={partner.name}
                            width={160}
                            height={80}
                            className="object-contain h-20 mx-auto"
                          />
                          <p className="mt-2 text-gray-700 font-medium">{partner.name}</p>
                        </div>
                      )
                    ) : (
                      <div className="text-center">
                        <div className="h-20 w-40 bg-gray-200 rounded flex items-center justify-center mx-auto">
                          {partner.name.substring(0, 1)}
                        </div>
                        <p className="mt-2 text-gray-700 font-medium">{partner.name}</p>
                      </div>
                    )}
                  </div>
                ))
              : ['Tennant', 'Long Shot', 'Meed', 'TechCorp'].map((client) => (
                  <div
                    key={client}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="h-20 w-40 bg-gray-200 rounded flex items-center justify-center mx-auto">
                        {client.substring(0, 1)}
                      </div>
                      <p className="mt-2 text-gray-700 font-medium">{client}</p>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
              },
              {
                title: 'Mobile Development',
                description: 'Native and cross-platform mobile solutions',
                icon: '📱',
              },
              {
                title: 'UI/UX Design',
                description: 'Creating intuitive and engaging user experiences',
                icon: '🎨',
              },
              {
                title: 'Cloud Solutions',
                description: 'Scalable and secure cloud infrastructure',
                icon: '☁️',
              },
              {
                title: 'AI Integration',
                description: 'Implementing intelligent solutions for business',
                icon: '🤖',
              },
              {
                title: 'DevOps',
                description: 'Streamlining development and operations',
                icon: '⚙️',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Showcasing our best work and successful collaborations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects && projects.length > 0
              ? projects.map((project) => (
                  <div key={project.id} className="group relative overflow-hidden rounded-lg">
                    {project.image ? (
                      <Image
                        src={
                          typeof project.image === 'object' && project.image?.url
                            ? project.image.url
                            : '/placeholder.jpg'
                        }
                        alt={project.title}
                        width={600}
                        height={400}
                        className="h-64 w-full object-cover"
                      />
                    ) : (
                      <div className="h-64 bg-gray-200"></div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="mb-4">
                          {project.description.substring(
                            0,
                            Math.min(project.description.length, 100),
                          ) + '...'}
                        </p>
                        <Link
                          href={`/portfolio/${project.id}`}
                          className="inline-block px-6 py-2 border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300 rounded-full"
                        >
                          View Project
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              : [1, 2, 3].map((project) => (
                  <div key={project} className="group relative overflow-hidden rounded-lg">
                    <div className="h-64 bg-gray-200"></div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                        <p className="mb-4">Brief project description</p>
                        <Link
                          href={`/portfolio/project-${project}`}
                          className="inline-block px-6 py-2 border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300 rounded-full"
                        >
                          View Project
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs/Insights Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest thoughts on technology and innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts && posts.length > 0
              ? posts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    {post.meta?.image ? (
                      <Image
                        src={
                          typeof post.meta.image === 'object' && post.meta.image?.url
                            ? post.meta.image.url
                            : '/placeholder.jpg'
                        }
                        alt={post.title}
                        width={600}
                        height={300}
                        className="h-48 w-full object-cover"
                      />
                    ) : (
                      <div className="h-48 bg-gray-200"></div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4">
                        {post.meta?.description
                          ? post.meta.description.slice(0, 120) + '...'
                          : 'Read this article to learn more...'}
                      </p>
                      <Link
                        href={`/posts/${post.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))
              : [
                  'The Future of Web Development',
                  'AI in Modern Applications',
                  'Mobile-First Development',
                ].map((title, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{title}</h3>
                      <p className="text-gray-600 mb-4">Brief excerpt from the blog post...</p>
                      <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium">
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* About the JS SBU Section */}
      <section className="py-20 text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Our Team</h2>
            <div className="prose prose-lg prose-invert mx-auto ">
              <p className="text-lg mb-6 text-neutral-800">
                The JavaScript Strategic Business Unit (SBU) is a specialized team of developers,
                designers, and engineers dedicated to creating innovative web and mobile solutions
                using modern JavaScript technologies.
              </p>
              <p className="text-lg mb-6 text-neutral-800">
                With expertise in React, Next.js, Node.js, and the entire JavaScript ecosystem, our
                team brings years of experience building robust, scalable applications for clients
                across industries.
              </p>
              <p className="text-lg text-neutral-800">
                We pride ourselves on staying at the cutting edge of web development, embracing new
                technologies and methodologies to deliver exceptional digital experiences that drive
                business growth.
              </p>
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/about"
                className="inline-block px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-300 rounded-full"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeSection
