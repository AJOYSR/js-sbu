'use client'

import React from 'react'
import { FormBlock } from '@/blocks/Form/Component'
import { Form } from '@payloadcms/plugin-form-builder/types'

interface ContactFormSectionProps {
  contactForm: any | null
}

export default function ContactFormSection({ contactForm }: ContactFormSectionProps) {
  return (
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
            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
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
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
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
  )
}
