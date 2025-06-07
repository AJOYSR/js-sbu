import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { fetchDocs } from '@/utilities/fetchDocs'
import type {
  Slide,
  Partner,
  Portfolio as IPortfolio,
  Post as IPost,
  Media,
  User,
} from '@/payload-types'
import { ArrowRight } from 'lucide-react'
import HeroSlider from '@/components/HeroSlider'
import AnimatedSectionTitle from '@/components/AnimatedSectionTitle'
import AnimatedCard from '@/components/AnimatedCard'
import FloatingElement from '@/components/FloatingElement'
import { cache } from 'react'

// Import section components
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import PartnersSection from './sections/PartnersSection'
import PortfolioSection from './sections/PortfolioSection'
import BlogSection from './sections/BlogSection'
import CTASection from './sections/CTASection'

const getImageUrl = (media: Media | number | null | undefined): string => {
  if (typeof media === 'object' && media !== null && 'url' in media && media.url) {
    return media.url
  }
  return '/placeholder.jpg'
}

// Cache the fetch functions
const fetchSlides = cache(async () => {
  try {
    return (await fetchDocs('slides', {
      limit: 5,
      sort: 'order',
    })) as Slide[]
  } catch (error) {
    console.error('Error fetching slides:', error)
    return []
  }
})

const fetchPartners = cache(async () => {
  try {
    return (await fetchDocs('partners', {
      limit: 8,
      sort: 'order',
      where: {
        featured: {
          equals: true,
        },
      },
    })) as Partner[]
  } catch (error) {
    console.error('Error fetching partners:', error)
    return []
  }
})

const fetchProjects = cache(async () => {
  try {
    return (await fetchDocs('portfolio', {
      limit: 3,
      sort: '-publishedAt',
      where: {
        _status: {
          equals: 'published',
        },
      },
    })) as IPortfolio[]
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
})

const fetchPosts = cache(async () => {
  try {
    return (await fetchDocs('posts', {
      limit: 3,
      sort: '-publishedAt',
      where: {
        _status: {
          equals: 'published',
        },
      },
    })) as IPost[]
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
})

const HomeSection = async () => {
  // Fetch all data in parallel
  const [slides, partners, projects, posts] = await Promise.all([
    fetchSlides(),
    fetchPartners(),
    fetchProjects(),
    fetchPosts(),
  ])

  return (
    <div className="relative z-10">
      <HeroSection slides={slides} />
      <AboutSection />
      <PartnersSection partners={partners} />
      <PortfolioSection projects={projects} />
      <BlogSection posts={posts} />
      <CTASection />
    </div>
  )
}

export default HomeSection
