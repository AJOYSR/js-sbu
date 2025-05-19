'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState, useEffect } from 'react'
import { useDebounce } from '@/utilities/useDebounce'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search as SearchIcon, X, Loader2, ArrowRight } from 'lucide-react'

export const Search: React.FC = () => {
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [manualSubmit, setManualSubmit] = useState(false)
  const [lastQuery, setLastQuery] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()

  // Initialize search input with current query
  useEffect(() => {
    const query = searchParams?.get('q')
    if (query && query !== lastQuery) {
      setValue(query)
      setLastQuery(query)
    }
  }, [searchParams, lastQuery])

  // Listen for popstate (browser back/forward) to handle history navigation
  useEffect(() => {
    const handlePopState = () => {
      const query = new URL(window.location.href).searchParams.get('q') || ''
      setValue(query)
      setLastQuery(query)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const debouncedValue = useDebounce(value)

  // Function to update URL without scrolling
  const updateSearchParams = (query: string) => {
    if (query === lastQuery) return

    // Create new URL with the current pathname and search params
    const url = new URL(window.location.href)

    // Set or remove the query parameter
    if (query) {
      url.searchParams.set('q', query)
    } else {
      url.searchParams.delete('q')
    }

    // Update the URL without scrolling using history API
    window.history.pushState({ path: url.toString(), query }, '', url.toString())

    // Update last query
    setLastQuery(query)

    // Manually trigger a state update in router without navigation
    router.refresh()
  }

  useEffect(() => {
    if (debouncedValue || manualSubmit) {
      // Save current scroll position
      const scrollPosition = window.scrollY

      // Update URL without navigation
      updateSearchParams(debouncedValue)

      if (manualSubmit) {
        setIsLoading(true)
        setManualSubmit(false)

        // We'll turn off loading in 1 second to give time for results to load
        setTimeout(() => {
          setIsLoading(false)

          // Find and scroll to the search results section
          const searchResultsElement = document.getElementById('search-results')
          if (searchResultsElement) {
            // Smooth scroll to the results section
            searchResultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
          } else {
            // Restore the previous scroll position
            window.scrollTo(0, scrollPosition)
          }
        }, 1000)
      }
    }
  }, [debouncedValue, router, manualSubmit])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value) {
      setManualSubmit(true)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="relative">
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            {isLoading ? (
              <Loader2 className="w-5 h-5 text-primary animate-spin" />
            ) : (
              <SearchIcon className="w-5 h-5 text-primary" />
            )}
          </div>
          <Input
            id="search"
            value={value}
            onChange={(event) => {
              setValue(event.target.value)
            }}
            placeholder="Search for articles, tutorials, team members and more..."
            className="w-full pl-12 py-4 glass-card backdrop-blur-sm border-white/10 rounded-xl focus:ring-primary focus:border-primary transition-colors text-foreground shadow-sm pr-24"
            disabled={isLoading}
          />

          {/* Search button */}
          {value && (
            <button
              type="submit"
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary/80 hover:bg-primary text-white px-4 py-2 rounded-lg transition-all btn-pop flex items-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                  <span>Searching</span>
                </>
              ) : (
                <>
                  <span>Search</span>
                  <ArrowRight className="ml-1 w-4 h-4" />
                </>
              )}
            </button>
          )}

          {value && !isLoading && (
            <button
              type="button"
              onClick={() => setValue('')}
              className="absolute inset-y-0 right-28 flex items-center pr-2 text-foreground/60 hover:text-primary transition-colors btn-pop"
              aria-label="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        <p className="text-sm text-foreground/60 mt-2 pl-2">
          {isLoading
            ? 'Loading results...'
            : 'Type your search query and press Enter. Results will appear automatically.'}
        </p>
        <button type="submit" className="sr-only">
          submit
        </button>
      </form>
    </div>
  )
}
