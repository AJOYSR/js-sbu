'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { useTheme } from '@/providers/Theme'
import React, { useEffect } from 'react'

const PageClient: React.FC = () => {
  const { theme } = useTheme()
  /* Force the header to be dark mode while we have an image behind it */
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme(theme !== undefined ? theme : null)
  }, [setHeaderTheme, theme])
  return <React.Fragment />
}

export default PageClient
