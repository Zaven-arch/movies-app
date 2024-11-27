import { useRouter } from 'next/router'

import { useInput } from '@/hooks'
import { IMovie } from '@/interfaces'
import { useMemo } from 'react'

export const useCreatePage = () => {
  const { value: title, onChange: onTitleChange } = useInput()
  const { value: description, onChange: onDescriptionChange } = useInput()

  const $router = useRouter()

  const onBackHandler = () => $router.back()

  const onSubmitHandler = async () => {
    try {
      if (!title.trim() || !description.trim()) {
        return false
      }

      const payload: Omit<IMovie, 'id'> = {
        title,
        description,
      }

      await fetch(`/api/movies`, {
        method: 'POST',
        body: JSON.stringify(payload),
      })

      $router.push('/')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.log(e)
    }
  }

  const isDisabled = useMemo(
    () => !title.trim() || !description.trim(),
    [title, description],
  )

  return {
    onBackHandler,
    onSubmitHandler,
    isDisabled,
    titleAttrs: {
      value: title,
      onChange: onTitleChange,
    },
    descriptionAttrs: {
      value: description,
      onChange: onDescriptionChange,
    },
  }
}
