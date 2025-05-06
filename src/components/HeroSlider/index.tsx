import React from 'react'
import { Slide } from '@/payload-types'
import HeroSliderClient from './client'

interface HeroSliderProps {
  slides: Slide[]
}

// Server component that simply passes props to the client component
const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  return <HeroSliderClient slides={slides} />
}

export default HeroSlider
