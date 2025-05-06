import * as React from 'react'

export const Width: React.FC<{
  children: React.ReactNode
  className?: string
  width?: number | string
}> = ({ children, className, width }) => {
  return (
    <div
      className={`mb-6 last:mb-0 transition-all ${className || ''}`}
      style={{ maxWidth: width ? `${width}%` : undefined }}
    >
      {children}
    </div>
  )
}
