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
    <div className={clsx('flex items-center gap-2', className)}>
      {/* JavaScript Logo Icon */}
      <div className="relative h-10 w-10 flex-shrink-0">
        <div className="absolute inset-0 rounded-lg bg-[#F7DF1E] shadow-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#000000] font-bold text-xl">JS</span>
        </div>
      </div>

      {/* Title */}
      <div className="flex items-center gap-1 text-2xl font-bold leading-none">
        <span className="text-[#F7DF1E]">JS-SBU</span>
        <span className="text-gray-900 dark:text-white font-extrabold">@</span>
        <span className="text-[#DD0031]">BS23</span>
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
