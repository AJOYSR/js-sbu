'use client'

import React, { useState } from 'react'
import { Mail } from 'lucide-react'
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
      <div className="text-center py-2">
        <p className="text-green-500 dark:text-green-400">
          Congratulations! You have subscribed to our newsletter.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
      <div className="relative">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
                 focus:outline-none focus:border-primary text-gray-800 dark:text-gray-300 pr-10"
        />
        <Mail className="absolute right-3 top-2.5 text-gray-400" size={20} />
      </div>
      <Button
        type="submit"
        variant="gradient"
        className="w-full btn-pop border-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Subscribe'}
      </Button>
    </form>
  )
}
