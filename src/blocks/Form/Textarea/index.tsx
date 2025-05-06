import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import { Textarea as TextAreaComponent } from '@/components/ui/textarea'
import React from 'react'
import { MessageSquare } from 'lucide-react'

import { Error } from '../Error'
import { Width } from '../Width'

export const Textarea: React.FC<
  TextField & {
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any
      }>
    >
    register: UseFormRegister<FieldValues>
    rows?: number
  }
> = ({
  name,
  defaultValue,
  errors,
  label,
  register,
  required: requiredFromProps,
  rows = 4,
  width,
}) => {
  return (
    <Width width={width}>
      <Label htmlFor={name} className="flex items-center gap-2 mb-2 font-medium text-foreground">
        <MessageSquare className="w-4 h-4 text-primary" />
        {label}
        {requiredFromProps && <span className="text-primary ml-1">*</span>}
      </Label>

      <TextAreaComponent
        defaultValue={defaultValue}
        id={name}
        rows={rows}
        className="w-full px-4 py-3 bg-card/50 border border-primary/30 rounded-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-colors resize-y"
        {...register(name, { required: requiredFromProps })}
      />

      {requiredFromProps && errors[name] && <Error />}
    </Width>
  )
}
