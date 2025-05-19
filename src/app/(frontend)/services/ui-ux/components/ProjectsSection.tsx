'use client'

import React from 'react'
import RelatedProjects from '@/components/RelatedProjects'

export default function ProjectsSection({ projects }) {
  if (!projects || projects.length === 0) return null

  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
            PORTFOLIO
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
            Our Recent Work
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
            Check out some of our successful UI/UX design projects
          </p>
        </div>

        <div className="animation-delay-400 animate-fadeIn">
          <RelatedProjects projects={projects} />
        </div>
      </div>
    </section>
  )
}
