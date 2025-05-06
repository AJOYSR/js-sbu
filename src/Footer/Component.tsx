import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import { Linkedin, Github, Mail, Twitter, Instagram, ArrowRight } from 'lucide-react'
import { useTheme } from '@/providers/Theme'

import type { Footer } from '@/payload-types'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { Button } from '@/components/ui/button'

export async function Footer() {
  const footer: Footer = await getCachedGlobal('footer', 1)()
  const navItems = footer?.navItems || []

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services/web-app' },
    { name: 'Portfolio', href: '/portfolio' },
  ]

  const popularServices = [
    'Web Application',
    'Mobile App Development',
    'UI/UX & Product Design',
    'Machine Learning & AI',
  ]

  const techStacks = {
    backend: ['Node.js', 'NestJS', 'Express.js'],
    mobile: ['React Native', 'Flutter'],
    frontend: ['React.js', 'Angular', 'Vue.js', 'Next.js'],
    devops: ['AWS', 'Vercel', 'Docker', 'CI/CD'],
    ml: ['TensorFlow.js', 'Ollama', 'Llama'],
  }

  return (
    <footer className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 text-gray-800 dark:text-white relative overflow-hidden">
      {/* Decorative floating orbs */}
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
      <div className="absolute top-60 right-40 w-40 h-40 rounded-full bg-primary/5 blur-2xl pointer-events-none animate-pulse"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Top Section with Gradient Line */}
        <div className="relative mb-12">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-1.5 w-4/5 bg-gradient-to-r from-primary/30 via-primary to-primary/30 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div className="animate-fadeIn">
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name} className="group flex items-center">
                  <ArrowRight className="h-3 w-0 mr-0 text-primary opacity-0 transition-all duration-300 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100" />
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors duration-300 text-gray-600 dark:text-gray-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services */}
          <div className="animate-fadeIn animation-delay-200">
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
              Popular Services
            </h3>
            <ul className="space-y-3">
              {popularServices.map((service) => (
                <li key={service} className="group flex items-center">
                  <ArrowRight className="h-3 w-0 mr-0 text-primary opacity-0 transition-all duration-300 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100" />
                  <span className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stacks */}
          <div className="animate-fadeIn animation-delay-400">
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
              Technology Stacks
            </h3>
            <div className="space-y-3">
              {Object.entries(techStacks).map(([category, technologies]) => (
                <div key={category} className="bounce-hover">
                  <h4 className="font-medium text-primary capitalize mb-1">{category}:</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Follow Us & Newsletter */}
          <div className="animate-fadeIn animation-delay-400">
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
              Connect With Us
            </h3>
            <div className="flex space-x-5 mb-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-all duration-300 hover:scale-125"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-all duration-300 hover:scale-125"
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-all duration-300 hover:scale-125"
              >
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-all duration-300 hover:scale-125"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>

            <div className="gradient-border p-4 bg-gray-200/50 dark:bg-gray-800/50 shadow-sm dark:shadow-none">
              <h4 className="text-lg font-semibold mb-3 text-primary">Newsletter</h4>
              <form className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
                             focus:outline-none focus:border-primary text-gray-800 dark:text-gray-300 pr-10"
                  />
                  <Mail className="absolute right-3 top-2.5 text-gray-400" size={20} />
                </div>
                <Button type="submit" variant="gradient" className="w-full btn-pop">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
        {/* 
        <div className="border-t border-gray-300 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link
              href="/"
              className="flex items-center hover:opacity-80 transition-all duration-300 hover:scale-110"
            >
              <Logo className="h-8 w-auto" />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeSelector />
            <nav className="flex space-x-4">
              {navItems.map(({ link }, i) => (
                <CMSLink
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
                  key={i}
                  {...link}
                />
              ))}
            </nav>
          </div>
        </div> */}

        {/* Enhanced Bottom Wave SVG with new color */}
        {/* <div className="relative mt-16 h-16 overflow-hidden">
          <svg
            className="absolute bottom-0 w-full h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="hsl(328, 100%, 54%)"
              fillOpacity="0.15"
              d="M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,74.7C672,53,768,75,864,96C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div> */}
      </div>
    </footer>
  )
}
