import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { PAYLOAD_SERVER_URL } from './getServerURL'

export const fetchDocs = async (
  collection: string,
  options?: {
    draft?: boolean
    limit?: number
    page?: number
    sort?: string
    where?: Record<string, unknown>
  } & {
    token?: RequestCookie
  },
): Promise<any> => {
  const { draft = false, limit = 10, page = 1, sort = '-createdAt', where, token } = options || {}

  const searchParams = new URLSearchParams()

  if (draft) searchParams.append('draft', 'true')
  if (limit) searchParams.append('limit', limit.toString())
  if (page) searchParams.append('page', page.toString())
  if (sort) searchParams.append('sort', sort)
  if (where) searchParams.append('where', JSON.stringify(where))

  try {
    const res = await fetch(`${PAYLOAD_SERVER_URL}/api/${collection}?${searchParams.toString()}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(token?.value && {
          Authorization: `JWT ${token.value}`,
        }),
      },
      next: { revalidate: 0 },
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch ${collection}: ${res.status} ${res.statusText}`)
    }

    const data = await res.json()
    return data?.docs || []
  } catch (error) {
    console.error(`Error fetching ${collection}:`, error)
    return []
  }
}
