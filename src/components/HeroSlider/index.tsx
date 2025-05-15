'use client'

import React from 'react'
import { Slide } from '@/payload-types'
import HeroSliderClient from './client'

interface HeroSliderProps {
  slides: Slide[]
}

// Client component that simply passes props to the HeroSliderClient
const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  return <HeroSliderClient slides={slides} />
}

export default HeroSlider
