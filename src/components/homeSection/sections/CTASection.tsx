import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedSectionTitle from '@/components/AnimatedSectionTitle'
import AnimatedCard from '@/components/AnimatedCard'
import FloatingElement from '@/components/FloatingElement'

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <FloatingElement
        className="bg-primary/10 right-0 top-1/4"
        size="xl"
        delay={0.5}
        duration={5}
      />
      <FloatingElement
        className="bg-primary/10 left-0 bottom-1/4"
        size="xl"
        delay={1.5}
        duration={5.5}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <AnimatedCard className="p-10 md:p-16" delay={1}>
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[80px]"></div>

            <div className="text-center relative z-10">
              <AnimatedSectionTitle
                badge="WORK WITH US"
                title="Ready to Elevate Your JavaScript Projects?"
                description="Partner with our JavaScript experts to build innovative, high-performance applications that drive business growth and exceptional user experiences."
              />

              <div className="flex flex-col md:flex-row gap-6 justify-center mt-10">
                <Link
                  href="/contact"
                  className="btn-gradient text-white px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium"
                >
                  <span>Start Your Project</span>
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
                  href="/portfolio"
                  className="glass-card hover:bg-primary/10 px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium"
                >
                  <span>View Our Work</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  )
}

export default CTASection
