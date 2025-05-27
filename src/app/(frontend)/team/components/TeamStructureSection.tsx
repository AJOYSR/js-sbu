import React from 'react'
import Image from 'next/image'

type TeamCategory = {
  value: string
  title: string
  description: string
}

type Props = {
  teamMembers: any[]
  teamCategories: TeamCategory[]
  GetCategoryIcon: React.FC<{ value: string }>
}

export const TeamStructureSection = ({ teamMembers, teamCategories, GetCategoryIcon }: Props) => (
  <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
    <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
    <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur-3xl"></div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn backdrop-blur-sm">
          TEAM STRUCTURE
        </span>
        <h2 className="text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
          Our Development Teams
        </h2>
        <p className="text-foreground/80 max-w-3xl mx-auto text-lg animation-delay-300 animate-fadeIn">
          Specialized teams working together to deliver comprehensive JavaScript solutions
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {teamCategories.map((category, index) => {
          // Find all team members for this category
          const categoryMembers = teamMembers.filter(
            (member: any) => member.teamType === category.value,
          )

          // Extract unique skills from team members in this category
          const allSkills = categoryMembers.flatMap(
            (member: any) => member.skills?.map((skill: any) => skill.skill) || [],
          )
          const uniqueSkills = [...new Set(allSkills)]

          return (
            <div
              key={category.value}
              className="glass-card rounded-2xl overflow-hidden card-hover animation-delay-400 animate-fadeIn shadow-xl border border-white/5"
              style={{ animationDelay: `${400 + index * 150}ms` }}
            >
              <div className="relative">
                {/* Decorative colorful top border */}
                <div className="h-2 bg-gradient-to-r from-primary to-primary-light" />

                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[60px] -z-10"></div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <GetCategoryIcon value={category.value} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-gradient">{category.title}</h3>
                      <p className="text-foreground/80">{category.description}</p>
                    </div>
                  </div>

                  {uniqueSkills.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm uppercase tracking-wider text-foreground/50 mb-3 font-semibold">
                        Skills & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {uniqueSkills.map((skill: string) => (
                          <span
                            key={skill}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm hover:bg-primary/20 hover:scale-105 transition-all duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* List team members in this category */}
                  {categoryMembers.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                      <h4 className="text-sm uppercase tracking-wider text-foreground/50 mb-4 font-semibold">
                        Team Members
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {categoryMembers.map((member: any, memberIndex: number) => (
                          <div
                            key={member.id}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-all"
                          >
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary shadow-sm">
                              <Image
                                src={
                                  typeof member.image === 'object' && member.image.url
                                    ? member.image?.url
                                    : '/team/placeholder.jpg'
                                }
                                alt={member.name}
                                fill
                                className="object-cover"
                                quality={60}
                                loading={memberIndex < 4 ? 'eager' : 'lazy'}
                                priority={memberIndex < 4}
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAGAAgDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD8l/hb4Vl8c+PdF8J/aYrM6pqNvZm6mDGK0jkcCWdgpBZYYg8rKpBYIQpUkA/uLKsrxGdZnQy3DtRlWnypzd4U4pXnUla7UYRTbbSbsrJt2P5Fz3OcHw/lOJzjFRlONGDcaUHadabtGlTTaTlOTSirpK95NRi2v9pPBH/BYb+HvgrRPh9ovh3wel+HdGtdE0HRrCTUEsNJ0q2S3sNPsYDfljDaWkEcMEKszsiKAzMwBP+j2FyHKsHh6eDw+FoU6FCEadKlGpUjCnCKSjCEYzajGKSSS0SsrI/wA+MbxPxBmeNqZjmWOxNfF4ibqVq9WpKpWnLvOc5tylKTd223d6n//Z"
                                sizes="48px"
                                fetchPriority={memberIndex < 4 ? 'high' : 'low'}
                              />
                            </div>
                            <div>
                              <p className="font-semibold text-foreground/90">{member.name}</p>
                              <p className="text-sm text-primary">{member.role}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </section>
)
