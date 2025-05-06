
'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React, { useState } from 'react'
import { Sun, Moon, Laptop } from 'lucide-react'

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

  return (
    <Select onValueChange={onThemeChange} value={value}>
      <SelectTrigger
        aria-label="Select a theme"
        className="w-auto bg-transparent gap-2 pl-0 md:pl-3 border-none hover:bg-accent/30 rounded-full transition-all"
      >
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className="w-32">
        <SelectItem value="auto" className="flex items-center gap-2">
          <Laptop className="h-4 w-4 text-primary" />
          <span>Auto</span>
        </SelectItem>
        <SelectItem value="light" className="flex items-center gap-2">
          <Sun className="h-4 w-4 text-amber-500" />
          <span>Light</span>
        </SelectItem>
        <SelectItem value="dark" className="flex items-center gap-2">
          <Moon className="h-4 w-4 text-blue-500" />
          <span>Dark</span>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
