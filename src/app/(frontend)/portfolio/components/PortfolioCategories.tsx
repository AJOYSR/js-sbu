'use client'

import React from 'react'
import { useRouter, usePathname } from 'next/navigation'

interface Category {
  label: string
  value: string
}

interface PortfolioCategoriesProps {
  categories: Category[]
  currentCategory: string
}

export default function PortfolioCategories({
  categories,
  currentCategory,
}: PortfolioCategoriesProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(window.location.search)

    if (category === 'all') {
      params.delete('category')
    } else {
      params.set('category', category)
    }

    // Reset page when changing categories
    params.set('page', '1')

    const query = params.toString()
    const url = query ? `${pathname}?${query}` : pathname

    // Use replace with scroll: false to prevent page jump
    router.replace(url, { scroll: false })
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16 animation-delay-400 animate-fadeIn">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => handleCategoryChange(category.value)}
          className={`px-6 py-2.5 rounded-full shadow-md transition-all duration-300 btn-pop ${
            currentCategory === category.value
              ? 'btn-gradient text-white'
              : 'glass-card hover:bg-primary/10 hover:text-primary backdrop-blur-sm'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}
