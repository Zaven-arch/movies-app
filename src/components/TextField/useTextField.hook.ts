import { useEffect, useRef, useState } from 'react'

import { ITextFieldProps } from './ITextFieldProps.interface'

import { useInput } from '@/hooks'

export const useTextField = ({
  disabled,
  debounced,
  onChange,
  value: initialValue,
}: Partial<ITextFieldProps>) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputRef = useRef<any>(null)

  const [isFocused, setIsFocused] = useState(false)
  const { value, onChange: onInputChange } = useInput(initialValue)

  const onClickHandler = () => {
    if (disabled) {
      return
    }

    inputRef.current?.focus()

    setIsFocused(true)
  }

  useEffect(() => {
    if (!debounced) {
      return onChange?.({ target: { value } })
    }

    const handler = setTimeout(() => {
      onChange?.({ target: { value } })
    }, 500)

    return () => {
      clearTimeout(handler)
    }
  }, [value, onChange, debounced])

  return {
    isFocused,
    setIsFocused,
    onClickHandler,
    inputRef,
    inputAttrs: { value, onChange: onInputChange },
  }
}
