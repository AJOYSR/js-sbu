'use client'

import React, { createContext, useContext, useState } from 'react'

type LoaderContextType = {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  showLoader: () => void
  hideLoader: () => void
}

const LoaderContext = createContext<LoaderContextType | null>(null)

export const useLoader = (): LoaderContextType => {
  const context = useContext(LoaderContext)
  if (!context) {
    throw new Error('useLoader must be used within a LoaderProvider')
  }
  return context
}

export const LoaderProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)

  const showLoader = () => setIsLoading(true)
  const hideLoader = () => setIsLoading(false)

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading, showLoader, hideLoader }}>
      {children}
    </LoaderContext.Provider>
  )
}
