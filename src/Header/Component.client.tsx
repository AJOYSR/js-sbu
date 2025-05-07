'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { Menu, X } from 'lucide-react'

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
      className={`w-full backdrop-blur-md z-50 fixed top-0 left-0 right-0 transition-all duration-300 ${
        scrolled
          ? 'supports-[backdrop-filter]:bg-background/90 border-b border-primary/20 shadow-md'
          : 'supports-[backdrop-filter]:bg-background/60'
      }`}
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="container mx-auto px-4">
        <div className="py-4 flex items-center justify-between">
          <Logo
            loading="eager"
            priority="high"
            className="h-10 w-auto"
            isLink={true}
            linkClassName="group transition-all duration-300 hover-scale btn-pop animate-fadeIn"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 animate-fadeIn animation-delay-200">
            <HeaderNav header={header} />
            <div className="hover-scale ml-2">
              <ThemeSelector />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 rounded-full btn-gradient text-white shadow-md hover-scale btn-pop transition-all"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full glass-card border-t border-primary/20 shadow-lg transition-all duration-300 origin-top z-50 ${
          mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="py-6 px-5">
          <div className="mb-4 flex justify-end items-center">
            <ThemeSelector />
          </div>
          <HeaderNav header={header} />

          {/* Added CTA button to mobile menu */}
          <div className="mt-6 pt-6 border-t border-primary/10">
            <Link
              href="/contact"
              className="block w-full btn-gradient text-white text-center px-6 py-3 rounded-lg shadow-md hover-scale btn-pop transition-all"
            >
              Get in Touch
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
      <div className="absolute -top-10 right-0 w-40 h-40 translate-x-1/3 bg-gradient-to-bl from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-10 left-0 w-40 h-40 -translate-x-1/3 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      {/* Subtle animated glow effect under the header when scrolled */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
    </header>
  )
}
