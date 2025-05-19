'use client'

import React from 'react'

// Value Card Component
const ValueCard = ({
  title,
  description,
  icon,
  delay,
}: {
  title: string
  description: string
  icon: string
  delay: number
}) => (
  <div
    className="glass-card rounded-2xl p-8 text-center card-hover border border-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-gradient">{title}</h3>
    <p className="text-foreground/80">{description}</p>
  </div>
)

export default function ValuesSection() {
  const values = [
    {
      title: 'Innovation',
      description:
        'Continuously pushing boundaries and embracing new technologies to deliver cutting-edge solutions',
      icon: '💡',
      delay: 500,
    },
    {
      title: 'Excellence',
      description:
        'Maintaining the highest standards in code quality, performance, and user experience',
      icon: '✨',
      delay: 600,
    },
    {
      title: 'Collaboration',
      description: 'Working together as a team and with our clients to achieve exceptional results',
      icon: '🤝',
      delay: 700,
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
              CORE VALUES
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              Principles That Drive Our Success
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animation-delay-400 animate-fadeIn">
            {values.map((value) => (
              <ValueCard
                key={value.title}
                title={value.title}
                description={value.description}
                icon={value.icon}
                delay={value.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
