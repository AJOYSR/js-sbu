'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const CommentForm: React.FC<{ postId: number | string }> = ({ postId }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    setSuccess(false)

    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content,
          author: { name, email },
          post: postId,
        }),
      })

      if (!res.ok) {
        const error = await res.json()
        throw new Error(error.errors?.[0]?.message || 'Failed to submit comment')
      }

      setSuccess(true)
      setContent('')
      setName('')
      setEmail('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit comment. Please try again.')
      console.error('Comment submission error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="glass-card rounded-xl p-6 border border-primary/10 animate-fadeIn animation-delay-300">
      <form onSubmit={handleSubmit} className="space-y-5">
        <h3 className="text-xl font-bold text-gradient mb-4">Join the conversation</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border-primary/20 focus:border-primary"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-primary/20 focus:border-primary"
              placeholder="Your email (not displayed)"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="comment" className="text-foreground">
            Comment
          </Label>
          <Textarea
            id="comment"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={4}
            className="border-primary/20 focus:border-primary"
            placeholder="Share your thoughts..."
          />
        </div>

        {error && (
          <div className="p-3 rounded bg-red-50 text-red-500 dark:bg-red-950/30 dark:text-red-400">
            {error}
          </div>
        )}

        {success && (
          <div className="p-3 rounded bg-green-50 text-green-600 dark:bg-green-950/30 dark:text-green-400 animate-fadeIn">
            Comment submitted successfully! It will appear after approval.
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="btn-gradient hover-scale btn-pop px-6 py-2 rounded-lg text-white"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Comment'}
        </Button>
      </form>
    </div>
  )
}

export default CommentForm
