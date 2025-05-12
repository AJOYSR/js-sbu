import React from 'react'

interface YouTubeEmbedProps {
  url: string
  title?: string
}

export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  url,
  title = 'YouTube video player',
}) => {
  // Extract video ID from URL
  const getVideoId = (url: string): string => {
    // Handle youtu.be URLs
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split(/[?&]/)[0]
      return id || ''
    }

    // Handle youtube.com URLs
    const videoIdMatch = url.match(/[?&]v=([^?&]+)/)
    if (videoIdMatch) {
      return videoIdMatch[1]
    }

    return ''
  }

  const videoId = getVideoId(url)

  if (!videoId) {
    return null
  }

  return (
    <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden mb-6">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
