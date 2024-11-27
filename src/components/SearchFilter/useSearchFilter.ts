import { useMovies } from '@/hooks'
import { useMemo } from 'react'

export const useSearchFilter = () => {
  const { input } = useMovies()

  const isRemoveIconActive = useMemo<boolean>(
    () => Boolean(input.value.toString().trim()),
    [input.value],
  )

  const onRemoveHandler = () => input.setValue('')

  return {
    isRemoveIconActive,
    onRemoveHandler,
    inputAttrs: { value: input.value, onChange: input.onChange },
  }
}
