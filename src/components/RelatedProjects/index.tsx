import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Portfolio, Media } from '@/payload-types'
import { ArrowRight, ExternalLink } from 'lucide-react'

const RelatedProjects = ({ projects }: { projects: Portfolio[] }) => {
  if (!projects || projects.length === 0) {
    return null
  }

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-32 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 backdrop-blur-sm">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Related Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const image = project.image as Media
            const imageUrl = image?.url || '/placeholder-image.jpg'
            return (
              <div
                key={project.slug}
                className="animate-fadeIn group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <article className="glass-card rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-white/10 h-full flex flex-col transform hover:-translate-y-1 hover:border-primary/30 group">
                  <div className="relative w-full h-52 overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={project.title || 'Project'}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                    {project.category && (
                      <div className="absolute top-4 left-4 bg-primary/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-glow">
                        {project.category.replace(/-/g, ' ')}
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-3 text-gradient line-clamp-2 transition-all duration-300 group-hover:translate-x-1">
                      {project.title}
                    </h3>
                    <p className="text-foreground/80 line-clamp-3 mb-4 text-sm transition-colors duration-300 group-hover:text-foreground/90">
                      {project.description}
                    </p>

                    {project.technologies && project.technologies.length > 0 && (
                      <div className="mt-auto">
                        <h4 className="text-sm font-medium text-primary/80 mb-2 transition-all duration-300 group-hover:text-primary">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech.tech}
                              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs hover:bg-primary/20 transition-all duration-300 hover:shadow-glow hover:translate-y-[-2px]"
                            >
                              {tech.tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-6 pt-4 border-t border-gray-200/10 group-hover:border-gray-200/20 transition-colors duration-300">
                      <Link
                        href={`/portfolio/${String(project.slug)}`}
                        className="group/btn flex items-center justify-between w-full text-primary font-medium transition-all duration-300 hover:text-primary hover:font-semibold"
                      >
                        <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                          View Project
                        </span>
                        <span className="bg-primary/10 p-2 rounded-full transition-all duration-300 group-hover/btn:bg-primary/30 group-hover/btn:shadow-glow">
                          <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio?category=all"
            className="btn-gradient btn-pop inline-flex items-center text-white px-6 py-3 rounded-xl hover-scale transition shadow-lg hover:shadow-glow relative overflow-hidden group"
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
              Explore All Projects
            </span>
            <ArrowRight className="ml-2 w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10"></div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default RelatedProjects
