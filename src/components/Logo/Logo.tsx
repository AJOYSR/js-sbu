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
      {/* React Logo Icon */}
      <div className="relative h-10 w-10 flex-shrink-0 animate-spin-slow">
        <div className="absolute inset-0 rounded-full border-[2.5px] border-primary opacity-75"></div>
        <div className="absolute inset-0 rounded-full border-[2.5px] border-transparent border-t-primary"></div>
        <div className="absolute inset-0 rounded-full border-[2.5px] border-transparent border-l-primary"></div>
        <div className="absolute inset-1.5 flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)]"></div>
        </div>
      </div>

      {/* Title */}
      <div className="flex items-center gap-1 text-2xl font-bold leading-none">
        <span className="bg-gradient-to-r from-primary via-primary to-pink-500 bg-clip-text text-transparent">
          JS-SBU
        </span>
        <span className="text-primary font-extrabold">@</span>
        <span className="bg-gradient-to-r from-pink-500 to-primary bg-clip-text text-transparent">
          BS23
        </span>
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
