import React from 'react'
import HeroImage from '@/components/HeroImage'

export const TeamHero = () => (
  <section className="relative py-20 overflow-hidden">
    {/* Background image with Next.js Image for optimization */}
    <HeroImage
      src="https://www.shutterstock.com/shutterstock/photos/1419693854/display_1500/stock-photo-high-angle-view-of-multiracial-friend-stacking-hand-together-1419693854.jpg"
      alt="Team of JavaScript Experts"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAGAAgDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD8l/hb4Vl8c+PdF8J/aYrM6pqNvZm6mDGK0jkcCWdgpBZYYg8rKpBYIQpUkA/uLKsrxGdZnQy3DtRlWnypzd4U4pXnUla7UYRTbbSbsrJt2P5Fz3OcHw/lOJzjFRlONGDcaUHadabtGlTTaTlOTSirpK95NRi2v9pPBH/BYb+HvgrRPh9ovh3wel+HdGtdE0HRrCTUEsNJ0q2S3sNPsYDfljDaWkEcMEKszsiKAzMwBP+j2FyHKsHh6eDw+FoU6FCEadKlGpUjCnCKSjCEYzajGKSSS0SsrI/wA+MbxPxBmeNqZjmWOxNfF4ibqVq9WpKpWnLvOc5tylKTd223d6n//Z"
      brightness={0.6}
      quality={75}
      priority={true}
      sizes="100vw"
      loading="eager"
      fetchPriority="high"
    />

    {/* Overlay for better text readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30 z-10"></div>

    {/* Background decorative elements */}
    <div className="absolute -top-32 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px] z-10"></div>
    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] z-10"></div>

    <div className="container mx-auto px-4 relative z-20">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6 animate-fadeIn backdrop-blur-sm">
          OUR TEAM
        </span>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animation-delay-200 animate-fadeIn">
          Meet Our <span className="text-gradient">JavaScript Experts</span>
        </h1>
        <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
          The talented individuals who make JS-SBU a leader in JavaScript development, dedicated to
          building exceptional solutions for our clients
        </p>
      </div>
    </div>
  </section>
)
