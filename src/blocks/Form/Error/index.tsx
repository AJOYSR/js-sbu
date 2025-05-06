import * as React from 'react'
import { AlertCircle } from 'lucide-react'

export const Error: React.FC = () => {
  return (
    <div className="mt-2 text-destructive flex items-center gap-1.5 text-sm animate-fadeIn">
      <AlertCircle className="w-3.5 h-3.5" />
      <span>This field is required</span>
    </div>
  )
}
