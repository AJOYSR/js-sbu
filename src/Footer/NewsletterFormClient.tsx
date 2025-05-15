'use client'

import React, { useState } from 'react'
import { Mail, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export interface NewsletterFormClientProps {
  formId: string
}

export function NewsletterFormClient({ formId }: NewsletterFormClientProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const response = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formId,
          submissionData: {
            email,
          },
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Form submission failed')
      }

      setSubmitSuccess(true)
      setEmail('')
    } catch (error) {
      setErrorMessage('Failed to submit the form. Please try again.')
      console.error('Newsletter form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="flex items-center space-x-2 py-2 text-sm">
        <CheckCircle2 className="h-4 w-4 text-green-500" />
        <p className="text-green-600 dark:text-green-400">Thank you for subscribing!</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {errorMessage && (
        <div className="flex items-center space-x-2 text-xs">
          <AlertCircle className="h-3.5 w-3.5 text-red-500" />
          <p className="text-red-500">{errorMessage}</p>
        </div>
      )}
      <div className="relative">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full px-4 py-2 rounded-lg bg-background dark:bg-background/50 border border-input dark:border-input/50 
                 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground dark:text-foreground pr-10 text-sm"
        />
        <Mail className="absolute right-3 top-2.5 text-muted-foreground/70" size={18} />
      </div>
      <Button
        type="submit"
        variant="gradient"
        className="w-full text-sm py-1.5 h-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <Loader2 className="h-3.5 w-3.5 mr-2 animate-spin" />
            Subscribing...
          </span>
        ) : (
          'Subscribe'
        )}
      </Button>
    </form>
  )
}
