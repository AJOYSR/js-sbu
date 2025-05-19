'use client'

import React from 'react'
import Link from 'next/link'
import { SearchIcon, ArrowRight, User, Briefcase, Lightbulb, BookOpen } from 'lucide-react'
import { ImageMedia } from '@/components/Media/ImageMedia'

interface SearchResultItem {
  id: number
  title: string
  slug: string
  meta?: { description?: string | null; title?: string | null; image?: any }
  categories?: any
  description?: string
  bio?: string
  image?: any
  collection: string
  role?: string
  category?: string
  level?: string
}

interface SearchResultsProps {
  results: SearchResultItem[]
  totalResults: number
  query: string | string[] | undefined
}

export default function SearchResults({ results, totalResults, query }: SearchResultsProps) {
  const getPath = (result: SearchResultItem) => {
    switch (result.collection) {
      case 'team-members':
        return '/team'
      case 'portfolio':
        return `/portfolio/${result.slug}`
      case 'tutorials':
        return `/tutorials/${result.slug}`
      case 'posts':
        return `/posts/${result.slug}`
      default:
        return '/'
    }
  }

  const getDescription = (result: SearchResultItem) => {
    if (result.description) return result.description
    if (result.meta?.description) return result.meta.description
    if (result.bio) return result.bio
    return ''
  }

  const getSubtitle = (result: SearchResultItem) => {
    switch (result.collection) {
      case 'team-members':
        return result.role || 'Team Member'
      case 'portfolio':
        return result.category ? `Portfolio - ${result.category.replace(/-/g, ' ')}` : 'Portfolio'
      case 'tutorials':
        return result.level ? `Tutorial - ${result.level}` : 'Tutorial'
      case 'posts':
        return 'Article'
      default:
        return ''
    }
  }

  const getIcon = (result: SearchResultItem) => {
    switch (result.collection) {
      case 'team-members':
        return <User className="w-4 h-4 mr-1 text-primary" />
      case 'portfolio':
        return <Briefcase className="w-4 h-4 mr-1 text-primary" />
      case 'tutorials':
        return <Lightbulb className="w-4 h-4 mr-1 text-primary" />
      case 'posts':
        return <BookOpen className="w-4 h-4 mr-1 text-primary" />
      default:
        return null
    }
  }

  if (totalResults === 0) {
    return (
      <div className="animation-delay-400 animate-fadeIn">
        <div className="glass-card rounded-xl shadow-xl p-12 text-center max-w-3xl mx-auto border border-white/10 backdrop-blur-md">
          <div className="flex justify-center mb-6">
            <SearchIcon className="w-16 h-16 text-primary/80" />
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-gradient">No results found</h2>
          <p className="text-foreground/80 max-w-lg mx-auto mb-8">
            We couldn&apos;t find any content matching your search. Please try different keywords or
            browse our categories.
          </p>
          <Link
            href="/"
            className="px-6 py-3 rounded-lg btn-gradient text-white hover-scale btn-pop inline-flex items-center"
            prefetch={false}
          >
            <span>Back to Home</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="animation-delay-400 animate-fadeIn">
      <div className="mb-10 text-center">
        <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <SearchIcon className="inline-block h-4 w-4 mr-1" /> SEARCH RESULTS
        </span>
        <p className="text-foreground/90 glass-card inline-block px-6 py-2 rounded-full text-sm backdrop-blur-sm border border-white/10">
          Found <span className="font-semibold text-primary">{totalResults}</span>{' '}
          {totalResults === 1 ? 'result' : 'results'}
          {query ? ` for "${query}"` : ''}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {results.map((result, index) => {
          const animationDelay =
            index % 3 === 0
              ? 'animation-delay-200'
              : index % 3 === 1
                ? 'animation-delay-400'
                : 'animation-delay-600'

          return (
            <div
              className={`animate-fadeIn ${animationDelay}`}
              key={`${result.collection}-${result.id}`}
            >
              <article className="glass-card rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all card-hover border border-white/5 h-full flex flex-col">
                <div className="relative w-full overflow-hidden">
                  <div className="relative h-48">
                    {result.image || result.meta?.image ? (
                      <ImageMedia
                        resource={result.image || result.meta?.image}
                        fill
                        alt={result.title}
                        priority={false}
                        imgClassName="object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-card/30 flex items-center justify-center">
                        <span className="text-foreground/50">No image</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-primary/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm flex items-center">
                      {getIcon(result)} {getSubtitle(result)}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-gradient font-semibold text-xl mb-3">
                    <Link
                      href={getPath(result)}
                      className="hover:opacity-90 transition-opacity"
                      prefetch={false}
                    >
                      {result.title}
                    </Link>
                  </h3>
                  <div className="mt-2 text-foreground/80 flex-1">
                    <p className="line-clamp-3 text-sm">{getDescription(result)}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200/20 flex justify-end">
                    <Link
                      href={getPath(result)}
                      className="text-primary text-xs flex items-center"
                      prefetch={false}
                    >
                      View Details <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          )
        })}
      </div>

      {/* CTA Section */}
      <section className="py-20 mt-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-10 md:p-16 shadow-xl relative overflow-hidden border border-white/10 backdrop-blur-md animation-delay-300 animate-fadeIn">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[80px]"></div>

            <div className="text-center relative z-10">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
                EXPLORE MORE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
                Discover Our Content
              </h2>
              <p className="text-foreground/90 text-lg mb-10 max-w-3xl mx-auto animation-delay-300 animate-fadeIn">
                Dive deeper into our blog, tutorials, and projects to find more valuable resources
                and insights.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center animation-delay-400 animate-fadeIn">
                <Link
                  href="/posts"
                  className="btn-gradient text-white px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium"
                  prefetch={false}
                >
                  <span>Read Our Blog</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/tutorials"
                  className="bg-white/10 border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium backdrop-blur-sm"
                  prefetch={false}
                >
                  <span>Browse Tutorials</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
