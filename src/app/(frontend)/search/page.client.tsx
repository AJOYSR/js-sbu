'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

const PageClient: React.FC = () => {
  /* Set the header theme to light for better visibility and consistency */
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    // Set the header theme to light to match other pages
    setHeaderTheme('light')

    // Add a class to the body for specific search page styling if needed
    document.body.classList.add('search-page')

    return () => {
      document.body.classList.remove('search-page')
    }
  }, [setHeaderTheme])

  return <React.Fragment />
}

export default PageClient
