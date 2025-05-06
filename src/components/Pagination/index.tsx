'use client'
import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { cn } from '@/utilities/cn'
import { useRouter } from 'next/navigation'
import React from 'react'

export const Pagination: React.FC<{
  className?: string
  page: number
  totalPages: number
}> = (props) => {
  const router = useRouter()

  const { className, page, totalPages } = props
  const hasNextPage = page < totalPages
  const hasPrevPage = page > 1

  const hasExtraPrevPages = page - 1 > 1
  const hasExtraNextPages = page + 1 < totalPages

  return (
    <div className={cn('my-12', className)}>
      <div className="flex justify-center items-center gap-2">
        {/* Previous Button */}
        <button
          disabled={!hasPrevPage}
          onClick={() => {
            router.push(`/posts/page/${page - 1}`)
          }}
          className={`flex items-center px-4 py-2 rounded-lg btn-pop ${
            !hasPrevPage
              ? 'glass-card text-foreground/50 cursor-not-allowed opacity-70'
              : 'glass-card text-foreground hover:bg-primary/10'
          }`}
          aria-disabled={!hasPrevPage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1 h-4 w-4"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Prev
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-2">
          {hasExtraPrevPages && <span className="text-foreground/70">...</span>}

          {hasPrevPage && (
            <button
              onClick={() => {
                router.push(`/posts/page/${page - 1}`)
              }}
              className="px-4 py-2 rounded-lg glass-card text-foreground hover:bg-primary/10 btn-pop"
            >
              {page - 1}
            </button>
          )}

          <button
            onClick={() => {
              router.push(`/posts/page/${page}`)
            }}
            className="px-4 py-2 rounded-lg btn-gradient text-white btn-pop"
          >
            {page}
          </button>

          {hasNextPage && (
            <button
              onClick={() => {
                router.push(`/posts/page/${page + 1}`)
              }}
              className="px-4 py-2 rounded-lg glass-card text-foreground hover:bg-primary/10 btn-pop"
            >
              {page + 1}
            </button>
          )}

          {hasExtraNextPages && <span className="text-foreground/70">...</span>}
        </div>

        {/* Next Button */}
        <button
          disabled={!hasNextPage}
          onClick={() => {
            router.push(`/posts/page/${page + 1}`)
          }}
          className={`flex items-center px-4 py-2 rounded-lg btn-pop ${
            !hasNextPage
              ? 'glass-card text-foreground/50 cursor-not-allowed opacity-70'
              : 'glass-card text-foreground hover:bg-primary/10'
          }`}
          aria-disabled={!hasNextPage}
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1 h-4 w-4"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
