import React from 'react'
import { MapPin, Phone, Mail, Clock, Send, User, AtSign } from 'lucide-react'
import { FormBlock } from '@/blocks/Form/Component'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Form, FormFieldBlock } from '@payloadcms/plugin-form-builder/types'

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
    <div className="min-h-screen py-16 animate-fadeIn">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center animation-delay-200 animate-fadeIn">
          <h1 className="text-4xl font-bold mb-6 text-gradient">Contact Us</h1>
          <p className="text-xl text-primary mb-4">Let&apos;s Connect and Collaborate</p>
          <p className="text-foreground">
            Get in touch with us to discuss your project or learn more about our services
          </p>
        </div>

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
        <div className="max-w-4xl mx-auto text-center shiny-card glass-card p-10 rounded-xl mt-16 animation-delay-800 animate-fadeIn">
          <h2 className="text-3xl font-bold mb-6 text-gradient">Ready to Work With Us?</h2>
          <p className="text-foreground mb-8 max-w-2xl mx-auto">
            Our team of experts is eager to help you transform your ideas into reality. Reach out
            today to start your journey toward exceptional digital solutions.
          </p>
          <a
            href="mailto:sales@brainstation-23.com"
            className="inline-block btn-gradient text-white px-8 py-3 rounded-lg shadow-md hover-scale btn-pop"
          >
            Email Us Now
          </a>
        </div>
      </div>
    </div>
  )
}
