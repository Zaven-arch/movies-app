/* eslint-disable @typescript-eslint/no-explicit-any */

import { SetStateAction } from 'react'

export interface IUseInput {
  value: string
  onChange: (e: any) => void
  setValue: (value: SetStateAction<string>) => void
}
