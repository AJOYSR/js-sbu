import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import type { Portfolio, Media } from '@/payload-types'

// Categories for filtering
const categoryOptions = [
  { label: 'All', value: 'all' },
  { label: 'Web Application', value: 'web-application' },
  { label: 'Mobile Development', value: 'mobile-development' },
  { label: 'Machine Learning & AI', value: 'machine-learning-ai' },
  { label: 'UI/UX Design', value: 'ui-ux-design' },
]

// Number of items per page
const ITEMS_PER_PAGE = 6

async function getProjects(page = 1, category?: string) {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const query =
    category && category !== 'all'
      ? {
          and: [
            {
              category: {
                equals: category,
              },
            },
          ],
        }
      : undefined

  try {
    const projects = await payload.find({
      collection: 'portfolio',
      limit: ITEMS_PER_PAGE,
      page,
      where: query,
      draft,
      overrideAccess: draft,
    })
    return projects
  } catch (error) {
    console.error('Error fetching projects:', error)
    return {
      docs: [],
      totalDocs: 0,
      totalPages: 0,
      page: 1,
    }
  }
}

type Args = {
  searchParams: Promise<{
    page?: string
    category?: string
  }>
}

export default async function PortfolioPage({ searchParams: searchParamsPromise }: Args) {
  const searchParams = await searchParamsPromise
  const currentPage = Number(searchParams.page) || 1
  const currentCategory = searchParams.category || 'all'

  const { docs: projects, totalPages } = await getProjects(currentPage, currentCategory)

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-600">
            Explore our successful projects and see how we&apos;ve helped businesses achieve their
            goals through innovative solutions
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categoryOptions.map((category) => (
            <Link
              key={category.value}
              href={`/portfolio?category=${category.value}`}
              className={`px-6 py-2 rounded-full shadow-md transition ${
                currentCategory === category.value
                  ? 'bg-primary text-white'
                  : 'bg-white hover:bg-primary hover:text-white'
              }`}
            >
              {category.label}
            </Link>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                  <span className="text-primary text-sm font-medium">{project.category}</span>
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
                  <div>
                    <h4 className="font-semibold mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results?.map((result) => (
                        <li key={result.result} className="flex items-center text-sm text-gray-600">
                          <span className="text-primary mr-2">•</span>
                          {result.result}
                        </li>
                      )) || null}
                    </ul>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <Link
                key={pageNum}
                href={`/portfolio?page=${pageNum}${
                  currentCategory !== 'all' ? `&category=${currentCategory}` : ''
                }`}
                className={`px-4 py-2 rounded ${
                  currentPage === pageNum
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-primary hover:text-white'
                }`}
              >
                {pageNum}
              </Link>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 p-12 rounded-lg mt-16">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Let&apos;s work together to create innovative solutions that drive your business
            forward.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
