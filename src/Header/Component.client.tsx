'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { Menu } from 'lucide-react'

interface HeaderClientProps {
  header: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ header }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header
      className={`w-full backdrop-blur-md z-50 fixed top-0 left-0 right-0 border-b transition-all duration-300 ${
        scrolled
          ? 'supports-[backdrop-filter]:bg-background/80 border-primary/10 shadow-md neon-glow'
          : 'supports-[backdrop-filter]:bg-background/40 border-transparent'
      }`}
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="container mx-auto px-4">
        <div className="py-4 flex items-center justify-between">
          <Logo
            loading="eager"
            priority="high"
            className="invert dark:invert-0"
            isLink={true}
            linkClassName="group transition-all duration-300 hover:scale-110 animate-fadeIn"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5 animate-fadeIn animation-delay-200">
            <div className="hover-scale">
              <ThemeSelector />
            </div>
            <HeaderNav header={header} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden bg-primary/10 p-2 rounded-full text-primary"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full glass-card border-t border-primary/10 shadow-lg transition-all duration-300 origin-top z-50 ${
          mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="py-4 px-4">
          <div className="mb-4 flex justify-between items-center">
            <ThemeSelector />
          </div>
          <HeaderNav header={header} />
        </div>
      </div>

      {/* Enhanced gradient line at bottom of header that shows on scroll */}
      <div
        className={`h-0.5 w-full bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>

      {/* Added decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 -translate-y-1/2 translate-x-1/2 bg-gradient-to-bl from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-32 h-32 -translate-y-1/2 -translate-x-1/2 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
    </header>
  )
}
