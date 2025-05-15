import React from 'react'
import { Metadata } from 'next'
import { FileText, BookOpen, ShieldAlert, BarChart, Pencil, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | JS SBU',
  description: 'Terms of Service for JS SBU website',
}

export default function TermsOfServicePage() {
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
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services
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
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gradient mb-4 group-hover:scale-[1.02] transition-transform duration-300">
                      1. Terms
                    </h2>
                    <div className="space-y-3 text-foreground/80">
                      <p>
                        By accessing this website, you agree to be bound by these terms of service,
                        all applicable laws and regulations, and agree that you are responsible for
                        compliance with any applicable local laws. If you do not agree with any of
                        these terms, you are prohibited from using or accessing this site.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

              <section className="group">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gradient mb-4 group-hover:scale-[1.02] transition-transform duration-300">
                      2. Use License
                    </h2>
                    <div className="space-y-3 text-foreground/80">
                      <p>
                        Permission is granted to temporarily download one copy of the materials on
                        JS SBU&apos;s website for personal, non-commercial transitory viewing only.
                        This is the grant of a license, not a transfer of title, and under this
                        license you may not:
                      </p>
                      <ul className="space-y-2 pl-5 list-disc">
                        <li>Modify or copy the materials;</li>
                        <li>Use the materials for any commercial purpose;</li>
                        <li>
                          Attempt to decompile or reverse engineer any software contained on the
                          website;
                        </li>
                        <li>
                          Remove any copyright or other proprietary notations from the materials;
                        </li>
                        <li>
                          Transfer the materials to another person or &ldquo;mirror&rdquo; the
                          materials on any other server.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

              <section className="group">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <ShieldAlert className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gradient mb-4 group-hover:scale-[1.02] transition-transform duration-300">
                      3. Disclaimer
                    </h2>
                    <div className="space-y-3 text-foreground/80">
                      <p>
                        The materials on JS SBU&apos;s website are provided on an &apos;as is&apos;
                        basis. JS SBU makes no warranties, expressed or implied, and hereby
                        disclaims and negates all other warranties including, without limitation,
                        implied warranties or conditions of merchantability, fitness for a
                        particular purpose, or non-infringement of intellectual property or other
                        violation of rights.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

              <section className="group">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gradient mb-4 group-hover:scale-[1.02] transition-transform duration-300">
                      4. Limitations
                    </h2>
                    <div className="space-y-3 text-foreground/80">
                      <p>
                        In no event shall JS SBU or its suppliers be liable for any damages
                        (including, without limitation, damages for loss of data or profit, or due
                        to business interruption) arising out of the use or inability to use the
                        materials on JS SBU&apos;s website, even if JS SBU or a JS SBU authorized
                        representative has been notified orally or in writing of the possibility of
                        such damage.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

              <section className="group">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Pencil className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gradient mb-4 group-hover:scale-[1.02] transition-transform duration-300">
                      5. Revisions and Errata
                    </h2>
                    <div className="space-y-3 text-foreground/80">
                      <p>
                        The materials appearing on JS SBU&apos;s website could include technical,
                        typographical, or photographic errors. JS SBU does not warrant that any of
                        the materials on its website are accurate, complete or current. JS SBU may
                        make changes to the materials contained on its website at any time without
                        notice.
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
                  Questions About Our Terms?
                </h2>
                <p className="text-foreground/90 text-lg mb-10 max-w-3xl mx-auto animation-delay-300 animate-fadeIn">
                  If you have any questions about our terms of service or need clarification, please
                  don&apos;t hesitate to reach out.
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
  )
}
