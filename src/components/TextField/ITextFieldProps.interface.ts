import { ReactNode } from 'react'

import { IComponentProps } from '@/interfaces'

export interface ITextFieldProps extends IComponentProps {
  prepend: ReactNode
  append: ReactNode
  disabled: boolean
  textArea: boolean
  value?: string
  debounced: boolean
  onChange?: (e: unknown) => void
}
