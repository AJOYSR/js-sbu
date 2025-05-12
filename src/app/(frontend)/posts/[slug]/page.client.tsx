'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { useTheme } from '@/providers/Theme'
import React, { useEffect } from 'react'

const PageClient: React.FC = () => {
  /* Force the header to be dark mode for better contrast with the hero image */
  const { setHeaderTheme } = useHeaderTheme()
  const { theme } = useTheme()

  useEffect(() => {
    // Set the header theme to dark for better visibility against the hero image
    setHeaderTheme(theme !== undefined ? theme : null)

    // Add a class to the body for specific post page styling if needed
    document.body.classList.add('post-detail-page')

    return () => {
      document.body.classList.remove('post-detail-page')
    }
  }, [setHeaderTheme, theme])

  return <React.Fragment />
}

export default PageClient
