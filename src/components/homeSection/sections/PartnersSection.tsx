import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { Partner, Media } from '@/payload-types'
import AnimatedSectionTitle from '@/components/AnimatedSectionTitle'
import AnimatedCard from '@/components/AnimatedCard'
import FloatingElement from '@/components/FloatingElement'

interface PartnersSectionProps {
  partners: Partner[]
}

const getImageUrl = (media: Media | number | null | undefined): string => {
  if (typeof media === 'object' && media !== null && 'url' in media && media.url) {
    return media.url
  }
  return '/placeholder.jpg'
}

const PartnersSection: React.FC<PartnersSectionProps> = ({ partners }) => {
  return (
    <section className="py-20 relative overflow-hidden bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-300">
      <FloatingElement
        className="bg-primary/5 left-1/4 -top-32"
        size="xl"
        delay={1}
        duration={4.5}
      />
      <FloatingElement
        className="bg-primary/5 right-1/4 -bottom-32"
        size="xl"
        delay={0.5}
        duration={5.5}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSectionTitle
          badge="PARTNERSHIPS"
          title="Trusted By Industry Leaders"
          description="We're proud to work with forward-thinking companies that share our commitment to innovation and excellence"
        />

        <AnimatedCard className="p-6 sm:p-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[100px]"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 items-start justify-items-center relative z-10">
            {partners && partners.length > 0
              ? partners.map((partner, index) => (
                  <AnimatedCard
                    key={partner.id}
                    className="p-4 sm:p-6 h-full w-full"
                    delay={index * 0.3}
                  >
                    {partner.logo ? (
                      partner.website ? (
                        <Link href={partner?.website} target="_blank" rel="noopener noreferrer">
                          <div className="h-16 sm:h-24 flex items-center justify-center">
                            <Image
                              src={getImageUrl(partner.logo)}
                              alt={partner.name}
                              width={180}
                              height={90}
                              className="object-contain max-h-full mx-auto opacity-95 hover:opacity-100 transition-all duration-500"
                              unoptimized={true}
                            />
                          </div>
                          <div className="h-px w-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent my-3 sm:my-4 mx-auto group-hover:w-full transition-all duration-700"></div>
                          <p className="mt-2 sm:mt-3 text-foreground font-medium text-xs sm:text-sm tracking-wide uppercase px-1 sm:px-2 break-words hyphens-auto min-h-[2.5rem] flex items-center justify-center">
                            {partner.name}
                          </p>
                        </Link>
                      ) : (
                        <>
                          <div className="h-16 sm:h-24 flex items-center justify-center">
                            <Image
                              src={getImageUrl(partner.logo)}
                              alt={partner.name}
                              width={180}
                              height={90}
                              className="object-contain max-h-full mx-auto opacity-95 hover:opacity-100 transition-all duration-500"
                              unoptimized={true}
                            />
                          </div>
                          <div className="h-px w-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent my-3 sm:my-4 mx-auto group-hover:w-full transition-all duration-700"></div>
                          <p className="mt-2 sm:mt-3 text-foreground font-medium text-xs sm:text-sm tracking-wide uppercase px-1 sm:px-2 break-words hyphens-auto min-h-[2.5rem] flex items-center justify-center">
                            {partner.name}
                          </p>
                        </>
                      )
                    ) : (
                      <>
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 h-16 sm:h-24 w-full flex items-center justify-center mx-auto rounded-lg">
                          <span className="font-bold text-2xl sm:text-3xl bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                            {(
                              partner.name.split(' ')[0].substring(0, 1) +
                              (partner.name.split(' ').length > 1
                                ? partner.name.split(' ')[1].substring(0, 1)
                                : partner.name.substring(1, 2))
                            ).toUpperCase()}
                          </span>
                        </div>
                        <div className="h-px w-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent my-3 sm:my-4 mx-auto group-hover:w-full transition-all duration-700"></div>
                        <p className="mt-2 sm:mt-3 text-foreground font-medium text-xs sm:text-sm tracking-wide uppercase px-1 sm:px-2 break-words hyphens-auto min-h-[2.5rem] flex items-center justify-center">
                          {partner.name}
                        </p>
                      </>
                    )}
                  </AnimatedCard>
                ))
              : ['Tennant', 'Long Shot', 'Shanta Securities', 'Rehive'].map((client, index) => (
                  <AnimatedCard
                    key={client}
                    className="p-4 sm:p-6 h-full w-full"
                    delay={index * 0.3}
                  >
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 h-16 sm:h-24 w-full flex items-center justify-center mx-auto rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <span className="font-bold text-2xl sm:text-3xl bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent relative z-10">
                        {(
                          client.split(' ')[0].substring(0, 1) +
                          (client.split(' ').length > 1
                            ? client.split(' ')[1].substring(0, 1)
                            : client.substring(1, 2))
                        ).toUpperCase()}
                      </span>
                    </div>
                    <div className="h-px w-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent my-3 sm:my-4 mx-auto group-hover:w-full transition-all duration-700"></div>
                    <p className="mt-2 sm:mt-3 text-foreground font-medium text-xs sm:text-sm tracking-wide uppercase px-1 sm:px-2 break-words hyphens-auto min-h-[2.5rem] flex items-center justify-center">
                      {client}
                    </p>
                  </AnimatedCard>
                ))}
          </div>
        </AnimatedCard>

        <div className="mt-8 text-center">
          <Link
            href="/about"
            className="inline-flex items-center text-primary hover:text-primary/80 group relative overflow-hidden px-6 py-3 rounded-full"
          >
            <span className="relative z-10 text-gradient font-medium">
              Learn about our partnerships
            </span>
            <span className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
