'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Portfolio, Media } from '@/payload-types'

interface PortfolioGridProps {
  projects: Portfolio[]
  totalPages: number
  currentPage: number
  currentCategory: string
}

export default function PortfolioGrid({
  projects,
  totalPages,
  currentPage,
  currentCategory,
}: PortfolioGridProps) {
  return (
    <>
      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {projects.map((project: Portfolio, index: number) => {
          const image = project.image as Media
          const imageUrl = image?.url || '/placeholder-image.jpg'
          const animationDelay = `animation-delay-${200 + index * 100}`

          return (
            <Link
              href={`/portfolio/${String(project.slug)}`}
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn shadow-xl border border-white/5 transition-all duration-300 hover:shadow-2xl"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={project.title || 'Project'}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex px-3 py-1 rounded-full text-xs bg-primary/70 text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gradient">{project.title}</h3>
                <p className="text-foreground/80 mb-5 text-sm line-clamp-2">
                  {project.description}
                </p>

                <div className="mb-5">
                  <h4 className="text-sm font-medium mb-2 text-primary">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech) => (
                      <span
                        key={tech.tech}
                        className="inline-flex px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full"
                      >
                        {tech.tech}
                      </span>
                    )) || null}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2 text-primary">Key Results:</h4>
                  <ul className="space-y-1.5">
                    {project.results?.slice(0, 2).map((result) => (
                      <li
                        key={result.result}
                        className="flex items-start text-xs text-foreground/90"
                      >
                        <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          <svg
                            className="w-2.5 h-2.5 text-primary"
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
                        </div>
                        <span>{result.result}</span>
                      </li>
                    )) || null}
                    {project.results && project.results.length > 2 && (
                      <li className="text-xs text-primary hover:underline mt-1">+ more results</li>
                    )}
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-200/20 flex justify-end">
                  <span className="text-primary text-xs flex items-center">
                    View case study <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
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
                : 'glass-card text-foreground hover:bg-primary/10 hover:text-primary'
            }`}
            aria-disabled={currentPage === 1}
            prefetch={false}
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Prev
          </Link>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <Link
              key={pageNum}
              href={`/portfolio?page=${pageNum}${
                currentCategory !== 'all' ? `&category=${currentCategory}` : ''
              }`}
              className={`w-10 h-10 flex items-center justify-center rounded-lg btn-pop ${
                currentPage === pageNum
                  ? 'btn-gradient text-white'
                  : 'glass-card text-foreground hover:bg-primary/10 hover:text-primary'
              }`}
              prefetch={false}
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
                : 'glass-card text-foreground hover:bg-primary/10 hover:text-primary'
            }`}
            aria-disabled={currentPage === totalPages}
            prefetch={false}
          >
            Next
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-10 md:p-16 shadow-xl relative overflow-hidden border border-white/10 backdrop-blur-md animation-delay-300 animate-fadeIn">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[80px]"></div>

            <div className="text-center relative z-10">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
                LET&apos;S WORK TOGETHER
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
                Ready to Start Your Project?
              </h2>
              <p className="text-foreground/90 text-lg mb-10 max-w-3xl mx-auto animation-delay-300 animate-fadeIn">
                Let&apos;s work together to create innovative solutions that drive your business
                forward and transform your ideas into reality.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center animation-delay-400 animate-fadeIn">
                <Link
                  href="/contact"
                  className="btn-gradient text-white px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium"
                  prefetch={false}
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="bg-white/10 border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium backdrop-blur-sm"
                  prefetch={false}
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
