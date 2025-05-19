'use client'

import React from 'react'
import Link from 'next/link'

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
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16 animation-delay-400 animate-fadeIn">
      {categories.map((category) => (
        <Link
          key={category.value}
          href={`/portfolio?category=${category.value}`}
          className={`px-6 py-2.5 rounded-full shadow-md transition btn-pop ${
            currentCategory === category.value
              ? 'btn-gradient text-white'
              : 'glass-card hover:bg-primary/10 hover:text-primary backdrop-blur-sm'
          }`}
          prefetch={false}
        >
          {category.label}
        </Link>
      ))}
    </div>
  )
}
