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
  const slideInterval = 5000 // Slide changes every 5 seconds

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
  }, [isPlaying, nextSlide])

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
  }, [isPlaying, nextSlide, isClient])

  // Reset timer when currentSlide changes
  useEffect(() => {
    if (isClient) {
      resetTimer()
    }
  }, [currentSlide, resetTimer, isClient])

  // For empty slides
  if (!slides || slides.length === 0) {
    return (
      <div className="h-[600px] md:h-[700px] flex items-center justify-center bg-gradient-to-b from-gray-900 to-background">
        <div className="text-center px-4 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
            Innovative Digital Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Building tomorrow&apos;s technology today
          </p>
          <Link
            href="/services"
            className="btn-gradient text-white px-8 py-3 rounded-lg shadow-md hover-scale btn-pop inline-flex items-center"
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
      <div className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/30"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
              {slides[0]?.title || 'Welcome'}
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
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
      className="relative h-[600px] md:h-[700px] overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero Image Slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* Slides */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        {slides.map((slide, index) => (
          <div
            key={slide.id || index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
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
                className={`object-cover transition-transform duration-10000 ease-out scale-105 ${
                  index === currentSlide ? 'animate-slowZoom' : ''
                } ${slide.gradientOverlay ? 'opacity-80' : ''}`}
                priority={index === 0}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/30 backdrop-blur-sm"></div>

            {/* Slide content */}
            <div className="container mx-auto px-4 h-full flex items-center relative z-10">
              <div
                className={`max-w-3xl transition-all duration-1000 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
                  {slide.title || `Slide ${index + 1}`}
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  {slide.description || 'Building innovative solutions for tomorrow'}
                </p>
                {slide.ctaButton?.label && (
                  <Link
                    href={slide.ctaButton?.link || '/services'}
                    className="btn-gradient text-white px-8 py-3 rounded-lg shadow-md hover-scale btn-pop inline-flex items-center"
                  >
                    {slide.ctaButton.label}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Navigation dots */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-primary scale-125'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === currentSlide ? 'true' : 'false'}
                />
              ))}
            </div>

            {/* Control buttons */}
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-background/30 backdrop-blur-sm hover:bg-background/50 transition-colors text-white"
                aria-label="Previous slide"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                onClick={togglePlayPause}
                className="p-2 rounded-full bg-background/30 backdrop-blur-sm hover:bg-background/50 transition-colors text-white"
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>

              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-background/30 backdrop-blur-sm hover:bg-background/50 transition-colors text-white"
                aria-label="Next slide"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-32 left-1/4 w-8 h-8 bg-primary/30 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute bottom-48 right-1/4 w-6 h-6 bg-primary/20 rounded-full blur-sm animate-pulse"></div>
    </div>
  )
}

export default HeroSliderClient
