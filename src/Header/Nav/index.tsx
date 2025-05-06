'use client'

import React, { useState, useEffect } from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon, ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'

// Define dropdown menu items
const aboutDropdown = [
  { label: 'About JS SBU', href: '/about' },
  { label: 'Our Vision & Mission', href: '/vision-mission' },
  { label: 'Our Team', href: '/team' },
]

const servicesDropdown = [
  { label: 'Web Application', href: '/services/web-app' },
  { label: 'Mobile App Development', href: '/services/mobile-app' },
  { label: 'UI/UX & Product Design', href: '/services/ui-ux' },
  { label: 'Machine Learning & AI', href: '/services/ml-ai' },
]

const skillsDropdown = [
  { label: 'Full Stack Development', href: '/skills/full-stack' },
  { label: 'UI/UX Research', href: '/skills/ui-ux-research' },
  { label: 'System Architecture', href: '/skills/system-architecture' },
  { label: 'Cloud Native Apps', href: '/skills/cloud-native' },
  { label: 'Machine Learning Implementation', href: '/skills/ml' },
  { label: 'Performance Optimization', href: '/skills/performance' },
]

const insightsDropdown = [
  { label: 'Tech Blogs', href: '/posts' },
  { label: 'Tutorials', href: '/tutorials' },
]

const Dropdown: React.FC<{
  items: Array<{ label: string; href: string }>
  label: string
  isOpen: boolean
  onHover: () => void
  onLeave: () => void
  isMobile?: boolean
}> = ({ items, label, isOpen, onHover, onLeave, isMobile = false }) => {
  const pathname = usePathname()

  if (isMobile) {
    return (
      <div className="py-2">
        <div
          className="font-medium text-foreground mb-2 flex items-center justify-between"
          onClick={onHover}
        >
          {label}
          <ChevronDown
            className={`w-4 h-4 text-primary transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
        {isOpen && (
          <div className="pl-4 space-y-2 border-l-2 border-primary/20">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href || '#'}
                className={`block py-1 text-sm transition-colors duration-150 ${
                  pathname === item.href
                    ? 'text-primary font-medium'
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <button className="flex items-center gap-1 px-3 py-2 text-foreground hover:text-primary transition-colors">
        {label}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`absolute left-0 mt-1 w-56 glass-card rounded-xl shadow-lg py-2 z-50 transition-all duration-200 origin-top
          ${isOpen ? 'opacity-100 scale-100 neon-glow' : 'opacity-0 scale-95 pointer-events-none'}`}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href || '#'}
            className={`block px-4 py-2 text-sm transition-colors duration-150 ${
              pathname === item.href
                ? 'text-primary font-medium bg-primary/5'
                : 'text-foreground/80 hover:bg-primary/10 hover:text-primary'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export const HeaderNav: React.FC<{ header: HeaderType }> = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null)
  const pathname = usePathname()
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false

  const handleDropdownHover = (label: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout)
    }
    setOpenDropdown(label)
  }

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null)
    }, 300) // 300ms delay before closing
    setCloseTimeout(timeout)
  }

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout)
      }
    }
  }, [closeTimeout])

  const navItems = [
    { label: 'Home', href: '/' as string },
    {
      label: 'About',
      dropdown: aboutDropdown,
    },
    {
      label: 'Services',
      dropdown: servicesDropdown,
    },
    {
      label: 'Skills',
      dropdown: skillsDropdown,
    },
    { label: 'Portfolio', href: '/portfolio' as string },
    {
      label: 'Insights',
      dropdown: insightsDropdown,
    },
    { label: 'Contact', href: '/contact' as string },
  ]

  // Mobile navigation
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return (
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => {
          if ('href' in item) {
            return (
              <Link
                key={item.label}
                href={item.href || '#'}
                className={`block py-2 transition-colors ${
                  pathname === item.href
                    ? 'text-primary font-medium'
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            )
          } else {
            return (
              <Dropdown
                key={item.label}
                label={item.label}
                items={item.dropdown}
                isOpen={openDropdown === item.label}
                onHover={() => handleDropdownToggle(item.label)}
                onLeave={() => {}}
                isMobile={true}
              />
            )
          }
        })}
        <Link href="/search" className="flex items-center gap-2 py-2 text-primary">
          <SearchIcon className="w-4 h-4" />
          <span>Search</span>
        </Link>
      </nav>
    )
  }

  // Desktop navigation
  return (
    <nav className="flex items-center">
      {navItems.map((item) => {
        if ('href' in item) {
          return (
            <Link
              key={item.label}
              href={item.href || '#'}
              className={`px-3 py-2 transition-colors ${
                pathname === item.href
                  ? 'text-primary font-medium'
                  : 'text-foreground/80 hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          )
        } else {
          return (
            <Dropdown
              key={item.label}
              label={item.label}
              items={item.dropdown}
              isOpen={openDropdown === item.label}
              onHover={() => handleDropdownHover(item.label)}
              onLeave={handleDropdownLeave}
            />
          )
        }
      })}
      <Link
        href="/search"
        className="ml-2 p-2 text-primary rounded-full hover:bg-primary/10 transition-colors hover:scale-110"
        aria-label="Search"
      >
        <SearchIcon className="w-5 h-5" />
      </Link>
    </nav>
  )
}
