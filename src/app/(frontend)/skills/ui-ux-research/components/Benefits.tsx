'use client'

import React from 'react'

const uiuxBenefits = [
  {
    title: 'Increased Conversion',
    description: 'Well-designed interfaces drive higher conversion rates and user engagement',
    icon: '📈',
  },
  {
    title: 'Improved Retention',
    description: 'Intuitive experiences reduce user frustration and increase loyalty',
    icon: '🔄',
  },
  {
    title: 'Brand Differentiation',
    description: 'Distinctive UI/UX sets your product apart from competitors',
    icon: '✨',
  },
  {
    title: 'Reduced Support Costs',
    description: 'Intuitive interfaces require less customer support and training',
    icon: '💰',
  },
]

export default function Benefits() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
            THE ADVANTAGES
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
            Benefits of Great UI/UX Design
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
            How exceptional design creates business value and delights users
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {uiuxBenefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn shadow-xl border border-white/5"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px] -z-10"></div>

                <div className="w-14 h-14 flex items-center justify-center mb-6 bg-primary/10 rounded-2xl text-3xl">
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-gradient">{benefit.title}</h3>
                <p className="text-foreground/80">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
