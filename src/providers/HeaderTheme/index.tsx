'use client'

import type { Theme } from '@/providers/Theme/types'

import React, { createContext, useCallback, useContext, useState, useEffect } from 'react'

import canUseDOM from '@/utilities/canUseDOM'
import { useTheme } from '@/providers/Theme'

export interface ContextType {
  headerTheme?: Theme | null
  setHeaderTheme: (theme: Theme | null) => void
}

const initialContext: ContextType = {
  headerTheme: undefined,
  setHeaderTheme: () => null,
}

const HeaderThemeContext = createContext(initialContext)

export const HeaderThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme: mainTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [headerTheme, setThemeState] = useState<Theme | undefined | null>(undefined)

  useEffect(() => {
    setMounted(true)
    if (canUseDOM) {
      setThemeState(document.documentElement.getAttribute('data-theme') as Theme)
    }
  }, [])

  const setHeaderTheme = useCallback((themeToSet: Theme | null) => {
    setThemeState(themeToSet)
  }, [])

  useEffect(() => {
    if (mounted) {
      setThemeState(mainTheme)
    }
  }, [mainTheme, mounted])

  return (
    <HeaderThemeContext.Provider value={{ headerTheme, setHeaderTheme }}>
      {children}
    </HeaderThemeContext.Provider>
  )
}

export const useHeaderTheme = (): ContextType => useContext(HeaderThemeContext)
