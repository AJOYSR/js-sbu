import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Portfolio, Media } from '@/payload-types'

const RelatedProjects = ({ projects }: { projects: Portfolio[] }) => {
  return (
    <div>
      {projects.length > 0 && (
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project: Portfolio, index: number) => {
              const image = project.image as Media
              const imageUrl = image?.url || '/placeholder-image.jpg'
              return (
                <Link
                  href={`/portfolio/${String(project.id)}`}
                  key={project.id}
                  className="glass-card rounded-lg card-hover neon-glow overflow-hidden animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-44">
                    <Image
                      src={imageUrl}
                      alt={project.title || 'Project'}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <span className="text-white p-4 font-medium">View Project</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2 text-gradient">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                    <div className="mb-3">
                      <h4 className="font-medium mb-1.5 text-primary/80 text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies?.map((tech) => (
                          <span
                            key={tech.tech}
                            className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs hover:bg-primary/20 transition-colors"
                          >
                            {tech.tech}
                          </span>
                        )) || null}
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/portfolio?category=all"
              className="btn-gradient text-white px-6 py-2.5 rounded-full font-medium btn-pop shadow-lg inline-block text-sm"
            >
              View All Projects
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default RelatedProjects
