import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for JS SBU website',
}

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-16 animate-fadeIn">
      {/* Header with gradient background */}
      <div className="relative mb-12 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-pink-400 blur-[1px]"></div>
        <div className="relative z-10 px-8 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <div className="w-24 h-1.5 bg-white/50 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
          <div className="space-y-8">
            <section className="group card-hover">
              <h2 className="text-2xl font-semibold text-gradient mb-4 group-hover:scale-105 transition-transform">
                1. Terms
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                By accessing this website, you agree to be bound by these terms of service, all
                applicable laws and regulations, and agree that you are responsible for compliance
                with any applicable local laws. If you do not agree with any of these terms, you are
                prohibited from using or accessing this site.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

            <section className="group card-hover">
              <h2 className="text-2xl font-semibold text-gradient mb-4 group-hover:scale-105 transition-transform">
                2. Use License
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Permission is granted to temporarily download one copy of the materials on JS
                SBU&apos;s website for personal, non-commercial transitory viewing only. This is the
                grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose;</li>
                <li>
                  Attempt to decompile or reverse engineer any software contained on the website;
                </li>
                <li>Remove any copyright or other proprietary notations from the materials;</li>
                <li>
                  Transfer the materials to another person or &ldquo;mirror&ldquo; the materials on
                  any other server.
                </li>
              </ul>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

            <section className="group card-hover">
              <h2 className="text-2xl font-semibold text-gradient mb-4 group-hover:scale-105 transition-transform">
                3. Disclaimer
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The materials on JS SBU&apos;s website are provided on an &apos;as is&apos; basis.
                JS SBU makes no warranties, expressed or implied, and hereby disclaims and negates
                all other warranties including, without limitation, implied warranties or conditions
                of merchantability, fitness for a particular purpose, or non-infringement of
                intellectual property or other violation of rights.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

            <section className="group card-hover">
              <h2 className="text-2xl font-semibold text-gradient mb-4 group-hover:scale-105 transition-transform">
                4. Limitations
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                In no event shall JS SBU or its suppliers be liable for any damages (including,
                without limitation, damages for loss of data or profit, or due to business
                interruption) arising out of the use or inability to use the materials on JS
                SBU&apos;s website, even if JS SBU or a JS SBU authorized representative has been
                notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

            <section className="group card-hover">
              <h2 className="text-2xl font-semibold text-gradient mb-4 group-hover:scale-105 transition-transform">
                5. Revisions and Errata
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The materials appearing on JS SBU&apos;s website could include technical,
                typographical, or photographic errors. JS SBU does not warrant that any of the
                materials on its website are accurate, complete or current. JS SBU may make changes
                to the materials contained on its website at any time without notice.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
