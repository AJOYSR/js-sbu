import React from 'react'
import { Metadata } from 'next'
import { Shield, Info, Settings, Cookie, AlertCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | JS SBU',
  description: 'Privacy Policy for JS SBU website',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen animate-fadeIn">
      {/* Hero Section with Background - Matched with UI/UX page */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-background overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-32 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6 animate-fadeIn backdrop-blur-sm">
              LEGAL INFORMATION
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animation-delay-200 animate-fadeIn">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
              We value your privacy and are committed to protecting your personal information
            </p>
          </div>
        </div>
      </section>

      {/* Main content with improved layout */}
      <div className="container mx-auto px-4 py-20">
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
                        details such as the visitor&apos;s IP address, browser type, referring page
                        and time of visit.
                      </p>
                      <p>
                        Cookies may be used to remember visitor preferences when interacting with
                        the website.
                      </p>
                      <p>
                        Where registration is required, the visitor&apos;s email and a username will
                        be stored on the server.
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
                        The information is used to enhance the vistor&apos;s experience when using
                        the website to display personalised content and possibly advertising.
                      </p>
                      <p>E-mail addresses will not be sold, rented or leased to 3rd parties.</p>
                      <p>
                        E-mail may be sent to inform you of news of our services or offers by us or
                        our affiliates.
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
                        If you have subscribed to one of our services, you may unsubscribe by
                        following the instructions which are included in e-mail that you receive.
                      </p>
                      <p>
                        You may be able to block cookies via your browser settings but this may
                        prevent you from access to certain features of the website.
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
                        Cookies are small digital signature files that are stored by your web
                        browser that allow your preferences to be recorded when visiting the
                        website. Also they may be used to track your return visits to the website.
                      </p>
                      <p>
                        3rd party advertising companies may also use cookies for tracking purposes.
                      </p>
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
                        Google&apos;s use of the DART cookie enables it to serve ads to visitors
                        based on their visit to sites they visit on the Internet.
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
      </div>

      {/* Call to Action Footer */}
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
                  HAVE QUESTIONS?
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
                  Questions About Our Privacy Policy?
                </h2>
                <p className="text-foreground/90 text-lg mb-10 max-w-3xl mx-auto animation-delay-300 animate-fadeIn">
                  If you have any questions about our privacy practices or how we handle your data,
                  please don&apos;t hesitate to contact us.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center animation-delay-400 animate-fadeIn">
                  <Link
                    href="/contact"
                    className="btn-gradient text-white px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                  <Link
                    href="/services"
                    className="bg-white/10 border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium backdrop-blur-sm"
                  >
                    <span>Our Services</span>
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
