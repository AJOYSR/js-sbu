import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import {
  Linkedin,
  Github,
  Mail,
  Twitter,
  Instagram,
  ArrowRight,
  Heart,
  Shield,
  ExternalLink,
} from 'lucide-react'
import { useTheme } from '@/providers/Theme'

import type { Footer } from '@/payload-types'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { Button } from '@/components/ui/button'
import { FormBlock } from '@/blocks/Form/Component'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Form } from '@payloadcms/plugin-form-builder/types'
import { NewsletterFormClient } from './NewsletterFormClient'

// Use a constant for the copyright year to avoid hydration issues
const CURRENT_YEAR = new Date().getFullYear()

export async function Footer() {
  const footer: Footer = await getCachedGlobal('footer', 1)()
  const navItems = footer?.navItems || []

  // Fetch the newsletter form from Payload CMS
  const payload = await getPayload({ config: configPromise })

  // Find the newsletter form by title
  const formQuery = await payload.find({
    collection: 'forms',
    where: {
      title: {
        equals: 'NewsLetter',
      },
    },
  })

  // Get the form or null if not found
  const newsletterForm = formQuery.docs.length > 0 ? formQuery.docs[0] : null
  console.log('🚀 ~ Footer ~ newsletterForm:', newsletterForm)

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services/web-app' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
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
      {/* Decorative floating orbs - updated with more vibrant effects */}
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-72 h-72 rounded-full bg-primary/15 blur-3xl pointer-events-none"></div>
      <div className="absolute top-60 right-40 w-40 h-40 rounded-full bg-pink-400/10 blur-2xl pointer-events-none animate-pulse"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Top Section with Gradient Line */}
        <div className="relative mb-12">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-2 w-4/5 bg-gradient-to-r from-primary/30 via-primary to-primary/30 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info & Quick Links */}
          <div className="animate-fadeIn">
            <div className="mb-6">
              <Link href="/" className="inline-block mb-4 hover:scale-105 transition-transform">
                <Logo className="h-10 w-auto" />
              </Link>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Creating innovative digital solutions with a focus on user experience and
                cutting-edge technology.
              </p>
            </div>

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

            {/* Trust Badges - Added for poppy visual enhancement */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
                Trusted By
              </h4>
              <div className="flex items-center space-x-4">
                <div className="bg-white/90 dark:bg-gray-800/90 p-2 rounded-lg shadow-sm">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div className="bg-white/90 dark:bg-gray-800/90 p-2 rounded-lg shadow-sm">
                  <Heart className="h-5 w-5 text-pink-500" />
                </div>
                <div className="bg-white/90 dark:bg-gray-800/90 p-2 rounded-lg shadow-sm">
                  <ExternalLink className="h-5 w-5 text-blue-500" />
                </div>
              </div>
            </div>
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
                href="https://www.linkedin.com/company/brain-station-23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-all duration-300 hover:scale-125"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/BrainStation-23/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-all duration-300 hover:scale-125"
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://x.com/BrainStation23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-all duration-300 hover:scale-125"
              >
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.instagram.com/brainstation23ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-all duration-300 hover:scale-125"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>

            <div className="gradient-border p-4 bg-white/10 dark:bg-gray-800/50 shadow-sm backdrop-blur-sm">
              <h4 className="text-lg font-semibold mb-3 text-white">Newsletter</h4>
              {newsletterForm ? (
                <NewsletterFormClient formId={String(newsletterForm.id)} />
              ) : (
                /* Fallback form if no form is found in CMS */
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
                  <Button type="submit" variant="gradient" className="w-full btn-pop border-2">
                    Subscribe
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Copyright & Bottom Links - New */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-600 dark:text-gray-400">
                Copyright © {CURRENT_YEAR} JS SBU. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <Link
                href="/privacy-policy"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <div className="flex items-center ml-2">
                <span className="text-gray-600 dark:text-gray-400 mr-2">Theme:</span>
                <ThemeSelector />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Wave SVG with vibrant colors */}
        <div className="relative h-16 overflow-hidden">
          <svg
            className="absolute bottom-0 w-full h-24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="hsl(212, 75%, 40%)"
              fillOpacity="0.1"
              d="M0,224L40,213.3C80,203,160,181,240,181.3C320,181,400,203,480,218.7C560,235,640,245,720,229.3C800,213,880,171,960,170.7C1040,171,1120,213,1200,218.7C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
            <path
              fill="hsl(212, 75%, 40%)"
              fillOpacity="0.05"
              d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,224C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </footer>
  )
}
