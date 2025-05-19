'use client'

import React from 'react'

const cloudServices = [
  {
    title: 'Infrastructure as Code',
    description: 'Managing infrastructure through code rather than manual processes',
    tools: ['Terraform', 'AWS CloudFormation', 'Pulumi', 'Azure Resource Manager'],
  },
  {
    title: 'Container Registry & Deployment',
    description: 'Services for storing, managing, and deploying container images',
    tools: ['Docker Hub', 'Amazon ECR', 'Google Container Registry', 'GitHub Container Registry'],
  },
  {
    title: 'Cloud Databases',
    description: 'Managed database services for cloud-native applications',
    tools: ['Amazon DynamoDB', 'Google Cloud Firestore', 'Azure Cosmos DB', 'MongoDB Atlas'],
  },
  {
    title: 'Observability & Monitoring',
    description: 'Tools for monitoring, logging, and tracing cloud applications',
    tools: ['Prometheus', 'Grafana', 'Datadog', 'New Relic'],
  },
]

export default function CloudServices() {
  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
            SERVICES & TOOLS
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
            Cloud Services Ecosystem
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
            Comprehensive suite of services and tools for building modern cloud applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cloudServices.map((service, index) => (
            <div
              key={service.title}
              className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn shadow-xl border border-white/5"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px] -z-10"></div>

                <h3 className="text-xl font-bold mb-3 text-gradient">{service.title}</h3>
                <p className="text-foreground/80 mb-6">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
