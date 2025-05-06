import React from 'react'

import { HeaderThemeProvider } from './HeaderTheme'
import { ThemeProvider } from './Theme'
import { LoaderProvider } from './Loader'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <HeaderThemeProvider>
        <LoaderProvider>{children}</LoaderProvider>
      </HeaderThemeProvider>
    </ThemeProvider>
  )
}
