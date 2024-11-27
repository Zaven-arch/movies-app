import { ReactNode } from 'react'

import { IComponentProps } from './IComponentProps.interface'

export interface IComponentWithChildrenProps extends IComponentProps {
  children: ReactNode
}
