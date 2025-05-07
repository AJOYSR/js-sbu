import { cache } from 'react'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Page as PageType } from '@/payload-types'

export const queryPageBySlug = cache(
  async ({ slug, draft = false }: { slug: string; draft?: boolean }): Promise<PageType | null> => {
    const draft_mode = await draftMode()
    const isEnabled = draft_mode.isEnabled
    const payload = await getPayload({ config: configPromise })

    const pageQuery = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: slug,
        },
      },
      draft: isEnabled || draft,
      depth: 10,
      limit: 1,
    })

    const page = pageQuery.docs[0]
    return page || null
  },
)
