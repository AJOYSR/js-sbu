'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Clock, BookOpen, Star } from 'lucide-react'
import { Tutorial, Media } from '@/payload-types'

// Add a map for category display names
const categoryDisplayNames: Record<string, string> = {
  'web-development': 'Web Development',
  'mobile-development': 'Mobile Development',
  'backend-development': 'Backend Development',
  'ai-ml': 'AI & ML',
  devops: 'DevOps',
  All: 'All',
}

// Reusable filter button component
const FilterButton = ({
  label,
  isActive = false,
  onClick,
}: {
  label: string
  isActive?: boolean
  onClick: () => void
}) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-full shadow-md transition ${
      isActive ? 'btn-gradient text-white' : 'bg-card hover:bg-primary/10 hover:text-primary'
    }`}
  >
    {label}
  </button>
)

interface TutorialsClientProps {
  tutorials: Tutorial[]
  categories: string[]
  levels: string[]
  currentCategory: string
  currentLevel: string
  currentSearch: string
  currentPage: number
  totalPages: number
  totalItems: number
}

export default function TutorialsClient({
  tutorials,
  categories,
  levels,
  currentCategory,
  currentLevel,
  currentSearch,
  currentPage,
  totalPages,
  totalItems,
}: TutorialsClientProps) {
  const [searchInput, setSearchInput] = useState(currentSearch)
  const router = useRouter()
  const pathname = usePathname()

  // Handle filter changes
  const handleFilterChange = (type: 'category' | 'level', value: string) => {
    const params = new URLSearchParams()

    // Reset page when changing filters
    if (value !== 'All' && value !== 'All Levels') {
      params.set(type, value)
    }

    // Preserve other existing filters
    if (type !== 'category' && currentCategory !== 'All') {
      params.set('category', currentCategory)
    }
    if (type !== 'level' && currentLevel !== 'All Levels') {
      params.set('level', currentLevel)
    }
    if (currentSearch) {
      params.set('search', currentSearch)
    }

    const query = params.toString()
    const url = query ? `${pathname}?${query}` : pathname
    router.push(url)
  }

  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()

    if (searchInput) {
      params.set('search', searchInput)
    }
    if (currentCategory !== 'All') {
      params.set('category', currentCategory)
    }
    if (currentLevel !== 'All Levels') {
      params.set('level', currentLevel)
    }

    const query = params.toString()
    const url = query ? `${pathname}?${query}` : pathname
    router.push(url)
  }

  // Handle page change
  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams()

    params.set('page', newPage.toString())

    if (currentCategory !== 'All') {
      params.set('category', currentCategory)
    }
    if (currentLevel !== 'All Levels') {
      params.set('level', currentLevel)
    }
    if (currentSearch) {
      params.set('search', currentSearch)
    }

    const query = params.toString()
    router.push(`${pathname}?${query}`)
  }

  // Pagination controls component
  const PaginationControls = () => {
    if (totalPages <= 1) return null

    const showEllipsis = totalPages > 7
    let pagesToShow: number[] = []

    if (showEllipsis) {
      if (currentPage <= 3) {
        pagesToShow = [1, 2, 3, 4, 5, -1, totalPages]
      } else if (currentPage >= totalPages - 2) {
        pagesToShow = [
          1,
          -1,
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ]
      } else {
        pagesToShow = [1, -1, currentPage - 1, currentPage, currentPage + 1, -1, totalPages]
      }
    } else {
      pagesToShow = Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    return (
      <div className="flex flex-col items-center gap-4 mt-8 mb-8">
        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage <= 1}
            className={`px-4 py-2 rounded-lg ${
              currentPage <= 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'btn-gradient text-white btn-pop hover-scale'
            }`}
          >
            Previous
          </button>

          <div className="flex items-center gap-2">
            {pagesToShow.map((pageNum, index) =>
              pageNum === -1 ? (
                <span key={`ellipsis-${index}`} className="px-2">
                  ...
                </span>
              ) : (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-10 h-10 rounded-lg ${
                    pageNum === currentPage
                      ? 'btn-gradient text-white'
                      : 'bg-card hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {pageNum}
                </button>
              ),
            )}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className={`px-4 py-2 rounded-lg ${
              currentPage >= totalPages
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'btn-gradient text-white btn-pop hover-scale'
            }`}
          >
            Next
          </button>
        </div>
        <div className="text-sm text-gray-600">
          Showing {tutorials.length} of {totalItems} tutorials
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Filters */}
      <div className="mb-12 animate-fadeIn animation-delay-300">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {categories.map((cat) => (
            <FilterButton
              key={cat}
              label={categoryDisplayNames[cat] || cat}
              isActive={currentCategory === cat}
              onClick={() => handleFilterChange('category', cat)}
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {levels.map((lvl) => (
            <FilterButton
              key={lvl}
              label={lvl}
              isActive={currentLevel === lvl}
              onClick={() => handleFilterChange('level', lvl)}
            />
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12 animate-fadeIn animation-delay-400">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Search tutorials..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full px-6 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary bg-card"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 px-4 py-1 btn-gradient text-white rounded-full btn-pop"
          >
            Search
          </button>
        </form>
      </div>

      {/* Tutorials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {tutorials.length > 0 ? (
          tutorials.map((tutorial, index) => {
            const image = tutorial.image as Media
            const imageUrl =
              typeof image === 'object' && image && 'url' in image && image.url
                ? image.url
                : '/placeholder-image.jpg'

            return (
              <Link
                key={tutorial.id}
                href={`/tutorials/${tutorial.slug}`}
                className="glass-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition card-hover animate-fadeIn"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="relative h-48">
                  <Image src={imageUrl} alt={tutorial.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-card px-3 py-1 rounded-full text-sm font-medium">
                    {tutorial.level}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-primary font-medium">
                      {categoryDisplayNames[tutorial.category] || tutorial.category}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-primary" />
                      {tutorial.duration}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 text-primary">{tutorial.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">{tutorial.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500">
                      <BookOpen className="w-4 h-4 mr-1 text-primary" />
                      {tutorial.lessons} lessons
                    </div>
                    <div className="flex items-center text-primary">
                      <Star className="w-4 h-4 mr-1 text-primary" />
                      {tutorial.rating.toFixed(1)}
                    </div>
                  </div>
                </div>
              </Link>
            )
          })
        ) : (
          <div className="col-span-3 text-center py-12 glass-card p-8 rounded-lg soft-shadow">
            <h3 className="text-xl font-semibold mb-2 text-primary">No tutorials found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      <PaginationControls />
    </>
  )
}
