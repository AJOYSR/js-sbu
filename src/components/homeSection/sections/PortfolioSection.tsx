import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { Portfolio as IPortfolio, Media } from '@/payload-types'
import AnimatedSectionTitle from '@/components/AnimatedSectionTitle'
import AnimatedCard from '@/components/AnimatedCard'
import FloatingElement from '@/components/FloatingElement'

interface PortfolioSectionProps {
  projects: IPortfolio[]
}

const getImageUrl = (media: Media | number | null | undefined): string => {
  if (typeof media === 'object' && media !== null && 'url' in media && media.url) {
    return media.url
  }
  return '/placeholder.jpg'
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ projects }) => {
  return (
    <section className="py-10 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <FloatingElement
        className="bg-primary/5 left-1/4 -top-32"
        size="lg"
        delay={0.2}
        duration={4.2}
      />
      <FloatingElement
        className="bg-primary/5 right-1/4 -bottom-32"
        size="lg"
        delay={1.5}
        duration={5}
      />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSectionTitle
          badge="FEATURED WORK"
          title="Recent Success Stories"
          description="Explore some of our most impactful projects and see how we help businesses transform their digital presence"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects &&
            projects.map((project, index) => (
              <AnimatedCard key={project.slug} delay={index + 1} className="relative">
                <Link href={`/portfolio/${project.slug}`} className="block h-full">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={getImageUrl(project.image)}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary/90 transition-colors duration-300 drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]">
                        {project.title}
                      </h3>
                      <p className="text-white/95 text-sm line-clamp-2 mb-4 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 bg-card/50 backdrop-blur-sm border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-primary group/link">
                        <span className="font-medium">View Case Study</span>
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedCard>
            ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
