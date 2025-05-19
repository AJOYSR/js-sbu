import React from 'react'
import Image from 'next/image'

export const LeadershipSection = ({ leadershipTeam }: { leadershipTeam: any[] }) => (
  <section className="py-20 relative overflow-hidden">
    <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
    <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
          LEADERSHIP
        </span>
        <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
          Our Leadership Team
        </h2>
        <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn leading-relaxed">
          Experienced professionals guiding our team to deliver exceptional JavaScript solutions
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {leadershipTeam.map((leader: any, index: number) => (
          <div
            key={leader.id}
            className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn shadow-xl border border-white/5"
            style={{ animationDelay: `${400 + index * 100}ms` }}
          >
            <div className="relative h-80 w-full overflow-hidden">
              <Image
                src={
                  typeof leader.image === 'object' && leader?.image?.url
                    ? leader.image.url
                    : '/team/placeholder.jpg'
                }
                alt={leader.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={80}
                loading={index < 3 ? 'eager' : 'lazy'}
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            </div>
            <div className="p-8 relative">
              <h3 className="text-2xl font-bold mb-2 text-gradient">{leader.name}</h3>
              <p className="text-primary font-medium mb-4">{leader.role}</p>
              <p className="text-foreground/80 mb-6">{leader.bio}</p>

              {/* Skills section */}
              {leader.skills && leader.skills.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm uppercase tracking-wider text-foreground/50 mb-3 font-semibold">
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.skills.map((skillObj: any) => (
                      <span
                        key={skillObj.id}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm hover:bg-primary/20 hover:scale-105 transition-all duration-200"
                      >
                        {skillObj.skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
