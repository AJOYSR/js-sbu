'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function TeamOverview() {
  const stats = [
    { number: '25+', label: 'JavaScript Experts' },
    { number: '100+', label: 'Projects Delivered' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '8+', label: 'Years Experience' },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
              OUR TEAM
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              Meet the JavaScript Experts
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Our team consists of highly skilled developers, designers, and engineers who are
              passionate about creating innovative solutions and delivering exceptional results
            </p>
          </div>

          <div className="glass-card rounded-3xl p-10 shadow-xl relative overflow-hidden border border-white/5 backdrop-blur-md animation-delay-400 animate-fadeIn">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[120px]"></div>

            <div className="relative z-10 text-center">
              <p className="text-foreground/90 text-lg leading-relaxed mb-10">
                We continuously invest in learning and staying updated with the latest technologies
                and industry trends. Our developers are certified in various JavaScript technologies
                and have years of experience working on complex projects across different
                industries.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 animation-delay-500 animate-fadeIn">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="glass-card p-6 rounded-2xl text-center transition-all duration-500 hover:scale-105 border border-white/5"
                  >
                    <div className="text-3xl font-bold mb-2 text-gradient">{stat.number}</div>
                    <p className="text-foreground/80 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/team"
                className="inline-flex items-center text-primary hover:text-primary/80 group relative overflow-hidden px-6 py-3 rounded-full animation-delay-600 animate-fadeIn"
                prefetch={true}
              >
                <span className="relative z-10 text-gradient font-medium">Meet our full team</span>
                <span className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
