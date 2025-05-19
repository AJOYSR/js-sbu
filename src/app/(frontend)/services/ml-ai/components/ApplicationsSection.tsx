'use client'

import React from 'react'

const applications = [
  {
    title: 'Chatbots & Virtual Assistants',
    description: 'Intelligent conversational interfaces for customer support and automation',
  },
  {
    title: 'Content Analysis',
    description: 'Automated content categorization, moderation, and recommendation systems',
  },
  {
    title: 'Business Intelligence',
    description: 'Data-driven insights and predictions for better decision making',
  },
  {
    title: 'Process Automation',
    description: 'Intelligent automation of repetitive tasks and workflows',
  },
  {
    title: 'Personalization',
    description: 'Customized user experiences based on behavior and preferences',
  },
  {
    title: 'Quality Assurance',
    description: 'Automated testing and quality control using AI',
  },
]

export default function ApplicationsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
            APPLICATIONS
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
            AI Applications
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
            Discover how AI can transform various aspects of your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div
              key={app.title}
              className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn shadow-xl border border-white/5"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px] -z-10"></div>

                <h3 className="text-xl font-bold mb-3 text-gradient">{app.title}</h3>
                <p className="text-foreground/80">{app.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
