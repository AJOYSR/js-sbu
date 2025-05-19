'use client'

import React from 'react'
import RichText from '@/components/RichText'
import { YouTubeEmbed } from '@/components/YouTubeEmbed'

interface TutorialContentProps {
  title: string
  description: string
  content: any
  youtubeUrl?: string
}

export default function TutorialContent({
  title,
  description,
  content,
  youtubeUrl,
}: TutorialContentProps) {
  return (
    <div className="lg:col-span-2 animation-delay-400 animate-fadeIn">
      {youtubeUrl && (
        <div className="glass-card rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gradient">Tutorial Video</h2>
          <YouTubeEmbed url={youtubeUrl} title={title} />
        </div>
      )}
      <div className="glass-card rounded-xl shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gradient">About This Tutorial</h2>
        <p className="text-gray-600 mb-8">{description}</p>
        <div className="prose prose-neutral prose-p:text-left prose-headings:text-left prose-ul:text-left prose-ol:text-left prose-blockquote:text-left prose-blockquote:m-0 prose-blockquote:p-0 prose-blockquote:border-0 max-w-none">
          <RichText content={content} enableGutter={false} />
        </div>
      </div>
    </div>
  )
}
