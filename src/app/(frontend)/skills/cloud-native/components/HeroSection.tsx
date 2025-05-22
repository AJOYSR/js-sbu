'use client'

import React from 'react'
import Link from 'next/link'
import HeroImage from '@/components/HeroImage'

export default function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background image with Next.js Image for optimization */}
      <HeroImage
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5AITD8A3R8xMq7_xsDD6CvF6NruQDz7rzNg&s"
        alt="Cloud Native Applications"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAFAAgDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+OD4bfDnxb8VPE0/hTwRpVvr2v2+i6xrUWnXWp6ZpMi6bo9hNqV8Dc6xd2VnvitIZJFjMnmSsqxQxyzSRxP8AUZjmWDy3DRxOKlONOVWnRvThKo+erJQhpBNq8mkrtJXbaSPz3Lsvx2Z4qeEwUITqQozrNU5unFulBTm+acoxVoxbfLFuTSsm7H//2Q=="
        brightness={0.6}
        quality={80}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30 z-10"></div>

      {/* Background decorative elements */}
      <div className="absolute -top-32 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px] z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] z-10"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6 animate-fadeIn backdrop-blur-sm">
            CLOUD EXPERTISE
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animation-delay-200 animate-fadeIn">
            Cloud Native <span className="text-gradient">Applications</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
            Building scalable, resilient applications designed specifically for cloud environments
            using modern architectures and best practices
          </p>
          <div className="animation-delay-400 animate-fadeIn">
            <Link
              href="/contact"
              className="btn-gradient text-white px-8 py-3 rounded-xl shadow-lg hover-scale btn-pop"
            >
              Start Your Cloud Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
