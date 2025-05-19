'use client'

import React from 'react'
import { Info, Shield, Settings, Cookie, AlertCircle } from 'lucide-react'

export default function PolicyContent() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="glass-card rounded-2xl p-6 md:p-10 shadow-xl border border-white/10 backdrop-blur-sm">
        <div className="space-y-10">
          <section className="group">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Info className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gradient mb-4 group-hover:scale-[1.02] transition-transform duration-300">
                  Information that is gathered from visitors
                </h2>
                <div className="space-y-3 text-foreground/80">
                  <p>
                    In common with other websites, log files are stored on the web server saving
                    details such as the visitor&apos;s IP address, browser type, referring page and
                    time of visit.
                  </p>
                  <p>
                    Cookies may be used to remember visitor preferences when interacting with the
                    website.
                  </p>
                  <p>
                    Where registration is required, the visitor&apos;s email and a username will be
                    stored on the server.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

          <section className="group">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gradient mb-4 group-hover:scale-[1.02] transition-transform duration-300">
                  How the Information is used
                </h2>
                <div className="space-y-3 text-foreground/80">
                  <p>
                    The information is used to enhance the vistor&apos;s experience when using the
                    website to display personalised content and possibly advertising.
                  </p>
                  <p>E-mail addresses will not be sold, rented or leased to 3rd parties.</p>
                  <p>
                    E-mail may be sent to inform you of news of our services or offers by us or our
                    affiliates.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

          <section className="group">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gradient mb-4 group-hover:scale-[1.02] transition-transform duration-300">
                  Visitor Options
                </h2>
                <div className="space-y-3 text-foreground/80">
                  <p>
                    If you have subscribed to one of our services, you may unsubscribe by following
                    the instructions which are included in e-mail that you receive.
                  </p>
                  <p>
                    You may be able to block cookies via your browser settings but this may prevent
                    you from access to certain features of the website.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

          <section className="group">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Cookie className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gradient mb-4 group-hover:scale-[1.02] transition-transform duration-300">
                  Cookies
                </h2>
                <div className="space-y-3 text-foreground/80">
                  <p>
                    Cookies are small digital signature files that are stored by your web browser
                    that allow your preferences to be recorded when visiting the website. Also they
                    may be used to track your return visits to the website.
                  </p>
                  <p>3rd party advertising companies may also use cookies for tracking purposes.</p>
                </div>
              </div>
            </div>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

          <section className="group">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <AlertCircle className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gradient mb-4 group-hover:scale-[1.02] transition-transform duration-300">
                  Google Ads
                </h2>
                <div className="space-y-3 text-foreground/80">
                  <p>Google, as a third party vendor, uses cookies to serve ads.</p>
                  <p>
                    Google&apos;s use of the DART cookie enables it to serve ads to visitors based
                    on their visit to sites they visit on the Internet.
                  </p>
                  <p>
                    Website visitors may opt out of the use of the DART cookie by visiting the
                    Google ad and content network privacy policy.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
