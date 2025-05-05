import React from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Portfolio } from '@/payload-types'
import RichText from '@/components/RichText'

async function getProject(projectId: string) {
  const payload = await getPayload({ config: configPromise })

  try {
    const project = (await payload.findByID({
      collection: 'portfolio',
      id: projectId,
    })) as Portfolio

    return project
  } catch (error) {
    return null
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const projects = await payload.find({
    collection: 'portfolio',
  })

  return projects.docs.map((project) => ({
    id: String(project.id),
  }))
}

type Args = {
  params: Promise<{
    id: string
  }>
}

export default async function ProjectPage({ params: paramsPromise }: Args) {
  const { id } = await paramsPromise
  const project = await getProject(id)

  if (!project) {
    return notFound()
  }

  const imageUrl =
    typeof project.image === 'number' ? '' : project.image.url || '/placeholder-image.jpg'

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 mb-8">
            <Image src={imageUrl} alt={project.title} fill className="object-cover rounded-lg" />
          </div>

          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm mb-6">
            {project.category}
          </span>

          <div className="prose max-w-none mb-8">
            <p className="text-xl text-gray-600 mb-6">{project.description}</p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech) => (
                  <span
                    key={tech.tech}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full"
                  >
                    {tech.tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Key Results</h2>
              <ul className="space-y-2">
                {project.results?.map((result) => (
                  <li key={result.result} className="flex items-center text-gray-600">
                    <span className="text-primary mr-2">•</span>
                    {result.result}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
              <div className="prose max-w-none">
                <RichText content={project.content} enableProse={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
