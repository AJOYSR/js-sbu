import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { Post } from '@/payload-types'

export async function fetchRelatedPostsBySkill(skill: string, limit: number = 2): Promise<Post[]> {
  try {
    const payload = await getPayload({ config: configPromise })

    // Try to find posts with categories matching the skill name
    const posts = await payload.find({
      collection: 'posts',
      depth: 1,
      limit,
      where: {
        and: [
          {
            'categories.title': {
              like: skill,
            },
          },
          {
            _status: {
              equals: 'published',
            },
          },
        ],
      },
    })

    return posts.docs
  } catch (error) {
    console.error(`Error fetching related posts for skill ${skill}:`, error)
    return []
  }
}
