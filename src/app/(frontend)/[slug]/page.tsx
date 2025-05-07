import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { homeStatic } from '@/endpoints/seed/home-static'

import type { Page as PageType } from '@/payload-types'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import { queryPageBySlug } from '@/utilities/queryPageBySlug'
import PageClient from './page.client'
import HomeSection from '@/components/homeSection'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    select: {
      slug: true,
    },
  })

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      return { slug }
    })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { slug = 'home' } = await paramsPromise
  const url = '/' + slug

  let page: PageType | null

  page = await queryPageBySlug({
    slug,
  })

  // Remove this code once your website is seeded
  if (!page && slug === 'home') {
    page = homeStatic
  }

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  // If this is the home page, render our new HomeSection component
  if (slug === 'home') {
    return (
      <article className="min-h-screen">
        <PageClient />
        <PayloadRedirects disableNotFound url={url} />
        <HomeSection />
      </article>
    )
  }

  // For all other pages, use the standard layout
  const { hero, layout } = page

  return (
    <article className="min-h-screen">
      <PageClient />
      <PayloadRedirects disableNotFound url={url} />

      {/* Hero Section */}
      <RenderHero {...hero} />

      <div className="mt-0 relative z-10">
        <RenderBlocks blocks={layout} />
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }): Promise<Metadata> {
  const { slug = 'home' } = await paramsPromise
  let page: PageType | null

  page = await queryPageBySlug({
    slug,
  })

  if (!page && slug === 'home') {
    page = homeStatic
  }

  if (!page) {
    return {}
  }

  return await generateMeta({ doc: page })
}
