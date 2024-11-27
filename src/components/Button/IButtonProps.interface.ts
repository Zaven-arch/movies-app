/* eslint-disable @typescript-eslint/no-explicit-any */

import { IComponentWithChildrenProps } from '@/interfaces'

export type TButtonColor = 'pink' | 'green' | 'white'

export interface IButtonProps extends IComponentWithChildrenProps {
  color: TButtonColor
  disabled: boolean
  customize: any
  action: () => any
}
