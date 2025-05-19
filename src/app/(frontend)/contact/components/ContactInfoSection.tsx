'use client'

import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactInfoSection() {
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

  return (
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
  )
}
