import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function POST(request: Request) {
  try {
    const { formId, submissionData } = await request.json()

    if (!formId || !submissionData || !submissionData.email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Initialize Payload
    const payload = await getPayload({ config: configPromise })

    // Format submission data for the form-submissions collection
    const formattedSubmissionData = Object.entries(submissionData).map(([field, value]) => ({
      field,
      value: String(value),
    }))

    // Create form submission
    const submission = await payload.create({
      collection: 'form-submissions',
      data: {
        form: formId,
        submissionData: formattedSubmissionData,
      },
    })

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully', submission },
      { status: 200 },
    )
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form', details: (error as Error).message },
      { status: 500 },
    )
  }
}
