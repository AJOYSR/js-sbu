import React from 'react'
import Image from 'next/image'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team | JS SBU',
  description: 'Team JS SBU website',
}

// Team structure categories
const teamCategories = [
  {
    value: 'web-development',
    title: 'Web Development',
    description: 'Specialized in creating robust and scalable web applications',
  },
  {
    value: 'mobile-development',
    title: 'Mobile Development',
    description: 'Expert team in cross-platform mobile development',
  },
  {
    value: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user experiences',
  },
  {
    value: 'devops',
    title: 'DevOps',
    description: 'Ensuring smooth deployment and operation of applications',
  },
]

// Define props type
type Props = {
  searchParams: Promise<{
    page?: string
  }>
}

// Items per page
const ITEMS_PER_PAGE = 6

export default async function TeamPage({ searchParams }: Props) {
  // Parse current page from search params or default to 1
  const params = await searchParams
  const currentPage = Number(params?.page) || 1

  try {
    const payload = await getPayload({ config: configPromise })

    // Fetch leadership team members
    const leadershipResponse = await payload.find({
      collection: 'team-members',
      where: {
        teamType: {
          equals: 'leadership',
        },
      },
      sort: 'order',
    })

    // Fetch total members (non-leadership) for pagination
    const totalCountResponse = await payload.find({
      collection: 'team-members',
      where: {
        teamType: {
          not_equals: 'leadership',
        },
      },
      limit: 0,
    })

    // Calculate total pages
    const totalItems = totalCountResponse.totalDocs
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE)

    // Fetch paginated team members (non-leadership)
    const teamMembersResponse = await payload.find({
      collection: 'team-members',
      where: {
        teamType: {
          not_equals: 'leadership',
        },
      },
      pagination: true,
      page: currentPage,
      limit: ITEMS_PER_PAGE,
      sort: ['teamType', 'order'],
    })

    const leadershipTeam = leadershipResponse.docs
    const teamMembers = teamMembersResponse.docs

    return (
      <div className="min-h-screen animate-fadeIn">
        {/* Hero Section with Background */}
        <section className="relative py-20 bg-gradient-to-b from-gray-900 to-background overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute -top-32 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6 animate-fadeIn backdrop-blur-sm">
                OUR TEAM
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animation-delay-200 animate-fadeIn">
                Meet Our <span className="text-gradient">JavaScript Experts</span>
              </h1>
              <p className="text-xl text-white/90 mb-10 animation-delay-300 animate-fadeIn max-w-3xl mx-auto leading-relaxed">
                The talented individuals who make JS-SBU a leader in JavaScript development,
                dedicated to building exceptional solutions for our clients
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        {leadershipTeam.length > 0 && (
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
                  Experienced professionals guiding our team to deliver exceptional JavaScript
                  solutions
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
                        quality={100}
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
        )}

        {/* Team Structure Section */}
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

                // Define icons for each category
                const getCategoryIcon = (value: string) => {
                  switch (value) {
                    case 'web-development':
                      return (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-primary"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="20" height="14" x="2" y="3" rx="2" />
                          <line x1="2" x2="22" y1="10" y2="10" />
                          <line x1="12" x2="12" y1="14" y2="18" />
                          <line x1="9" x2="15" y1="18" y2="18" />
                        </svg>
                      )
                    case 'mobile-development':
                      return (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-primary"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="10" height="16" x="7" y="4" rx="2" />
                          <path d="M11 5h2" />
                          <path d="M12 17v.01" />
                        </svg>
                      )
                    case 'ui-ux-design':
                      return (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-primary"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="6" cy="6" r="3" />
                          <circle cx="6" cy="18" r="3" />
                          <line x1="20" x2="8.12" y1="4" y2="15.88" />
                          <line x1="14.47" x2="20" y1="14.48" y2="20" />
                          <line x1="8.12" x2="12" y1="8.12" y2="12" />
                        </svg>
                      )
                    case 'devops':
                      return (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-primary"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M11 12H3l2-2-2-2h8l2-2-2-2H3l2-2-2-2" />
                          <path d="M13 12h8l-2-2 2-2h-8l-2-2 2-2h8l-2-2 2-2" />
                          <path d="M3 22h8l-2-2 2-2H3l2-2-2-2" />
                          <path d="M13 22h8l-2-2 2-2h-8l-2-2 2-2" />
                        </svg>
                      )
                    default:
                      return null
                  }
                }

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
                            {getCategoryIcon(category.value)}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-2 text-gradient">
                              {category.title}
                            </h3>
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
                              {categoryMembers.map((member: any) => (
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
                                      quality={85}
                                    />
                                  </div>
                                  <div>
                                    <p className="font-semibold text-foreground/90">
                                      {member.name}
                                    </p>
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

        {/* Pagination */}
        {totalPages > 1 && (
          <section className="py-10 relative z-10">
            <div className="container mx-auto px-4">
              <div className="flex justify-center animation-delay-600 animate-fadeIn">
                <div className="flex items-center gap-2">
                  {currentPage > 1 && (
                    <Link
                      href={`/team?page=${currentPage - 1}`}
                      className="px-4 py-2 border border-primary/30 rounded-md hover:bg-primary/10 transition-all flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      Previous
                    </Link>
                  )}

                  {Array.from({ length: totalPages }).map((_, index) => (
                    <Link
                      key={index}
                      href={`/team?page=${index + 1}`}
                      className={`px-4 py-2 border rounded-md transition-all ${
                        currentPage === index + 1
                          ? 'bg-primary text-white border-primary hover:bg-primary/90'
                          : 'border-primary/30 hover:bg-primary/10'
                      }`}
                    >
                      {index + 1}
                    </Link>
                  ))}

                  {currentPage < totalPages && (
                    <Link
                      href={`/team?page=${currentPage + 1}`}
                      className="px-4 py-2 border border-primary/30 rounded-md hover:bg-primary/10 transition-all flex items-center"
                    >
                      Next
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Join Us Section */}
        <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50"></div>
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-3xl p-10 md:p-16 shadow-xl relative overflow-hidden border border-white/10 backdrop-blur-md animation-delay-300 animate-fadeIn">
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-[80px]"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[80px]"></div>

                <div className="text-center relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient animation-delay-200 animate-fadeIn">
                    Work With Our JavaScript Experts
                  </h2>
                  <p className="text-foreground/90 text-lg mb-10 max-w-3xl mx-auto animation-delay-300 animate-fadeIn">
                    If you want to collaborate on cutting-edge projects, our team is here to provide
                    expert JavaScript solutions. Reach out to us to discuss how we can work together
                    to bring your ideas to life.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center animation-delay-400 animate-fadeIn">
                    <Link
                      href="/contact"
                      className="btn-gradient text-white px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium"
                    >
                      <span>Contact Our Team</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                    <Link
                      href="/portfolio"
                      className="bg-white/10 border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl shadow-lg hover-scale btn-pop flex items-center justify-center space-x-2 text-lg font-medium backdrop-blur-sm"
                    >
                      <span>View Our Work</span>
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  } catch (error) {
    console.error('Error fetching team data:', error)
    return notFound()
  }
}
