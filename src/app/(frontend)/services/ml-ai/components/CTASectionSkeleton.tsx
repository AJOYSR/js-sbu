'use client'

import React from 'react'

export default function CTASectionSkeleton() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-10 md:p-16 shadow-xl relative overflow-hidden border border-white/10 backdrop-blur-md">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[80px]"></div>

            <div className="text-center relative z-10 animate-pulse">
              <div className="inline-block w-48 h-8 rounded-full bg-primary/10 mb-4 mx-auto"></div>
              <div className="h-10 bg-primary/5 rounded-lg mb-6 w-full max-w-2xl mx-auto"></div>
              <div className="h-20 bg-primary/5 rounded-lg mb-10 w-full max-w-3xl mx-auto"></div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div className="h-14 w-64 bg-primary/20 rounded-xl mx-auto sm:mx-0"></div>
                <div className="h-14 w-64 bg-white/10 border border-white/20 rounded-xl mx-auto sm:mx-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
