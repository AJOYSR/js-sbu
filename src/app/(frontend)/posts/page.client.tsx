'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

const PageClient: React.FC = () => {
  /* Force the header to be consistent with our new vibrant theme */
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    // Set to 'dark' when in light mode so header contrasts well
    // Header will automatically adapt in dark mode via CSS variables
    setHeaderTheme('light')

    // Add a class to the body for specific blog page styling if needed
    document.body.classList.add('blog-page')

    return () => {
      document.body.classList.remove('blog-page')
    }
  }, [setHeaderTheme])

  return <React.Fragment />
}

export default PageClient
