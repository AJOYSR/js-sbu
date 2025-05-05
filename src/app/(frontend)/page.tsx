import React from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import HomeSection from '@/components/homeSection'

export const metadata: Metadata = {
  title: 'Home - Modern Web Solutions',
  description: 'Building innovative solutions for tomorrow with cutting-edge technology',
}

export default async function Home() {
  return (
    <React.Fragment>
      <HomeSection />
    </React.Fragment>
  )
}
