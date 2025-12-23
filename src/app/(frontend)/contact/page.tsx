import React, { Suspense } from 'react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

// Import client components
import HeroSection from './components/HeroSection'
import ContactFormSection from './components/ContactFormSection'
import ContactInfoSection from './components/ContactInfoSection'
import CTASection from './components/CTASection'
import { HeroSkeleton, FormSkeleton, InfoSkeleton, CTASkeleton } from './components/SectionSkeleton'

export const metadata: Metadata = {
  title: 'Contact | JS SBU',
  description: 'Contact JS SBU website',
}

export default async function ContactPage() {
  // Fetch the contact form from Payload CMS
  const payload = await getPayload({ config: configPromise })

  // Find the contact form by title
  const formQuery = await payload.find({
    collection: 'forms',
    where: {
      title: {
        equals: 'Contact Form',
      },
    },
  })

  // Get the form or null if not found
  const contactForm = formQuery.docs.length > 0 ? formQuery.docs[0] : null

  return (
    <div className="min-h-screen animate-fadeIn">
      <Suspense fallback={<HeroSkeleton />}>{/* <HeroSection /> */}</Suspense>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Suspense fallback={<FormSkeleton />}>
            <ContactFormSection contactForm={contactForm} />
          </Suspense>

          {/* Contact Information */}
          <Suspense fallback={<InfoSkeleton />}>
            <ContactInfoSection />
          </Suspense>
        </div>

        {/* CTA Section */}
        <Suspense fallback={<CTASkeleton />}>
          <CTASection />
        </Suspense>
      </div>
    </div>
  )
}
