'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function TechnologiesSection() {
  const technologies = [
    {
      icon: '⚛️',
      title: 'React',
      description:
        'Building responsive, dynamic user interfaces with the leading JavaScript library for frontend development',
      animation: 'animation-delay-400',
    },
    {
      icon: '🅰️',
      title: 'Angular',
      description:
        'Creating robust, enterprise-grade web applications with this comprehensive framework',
      animation: 'animation-delay-500',
    },
    {
      icon: '📱',
      title: 'React Native',
      description:
        'Developing cross-platform mobile apps that deliver native performance and seamless user experience',
      animation: 'animation-delay-600',
    },
    {
      icon: '🔄',
      title: 'Node.js',
      description:
        'Building scalable server-side applications and APIs using JavaScript for end-to-end development',
      animation: 'animation-delay-700',
    },
    {
      icon: '🛒',
      title: 'Shopify',
      description:
        'Customizing e-commerce solutions with tailored storefronts and optimized shopping experiences',
      animation: 'animation-delay-800',
    },
    {
      icon: '💎',
      title: 'Flutter',
      description:
        'Creating beautiful, natively compiled mobile applications from a single codebase',
      animation: 'animation-delay-900',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
            OUR TECH STACK
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
            Cutting-Edge JavaScript Technologies
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
            We leverage the latest JavaScript frameworks and tools to build high-performance,
            scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech) => (
            <div
              key={tech.title}
              className={`glass-card rounded-2xl overflow-hidden card-hover ${tech.animation} animate-fadeIn border border-white/5`}
            >
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px]"></div>
                <div className="w-16 h-16 flex items-center justify-center mb-6 bg-primary/10 rounded-2xl text-3xl">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gradient">{tech.title}</h3>
                <p className="text-foreground/80">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animation-delay-1000 animate-fadeIn">
          <Link
            href="/skills"
            className="inline-flex items-center text-primary hover:text-primary/80 group relative overflow-hidden px-6 py-3 rounded-full"
            prefetch={false}
          >
            <span className="relative z-10 text-gradient font-medium">
              Explore our full technology stack
            </span>
            <span className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
