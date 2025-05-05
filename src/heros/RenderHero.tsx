'use client'

import React, { useEffect, useState } from 'react'

import type { Page } from '@/payload-types'

import { HighImpactHero } from '@/heros/HighImpact'
import { LowImpactHero } from '@/heros/LowImpact'
import { MediumImpactHero } from '@/heros/MediumImpact'
import { HeroSlider } from '@/heros/HeroSlider'

type HeroProps = Page['hero']

const heroes = {
  heroSlider: HeroSlider,
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
}

export const RenderHero: React.FC<HeroProps> = (props) => {
  const { type } = props || {}
  const [slides, setSlides] = useState<any[]>([])

  useEffect(() => {
    const fetchSlides = async () => {
      if (type === 'heroSlider') {
        try {
          const response = await fetch('/api/slides?sort=order')
          const data = await response.json()
          if (data?.docs) {
            setSlides(data.docs)
          }
        } catch (error) {
          console.error('Error fetching slides:', error)
        }
      }
    }

    fetchSlides()
  }, [type])

  if (!type || type === 'none') return null

  if (type === 'heroSlider') {
    return <HeroSlider slides={slides} />
  }

  const HeroToRender = heroes[type]
  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
