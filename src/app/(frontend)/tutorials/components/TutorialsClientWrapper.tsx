'use client'

import React from 'react'
import TutorialsClient from '../tutorials-client'
import { Tutorial } from '@/payload-types'

interface TutorialsClientWrapperProps {
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

export default function TutorialsClientWrapper({
  tutorials,
  categories,
  levels,
  currentCategory,
  currentLevel,
  currentSearch,
  currentPage,
  totalPages,
  totalItems,
}: TutorialsClientWrapperProps) {
  return (
    <div className="animation-delay-400 animate-fadeIn">
      <TutorialsClient
        tutorials={tutorials}
        categories={categories}
        levels={levels}
        currentCategory={currentCategory}
        currentLevel={currentLevel}
        currentSearch={currentSearch}
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
      />
    </div>
  )
}
