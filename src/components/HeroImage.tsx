'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import SkeletonImage from './SkeletonImage'

interface HeroImageProps {
  src: string
  alt: string
  brightness?: number // Value between 0 and 1
  className?: string
  priority?: boolean
  quality?: number
  blurDataURL?: string
  sizes?: string
}

export default function HeroImage({
  src,
  alt,
  brightness = 0.65,
  className = '',
  priority = true,
  quality = 75,
  blurDataURL,
  sizes = '100vw',
}: HeroImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="absolute inset-0">
      {/* Skeleton loader */}
      <SkeletonImage isLoading={isLoading} />

      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        fetchPriority="high"
        sizes={sizes}
        quality={quality}
        placeholder="blur"
        blurDataURL={
          blurDataURL ||
          'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAGAAgDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD8l/hb4Vl8c+PdF8J/aYrM6pqNvZm6mDGK0jkcCWdgpBZYYg8rKpBYIQpUkA/uLKsrxGdZnQy3DtRlWnypzd4U4pXnUla7UYRTbbSbsrJt2P5Fz3OcHw/lOJzjFRlONGDcaUHadabtGlTTaTlOTSirpK95NRi2v9pPBH/BYb+HvgrRPh9ovh3wvpel+HdGtdE0HRrCTUEsNJ0q2S3sNPsYDfljDaWkEcMEKszsiKAzMwBP+j2FyHKsHh6eDw+FoU6FCEadKlGpUjCnCKSjCEYzajGKSSS0SsrI/wA+MbxPxBmeNqZjmWOxNfF4ibqVq9WpKpWnLvOc5tylKTd223d6n//Z'
        }
        className={`object-cover object-center transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        style={{
          filter: `brightness(${brightness})`,
        }}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  )
}
