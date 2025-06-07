import React from 'react'
import HeroSlider from '@/components/HeroSlider'
import type { Slide } from '@/payload-types'

interface HeroSectionProps {
  slides: Slide[]
}

const HeroSection: React.FC<HeroSectionProps> = ({ slides }) => {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-background text-white">
      <HeroSlider slides={slides} />
    </section>
  )
}

export default HeroSection
