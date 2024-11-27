/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from 'react'

export const useInput = (initialValue: string = '') => {
  const [value, setValue] = useState(initialValue)

  const onChange = ({ target }: any) => setValue(target.value)

  return {
    value,
    onChange,
    setValue,
  }
}
