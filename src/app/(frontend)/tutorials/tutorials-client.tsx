'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Clock, BookOpen, Star, Filter, Search, Layers, BarChart4, ArrowRight } from 'lucide-react'
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

// Map categories to icons
const categoryIcons: Record<string, React.ReactNode> = {
  'web-development': <BarChart4 className="w-4 h-4 mr-2" />,
  'mobile-development': <Layers className="w-4 h-4 mr-2" />,
  'backend-development': <BarChart4 className="w-4 h-4 mr-2" />,
  'ai-ml': <Layers className="w-4 h-4 mr-2" />,
  devops: <BarChart4 className="w-4 h-4 mr-2" />,
  All: <Filter className="w-4 h-4 mr-2" />,
}

// Reusable filter button component
const FilterButton = ({
  label,
  isActive = false,
  onClick,
  icon,
}: {
  label: string
  isActive?: boolean
  onClick: () => void
  icon?: React.ReactNode
}) => (
  <button
    onClick={onClick}
    className={`px-6 py-2.5 rounded-full shadow-md transition btn-pop flex items-center ${
      isActive
        ? 'btn-gradient text-white'
        : 'glass-card hover:bg-primary/10 hover:text-primary backdrop-blur-sm'
    }`}
  >
    {icon}
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
      <div className="flex flex-col items-center gap-4 mt-12 mb-8">
        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage <= 1}
            className={`flex items-center px-4 py-2 rounded-lg btn-pop ${
              currentPage <= 1
                ? 'glass-card text-foreground/50 cursor-not-allowed opacity-70'
                : 'glass-card text-foreground hover:bg-primary/10 hover:text-primary'
            }`}
            aria-disabled={currentPage <= 1}
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
          </button>

          <div className="flex items-center gap-2">
            {pagesToShow.map((pageNum, index) =>
              pageNum === -1 ? (
                <span key={`ellipsis-${index}`} className="text-foreground/70">
                  ...
                </span>
              ) : (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg btn-pop ${
                    pageNum === currentPage
                      ? 'btn-gradient text-white'
                      : 'glass-card text-foreground hover:bg-primary/10 hover:text-primary'
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
            className={`flex items-center px-4 py-2 rounded-lg btn-pop ${
              currentPage >= totalPages
                ? 'glass-card text-foreground/50 cursor-not-allowed opacity-70'
                : 'glass-card text-foreground hover:bg-primary/10 hover:text-primary'
            }`}
            aria-disabled={currentPage >= totalPages}
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
          </button>
        </div>
        <div className="text-sm text-foreground/70">
          Showing {tutorials.length} of {totalItems} tutorials
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Filter Section */}
      <div className="mb-12 animate-fadeIn animation-delay-300">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Filter className="inline-block h-4 w-4 mr-1" /> FILTER BY CATEGORY
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {categories.map((cat) => (
            <FilterButton
              key={cat}
              label={categoryDisplayNames[cat] || cat}
              isActive={currentCategory === cat}
              onClick={() => handleFilterChange('category', cat)}
              icon={categoryIcons[cat]}
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
            className="w-full px-6 py-3 rounded-full glass-card backdrop-blur-sm border border-white/10 focus:ring-2 focus:ring-primary focus:border-primary"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 btn-gradient text-white rounded-full btn-pop flex items-center"
          >
            <Search className="w-4 h-4 mr-1" />
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

            const animationDelay = `animation-delay-${200 + index * 100}`

            return (
              <Link
                key={tutorial.id}
                href={`/tutorials/${tutorial.slug}`}
                className="glass-card rounded-xl shadow-md overflow-hidden hover:shadow-lg transition card-hover animate-fadeIn border border-white/5"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={tutorial.title}
                    fill
                    loading={index < 3 ? 'eager' : 'lazy'}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-primary/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {tutorial.level}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-primary font-medium">
                      {categoryDisplayNames[tutorial.category] || tutorial.category}
                    </span>
                    <span className="text-sm text-foreground/70 flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-primary" />
                      {tutorial.duration}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 text-gradient">{tutorial.title}</h2>
                  <p className="text-foreground/80 mb-5 text-sm line-clamp-2">
                    {tutorial.description}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-foreground/70">
                      <BookOpen className="w-4 h-4 mr-1 text-primary" />
                      {tutorial.lessons} lessons
                    </div>
                    <div className="flex items-center text-primary">
                      <Star className="w-4 h-4 mr-1 text-amber-400" />
                      {tutorial.rating.toFixed(1)}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-200/20 flex justify-end">
                    <span className="text-primary text-xs flex items-center">
                      Read tutorial <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            )
          })
        ) : (
          <div className="col-span-3 text-center py-12 glass-card p-8 rounded-lg shadow-md border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2 text-gradient">No tutorials found</h3>
            <p className="text-foreground/80">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      <PaginationControls />
    </>
  )
}
