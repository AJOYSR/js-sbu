import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Portfolio } from '@/payload-types'
export async function getRecentProjects(category: string): Promise<Portfolio[]> {
  const payload = await getPayload({ config: configPromise })

  try {
    const projects = await payload.find({
      collection: 'portfolio',
      limit: 2,
      sort: '-publishedAt',
      where: {
        category: {
          equals: category,
        },
      },
    })
    return projects.docs
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}
