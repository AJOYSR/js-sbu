import React from 'react'
import Link from 'next/link'

type Props = {
  currentPage: number
  totalPages: number
}

export const PaginationSection = ({ currentPage, totalPages }: Props) => (
  <section className="py-10 relative z-10">
    <div className="container mx-auto px-4">
      <div className="flex justify-center animation-delay-600 animate-fadeIn">
        <div className="flex items-center gap-2">
          {currentPage > 1 && (
            <Link
              href={`/team?page=${currentPage - 1}`}
              className="px-4 py-2 border border-primary/30 rounded-md hover:bg-primary/10 transition-all flex items-center"
              prefetch={true}
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Previous
            </Link>
          )}

          {Array.from({ length: totalPages }).map((_, index) => (
            <Link
              key={index}
              href={`/team?page=${index + 1}`}
              className={`px-4 py-2 border rounded-md transition-all ${
                currentPage === index + 1
                  ? 'bg-primary text-white border-primary hover:bg-primary/90'
                  : 'border-primary/30 hover:bg-primary/10'
              }`}
              prefetch={Math.abs(currentPage - (index + 1)) <= 1}
            >
              {index + 1}
            </Link>
          ))}

          {currentPage < totalPages && (
            <Link
              href={`/team?page=${currentPage + 1}`}
              className="px-4 py-2 border border-primary/30 rounded-md hover:bg-primary/10 transition-all flex items-center"
              prefetch={true}
            >
              Next
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  </section>
)
