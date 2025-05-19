import React, { Suspense } from 'react'
import Image from 'next/image'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

// Loading components
const TeamHeroSkeleton = () => (
  <div className="relative py-20 bg-gradient-to-b from-gray-900 to-background overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-32 h-8 bg-white/20 rounded-full mx-auto mb-6 animate-pulse"></div>
        <div className="h-16 bg-white/10 rounded-lg mb-6 animate-pulse"></div>
        <div className="h-24 bg-white/10 rounded-lg mb-10 animate-pulse"></div>
      </div>
    </div>
  </div>
)

const TeamCardSkeleton = () => (
  <div className="glass-card rounded-2xl overflow-hidden shadow-xl border border-white/5 animate-pulse">
    <div className="h-80 bg-gray-700/30"></div>
    <div className="p-8">
      <div className="h-8 bg-gray-700/30 rounded mb-2"></div>
      <div className="h-6 w-32 bg-primary/30 rounded mb-4"></div>
      <div className="h-20 bg-gray-700/30 rounded mb-6"></div>
      <div className="h-4 bg-gray-700/20 rounded mb-3 w-24"></div>
      <div className="flex flex-wrap gap-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-8 w-16 bg-primary/10 rounded-full"></div>
        ))}
      </div>
    </div>
  </div>
)

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

// Get Category Icon component
const GetCategoryIcon = ({ value }: { value: string }) => {
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

// Dynamically import components
const TeamHero = dynamic(() => import('./components/TeamHero').then((mod) => mod.TeamHero), {
  loading: () => <TeamHeroSkeleton />,
})

const LeadershipSection = dynamic(
  () => import('./components/LeadershipSection').then((mod) => mod.LeadershipSection),
  {
    loading: () => (
      <div className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-32 h-8 bg-primary/10 rounded-full mx-auto mb-4 animate-pulse"></div>
            <div className="h-12 bg-gray-700/20 rounded-lg mb-6 w-96 mx-auto animate-pulse"></div>
            <div className="h-20 bg-gray-700/10 rounded-lg mb-10 max-w-3xl mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <TeamCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    ),
  },
)

const TeamStructureSection = dynamic(
  () => import('./components/TeamStructureSection').then((mod) => mod.TeamStructureSection),
  {
    loading: () => (
      <div className="py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-32 h-8 bg-primary/10 rounded-full mx-auto mb-4 animate-pulse"></div>
            <div className="h-12 bg-gray-700/20 rounded-lg mb-6 w-96 mx-auto animate-pulse"></div>
            <div className="h-8 bg-gray-700/10 rounded-lg mb-10 max-w-lg mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="glass-card rounded-2xl overflow-hidden animate-pulse h-96"
              ></div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
)

const PaginationSection = dynamic(
  () => import('./components/PaginationSection').then((mod) => mod.PaginationSection),
  {
    loading: () => (
      <div className="py-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center animation-delay-600 animate-fadeIn">
            <div className="h-10 w-64 bg-gray-100/10 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    ),
  },
)

const JoinUsSection = dynamic(
  () => import('./components/JoinUsSection').then((mod) => mod.JoinUsSection),
  {
    loading: () => (
      <div className="py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass-card rounded-3xl p-10 md:p-16 animate-pulse h-80"></div>
        </div>
      </div>
    ),
  },
)

export const metadata: Metadata = {
  title: 'Team | JS SBU',
  description: 'Team JS SBU website',
}

// Data fetching function to be used with React.cache
const fetchLeadershipTeam = async () => {
  const payload = await getPayload({ config: configPromise })
  const response = await payload.find({
    collection: 'team-members',
    where: {
      teamType: {
        equals: 'leadership',
      },
    },
    sort: 'order',
  })
  return response.docs
}

const fetchTeamMembers = async (page: number) => {
  const payload = await getPayload({ config: configPromise })
  return await payload.find({
    collection: 'team-members',
    where: {
      teamType: {
        not_equals: 'leadership',
      },
    },
    pagination: true,
    page: page,
    limit: ITEMS_PER_PAGE,
    sort: ['teamType', 'order'],
  })
}

const fetchTotalCount = async () => {
  const payload = await getPayload({ config: configPromise })
  const response = await payload.find({
    collection: 'team-members',
    where: {
      teamType: {
        not_equals: 'leadership',
      },
    },
    limit: 0,
  })
  return response.totalDocs
}

export const dynamicParams = true
export const revalidate = 3600 // Revalidate every hour

export default async function TeamPage({ searchParams }: Props) {
  // Parse current page from search params or default to 1
  const params = await searchParams
  const currentPage = Number(params?.page) || 1

  try {
    // Fetch data in parallel
    const [leadershipTeam, teamMembersResponse, totalItems] = await Promise.all([
      fetchLeadershipTeam(),
      fetchTeamMembers(currentPage),
      fetchTotalCount(),
    ])

    // Calculate total pages
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE)
    const teamMembers = teamMembersResponse.docs

    return (
      <div className="min-h-screen animate-fadeIn">
        <Suspense fallback={<TeamHeroSkeleton />}>
          <TeamHero />
        </Suspense>

        {/* Leadership Section */}
        {leadershipTeam.length > 0 && (
          <Suspense
            fallback={
              <div className="py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                    <div className="w-32 h-8 bg-primary/10 rounded-full mx-auto mb-4 animate-pulse"></div>
                    <div className="h-12 bg-gray-700/20 rounded-lg mb-6 w-96 mx-auto animate-pulse"></div>
                    <div className="h-20 bg-gray-700/10 rounded-lg mb-10 max-w-3xl mx-auto animate-pulse"></div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                      <TeamCardSkeleton key={i} />
                    ))}
                  </div>
                </div>
              </div>
            }
          >
            <LeadershipSection leadershipTeam={leadershipTeam} />
          </Suspense>
        )}

        {/* Team Structure Section */}
        <Suspense
          fallback={
            <div className="py-20 bg-gradient-to-b from-card/30 to-background">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <div className="w-32 h-8 bg-primary/10 rounded-full mx-auto mb-4 animate-pulse"></div>
                  <div className="h-12 bg-gray-700/20 rounded-lg mb-6 w-96 mx-auto animate-pulse"></div>
                  <div className="h-8 bg-gray-700/10 rounded-lg mb-10 max-w-lg mx-auto animate-pulse"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="glass-card rounded-2xl overflow-hidden animate-pulse h-96"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          }
        >
          <TeamStructureSection
            teamMembers={teamMembers}
            teamCategories={teamCategories}
            GetCategoryIcon={GetCategoryIcon}
          />
        </Suspense>

        {/* Pagination */}
        {totalPages > 1 && (
          <Suspense
            fallback={
              <div className="py-10 relative z-10">
                <div className="container mx-auto px-4">
                  <div className="flex justify-center animation-delay-600 animate-fadeIn">
                    <div className="h-10 w-64 bg-gray-100/10 rounded-lg animate-pulse"></div>
                  </div>
                </div>
              </div>
            }
          >
            <PaginationSection currentPage={currentPage} totalPages={totalPages} />
          </Suspense>
        )}

        {/* Join Us Section */}
        <Suspense
          fallback={
            <div className="py-20 bg-gradient-to-b from-card/30 to-background">
              <div className="max-w-4xl mx-auto px-4">
                <div className="glass-card rounded-3xl p-10 md:p-16 animate-pulse h-80"></div>
              </div>
            </div>
          }
        >
          <JoinUsSection />
        </Suspense>
      </div>
    )
  } catch (error) {
    console.error('Error fetching team data:', error)
    return notFound()
  }
}
