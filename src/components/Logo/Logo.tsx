import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  linkClassName?: string
  isLink?: boolean
}

export const Logo = (props: Props) => {
  const {
    loading: loadingFromProps,
    priority: priorityFromProps,
    className,
    linkClassName,
    isLink = false,
  } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  const LogoContent = (
    <div className={clsx('flex items-center gap-3', className)}>
      {/* Tech Stack Icon */}
      <div className="relative h-12 w-12 flex-shrink-0">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-primary/80 shadow-lg"></div>
        <div className="absolute inset-[2px] rounded-lg bg-white dark:bg-gray-900 flex items-center justify-center">
          <div className="text-xl font-bold font-mono text-gradient">JS</div>
        </div>
        {/* Tech icons orbiting */}
        <div
          className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-yellow-400 shadow-md animate-pulse"
          title="JavaScript"
        ></div>
        <div
          className="absolute -bottom-1 -left-1 h-4 w-4 rounded-full bg-primary shadow-md animate-pulse"
          title="React"
        ></div>
        <div
          className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 shadow-md animate-pulse"
          title="Node.js"
        ></div>
        <div
          className="absolute -top-1 -left-1 h-4 w-4 rounded-full bg-red-500 shadow-md animate-pulse"
          title="Angular"
        ></div>
      </div>

      {/* Title */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1 text-2xl font-bold leading-none">
          <span className="text-gradient">JS-SBU</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 font-medium">
          <span>Brain Station 23</span>
        </div>
      </div>
    </div>
  )

  if (isLink) {
    return (
      <Link
        href="/"
        className={clsx('hover:opacity-90 transition-opacity duration-200', linkClassName)}
        aria-label="Go to homepage"
      >
        {LogoContent}
      </Link>
    )
  }

  return LogoContent
}
