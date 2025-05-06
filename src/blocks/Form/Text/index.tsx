import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { Type } from 'lucide-react'

import { Error } from '../Error'
import { Width } from '../Width'

export const Text: React.FC<
  TextField & {
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any
      }>
    >
    register: UseFormRegister<FieldValues>
  }
> = ({ name, defaultValue, errors, label, register, required: requiredFromProps, width }) => {
  return (
    <Width width={width}>
      <Label htmlFor={name} className="flex items-center gap-2 mb-2 font-medium text-foreground">
        <Type className="w-4 h-4 text-primary" />
        {label}
        {requiredFromProps && <span className="text-primary ml-1">*</span>}
      </Label>
      <Input
        defaultValue={defaultValue}
        id={name}
        type="text"
        className="w-full px-4 py-3 h-auto bg-card/50 border border-primary/30 rounded-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-colors"
        {...register(name, { required: requiredFromProps })}
      />
      {requiredFromProps && errors[name] && <Error />}
    </Width>
  )
}
