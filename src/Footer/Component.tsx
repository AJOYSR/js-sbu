import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import { Linkedin, Github, Mail } from 'lucide-react'

import type { Footer } from '@/payload-types'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footer: Footer = await getCachedGlobal('footer', 1)()
  const navItems = footer?.navItems || []

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
  ]

  const popularServices = ['Web Application', 'Mobile App Development']

  const techStacks = {
    backend: ['Node.js', 'NestJS', 'Express.js'],
    mobile: ['React Native', 'Flutter'],
    frontend: ['React.js', 'Angular', 'Vue.js', 'Next.js'],
    devops: ['AWS', 'Vercel', 'Docker', 'CI/CD'],
    ml: ['TensorFlow.js', 'Ollama', 'Llama'],
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div className="animate-fadeIn">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="hover:text-blue-400 transition-colors duration-300 text-gray-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services */}
          <div className="animate-fadeIn animation-delay-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Popular Services</h3>
            <ul className="space-y-2">
              {popularServices.map((service) => (
                <li key={service} className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stacks */}
          <div className="animate-fadeIn animation-delay-400">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Technology Stacks</h3>
            <div className="space-y-3">
              {Object.entries(techStacks).map(([category, technologies]) => (
                <div key={category}>
                  <h4 className="font-medium text-gray-400 capitalize mb-1">{category}:</h4>
                  <p className="text-sm text-gray-300">{technologies.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Follow Us & Newsletter */}
          <div className="animate-fadeIn animation-delay-400">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3 text-blue-400">Newsletter</h4>
              <form className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 
                             focus:outline-none focus:border-blue-400 text-gray-300 pr-10"
                  />
                  <Mail className="absolute right-3 top-2.5 text-gray-400" size={20} />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 
                           rounded-lg transition-colors duration-300 transform hover:scale-[1.02]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <Logo className="h-8 w-auto" />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeSelector />
            <nav className="flex space-x-4">
              {navItems.map(({ link }, i) => (
                <CMSLink
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  key={i}
                  {...link}
                />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
