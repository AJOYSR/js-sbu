'use client'

import React, { useState, useEffect } from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import {
  SearchIcon,
  ChevronDown,
  Home,
  Users,
  Briefcase,
  Cpu,
  Image,
  BookOpen,
  Mail,
  Globe,
} from 'lucide-react'
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

// Map icons to navigation items
const navIcons = {
  Home: Home,
  About: Users,
  Services: Briefcase,
  Skills: Cpu,
  Portfolio: Image,
  Insights: BookOpen,
  Contact: Mail,
}

const Dropdown: React.FC<{
  items: Array<{ label: string; href: string }>
  label: string
  isOpen: boolean
  onHover: () => void
  onLeave: () => void
  isMobile?: boolean
  onMobileNavClick?: () => void
}> = ({ items, label, isOpen, onHover, onLeave, isMobile = false, onMobileNavClick }) => {
  const pathname = usePathname()

  const IconComponent = navIcons[label as keyof typeof navIcons] || null

  if (isMobile) {
    return (
      <div className="py-2">
        <div
          className="font-medium text-foreground mb-2 flex items-center justify-between cursor-pointer"
          onClick={onHover}
        >
          <div className="flex items-center gap-2">
            {IconComponent && <IconComponent className="w-4 h-4 text-primary" />}
            {label}
          </div>
          <ChevronDown
            className={`w-4 h-4 text-primary transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
        {isOpen && (
          <div className="pl-4 space-y-2 border-l-2 border-primary/30 animate-fadeIn">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <Link
                  href={item.href || '#'}
                  onClick={onMobileNavClick}
                  className={`block py-2 px-2 text-sm transition-colors duration-150 rounded-md ${
                    pathname === item.href
                      ? 'text-primary font-medium bg-primary/20'
                      : 'text-foreground hover:text-primary hover:bg-primary/15'
                  }`}
                >
                  {item.label}
                </Link>
                {index < items.length - 1 && <div className="h-px bg-primary/30 mx-2"></div>}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative group" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <button className="flex items-center gap-1.5 px-3 py-2 text-foreground/90 hover:text-primary transition-all font-medium group-hover:text-primary hover-scale">
        {IconComponent && <IconComponent className="w-4 h-4 opacity-75 group-hover:opacity-100" />}
        {label}
        <ChevronDown
          className={`w-3.5 h-3.5 text-primary/70 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`absolute left-0 mt-1.5 w-64 bg-card rounded-xl shadow-lg py-2 z-50 transition-all duration-300 origin-top-left border border-white/10 
          ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
      >
        <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto mb-2"></div>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Link
              href={item.href || '#'}
              onClick={onMobileNavClick}
              className={`block px-4 py-2.5 text-sm transition-all duration-150 mx-1 rounded-md ${
                pathname === item.href
                  ? 'text-gradient font-medium bg-primary/5'
                  : 'text-foreground/80 hover:bg-primary/10 hover:text-primary hover:translate-x-1'
              }`}
            >
              {item.label}
            </Link>
            {index < items.length - 1 && (
              <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mx-4 my-1"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export const HeaderNav: React.FC<{
  header: HeaderType
  onMobileNavClick?: () => void
}> = ({ onMobileNavClick, header }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()
  // Handle screen size detection safely with useEffect
  useEffect(() => {
    setIsClient(true)
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Set the initial value
    checkIsMobile()

    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile)

    // Clean up
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const handleDropdownHover = (label: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout)
    }
    setOpenDropdown(label)
  }

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null)
    }, 200) // Reduced delay for better responsiveness
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

  // Only render mobile/desktop content after client-side hydration
  if (!isClient) {
    return null // or a loading state if preferred
  }

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

  // Render mobile navigation
  if (isMobile) {
    return (
      <nav className="flex flex-col space-y-1">
        {navItems.map((item, index) => {
          if ('href' in item) {
            const IconComponent = navIcons[item.label as keyof typeof navIcons] || null

            return (
              <React.Fragment key={index}>
                <Link
                  href={item.href || '#'}
                  onClick={onMobileNavClick}
                  className={`flex items-center gap-2 py-2 px-2 transition-colors rounded-md hover-scale ${
                    pathname === item.href
                      ? 'text-gradient font-medium bg-primary/10'
                      : 'text-foreground hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  {IconComponent && <IconComponent className="w-4 h-4 text-primary" />}
                  {item.label}
                </Link>
                {index < navItems.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mx-2 my-1"></div>
                )}
              </React.Fragment>
            )
          } else {
            return (
              <React.Fragment key={item.label}>
                <Dropdown
                  label={item.label}
                  items={item.dropdown}
                  isOpen={openDropdown === item.label}
                  onHover={() => handleDropdownToggle(item.label)}
                  onLeave={() => {}}
                  isMobile={true}
                  onMobileNavClick={onMobileNavClick}
                />
                {index < navItems.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mx-2 my-1"></div>
                )}
              </React.Fragment>
            )
          }
        })}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mx-2 my-1"></div>
        <Link
          href="/search"
          className="flex items-center gap-2 py-2 px-2 text-primary hover:bg-primary/10 rounded-md transition-colors hover-scale"
        >
          <SearchIcon className="w-4 h-4" />
          <span>Search</span>
        </Link>
      </nav>
    )
  }

  // Desktop navigation
  return (
    <nav className="flex items-center">
      {navItems.map((item, index) => {
        if ('href' in item) {
          const IconComponent = navIcons[item.label as keyof typeof navIcons] || null

          return (
            <Link
              key={index}
              href={item.href || '#'}
              className={`px-3 py-2 transition-all hover-scale flex items-center gap-1.5 ${
                pathname === item.href
                  ? 'text-gradient font-medium'
                  : 'text-foreground/80 hover:text-primary'
              }`}
            >
              {IconComponent && <IconComponent className="w-4 h-4 opacity-75" />}
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
              onMobileNavClick={onMobileNavClick}
            />
          )
        }
      })}
      <Link
        href="/search"
        className="ml-2 p-2.5 text-white rounded-full btn-gradient hover-scale btn-pop transition-all shadow-sm"
        aria-label="Search"
      >
        <SearchIcon className="w-4 h-4" />
      </Link>
    </nav>
  )
}
