'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { Menu, X, ArrowRight } from 'lucide-react'

const ThemeSelector = dynamic(
  () => import('@/providers/Theme/ThemeSelector').then((mod) => mod.ThemeSelector),
  {
    ssr: false,
  },
)

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (
        mobileMenuOpen &&
        !target.closest('.mobile-menu-container') &&
        !target.closest('.mobile-menu-button')
      ) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [mobileMenuOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header
      className={`w-full backdrop-blur-md z-50 fixed top-0 left-0 right-0 transition-all duration-300 ${
        scrolled
          ? 'supports-[backdrop-filter]:bg-background/90 border-b border-white/10 shadow-lg'
          : 'supports-[backdrop-filter]:bg-background/60'
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
            linkClassName="group transition-all duration-300 hover-scale btn-pop animate-fadeIn"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 animate-fadeIn animation-delay-200">
            <HeaderNav header={header} />
            <div className="hover-scale ml-2">
              <ThemeSelector />
            </div>
            <Link
              href="/contact"
              className="btn-gradient text-white px-6 py-2 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-sm font-medium"
            >
              <span>Get in Touch</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <div className="hover-scale">
              <ThemeSelector />
            </div>
            <button
              className="mobile-menu-button p-2.5 rounded-full glass-card border border-white/10 shadow-md hover-scale btn-pop transition-all"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={20} className="text-primary" />
              ) : (
                <Menu size={20} className="text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu-container md:hidden absolute top-full left-0 w-full bg-card border-t border-white/10 shadow-xl transition-all duration-300 origin-top z-50  ${
          mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="py-6 px-5">
          <HeaderNav header={header} onMobileNavClick={() => setMobileMenuOpen(false)} />

          {/* Added CTA button to mobile menu */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <Link
              href="/contact"
              className="block w-full btn-gradient text-white text-center px-6 py-3 rounded-xl shadow-lg hover-scale btn-pop transition-all flex items-center justify-center"
            >
              <span>Get in Touch</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced gradient line at bottom of header that shows on scroll */}
      <div
        className={`h-0.5 w-full bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>

      {/* Added decorative elements */}
      <div className="absolute -top-10 right-0 w-64 h-64 translate-x-1/3 bg-gradient-to-bl from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-10 left-0 w-64 h-64 -translate-x-1/3 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      {/* Subtle animated glow effect under the header when scrolled */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
    </header>
  )
}
