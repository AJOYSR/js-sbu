import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Comment } from '../../payload-types'
import CommentForm from './CommentForm'

type Props = {
  postId: number | string
  className?: string
}

export const Comments: React.FC<Props> = async ({ postId, className }) => {
  const payload = await getPayload({ config: configPromise })
  const { docs: comments } = await payload.find({
    collection: 'comments',
    where: {
      post: {
        equals: postId,
      },
      isApproved: {
        equals: true,
      },
    },
    sort: '-createdAt',
    depth: 0,
  })

  return (
    <div className={`${className || ''}`}>
      <h2 className="text-2xl font-bold mb-8 text-gradient">Comments</h2>

      {/* Display existing comments */}
      <div className="space-y-6 mb-10">
        {(comments as Comment[]).map((comment, index) => (
          <div
            key={comment.id}
            className={`glass-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-fadeIn animation-delay-${200 + index * 100}`}
          >
            <div className="flex items-center space-x-2 mb-3">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-medium">
                  {comment.author?.name?.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <div className="font-semibold text-foreground">{comment.author?.name}</div>
                <div className="text-sm text-foreground/70">
                  {new Date(comment.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>
            </div>
            <p className="text-foreground/90 leading-relaxed">{comment.content}</p>
          </div>
        ))}
        {comments.length === 0 && (
          <div className="glass-card rounded-xl p-8 text-center animate-fadeIn animation-delay-200">
            <svg
              className="mx-auto h-12 w-12 text-primary/70 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <p className="text-foreground/80 text-lg">
              No comments yet. Be the first to share your thoughts!
            </p>
          </div>
        )}
      </div>

      {/* Comment form */}
      <CommentForm postId={postId} />
    </div>
  )
}
