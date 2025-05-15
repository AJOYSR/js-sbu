import React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Vision & Mission | JS SBU',
  description: 'Vision & Mission JS SBU website',
}

export default function VisionMissionPage() {
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
              OUR PURPOSE
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animation-delay-200 animate-fadeIn">
              Vision & <span className="text-gradient">Mission</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
              Driving innovation and excellence in JavaScript development to transform businesses in
              the digital age
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
                OUR VISION
              </span>
              <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
                Setting New Standards in JavaScript Solutions
              </h2>
            </div>

            <div className="glass-card rounded-3xl p-10 shadow-xl relative overflow-hidden border border-white/5 backdrop-blur-md animation-delay-400 animate-fadeIn">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-[120px]"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[120px]"></div>

              <div className="relative z-10">
                <p className="text-foreground/90 text-lg leading-relaxed mb-10">
                  To be the global leader in JavaScript technology solutions, recognized for our
                  innovation, expertise, and commitment to delivering exceptional value to our
                  clients.
                </p>

                <div className="space-y-6 animation-delay-600 animate-fadeIn">
                  {[
                    'Pioneer innovative JavaScript solutions that set industry standards',
                    'Create transformative digital experiences that drive business growth',
                    'Build a community of excellence in JavaScript development',
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start group hover:translate-x-1 transition-transform duration-300"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-primary/20 transition-colors duration-300">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-foreground/90 text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
                OUR MISSION
              </span>
              <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
                Delivering Excellence Through Innovation
              </h2>
            </div>

            <div className="glass-card rounded-3xl p-10 shadow-xl relative overflow-hidden border border-white/5 backdrop-blur-md animation-delay-400 animate-fadeIn">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-[120px]"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[120px]"></div>

              <div className="relative z-10">
                <p className="text-foreground/90 text-lg leading-relaxed mb-10">
                  To deliver cutting-edge JavaScript solutions that empower businesses to succeed in
                  the digital age through innovation, expertise, and unwavering commitment to
                  quality.
                </p>

                <div className="grid md:grid-cols-2 gap-10 animation-delay-600 animate-fadeIn">
                  <div>
                    <h3 className="text-xl font-bold mb-6 text-gradient">For Our Clients</h3>
                    <div className="space-y-4">
                      {[
                        'Deliver innovative and scalable solutions',
                        'Ensure highest quality and performance',
                        'Provide exceptional support and maintenance',
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
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
                          <span className="text-foreground/90">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-6 text-gradient">For Our Team</h3>
                    <div className="space-y-4">
                      {[
                        'Foster continuous learning and growth',
                        'Promote innovation and creativity',
                        'Build a collaborative and inclusive culture',
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
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
                          <span className="text-foreground/90">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              {[
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
                  description:
                    'Working together as a team and with our clients to achieve exceptional results',
                  icon: '🤝',
                  delay: 700,
                },
              ].map((value, index) => (
                <div
                  key={value.title}
                  className="glass-card rounded-2xl p-8 text-center card-hover border border-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
                  style={{ animationDelay: `${value.delay}ms` }}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gradient">{value.title}</h3>
                  <p className="text-foreground/80">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-10 shadow-xl relative overflow-hidden border border-white/10 backdrop-blur-md animation-delay-300 animate-fadeIn">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-[80px]"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[80px]"></div>

              <div className="text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
                  Ready to Bring Your JavaScript Vision to Life?
                </h2>
                <p className="text-foreground/90 text-lg mb-8 max-w-3xl mx-auto animation-delay-300 animate-fadeIn">
                  Partner with us to create innovative JavaScript solutions that align with your
                  business goals and exceed expectations.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center animation-delay-400 animate-fadeIn">
                  <Link
                    href="/contact"
                    className="btn-gradient text-white px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium"
                  >
                    <span>Start a Conversation</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/team"
                    className="bg-white/10 border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium backdrop-blur-sm"
                  >
                    <span>Our Team</span>
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
