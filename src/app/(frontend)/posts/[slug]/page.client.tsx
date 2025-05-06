'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

const PageClient: React.FC = () => {
  /* Force the header to be dark mode for better contrast with the hero image */
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    // Set the header theme to dark for better visibility against the hero image
    setHeaderTheme('dark')

    // Add a class to the body for specific post page styling if needed
    document.body.classList.add('post-detail-page')

    return () => {
      document.body.classList.remove('post-detail-page')
    }
  }, [setHeaderTheme])

  return <React.Fragment />
}

export default PageClient
