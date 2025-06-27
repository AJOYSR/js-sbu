'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react'
import { Slide } from '@/payload-types'

interface HeroSliderProps {
  slides: Slide[]
}

const HeroSliderClient: React.FC<HeroSliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [isClient, setIsClient] = useState(false)
  const sliderTimerRef = useRef<NodeJS.Timeout | null>(null)
  const slideInterval = 6000 // Extended to 6 seconds for better reading time

  // Make sure we're on client side before initializing
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Function to go to the next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [slides.length])

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  // Function to go to a specific slide
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    resetTimer()
  }

  // Reset the timer when user interaction occurs
  const resetTimer = useCallback(() => {
    if (sliderTimerRef.current) {
      clearInterval(sliderTimerRef.current)
    }

    if (isPlaying) {
      sliderTimerRef.current = setInterval(() => {
        nextSlide()
      }, slideInterval)
    }
  }, [isPlaying, nextSlide, slideInterval])

  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  // Handle touch events for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return

    const touchEnd = e.touches[0].clientX
    const diff = touchStart - touchEnd

    // If swipe is significant enough (more than 50px)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide() // Swipe left, go to next slide
      } else {
        prevSlide() // Swipe right, go to previous slide
      }
      setTouchStart(null)
    }
  }

  // Setup automatic sliding
  useEffect(() => {
    if (isClient) {
      if (isPlaying) {
        sliderTimerRef.current = setInterval(() => {
          nextSlide()
        }, slideInterval)
      } else if (sliderTimerRef.current) {
        clearInterval(sliderTimerRef.current)
      }

      return () => {
        if (sliderTimerRef.current) {
          clearInterval(sliderTimerRef.current)
        }
      }
    }
  }, [isPlaying, nextSlide, isClient, slideInterval])

  // Reset timer when currentSlide changes
  useEffect(() => {
    if (isClient) {
      resetTimer()
    }
  }, [currentSlide, resetTimer, isClient])

  // For empty slides
  if (!slides || slides.length === 0) {
    return (
      <div className="h-[600px] md:h-[700px] flex items-center justify-center bg-gradient-to-b from-neutral-900 to-background">
        <div className="text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
            Innovative Digital Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/80 leading-relaxed">
            Building tomorrow&apos;s technology today
          </p>
          <Link
            href="/services"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center text-lg"
          >
            Explore Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    )
  }

  // For server rendering or initial client load before hydration
  if (!isClient) {
    // Simple placeholder during SSR
    return (
      <div className="relative h-[600px] md:h-[700px] overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 to-neutral-900/40"></div>
        <div className="container mx-auto px-6 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              {slides[0]?.title || 'Welcome'}
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/80 leading-relaxed">
              {slides[0]?.description || 'Loading amazing content...'}
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Client-side rendering (full interactive slider)
  return (
    <div
      className="relative h-[600px] md:h-[700px] overflow-hidden bg-neutral-950"
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero Image Slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id || index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide ? 'translate-x-0 z-10' : 'translate-x-full z-0'
            }`}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${slides.length}: ${slide.title}`}
            aria-hidden={index !== currentSlide}
          >
            {slide.backgroundImage && (
              <Image
                src={
                  typeof slide.backgroundImage === 'object' && slide.backgroundImage?.url
                    ? slide.backgroundImage.url
                    : '/placeholder.jpg'
                }
                alt={slide.title || `Slide ${index + 1}`}
                fill
                className={`object-cover ${
                  index === currentSlide ? 'animate-kenburns' : ''
                } ${slide.gradientOverlay ? 'opacity-90' : ''}`}
                priority={index === 0}
                quality={90}
              />
            )}

            {/* Subtle overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 via-neutral-900/50 to-transparent"></div>

            {/* Slide content */}
            <div className="container mx-auto px-6 h-full flex items-center relative z-10">
              <div
                className={`max-w-3xl transition-all duration-1000 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  {slide.title || `Slide ${index + 1}`}
                </h2>
                <p className="text-xl md:text-2xl mb-10 text-white/80 leading-relaxed max-w-2xl">
                  {slide.description || 'Building innovative solutions for tomorrow'}
                </p>
                {slide.ctaButton?.label && (
                  <Link
                    href={slide.ctaButton?.link || '/services'}
                    className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full transition-all duration-300 inline-flex items-center text-lg font-semibold shadow-lg"
                  >
                    {slide.ctaButton.label}
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-12 left-0 right-0 z-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center md:justify-between">
            {/* Slide counter */}
            <div className="hidden md:block text-white/80 font-medium text-lg">
              <span className="text-primary font-bold">{currentSlide + 1}</span>
              <span className="mx-2">/</span>
              <span>{slides.length}</span>
            </div>

            {/* Control buttons */}
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full p-2 shadow-xl">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                aria-label="Previous slide"
              >
                <ArrowLeft size={24} />
              </button>

              <button
                onClick={togglePlayPause}
                className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>

              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                aria-label="Next slide"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSliderClient
