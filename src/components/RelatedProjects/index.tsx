import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Portfolio, Media } from '@/payload-types'
const RelatedProjects = ({ projects }: { projects: Portfolio[] }) => {
  console.log('🚀 ~ RelatedProjects ~ projects:', projects)
  return (
    <div>
      {projects.length > 0 && (
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Recent Web Application Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project: Portfolio) => {
              const image = project.image as Media
              const imageUrl = image?.url || '/placeholder-image.jpg'
              return (
                <Link
                  href={`/portfolio/${String(project.id)}`}
                  key={project.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <div className="relative h-48">
                    <Image
                      src={imageUrl}
                      alt={project.title || 'Project'}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mt-2 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies?.map((tech) => (
                          <span
                            key={tech.tech}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
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
          <div className="text-center mt-8">
            <Link
              href="/portfolio?category=web-application"
              className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition"
            >
              View All Web Application Projects
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default RelatedProjects
