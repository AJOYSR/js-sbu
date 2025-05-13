import React from 'react'
import Image from 'next/image'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import Link from 'next/link'

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
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto mb-20 text-center animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Our Team</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Meet the talented individuals who make JS-SBU a leader in JavaScript development
            </p>
          </div>

          {/* Leadership Section */}
          {leadershipTeam.length > 0 && (
            <div className="mb-24 animate-fadeIn animation-delay-200">
              <h2 className="text-3xl font-bold mb-12 text-center">Leadership Team</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {leadershipTeam.map((leader: any, index: number) => (
                  <div
                    key={leader.id}
                    className="bg-white dark:bg-card rounded-lg shadow-md overflow-hidden card-hover shiny-card neon-glow"
                    style={{ animationDelay: `${index * 100}ms` }}
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
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        quality={100}
                        priority={index < 3}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                      <p className="text-primary font-medium mb-4">{leader.role}</p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{leader.bio}</p>

                      {/* Skills section */}
                      {leader.skills && leader.skills.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-semibold">
                            Skills
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
          )}

          {/* Team Structure Section */}
          <div className="mb-24 animate-fadeIn animation-delay-400">
            <h2 className="text-3xl font-bold mb-12 text-center text-gradient">
              Our Team Structure
            </h2>
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
                    className="bg-white dark:bg-card overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] group"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="relative">
                      {/* Decorative colorful top border */}
                      <div className="h-2 bg-gradient-to-r from-primary to-secondary" />

                      <div className="p-8 shadow-md overflow-hidden ">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            {getCategoryIcon(category.value)}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-primary transition-colors">
                              {category.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                              {category.description}
                            </p>
                          </div>
                        </div>

                        {uniqueSkills.length > 0 && (
                          <div className="mb-6">
                            <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3 font-semibold">
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
                            <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-semibold">
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
                                    <p className="font-semibold text-gray-800 dark:text-gray-100">
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10 mb-16 animate-fadeIn animation-delay-600">
              <div className="flex items-center gap-2">
                {currentPage > 1 && (
                  <Link
                    href={`/team?page=${currentPage - 1}`}
                    className="px-4 py-2 border border-primary/30 rounded-md hover:bg-primary/10 transition-all"
                  >
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
                    className="px-4 py-2 border border-primary/30 rounded-md hover:bg-primary/10 transition-all"
                  >
                    Next
                  </Link>
                )}
              </div>
            </div>
          )}

          {/* Join Us Section */}
          <div className="max-w-4xl mx-auto text-center btn-gradient p-12 rounded-lg animate-fadeIn animation-delay-600">
            <h2 className="text-3xl font-bold mb-6 text-white">Join Our Team</h2>
            <p className="text-lg text-white/90 mb-8">
              If you want to collaborate on cutting-edge projects, our team is here to provide
              expert solutions. Reach out to us to discuss how we can work together to bring your
              ideas to life.
            </p>
            <a
              href="mailto:careers@js-sbu.com"
              className="inline-block bg-white text-primary font-medium px-8 py-3 rounded-lg hover:bg-white/90 transition btn-pop"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching team data:', error)
    return notFound()
  }
}
