import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for JS SBU website',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 animate-fadeIn">
      {/* Header with gradient background */}
      <div className="relative mb-12 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-pink-400 blur-[1px]"></div>
        <div className="relative z-10 px-8 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <div className="w-24 h-1.5 bg-white/50 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
          <div className="space-y-8">
            <section className="group card-hover">
              <h2 className="text-2xl font-semibold text-gradient mb-4 group-hover:scale-105 transition-transform">
                Information that is gathered from visitors
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                In common with other websites, log files are stored on the web server saving details
                such as the visitor&apos;s IP address, browser type, referring page and time of
                visit.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Cookies may be used to remember visitor preferences when interacting with the
                website.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Where registration is required, the visitor&apos;s email and a username will be
                stored on the server.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

            <section className="group card-hover">
              <h2 className="text-2xl font-semibold text-gradient mb-4 group-hover:scale-105 transition-transform">
                How the Information is used
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The information is used to enhance the vistor&apos;s experience when using the
                website to display personalised content and possibly advertising.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                E-mail addresses will not be sold, rented or leased to 3rd parties.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                E-mail may be sent to inform you of news of our services or offers by us or our
                affiliates.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

            <section className="group card-hover">
              <h2 className="text-2xl font-semibold text-gradient mb-4 group-hover:scale-105 transition-transform">
                Visitor Options
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have subscribed to one of our services, you may unsubscribe by following the
                instructions which are included in e-mail that you receive.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                You may be able to block cookies via your browser settings but this may prevent you
                from access to certain features of the website.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

            <section className="group card-hover">
              <h2 className="text-2xl font-semibold text-gradient mb-4 group-hover:scale-105 transition-transform">
                Cookies
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Cookies are small digital signature files that are stored by your web browser that
                allow your preferences to be recorded when visiting the website. Also they may be
                used to track your return visits to the website.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                3rd party advertising companies may also use cookies for tracking purposes.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

            <section className="group card-hover">
              <h2 className="text-2xl font-semibold text-gradient mb-4 group-hover:scale-105 transition-transform">
                Google Ads
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Google, as a third party vendor, uses cookies to serve ads.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Google&apos;s use of the DART cookie enables it to serve ads to visitors based on
                their visit to sites they visit on the Internet.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Website visitors may opt out of the use of the DART cookie by visiting the Google ad
                and content network privacy policy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
