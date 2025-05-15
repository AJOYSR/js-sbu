'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
  Linkedin,
  Github,
  Mail,
  Twitter,
  Instagram,
  ChevronRight,
  MapPin,
  Phone,
} from 'lucide-react'

import { Logo } from '@/components/Logo/Logo'
import { Button } from '@/components/ui/button'
import { NewsletterFormClient } from './NewsletterFormClient'

// Use a constant for the copyright year to avoid hydration issues
const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  const [newsletterFormId, setNewsletterFormId] = useState<string | null>(null)

  useEffect(() => {
    // Fetch newsletter form ID on client side
    const fetchNewsletterForm = async () => {
      try {
        const response = await fetch('/api/forms/newsletter')
        if (response.ok) {
          const data = await response.json()
          if (data.formId) {
            setNewsletterFormId(data.formId)
          }
        }
      } catch (error) {
        console.error('Failed to fetch newsletter form:', error)
      }
    }

    fetchNewsletterForm()
  }, [])

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services/web-app' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ]

  const popularServices = [
    { name: 'Web Application', href: '/services/web-app' },
    { name: 'Mobile App Development', href: '/services/mobile-app' },
    { name: 'UI/UX & Product Design', href: '/services/ui-ux' },
    { name: 'Machine Learning & AI', href: '/services/ml-ai' },
    { name: 'Cloud Native Solutions', href: '/skills/cloud-native' },
  ]

  return (
    <footer className="bg-gradient-to-b from-secondary/90 to-secondary/70 dark:from-background dark:to-background/90 text-foreground relative overflow-hidden">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:16px_16px] pointer-events-none"></div>

      {/* Subtle glass morphism effect */}
      <div className="absolute top-0 left-0 w-full h-full backdrop-blur-[100px] pointer-events-none"></div>

      {/* Decorative floating elements */}
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 right-10 w-72 h-72 rounded-full bg-primary/8 blur-3xl pointer-events-none"></div>
      <div className="absolute top-60 right-40 w-40 h-40 rounded-full bg-pink-400/5 blur-2xl pointer-events-none"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Top gradient divider */}
        <div className="relative mb-12">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-1 w-4/5 bg-gradient-to-r from-transparent via-primary/40 to-transparent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info & Contact - 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <Link href="/" className="inline-block mb-5 hover:opacity-90 transition-opacity">
                <Logo className="h-10 w-auto" />
              </Link>
              <p className="text-muted-foreground dark:text-muted-foreground/90 text-sm leading-relaxed">
                Creating innovative digital solutions with a focus on user experience and
                cutting-edge technology. We transform ideas into powerful digital experiences.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 pt-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground dark:text-muted-foreground/90">
                  8th Floor, 2 Bir Uttam AK Khandakar Road, Mohakhali C/A, Dhaka 1212, Bangladesh
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:sales@brainstation-23.com"
                  className="text-sm text-muted-foreground dark:text-muted-foreground/90 hover:text-primary transition-colors"
                >
                  sales@brainstation-23.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+88-02-222290728"
                  className="text-sm text-muted-foreground dark:text-muted-foreground/90 hover:text-primary transition-colors"
                >
                  +88-02-222290728
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links - 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-medium mb-5 relative">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-8 bg-primary"></span>
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name} className="group">
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground dark:text-muted-foreground/90 hover:text-primary transition-colors duration-200 flex items-center"
                  >
                    <ChevronRight className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-medium mb-5 relative">
              <span className="relative z-10">Our Services</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-8 bg-primary"></span>
            </h3>
            <ul className="space-y-2.5">
              {popularServices.map((service) => (
                <li key={service.name} className="group">
                  <Link
                    href={service?.href || ''}
                    className="text-sm text-muted-foreground dark:text-muted-foreground/90 hover:text-primary transition-colors duration-200 flex items-center"
                  >
                    <ChevronRight className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Connect - 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-medium mb-5 relative">
              <span className="relative z-10">Stay Updated</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-8 bg-primary"></span>
            </h3>
            <div className="bg-background/40 dark:bg-card/20 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-background/50 dark:border-border/10 mb-5">
              <p className="text-sm text-muted-foreground dark:text-muted-foreground/90 mb-3">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              {newsletterFormId ? (
                <NewsletterFormClient formId={newsletterFormId} />
              ) : (
                /* Fallback form if no form is found in CMS */
                <form className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-lg bg-background dark:bg-background/50 border border-input dark:border-input/50 
                             focus:outline-none focus:border-primary text-foreground dark:text-foreground pr-10 text-sm"
                    />
                    <Mail className="absolute right-3 top-2.5 text-muted-foreground/70" size={18} />
                  </div>
                  <Button type="submit" variant="gradient" className="w-full text-sm py-1.5 h-auto">
                    Subscribe
                  </Button>
                </form>
              )}
            </div>

            <h3 className="text-base font-medium mb-5 relative">
              <span className="relative z-10">Connect with us</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-8 bg-primary"></span>
            </h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/company/brain-station-23"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/80 dark:bg-card/30 p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-background dark:hover:bg-card/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://github.com/BrainStation-23/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/80 dark:bg-card/30 p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-background dark:hover:bg-card/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://x.com/BrainStation23"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/80 dark:bg-card/30 p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-background dark:hover:bg-card/50 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://www.instagram.com/brainstation23ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/80 dark:bg-card/30 p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-background dark:hover:bg-card/50 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Bottom Links */}
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-muted-foreground dark:text-muted-foreground/80 mb-4 md:mb-0">
              © {CURRENT_YEAR} JS-SBU. All rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              <Link
                href="/privacy-policy"
                className="text-muted-foreground dark:text-muted-foreground/80 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground dark:text-muted-foreground/80 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
