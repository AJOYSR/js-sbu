'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React, { useState } from 'react'
import { Sun, Moon, Laptop, Palette } from 'lucide-react'

import type { Theme } from './types'

import { useTheme } from '..'
import { themeLocalStorageKey } from './types'

export const ThemeSelector: React.FC = () => {
  const { setTheme } = useTheme()
  const [value, setValue] = useState('')

  const onThemeChange = (themeToSet: Theme & 'auto') => {
    if (themeToSet === 'auto') {
      setTheme(null)
      setValue('auto')
    } else {
      setTheme(themeToSet)
      setValue(themeToSet)
    }
  }

  React.useEffect(() => {
    const preference = window.localStorage.getItem(themeLocalStorageKey)
    setValue(preference ?? 'auto')
  }, [])

  const getIconForCurrentTheme = () => {
    switch (value) {
      case 'light':
        return <Sun className="h-5 w-5 text-amber-500" />
      case 'dark':
        return <Moon className="h-5 w-5 text-primary" />
      default:
        return <Palette className="h-5 w-5 text-primary" />
    }
  }

  return (
    <Select onValueChange={onThemeChange} value={value}>
      <SelectTrigger
        aria-label="Select a theme"
        className="w-auto bg-transparent gap-2 px-3 py-2 border border-transparent hover:border-primary/30 hover:bg-primary/5 rounded-full transition-all duration-300 shiny-card btn-pop"
      >
        <div className="flex items-center gap-2">
          {getIconForCurrentTheme()}
          <span className="sr-only md:not-sr-only md:inline-block text-sm font-medium">
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </span>
        </div>
      </SelectTrigger>
      <SelectContent className="w-40 border border-primary/20 backdrop-blur-md">
        <SelectItem
          value="auto"
          className="flex items-center gap-2 py-2.5 hover:bg-primary/10 hover:text-primary transition-all"
        >
          <Laptop className="h-4 w-4 text-primary" />
          <span>Auto</span>
        </SelectItem>
        <SelectItem
          value="light"
          className="flex items-center gap-2 py-2.5 hover:bg-amber-50 dark:hover:bg-amber-950/30 hover:text-amber-600 dark:hover:text-amber-400 transition-all"
        >
          <Sun className="h-4 w-4 text-amber-500" />
          <span>Light</span>
        </SelectItem>
        <SelectItem
          value="dark"
          className="flex items-center gap-2 py-2.5 hover:bg-primary/10 hover:text-primary transition-all"
        >
          <Moon className="h-4 w-4 text-primary" />
          <span>Dark</span>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
