import RelatedProjects from '@/components/RelatedProjects'
import { getRecentProjects } from '@/utilities/getRecentProjects'
import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import HeroSection from './components/HeroSection'
import TechnologiesSection from './components/TechnologiesSection'
import ServicesSection from './components/ServicesSection'
import ProcessSection from './components/ProcessSection'
import ProjectsSection from './components/ProjectsSection'
import CTASection from './components/CTASection'

import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Web Application | JS SBU',
  description: 'Web Application JS SBU website',
}

export default async function WebAppPage() {
  const projects = await getRecentProjects('web-application')
  return (
    <div className="min-h-screen animate-fadeIn">
      {/* Hero Section with Background */}
      {/* <HeroSection /> */}

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Related Projects */}
      <ProjectsSection projects={projects} />

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
