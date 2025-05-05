'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Page } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { useHeaderTheme } from '@/providers/HeaderTheme'

export const HeroSlider: React.FC<{ slides: any[] }> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [setHeaderTheme, slides.length])

  return (
    <section className="relative h-[600px] w-full flex items-center justify-center overflow-hidden mt-20">
      {/* Background with gradient and image */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out rounded-lg mx-auto max-w-7xl px-4
            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          {slide.backgroundImage?.url && (
            <div className="absolute inset-0 rounded-lg">
              <Image
                src={slide.backgroundImage.url}
                alt={slide.title}
                fill
                className="object-cover object-center rounded-lg"
                sizes="(max-width: 1280px) 100vw, 1280px"
                quality={90}
                priority={index === 0}
              />
            </div>
          )}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${slide.gradientOverlay} opacity-80 rounded-lg`}
          />
        </div>
      ))}
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform
                ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ position: index === currentSlide ? 'relative' : 'absolute' }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-fadeIn animation-delay-200">
                {slide.description}
              </p>
              {slide.ctaButton?.label && (
                <Link
                  href={slide.ctaButton.link || '#'}
                  className="inline-flex items-center px-8 py-3 rounded-full text-lg font-semibold 
                           transition-transform duration-300 transform hover:scale-105 bg-white 
                           text-gray-900 hover:bg-opacity-90 animate-fadeIn animation-delay-400"
                >
                  {slide.ctaButton.label}
                </Link>
              )}
            </div>
          ))}

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 
                  ${index === currentSlide ? 'bg-white scale-100' : 'bg-white/50 scale-75'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-black/20 rounded-lg" /> {/* Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
    </section>
  )
}
