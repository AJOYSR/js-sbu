'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import SkeletonImage from './SkeletonImage'

export type HeroImageProps = {
  src: string
  alt: string
  blurDataURL?: string
  brightness?: number
  quality?: number
  priority?: boolean
  sizes?: string
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
  className?: string
}

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  blurDataURL,
  brightness = 1,
  quality = 75,
  priority = false,
  sizes = '100vw',
  loading = 'lazy',
  fetchPriority = 'auto',
  className = '',
}) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      {/* Skeleton loader */}
      <SkeletonImage isLoading={isLoading} />

      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover object-center transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ filter: `brightness(${brightness})` }}
        quality={quality}
        priority={priority}
        sizes={sizes}
        loading={loading}
        fetchPriority={fetchPriority}
        placeholder="blur"
        blurDataURL={
          blurDataURL ||
          'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAGAAgDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD8l/hb4Vl8c+PdF8J/aYrM6pqNvZm6mDGK0jkcCWdgpBZYYg8rKpBYIQpUkA/uLKsrxGdZnQy3DtRlWnypzd4U4pXnUla7UYRTbbSbsrJt2P5Fz3OcHw/lOJzjFRlONGDcaUHadabtGlTTaTlOTSirpK95NRi2v9pPBH/BYb+HvgrRPh9ovh3wel+HdGtdE0HRrCTUEsNJ0q2S3sNPsYDfljDaWkEcMEKszsiKAzMwBP+j2FyHKsHh6eDw+FoU6FCEadKlGpUjCnCKSjCEYzajGKSSS0SsrI/wA+MbxPxBmeNqZjmWOxNfF4ibqVq9WpKpWnLvOc5tylKTd223d6n//Z'
        }
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  )
}

export default HeroImage
