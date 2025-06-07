import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { Post as IPost, Media } from '@/payload-types'
import AnimatedSectionTitle from '@/components/AnimatedSectionTitle'
import AnimatedCard from '@/components/AnimatedCard'
import FloatingElement from '@/components/FloatingElement'

interface BlogSectionProps {
  posts: IPost[]
}

const getImageUrl = (media: Media | number | null | undefined): string => {
  if (typeof media === 'object' && media !== null && 'url' in media && media.url) {
    return media.url
  }
  return '/placeholder.jpg'
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  return (
    <section className="py-10 relative overflow-hidden">
      <FloatingElement
        className="bg-primary/5 left-1/3 top-1/3"
        size="xl"
        delay={0.8}
        duration={4.8}
      />
      <FloatingElement
        className="bg-primary/5 right-1/3 bottom-1/3"
        size="lg"
        delay={1.2}
        duration={4.2}
      />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSectionTitle
          badge="INSIGHTS"
          title="Latest from Our Blog"
          description="Stay updated with our latest thoughts on technology, innovation, and digital transformation"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts &&
            posts.map((post, index) => (
              <AnimatedCard key={post.id} delay={index + 1} className="relative">
                <Link href={`/posts/${post.slug}`} className="block h-full">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={getImageUrl(post.meta?.image)}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary/90 transition-colors duration-300 drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]">
                        {post.title}
                      </h3>
                      <p className="text-white/95 text-sm line-clamp-2 mb-4 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                        {post.meta?.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 bg-card/50 backdrop-blur-sm border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-primary group/link">
                        <span className="font-medium">Read Article</span>
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedCard>
            ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
