'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, BookOpen, Star } from 'lucide-react'

interface TutorialHeaderProps {
  title: string
  category: string
  level: string
  duration: string
  lessons: number
  rating: number
  imageUrl: string
}

export default function TutorialHeader({
  title,
  category,
  level,
  duration,
  lessons,
  rating,
  imageUrl,
}: TutorialHeaderProps) {
  return (
    <>
      {/* Back Button */}
      <Link
        href="/tutorials"
        className="inline-flex items-center text-primary hover:text-primary/80 mb-8 animation-delay-200 animate-fadeIn btn-pop hover-scale"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Tutorials
      </Link>

      {/* Tutorial Header */}
      <div className="glass-card rounded-xl shadow-md overflow-hidden mb-12 animation-delay-300 animate-fadeIn">
        <div className="relative h-[400px]">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <span className="btn-gradient px-3 py-1 rounded-full text-sm font-medium">
                {category}
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                {level}
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <div className="flex flex-wrap items-center gap-6">
              <span className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                {duration}
              </span>
              <span className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-primary" />
                {lessons} lessons
              </span>
              <span className="flex items-center text-primary">
                <Star className="w-5 h-5 mr-2 text-primary" />
                {rating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
