import React from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles, Layers, Eye, Lightbulb } from 'lucide-react'
import { SkillRelatedPosts } from '@/components/RelatedArticle/SkillRelatedPosts'
import { fetchRelatedPostsBySkill } from '@/utilities/fetchRelatedPostsBySkill'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'UI/UX Research | JS SBU',
  description: 'UI/UX Research JS SBU website',
}

const methodologies = [
  {
    name: 'User Interviews',
    description: 'Direct conversations with users to understand their needs and pain points',
    benefits: [
      'Deep qualitative insights',
      'Uncover hidden needs',
      'Build empathy with users',
      'Validate hypotheses directly',
    ],
    icon: <Eye className="h-8 w-8 text-primary" />,
  },
  {
    name: 'Usability Testing',
    description: 'Observing users interact with products to identify usability issues',
    benefits: [
      'Identify navigation problems',
      'Measure task completion rates',
      'Collect direct user feedback',
      'Validate design decisions',
    ],
    icon: <Sparkles className="h-8 w-8 text-primary" />,
  },
  {
    name: 'A/B Testing',
    description: 'Comparing multiple design versions to determine which performs better',
    benefits: [
      'Data-driven decisions',
      'Quantify design impact',
      'Continuous improvement',
      'Reduce business risk',
    ],
    icon: <Layers className="h-8 w-8 text-primary" />,
  },
]

const designProcesses = [
  {
    name: 'User Research',
    description:
      'Understanding user behaviors, needs, and motivations through observation and feedback',
    phases: ['Stakeholder interviews', 'User interviews', 'Contextual inquiry', 'Survey research'],
  },
  {
    name: 'Information Architecture',
    description: 'Organizing and structuring content to help users find what they need',
    phases: ['Content inventory', 'User flows', 'Site mapping', 'Navigation design'],
  },
  {
    name: 'Interaction Design',
    description: 'Designing the interactive behavior of products and interfaces',
    phases: ['Wireframing', 'Prototyping', 'Interaction patterns', 'Microinteractions'],
  },
  {
    name: 'Visual Design',
    description:
      'Creating the look and feel of a product, including color, typography, and imagery',
    phases: ['Style guides', 'Design systems', 'Visual hierarchy', 'UI components'],
  },
]

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

export default async function UIUXResearchPage() {
  // Fetch related posts from the CMS
  const relatedPosts = await fetchRelatedPostsBySkill('UI/UX', 2)

  return (
    <div className="min-h-screen animate-fadeIn">
      {/* Hero Section with Background */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-background overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-32 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6 animate-fadeIn backdrop-blur-sm">
              DESIGN EXPERTISE
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animation-delay-200 animate-fadeIn">
              UI/UX <span className="text-gradient">Research</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
              Human-centered design approach backed by comprehensive research methodologies to
              create intuitive and engaging user experiences
            </p>
            <div className="animation-delay-400 animate-fadeIn">
              <Link
                href="/contact"
                className="btn-gradient text-white px-8 py-3 rounded-xl shadow-lg hover-scale btn-pop"
              >
                Start Your Design Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Methodologies Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
              RESEARCH METHODS
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              User-Centered Research
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Our comprehensive research methodologies to understand user behavior and design better
              experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {methodologies.map((method, index) => (
              <div
                key={method.name}
                className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn shadow-xl border border-white/5"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px] -z-10"></div>

                  <div className="w-14 h-14 flex items-center justify-center mb-6 bg-primary/10 rounded-2xl">
                    {method.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gradient">{method.name}</h3>
                  <p className="text-foreground/80 mb-6">{method.description}</p>

                  <ul className="space-y-4">
                    {method.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <svg
                            className="w-4 h-4 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-foreground/90">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
              OUR APPROACH
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              Design Process
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              A systematic approach to creating user-centered digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {designProcesses.map((process, index) => (
              <div
                key={process.name}
                className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn shadow-xl border border-white/5"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px] -z-10"></div>

                  <h3 className="text-xl font-bold mb-3 text-gradient">{process.name}</h3>
                  <p className="text-foreground/80 mb-6">{process.description}</p>

                  <ul className="space-y-3">
                    {process.phases.map((phase) => (
                      <li key={phase} className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <svg
                            className="w-4 h-4 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-foreground/90">{phase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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

      {/* Related Articles Section - Dynamic from CMS */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
              INSIGHTS
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
              UI/UX Knowledge Hub
            </h2>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
              Explore our latest articles and insights on UI/UX design and research
            </p>
          </div>

          <div className="animation-delay-400 animate-fadeIn">
            <SkillRelatedPosts posts={relatedPosts} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-10 md:p-16 shadow-xl relative overflow-hidden border border-white/10 backdrop-blur-md animation-delay-300 animate-fadeIn">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-[80px]"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[80px]"></div>

              <div className="text-center relative z-10">
                <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
                  LET&apos;S WORK TOGETHER
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
                  Ready to Enhance Your Product&apos;s User Experience?
                </h2>
                <p className="text-foreground/90 text-lg mb-10 max-w-3xl mx-auto animation-delay-300 animate-fadeIn">
                  Let&apos;s collaborate to create intuitive, engaging, and user-centered digital
                  experiences that delight your users and achieve your business goals.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center animation-delay-400 animate-fadeIn">
                  <Link
                    href="/contact"
                    className="btn-gradient text-white px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium"
                  >
                    <span>Start Your Design Journey</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="/services/ui-ux"
                    className="bg-white/10 border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium backdrop-blur-sm"
                  >
                    <span>Explore All Services</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
