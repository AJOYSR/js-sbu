import React from 'react'
import Link from 'next/link'
import { getRecentProjects } from '@/utilities/getRecentProjects'
import RelatedProjects from '@/components/RelatedProjects'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Mobile App | JS SBU',
  description: 'Mobile App JS SBU website',
}
const technologies = [
  {
    name: 'React Native',
    description: 'Cross-platform mobile development with native performance',
    features: ['Native Components', 'Hot Reloading', 'Large Community', 'Code Reusability'],
  },
  {
    name: 'Flutter',
    description: 'Beautiful native apps in record time',
    features: ['Single Codebase', 'Custom Widgets', 'Hot Reload', 'Native Performance'],
  },
  {
    name: 'Native Development',
    description: 'Platform-specific development for optimal performance',
    features: ['iOS Development', 'Android Development', 'Platform APIs', 'Native UI'],
  },
  {
    name: 'Backend Services',
    description: 'Robust backend infrastructure for mobile apps',
    features: ['API Development', 'Real-time Updates', 'Data Sync', 'Push Notifications'],
  },
]

const services = [
  {
    title: 'Cross-Platform Apps',
    icon: 'device_mobile',
    description: 'Build once, deploy everywhere with React Native and Flutter',
    features: ['Consistent UI/UX', 'Faster Development', 'Cost-Effective', 'Easy Maintenance'],
  },
  {
    title: 'Native Applications',
    icon: 'devices',
    description: 'Platform-specific apps for optimal performance',
    features: [
      'Platform-Specific Features',
      'High Performance',
      'Native UI Components',
      'Deep Integration',
    ],
  },
  {
    title: 'App Modernization',
    icon: 'sparkles',
    description: 'Upgrade and modernize existing mobile applications',
    features: [
      'Code Refactoring',
      'Performance Optimization',
      'UI/UX Enhancement',
      'Feature Addition',
    ],
  },
  {
    title: 'Mobile Backend',
    icon: 'server',
    description: 'Scalable backend services for mobile applications',
    features: [
      'API Development',
      'Database Design',
      'Cloud Integration',
      'Security Implementation',
    ],
  },
]

const features = [
  {
    title: 'User-Centric Design',
    icon: 'user_focus',
    description: 'Creating intuitive and engaging user experiences that keep users coming back.',
  },
  {
    title: 'Performance Optimization',
    icon: 'gauge',
    description: 'Ensuring smooth performance and fast load times across all devices.',
  },
  {
    title: 'Offline Functionality',
    icon: 'cloud_offline',
    description: 'Building apps that work seamlessly even without internet connectivity.',
  },
  {
    title: 'Security',
    icon: 'shield_check',
    description: 'Implementing robust security measures to protect user data and privacy.',
  },
  {
    title: 'Analytics Integration',
    icon: 'graph',
    description: 'Adding analytics to track user behavior and app performance.',
  },
  {
    title: 'Continuous Updates',
    icon: 'refresh',
    description: 'Regular updates and maintenance to keep your app running smoothly.',
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description:
      'We analyze your requirements, target audience, and business goals to create a comprehensive plan.',
  },
  {
    step: '02',
    title: 'UI/UX Design',
    description: 'Our designers create intuitive, engaging interfaces that your users will love.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Our developers bring the designs to life with clean, efficient code.',
  },
  {
    step: '04',
    title: 'Testing & QA',
    description: 'Rigorous testing across devices ensures your app works flawlessly.',
  },
  {
    step: '05',
    title: 'Deployment',
    description: 'We handle the app store submission process and launch your app.',
  },
  {
    step: '06',
    title: 'Maintenance & Support',
    description: 'Ongoing support and updates keep your app running smoothly.',
  },
]

export default async function MobileAppPage() {
  const projects = await getRecentProjects('mobile-development')
  return (
    <div className="min-h-screen animate-fadeIn overflow-hidden">
      {/* Hero Section with Background */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-background overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-32 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6 animate-fadeIn backdrop-blur-sm">
              MOBILE EXPERTISE
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animation-delay-200 animate-fadeIn">
              Transform Your <span className="text-gradient">Ideas</span> Into
              <br />
              Powerful Mobile Apps
            </h1>
            <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
              Creating engaging, scalable mobile applications for iOS and Android that deliver
              exceptional user experiences
            </p>
            <div className="animation-delay-400 animate-fadeIn">
              <Link
                href="/contact"
                className="btn-gradient text-white px-8 py-3 rounded-xl shadow-lg hover-scale btn-pop"
              >
                Start Your Mobile Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Technologies Section */}
        <div className="mb-20 animation-delay-400 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Our <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            We use cutting-edge technologies to build fast, reliable, and scalable mobile
            applications
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="glass-card card-hover p-8 rounded-xl shadow-md border border-border/40"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 mr-4 flex items-center justify-center bg-primary/10 rounded-lg">
                    {/* Replace with actual SVG for React Native */}
                    {tech.name === 'React Native' && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 text-primary"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="4" />
                        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                      </svg>
                    )}
                    {/* Flutter icon */}
                    {tech.name === 'Flutter' && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 text-primary"
                      >
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    )}
                    {/* Native Development icon */}
                    {tech.name === 'Native Development' && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 text-primary"
                      >
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                        <line x1="12" y1="18" x2="12" y2="18" />
                      </svg>
                    )}
                    {/* Backend Services icon */}
                    {tech.name === 'Backend Services' && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 text-primary"
                      >
                        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                        <line x1="6" y1="6" x2="6" y2="6" />
                        <line x1="6" y1="18" x2="6" y2="18" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{tech.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{tech.description}</p>
                <ul className="space-y-3">
                  {tech.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <span className="text-primary mr-2 font-bold">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Services Section */}
        <div id="services" className="mb-20 animation-delay-600 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Comprehensive mobile app development services tailored to your needs
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="shiny-card gradient-border p-8 rounded-xl bg-card"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 mr-4 flex items-center justify-center bg-primary/10 rounded-lg">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-primary mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Process Section - New */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            A proven development approach to ensure successful project delivery
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative bg-card p-8 rounded-xl border border-border/40 hover-scale"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary mt-6">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Key <span className="text-gradient">Features</span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            What makes our mobile applications stand out from the competition
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bounce-hover neon-glow bg-card p-8 rounded-xl shadow-md"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 mr-3 flex items-center justify-center bg-primary/10 rounded-lg">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Related Projects */}
        <RelatedProjects projects={projects} />
        {/* CTA Section */}
        <div className="max-w-5xl mx-auto text-center glass-card p-12 rounded-2xl soft-shadow border border-border/40">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your <span className="text-gradient">Mobile App?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how we can help you create a successful mobile application that meets
            your business goals and exceeds user expectations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="btn-gradient btn-pop inline-block text-white px-8 py-4 rounded-lg hover-scale transition"
            >
              Get Started
            </Link>
            <Link
              href="/portfolio"
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg hover-scale transition"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
