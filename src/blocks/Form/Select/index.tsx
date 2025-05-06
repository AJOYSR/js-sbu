import type { SelectField } from '@payloadcms/plugin-form-builder/types'
import type { Control, FieldErrorsImpl, FieldValues } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import {
  Select as SelectComponent,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React from 'react'
import { Controller } from 'react-hook-form'
import { ListFilter } from 'lucide-react'

import { Error } from '../Error'
import { Width } from '../Width'

export const Select: React.FC<
  SelectField & {
    control: Control<FieldValues, any>
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any
      }>
    >
  }
> = ({ name, control, errors, label, options, required, width }) => {
  return (
    <Width width={width}>
      <Label htmlFor={name} className="flex items-center gap-2 mb-2 font-medium text-foreground">
        <ListFilter className="w-4 h-4 text-primary" />
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </Label>
      <Controller
        control={control}
        defaultValue=""
        name={name}
        render={({ field: { onChange, value } }) => {
          const controlledValue = options.find((t) => t.value === value)

          return (
            <SelectComponent onValueChange={(val) => onChange(val)} value={controlledValue?.value}>
              <SelectTrigger
                className="w-full px-4 py-3 h-auto bg-card/50 border border-primary/30 rounded-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-colors"
                id={name}
              >
                <SelectValue placeholder={label} />
              </SelectTrigger>
              <SelectContent className="border border-primary/30 shadow-md animate-fadeIn">
                {options.map(({ label, value }) => {
                  return (
                    <SelectItem
                      key={value}
                      value={value}
                      className="hover:bg-primary/10 transition-colors focus:bg-primary/10"
                    >
                      {label}
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </SelectComponent>
          )
        }}
        rules={{ required }}
      />
      {required && errors[name] && <Error />}
    </Width>
  )
}
