'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState, useEffect } from 'react'
import { useDebounce } from '@/utilities/useDebounce'
import { useRouter } from 'next/navigation'
import { Search as SearchIcon, X } from 'lucide-react'

export const Search: React.FC = () => {
  const [value, setValue] = useState('')
  const router = useRouter()

  const debouncedValue = useDebounce(value)

  useEffect(() => {
    router.push(`/search${debouncedValue ? `?q=${debouncedValue}` : ''}`)
  }, [debouncedValue, router])

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
        className="relative"
      >
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <SearchIcon className="w-5 h-5 text-primary" />
          </div>
          <Input
            id="search"
            value={value}
            onChange={(event) => {
              setValue(event.target.value)
            }}
            placeholder="Search for articles, tutorials, team members and more..."
            className="w-full pl-12 py-4 glass-card backdrop-blur-sm border-white/10 rounded-xl focus:ring-primary focus:border-primary transition-colors text-foreground shadow-sm"
          />
          {value && (
            <button
              type="button"
              onClick={() => setValue('')}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-foreground/60 hover:text-primary transition-colors btn-pop"
              aria-label="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        <p className="text-sm text-foreground/60 mt-2 pl-2">
          Type your search query and press Enter. Results will appear automatically.
        </p>
        <button type="submit" className="sr-only">
          submit
        </button>
      </form>
    </div>
  )
}
