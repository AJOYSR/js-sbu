import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const sort = url.searchParams.get('sort') || '-createdAt'
    const limit = Number(url.searchParams.get('limit')) || 5

    // Initialize Payload CMS
    const payload = await getPayload({ config: configPromise })

    // Fetch slides
    const response = await payload.find({
      collection: 'slides',
      sort: sort,
      limit: limit,
    })

    // Return the slides
    return NextResponse.json(response)
  } catch (error) {
    console.error('Error fetching slides:', error)
    return NextResponse.json({ error: 'Failed to fetch slides' }, { status: 500 })
  }
}
