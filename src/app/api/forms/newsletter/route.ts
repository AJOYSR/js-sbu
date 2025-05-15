import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Initialize Payload CMS
    const payload = await getPayload({ config: configPromise })

    // Find the newsletter form by title
    const formQuery = await payload.find({
      collection: 'forms',
      where: {
        title: {
          equals: 'NewsLetter',
        },
      },
    })

    // Get the form ID or return null
    const newsletterForm = formQuery.docs.length > 0 ? formQuery.docs[0] : null
    const formId = newsletterForm ? String(newsletterForm.id) : null

    // Return the form ID
    return NextResponse.json({ formId })
  } catch (error) {
    console.error('Error fetching newsletter form:', error)
    return NextResponse.json({ error: 'Failed to fetch newsletter form' }, { status: 500 })
  }
}
