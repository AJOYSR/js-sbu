'use client'

import React from 'react'

const architectureBenefits = [
  {
    title: 'Future-Proof Systems',
    description: 'Create architectures that scale and adapt to changing requirements',
    icon: '🔮',
  },
  {
    title: 'Reduced Technical Debt',
    description: 'Well-designed systems lead to lower maintenance costs over time',
    icon: '💰',
  },
  {
    title: 'Faster Time to Market',
    description: 'Enable rapid development and deployment of new features',
    icon: '🚀',
  },
  {
    title: 'Improved Reliability',
    description: 'Design robust systems that minimize downtime and service degradation',
    icon: '🛡️',
  },
]

export default function Benefits() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            THE ADVANTAGES
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gradient">Benefits of Sound Architecture</h2>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg">
            How well-designed system architecture delivers long-term business value
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {architectureBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="glass-card rounded-2xl overflow-hidden card-hover shadow-xl border border-white/5"
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
