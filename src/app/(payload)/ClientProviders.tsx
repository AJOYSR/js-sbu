'use client'

import React from 'react'

// Create a simple UploadHandlersProvider context
const UploadHandlersContext = React.createContext<Record<string, any>>({})

export const UploadHandlersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [handlers, setHandlers] = React.useState<Record<string, any>>({})

  const registerHandler = React.useCallback((name: string, handler: any) => {
    setHandlers((prev) => ({ ...prev, [name]: handler }))
  }, [])

  return (
    <UploadHandlersContext.Provider value={{ handlers, registerHandler }}>
      {children}
    </UploadHandlersContext.Provider>
  )
}

// Export a hook to use the context
export const useUploadHandlers = () => {
  const context = React.useContext(UploadHandlersContext)
  if (context === undefined) {
    throw new Error('useUploadHandlers must be used within UploadHandlersProvider')
  }
  return context
}

export const ClientProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <UploadHandlersProvider>{children}</UploadHandlersProvider>
}
