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
const ITEMS_PER_PAGE = 3

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
    <div className="min-h-screen py-16 animate-fadeIn">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center animation-delay-200 animate-fadeIn">
          <h1 className="text-4xl font-bold mb-6 text-gradient">Our Portfolio</h1>
          <p className="text-xl text-primary mb-4">Showcase of our innovative work</p>
          <p className="text-foreground">
            Explore our successful projects and see how we&apos;ve helped businesses achieve their
            goals through innovative solutions
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animation-delay-400 animate-fadeIn">
          {categoryOptions.map((category) => (
            <Link
              key={category.value}
              href={`/portfolio?category=${category.value}`}
              className={`px-6 py-2 rounded-full shadow-md transition btn-pop ${
                currentCategory === category.value
                  ? 'btn-gradient text-white'
                  : 'glass-card hover:bg-primary hover:text-white'
              }`}
            >
              {category.label}
            </Link>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project: Portfolio, index: number) => {
            const image = project.image as Media
            const imageUrl = image?.url || '/placeholder-image.jpg'
            const animationDelay =
              index % 3 === 0
                ? 'animation-delay-200'
                : index % 3 === 1
                  ? 'animation-delay-400'
                  : 'animation-delay-600'

            return (
              <Link
                href={`/portfolio/${String(project.slug)}`}
                key={project.id}
                className={`glass-card card-hover rounded-xl shadow-md overflow-hidden transition-all animate-fadeIn ${animationDelay}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={project.title || 'Project'}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <span className="text-primary text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3 text-gradient">{project.title}</h3>
                  <p className="text-foreground mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-primary">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech) => (
                        <span
                          key={tech.tech}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {tech.tech}
                        </span>
                      )) || null}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results?.map((result) => (
                        <li
                          key={result.result}
                          className="flex items-center text-sm text-foreground"
                        >
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
          <div className="flex justify-center items-center gap-2 animation-delay-400 animate-fadeIn">
            {/* Previous Button */}
            <Link
              href={`/portfolio?page=${Math.max(1, currentPage - 1)}${
                currentCategory !== 'all' ? `&category=${currentCategory}` : ''
              }`}
              className={`flex items-center px-4 py-2 rounded-lg btn-pop ${
                currentPage === 1
                  ? 'glass-card text-foreground/50 cursor-not-allowed opacity-70'
                  : 'glass-card text-foreground hover:bg-primary/10'
              }`}
              aria-disabled={currentPage === 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1 h-4 w-4"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Prev
            </Link>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <Link
                key={pageNum}
                href={`/portfolio?page=${pageNum}${
                  currentCategory !== 'all' ? `&category=${currentCategory}` : ''
                }`}
                className={`px-4 py-2 rounded-lg btn-pop ${
                  currentPage === pageNum
                    ? 'btn-gradient text-white'
                    : 'glass-card text-foreground hover:bg-primary/10'
                }`}
              >
                {pageNum}
              </Link>
            ))}

            {/* Next Button */}
            <Link
              href={`/portfolio?page=${Math.min(totalPages, currentPage + 1)}${
                currentCategory !== 'all' ? `&category=${currentCategory}` : ''
              }`}
              className={`flex items-center px-4 py-2 rounded-lg btn-pop ${
                currentPage === totalPages
                  ? 'glass-card text-foreground/50 cursor-not-allowed opacity-70'
                  : 'glass-card text-foreground hover:bg-primary/10'
              }`}
              aria-disabled={currentPage === totalPages}
            >
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 h-4 w-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        )}

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-xl mt-16 shiny-card animation-delay-600 animate-fadeIn">
          <h2 className="text-3xl font-bold mb-6 text-gradient">Ready to Start Your Project?</h2>
          <p className="text-foreground mb-8">
            Let&apos;s work together to create innovative solutions that drive your business
            forward.
          </p>
          <Link
            href="/contact"
            className="inline-block btn-gradient text-white px-8 py-3 rounded-lg shadow-md hover-scale btn-pop"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
