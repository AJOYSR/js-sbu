import Link from 'next/link'
import React from 'react'
import { FileSearch } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-16 animate-fadeIn">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto glass-card rounded-xl shadow-md p-12 text-center animation-delay-200 animate-fadeIn">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-5 rounded-full">
              <FileSearch className="w-16 h-16 text-primary/80" />
            </div>
          </div>

          <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>

          <p className="text-foreground/90 mb-8 max-w-lg mx-auto">
            We&apos;re sorry, but the page you are looking for doesn&apos;t exist or has been moved.
            Please check the URL or navigate back to the homepage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="btn-gradient text-white px-8 py-3 rounded-lg shadow-md hover-scale btn-pop"
            >
              Return to Homepage
            </Link>

            <Link
              href="/contact"
              className="border border-primary bg-primary/10 text-primary px-8 py-3 rounded-lg shadow-md hover-scale btn-pop font-medium"
            >
              Contact Support
            </Link>
          </div>

          <div className="mt-8 text-foreground/70 text-sm">
            <p>If you believe this is an error, please contact our support team.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
