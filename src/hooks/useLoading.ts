'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useLoader } from '@/providers/Loader'

export const useLoading = () => {
  const router = useRouter()
  const { showLoader, hideLoader } = useLoader()

  // Show loader during navigation
  useEffect(() => {
    // Create handlers for router events
    const handleStart = () => {
      showLoader()
    }

    const handleComplete = () => {
      hideLoader()
    }

    // Add event listeners
    window.addEventListener('beforeunload', handleStart)
    window.addEventListener('load', handleComplete)

    // Setup navigation observer with MutationObserver
    // This is a fallback approach since Next.js App Router doesn't expose all navigation events
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList' && mutation.addedNodes.length) {
          handleComplete()
        }
      }
    })

    // Start observing changes to the document body
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      // Cleanup listeners
      window.removeEventListener('beforeunload', handleStart)
      window.removeEventListener('load', handleComplete)
      observer.disconnect()
    }
  }, [showLoader, hideLoader])

  return {
    showLoading: showLoader,
    hideLoading: hideLoader,
    withLoading: <T>(promise: Promise<T>): Promise<T> => {
      showLoader()
      return promise
        .then((result) => {
          hideLoader()
          return result
        })
        .catch((error) => {
          hideLoader()
          throw error
        })
    },
  }
}
