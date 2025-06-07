import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedSectionTitle from '@/components/AnimatedSectionTitle'
import AnimatedCard from '@/components/AnimatedCard'
import FloatingElement from '@/components/FloatingElement'

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <FloatingElement className="bg-primary/5 left-1/3 -top-32" size="xl" delay={0} duration={4} />
      <FloatingElement
        className="bg-primary/5 right-1/4 bottom-0"
        size="lg"
        delay={2}
        duration={5}
      />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSectionTitle
          badge="JAVASCRIPT EXPERTS"
          title="JavaScript Solutions Business Unit"
          description="A team of highly skilled developers and engineers specializing in cutting-edge JavaScript technologies"
        />

        <AnimatedCard className="p-8 lg:p-12">
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-[120px]"></div>

          <div className="prose prose-lg dark:prose-invert mx-auto mb-10">
            <p className="text-foreground/90 text-lg leading-relaxed mb-6">
              At Brain Station 23 PLC, our JavaScript Solutions Business Unit (JS-SBU) delivers
              exceptional digital solutions that drive innovation and growth. We leverage advanced
              JavaScript technologies to build robust, scalable, and high-performance applications
              tailored to your business objectives.
            </p>
            <p className="text-foreground/90 text-lg leading-relaxed mb-8">
              With a deep understanding of both front-end and back-end development, we provide
              comprehensive solutions for businesses of all sizes, from startups to enterprise-level
              organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {[
              {
                icon: '⚛️',
                title: 'React & Next.js',
                description:
                  'Building responsive, dynamic user interfaces and applications with industry-leading performance',
              },
              {
                icon: '🅰️',
                title: 'Angular',
                description:
                  'Developing robust, enterprise-grade web applications with a comprehensive framework',
              },
              {
                icon: '📱',
                title: 'React Native & Flutter',
                description:
                  'Creating cross-platform mobile apps that deliver native performance and user experience',
              },
              {
                icon: '🛒',
                title: 'Shopify',
                description:
                  'Customizing e-commerce solutions with tailored storefronts and integrated experiences',
              },
              {
                icon: '🔄',
                title: 'Node.js',
                description:
                  'Building scalable, high-performance backend services and APIs for modern applications',
              },
              {
                icon: '🧰',
                title: 'Full-Stack JavaScript',
                description:
                  'Delivering end-to-end solutions using the latest JavaScript frameworks and tools',
              },
            ].map((tech, index) => (
              <AnimatedCard key={tech.title} className="p-6 text-center" delay={index}>
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gradient">{tech.title}</h3>
                <p className="text-foreground/80 text-sm">{tech.description}</p>
              </AnimatedCard>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/skills/full-stack"
              className="inline-flex items-center text-primary hover:text-primary/80 group relative overflow-hidden px-6 py-3 rounded-full"
            >
              <span className="relative z-10 text-gradient font-medium">
                Explore our JavaScript expertise
              </span>
              <span className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedCard>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Fast Performance', 'Secure Solutions', 'Scalable Architecture'].map((title, index) => (
            <AnimatedCard key={title} className="p-8 text-center" delay={index + 3}>
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      index === 0
                        ? 'M13 10V3L4 14h7v7l9-11h-7z'
                        : index === 1
                          ? 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                          : 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
                    }
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gradient">{title}</h3>
              <p className="text-foreground/80">
                {index === 0
                  ? 'We build applications with optimal performance, ensuring fast load times and smooth user experiences.'
                  : index === 1
                    ? 'Security is our priority. We implement best practices to protect your data and applications.'
                    : 'Our solutions are built to grow with your business, ensuring long-term success and adaptability.'}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
