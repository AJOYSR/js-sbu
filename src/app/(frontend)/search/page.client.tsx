'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { useTheme } from '@/providers/Theme'
import React, { useEffect } from 'react'

const PageClient: React.FC = () => {
  /* Set the header theme to light for better visibility and consistency */
  const { setHeaderTheme } = useHeaderTheme()
  const { theme } = useTheme()

  useEffect(() => {
    // Set the header theme to light to match other pages
    setHeaderTheme(theme !== undefined ? theme : null)

    // Add a class to the body for specific search page styling if needed
    document.body.classList.add('search-page')

    return () => {
      document.body.classList.remove('search-page')
    }
  }, [setHeaderTheme, theme])

  return <React.Fragment />
}

export default PageClient
