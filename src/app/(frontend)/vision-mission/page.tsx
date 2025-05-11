import React from 'react'

export default function VisionMissionPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center animate-fadeIn">
          <h1 className="text-4xl font-bold mb-6 text-gradient">Our Vision & Mission</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Driving innovation and excellence in JavaScript development
          </p>
        </div>

        {/* Vision Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-fadeIn animation-delay-200">
          <div className="glass-card p-8 rounded-lg mb-12 card-hover neon-glow">
            <h2 className="text-3xl font-bold mb-6 text-gradient">Our Vision</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
              To be the global leader in JavaScript technology solutions, recognized for our
              innovation, expertise, and commitment to delivering exceptional value to our clients.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start hover-scale">
                <span className="text-primary mr-3">→</span>
                <span>Pioneer innovative JavaScript solutions that set industry standards</span>
              </li>
              <li className="flex items-start hover-scale">
                <span className="text-primary mr-3">→</span>
                <span>Create transformative digital experiences that drive business growth</span>
              </li>
              <li className="flex items-start hover-scale">
                <span className="text-primary mr-3">→</span>
                <span>Build a community of excellence in JavaScript development</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-fadeIn animation-delay-400">
          <div className="shiny-card bg-white dark:bg-card p-8 rounded-lg shadow-lg mb-12 card-hover">
            <h2 className="text-3xl font-bold mb-6 text-gradient">Our Mission</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
              To deliver cutting-edge JavaScript solutions that empower businesses to succeed in the
              digital age through innovation, expertise, and unwavering commitment to quality.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="hover-scale">
                <h3 className="text-xl font-semibold mb-4">For Our Clients</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Deliver innovative and scalable solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Ensure highest quality and performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Provide exceptional support and maintenance</span>
                  </li>
                </ul>
              </div>
              <div className="hover-scale">
                <h3 className="text-xl font-semibold mb-4">For Our Team</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Foster continuous learning and growth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Promote innovation and creativity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Build a collaborative and inclusive culture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-4xl mx-auto animate-fadeIn animation-delay-600">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="gradient-border bg-white dark:bg-card p-6 rounded-lg shadow-md card-hover">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-800 dark:text-gray-300">
                Continuously pushing boundaries and embracing new technologies to deliver
                cutting-edge solutions.
              </p>
            </div>
            <div className="gradient-border bg-white dark:bg-card p-6 rounded-lg shadow-md card-hover">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-800 dark:text-gray-300">
                Maintaining the highest standards in code quality, performance, and user experience.
              </p>
            </div>
            <div className="gradient-border bg-white dark:bg-card p-6 rounded-lg shadow-md card-hover">
              <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
              <p className="text-gray-800 dark:text-gray-300">
                Working together as a team and with our clients to achieve exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
