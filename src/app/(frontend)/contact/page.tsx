import React from 'react'
import { MapPin, Phone, Mail, Clock, Send, User, AtSign, ArrowRight } from 'lucide-react'
import { FormBlock } from '@/blocks/Form/Component'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Form, FormFieldBlock } from '@payloadcms/plugin-form-builder/types'
import Link from 'next/link'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Contact | JS SBU',
  description: 'Contact JS SBU website',
}
const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: [
      'Brain Station 23 PLC.',
      '8th Floor, 2 Bir Uttam AK Khandakar Road,',
      'Mohakhali C/A, Dhaka 1212,',
      'Bangladesh',
    ],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+88-02-222290728'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['sales@brainstation-23.com'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Monday - Friday: 11:00 AM - 8:00 PM', 'Saturday, Sunday, Public Holidays: Closed'],
  },
]

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
      {/* Hero Section with Background - Matched with other pages */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-background overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-32 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6 animate-fadeIn backdrop-blur-sm">
              GET IN TOUCH
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animation-delay-200 animate-fadeIn">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
              Let&apos;s connect and collaborate on your next project. We&apos;re here to help
              transform your ideas into reality.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card rounded-xl shadow-md p-8 animation-delay-300 animate-fadeIn">
            <h2 className="text-2xl font-semibold mb-6 text-gradient">Send Us a Message</h2>

            {contactForm ? (
              <FormBlock
                form={contactForm as unknown as Form}
                enableIntro={false}
                blockType="formBlock"
              />
            ) : (
              /* Fallback form if no form is found in CMS */
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-card/50 border border-primary/20 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-card/50 border border-primary/20 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-card/50 border border-primary/20 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-card/50 border border-primary/20 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-gradient text-white px-6 py-3 rounded-lg shadow-md hover-scale btn-pop transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="animation-delay-400 animate-fadeIn">
            <h2 className="text-2xl font-semibold mb-8 text-gradient">Contact Information</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className={`glass-card card-hover rounded-xl shadow-md p-6 animation-delay-${500 + index * 100} animate-fadeIn`}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary mr-3">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-gradient">{info.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {info.details.map((detail) => (
                      <li key={detail} className="text-foreground/90">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Map Section */}
            <div className="mt-8 glass-card rounded-xl shadow-md p-6 animation-delay-600 animate-fadeIn">
              <h3 className="text-lg font-semibold mb-4 text-gradient">Our Location</h3>
              <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.87214860334222!2d90.40071176818345!3d23.781471647162267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77128a9268f%3A0xb30d22c3d9732434!2sBrain%20Station%2023%20(Bangladesh%20Office-04)!5e0!3m2!1sen!2sbd!4v1710385435790!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

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
                    LET&apos;S COLLABORATE
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
                    Ready to Work With Us?
                  </h2>
                  <p className="text-foreground/90 text-lg mb-10 max-w-3xl mx-auto animation-delay-300 animate-fadeIn">
                    Our team of experts is eager to help you transform your ideas into reality.
                    Reach out today to start your journey toward exceptional digital solutions.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center animation-delay-400 animate-fadeIn">
                    <a
                      href="mailto:sales@brainstation-23.com"
                      className="btn-gradient text-white px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium"
                    >
                      <span>Email Us Now</span>
                      <Mail className="h-5 w-5 ml-2" />
                    </a>
                    <Link
                      href="/portfolio"
                      className="bg-white/10 border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium backdrop-blur-sm"
                    >
                      <span>View Our Work</span>
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
