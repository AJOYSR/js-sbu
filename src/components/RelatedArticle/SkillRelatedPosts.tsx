import React from 'react'
import Link from 'next/link'
import type { Post } from '@/payload-types'
import { Media } from '@/components/Media'
import { ArrowRight, Clock } from 'lucide-react'

interface SkillRelatedPostsProps {
  posts: Post[]
}

export const SkillRelatedPosts: React.FC<SkillRelatedPostsProps> = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-32 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 backdrop-blur-sm">
            DISCOVER MORE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Related Articles</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="animate-fadeIn group"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <article className="glass-card rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-white/10 h-full flex flex-col transform hover:-translate-y-1 hover:border-primary/30 group">
                <div className="relative w-full h-52 overflow-hidden">
                  {post.meta?.image && typeof post.meta.image !== 'string' ? (
                    <Media
                      resource={post.meta.image}
                      size="100%"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200/20 flex items-center justify-center">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  {post.categories && post.categories.length > 0 && (
                    <div className="absolute top-4 left-4 bg-primary/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-glow">
                      {typeof post.categories[0] === 'object'
                        ? post.categories[0].title
                        : post.categories[0]}
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 text-gradient line-clamp-2 transition-all duration-300 group-hover:translate-x-1">
                    {post.title}
                  </h3>
                  <div className="text-foreground/70 mb-4 flex items-center text-sm transition-all duration-300 group-hover:text-primary/70">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>5 min read</span>
                  </div>
                  <p className="text-foreground/80 line-clamp-3 flex-grow text-sm transition-colors duration-300 group-hover:text-foreground/90">
                    {post.meta?.description || 'Read more about this topic.'}
                  </p>
                  <div className="mt-6 pt-4 border-t border-gray-200/10 group-hover:border-gray-200/20 transition-colors duration-300">
                    <Link
                      href={`/posts/${post.slug}`}
                      className="group/btn flex items-center justify-between w-full text-primary font-medium transition-all duration-300 hover:text-primary hover:font-semibold"
                    >
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                        Read Article
                      </span>
                      <span className="bg-primary/10 p-2 rounded-full transition-all duration-300 group-hover/btn:bg-primary/30 group-hover/btn:shadow-glow">
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/posts"
            className="btn-gradient btn-pop inline-flex items-center text-white px-6 py-3 rounded-xl hover-scale transition shadow-lg hover:shadow-glow relative overflow-hidden group"
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
              Explore All Articles
            </span>
            <ArrowRight className="ml-2 w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10"></div>
          </Link>
        </div>
      </div>
    </section>
  )
}
