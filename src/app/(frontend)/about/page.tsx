import React from 'react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6">About JS-SBU</h1>
          <p className="text-xl text-gray-600 mb-8">
            The JavaScript Special Business Unit (JS-SBU) at Brain Station 23 PLC is a dedicated
            team of expert developers and engineers who specialize in delivering cutting-edge
            solutions using modern JavaScript technologies.
          </p>
        </div>

        {/* Core Strengths */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Expertise</h2>
            <p className="text-gray-600 mb-6">
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
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
            <p className="text-gray-600 mb-6">
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

        {/* Team Overview */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Team</h2>
          <p className="text-gray-600 mb-6">
            Our team consists of highly skilled developers, designers, and engineers who are
            passionate about creating innovative solutions. We continuously invest in learning and
            staying updated with the latest technologies and industry trends.
          </p>
          <Link href="/team" className="text-primary hover:text-primary/80 font-semibold">
            Meet Our Team →
          </Link>
        </div>

        {/* Vision & Mission Preview */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Our Vision & Mission</h2>
          <p className="text-gray-600 mb-8">
            We strive to be the leading JavaScript solutions provider, delivering innovative and
            impactful digital solutions that transform businesses and enhance user experiences.
          </p>
          <Link
            href="/vision-mission"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Learn More About Our Vision
          </Link>
        </div>
      </div>
    </div>
  )
}
