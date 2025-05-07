import React from 'react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 animate-fadeIn">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6 text-gradient">About JS-SBU</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animation-delay-200 animate-fadeIn">
            The JavaScript Special Business Unit (JS-SBU) at Brain Station 23 PLC is a dedicated
            team of expert developers and engineers who specialize in delivering cutting-edge
            solutions using modern JavaScript technologies.
          </p>
        </div>

        {/* Core Strengths */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="glass-card p-8 rounded-lg hover-scale animation-delay-200 animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4">Our Expertise</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We excel in developing robust and scalable applications using the latest JavaScript
              technologies. Our team&apos;s expertise spans across:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Full-stack JavaScript development with Node.js and modern frameworks</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Cross-platform mobile development with React Native and Flutter</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Modern front-end development with React, Angular, and Vue.js</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>E-commerce solutions with Shopify and custom implementations</span>
              </li>
            </ul>
          </div>
          <div className="glass-card p-8 rounded-lg hover-scale animation-delay-400 animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We believe in delivering solutions that not only meet current needs but are also
              future-proof. Our approach combines:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Agile development methodology for flexible and efficient delivery</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Best practices in code quality and performance optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Continuous integration and deployment for reliable releases</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>User-centered design principles for optimal user experience</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Technology Stack Details */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-lg hover-scale animation-delay-200 animate-fadeIn">
              <h3 className="text-2xl font-bold mb-4">Backend & Frontend</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Node.js</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our server-side platform of choice for building scalable network applications.
                    We leverage Node.js to create reliable, fast, and scalable backend systems that
                    can handle high traffic loads while maintaining optimal performance.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">React & Angular</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We use React to create high-quality, responsive, and dynamic front-end
                    applications. Angular is our go-to framework for building robust, scalable web
                    applications that are easy to maintain and extend.
                  </p>
                </div>
              </div>
            </div>
            <div className="glass-card p-8 rounded-lg hover-scale animation-delay-400 animate-fadeIn">
              <h3 className="text-2xl font-bold mb-4">Mobile & E-commerce</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">React Native & Flutter</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    For mobile development, we utilize React Native and Flutter to create native
                    mobile applications for iOS and Android. These frameworks enable us to build
                    fast, reliable, and user-friendly mobile apps with a single codebase.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Shopify</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We specialize in creating customized e-commerce solutions using Shopify,
                    including setting up online stores, integrating payment gateways, and optimizing
                    the shopping experience for customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Overview */}
        <div className="shiny-card bg-gray-50 dark:bg-gray-800/40 p-8 rounded-lg mb-16 soft-shadow animation-delay-400 animate-fadeIn">
          <h2 className="text-2xl font-bold mb-6">Our Team</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our team consists of highly skilled developers, designers, and engineers who are
            passionate about creating innovative solutions. We continuously invest in learning and
            staying updated with the latest technologies and industry trends.
          </p>
          <Link
            href="/team"
            className="text-primary hover:text-primary/80 font-semibold btn-pop inline-flex items-center"
          >
            Meet Our Team <span className="ml-1">→</span>
          </Link>
        </div>

        {/* Vision & Mission Preview */}
        <div className="text-center bg-[rgba(255,105,180,0.2)] max-w-3xl mx-auto glass-card p-8 animation-delay-600 animate-fadeIn">
          <h2 className="text-2xl font-bold mb-6">Our Vision & Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            We strive to be the leading JavaScript solutions provider, delivering innovative and
            impactful digital solutions that transform businesses and enhance user experiences.
          </p>
          <Link
            href="/vision-mission"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition soft-shadow"
          >
            Learn More About Our Vision
          </Link>
        </div>
      </div>
    </div>
  )
}
