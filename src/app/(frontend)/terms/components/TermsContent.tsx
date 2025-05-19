'use client'

import React from 'react'
import { FileText, BookOpen, ShieldAlert, BarChart, Pencil } from 'lucide-react'

export default function TermsContent() {
  return (
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
                    By accessing this website, you agree to be bound by these terms of service, all
                    applicable laws and regulations, and agree that you are responsible for
                    compliance with any applicable local laws. If you do not agree with any of these
                    terms, you are prohibited from using or accessing this site.
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
                    Permission is granted to temporarily download one copy of the materials on JS
                    SBU&apos;s website for personal, non-commercial transitory viewing only. This is
                    the grant of a license, not a transfer of title, and under this license you may
                    not:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc">
                    <li>Modify or copy the materials;</li>
                    <li>Use the materials for any commercial purpose;</li>
                    <li>
                      Attempt to decompile or reverse engineer any software contained on the
                      website;
                    </li>
                    <li>Remove any copyright or other proprietary notations from the materials;</li>
                    <li>
                      Transfer the materials to another person or &ldquo;mirror&rdquo; the materials
                      on any other server.
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
                    basis. JS SBU makes no warranties, expressed or implied, and hereby disclaims
                    and negates all other warranties including, without limitation, implied
                    warranties or conditions of merchantability, fitness for a particular purpose,
                    or non-infringement of intellectual property or other violation of rights.
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
                    In no event shall JS SBU or its suppliers be liable for any damages (including,
                    without limitation, damages for loss of data or profit, or due to business
                    interruption) arising out of the use or inability to use the materials on JS
                    SBU&apos;s website, even if JS SBU or a JS SBU authorized representative has
                    been notified orally or in writing of the possibility of such damage.
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
                    typographical, or photographic errors. JS SBU does not warrant that any of the
                    materials on its website are accurate, complete or current. JS SBU may make
                    changes to the materials contained on its website at any time without notice.
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
