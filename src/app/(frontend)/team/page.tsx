import React, { Suspense } from 'react'
import Image from 'next/image'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'

// Import components directly
import { TeamHero } from './components/TeamHero'
import { LeadershipSection } from './components/LeadershipSection'
import { TeamStructureSection } from './components/TeamStructureSection'
import { PaginationSection } from './components/PaginationSection'
import { JoinUsSection } from './components/JoinUsSection'

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

// Loading component
const LoadingSkeleton = () => (
  <div className="min-h-screen animate-pulse">
    <div className="h-[60vh] bg-gray-200 dark:bg-gray-800"></div>
    <div className="container mx-auto px-4 py-20">
      <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded-full mx-auto mb-8"></div>
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-96 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
        ))}
      </div>
    </div>
  </div>
)

// Optimize data fetching with React.cache and add stale-while-revalidate pattern
const fetchLeadershipTeam = React.cache(async () => {
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
})

const fetchTeamMembers = React.cache(async (page: number) => {
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
})

// Add generateMetadata for better SEO
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Team | JS SBU',
    description: 'Meet our team of JavaScript experts at JS SBU',
  }
}

// Change revalidation time to 5 minutes for more frequent updates
export const revalidate = 300

export default async function TeamPage({ searchParams }: Props) {
  const params = await searchParams
  const currentPage = Number(params?.page) || 1

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <TeamPageContent currentPage={currentPage} />
    </Suspense>
  )
}

// Separate content component for better suspense boundaries
async function TeamPageContent({ currentPage }: { currentPage: number }) {
  try {
    // Fetch data in parallel with Promise.all
    const [leadershipTeam, teamMembersResponse] = await Promise.all([
      fetchLeadershipTeam(),
      fetchTeamMembers(currentPage),
    ])

    const teamMembers = teamMembersResponse.docs
    const totalPages = Math.ceil(teamMembersResponse.totalDocs / ITEMS_PER_PAGE)

    return (
      <div className="min-h-screen animate-fadeIn">
        {/* <TeamHero /> */}

        {leadershipTeam.length > 0 && <LeadershipSection leadershipTeam={leadershipTeam} />}

        <TeamStructureSection
          teamMembers={teamMembers}
          teamCategories={teamCategories}
          GetCategoryIcon={GetCategoryIcon}
        />

        {totalPages > 1 && <PaginationSection currentPage={currentPage} totalPages={totalPages} />}

        <JoinUsSection />
      </div>
    )
  } catch (error) {
    console.error('Error fetching team data:', error)
    return notFound()
  }
}
