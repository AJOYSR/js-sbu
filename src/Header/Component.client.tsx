'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'

interface HeaderClientProps {
  header: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ header }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className={`w-full backdrop-blur-md supports-[backdrop-filter]:bg-background/60 z-50 fixed top-0 left-0 right-0 border-b transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 border-border shadow-md neon-glow'
          : 'bg-background/50 border-transparent'
      }`}
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="container mx-auto">
        <div className="py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center group transition-transform hover:scale-110 animate-fadeIn"
          >
            <Logo loading="eager" priority="high" className="invert dark:invert-0" />
          </Link>

          <div className="flex items-center gap-4">
            <ThemeSelector />
            <HeaderNav header={header} />
          </div>
        </div>
      </div>

      {/* Enhanced gradient line at bottom of header that shows on scroll */}
      <div
        className={`h-0.5 w-full bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>

      {/* Added decorative element */}
      <div className="absolute top-0 right-0 w-32 h-32 -translate-y-1/2 translate-x-1/2 bg-gradient-to-bl from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
    </header>
  )
}
