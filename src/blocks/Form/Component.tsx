'use client'
import type { Form as FormType } from '@payloadcms/plugin-form-builder/types'

import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'
import { Loader2, CheckCircle, AlertCircle, Send } from 'lucide-react'

import { buildInitialFormState } from './buildInitialFormState'
import { fields } from './fields'
import { getClientSideURL } from '@/utilities/getURL'

export type Value = unknown

export interface Property {
  [key: string]: Value
}

export interface Data {
  [key: string]: Property | Property[]
}

export type FormBlockType = {
  blockName?: string
  blockType?: 'formBlock'
  enableIntro: boolean
  form: FormType
  introContent?: {
    [k: string]: unknown
  }[]
}

export const FormBlock: React.FC<
  {
    id?: string
  } & FormBlockType
> = (props) => {
  const {
    enableIntro,
    form: formFromProps,
    form: { id: formID, confirmationMessage, confirmationType, redirect, submitButtonLabel } = {},
    introContent,
  } = props

  const formMethods = useForm({
    defaultValues: buildInitialFormState(formFromProps.fields),
  })
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState<boolean>()
  const [error, setError] = useState<{ message: string; status?: string } | undefined>()
  const router = useRouter()

  const onSubmit = useCallback(
    (data: Data) => {
      let loadingTimerID: ReturnType<typeof setTimeout>
      const submitForm = async () => {
        setError(undefined)

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }))

        // delay loading indicator by 1s
        loadingTimerID = setTimeout(() => {
          setIsLoading(true)
        }, 1000)

        try {
          const req = await fetch(`${getClientSideURL()}/api/form-submissions`, {
            body: JSON.stringify({
              form: formID,
              submissionData: dataToSend,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          })

          const res = await req.json()

          clearTimeout(loadingTimerID)

          if (req.status >= 400) {
            setIsLoading(false)

            setError({
              message: res.errors?.[0]?.message || 'Internal Server Error',
              status: res.status,
            })

            return
          }

          setIsLoading(false)
          setHasSubmitted(true)

          if (confirmationType === 'redirect' && redirect) {
            const { url } = redirect

            const redirectUrl = url

            if (redirectUrl) router.push(redirectUrl)
          }
        } catch (err) {
          console.warn(err)
          setIsLoading(false)
          setError({
            message: 'Something went wrong.',
          })
        }
      }

      void submitForm()
    },
    [router, formID, redirect, confirmationType],
  )

  return (
    <div className="w-full">
      {enableIntro && introContent && !hasSubmitted && (
        <RichText className="mb-8 text-foreground/90" content={introContent} enableGutter={false} />
      )}
      <div className="w-full">
        <FormProvider {...formMethods}>
          {!isLoading && hasSubmitted && confirmationType === 'message' && (
            <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl animate-fadeIn">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">
                  Thank you!
                </h3>
              </div>
              <RichText content={confirmationMessage} />
            </div>
          )}

          {isLoading && !hasSubmitted && (
            <div className="p-6 flex flex-col items-center justify-center text-center space-y-4 animate-fadeIn">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
              <p className="text-foreground/80 text-lg">Submitting your message...</p>
            </div>
          )}

          {error && (
            <div className="p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl animate-fadeIn">
              <div className="flex items-center gap-3 mb-2">
                <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                <h3 className="text-xl font-semibold text-red-700 dark:text-red-400">Error</h3>
              </div>
              <p className="text-red-600 dark:text-red-400">{`${error.status || '500'}: ${error.message || 'Something went wrong.'}`}</p>
            </div>
          )}

          {!hasSubmitted && !isLoading && (
            <form id={formID} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                {formFromProps &&
                  formFromProps.fields &&
                  formFromProps.fields?.map((field, index) => {
                    const Field: React.FC<any> = fields?.[field.blockType]
                    if (Field) {
                      return (
                        <div className="mb-6 last:mb-0" key={index}>
                          <Field
                            form={formFromProps}
                            {...field}
                            {...formMethods}
                            control={control}
                            errors={errors}
                            register={register}
                          />
                        </div>
                      )
                    }
                    return null
                  })}
              </div>

              <Button
                form={formID}
                type="submit"
                className="w-full btn-gradient text-white px-6 py-3 h-auto rounded-lg shadow-md hover-scale btn-pop transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {submitButtonLabel || 'Submit'}
              </Button>
            </form>
          )}
        </FormProvider>
      </div>
    </div>
  )
}
