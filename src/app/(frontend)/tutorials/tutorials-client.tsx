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
  initialTutorials: Tutorial[]
  categories: string[]
  levels: string[]
  initialCategory: string
  initialLevel: string
  initialSearch: string
}

export default function TutorialsClient({
  initialTutorials,
  categories,
  levels,
  initialCategory,
  initialLevel,
  initialSearch,
}: TutorialsClientProps) {
  const [allTutorials] = useState(initialTutorials)
  const [displayedTutorials, setDisplayedTutorials] = useState(initialTutorials)
  const [category, setCategory] = useState(initialCategory)
  const [level, setLevel] = useState(initialLevel)
  const [search, setSearch] = useState(initialSearch)
  const [searchInput, setSearchInput] = useState(initialSearch)
  const router = useRouter()
  const pathname = usePathname()

  // Filter tutorials when filter criteria change
  useEffect(() => {
    let filtered = [...allTutorials]

    // Apply category filter
    if (category !== 'All') {
      filtered = filtered.filter((tutorial) => tutorial.category === category)
    }

    // Apply level filter (lowercase level for comparison)
    if (level !== 'All Levels') {
      filtered = filtered.filter((tutorial) => tutorial.level === level.toLowerCase())
    }

    // Apply search filter
    if (search) {
      const searchLower = search.toLowerCase()
      filtered = filtered.filter(
        (tutorial) =>
          tutorial.title.toLowerCase().includes(searchLower) ||
          tutorial.description.toLowerCase().includes(searchLower),
      )
    }

    setDisplayedTutorials(filtered)
  }, [category, level, search, allTutorials])

  // Update the URL query parameters when filters change
  useEffect(() => {
    const params = new URLSearchParams()

    if (category !== 'All') {
      params.set('category', category)
    }

    if (level !== 'All Levels') {
      params.set('level', level)
    }

    if (search) {
      params.set('search', search)
    }

    const query = params.toString()
    const url = query ? `${pathname}?${query}` : pathname

    router.push(url, { scroll: false })
  }, [category, level, search, pathname, router])

  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearch(searchInput)
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
              isActive={category === cat}
              onClick={() => setCategory(cat)}
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {levels.map((lvl) => (
            <FilterButton
              key={lvl}
              label={lvl}
              isActive={level === lvl}
              onClick={() => setLevel(lvl)}
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {displayedTutorials.length > 0 ? (
          displayedTutorials.map((tutorial, index) => {
            const image = tutorial.image as Media
            // Ensure imageUrl is always a string, using a fallback if needed
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
    </>
  )
}
