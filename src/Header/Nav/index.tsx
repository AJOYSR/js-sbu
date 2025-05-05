'use client'

import React, { useState, useEffect } from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon, ChevronDown } from 'lucide-react'

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
}> = ({ items, label, isOpen, onHover, onLeave }) => {
  return (
    <div className="relative" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <button className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-primary">
        {label}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-1 z-50 transition-all duration-200 origin-top
          ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-150"
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

  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout)
      }
    }
  }, [closeTimeout])

  return (
    <nav className="flex gap-6 items-center">
      <Link href="/" className="px-3 py-2 text-gray-700 hover:text-primary">
        Home
      </Link>

      <Dropdown
        label="About"
        items={aboutDropdown}
        isOpen={openDropdown === 'About'}
        onHover={() => handleDropdownHover('About')}
        onLeave={handleDropdownLeave}
      />
      <Dropdown
        label="Services"
        items={servicesDropdown}
        isOpen={openDropdown === 'Services'}
        onHover={() => handleDropdownHover('Services')}
        onLeave={handleDropdownLeave}
      />
      <Dropdown
        label="Skills"
        items={skillsDropdown}
        isOpen={openDropdown === 'Skills'}
        onHover={() => handleDropdownHover('Skills')}
        onLeave={handleDropdownLeave}
      />

      <Link href="/portfolio" className="px-3 py-2 text-gray-700 hover:text-primary">
        Portfolio
      </Link>

      <Dropdown
        label="Insights"
        items={insightsDropdown}
        isOpen={openDropdown === 'Insights'}
        onHover={() => handleDropdownHover('Insights')}
        onLeave={handleDropdownLeave}
      />

      <Link href="/contact" className="px-3 py-2 text-gray-700 hover:text-primary">
        Contact
      </Link>

      <Link href="/search" className="ml-2">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link>
    </nav>
  )
}
