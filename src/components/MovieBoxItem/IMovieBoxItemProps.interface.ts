import { IComponentProps } from '@/interfaces'

export interface IMovieBoxItemProps extends IComponentProps {
  removable?: boolean
  order: number
  title: string
  description: string
  action?: () => void
}
