import { IComponentWithChildrenProps } from '@/interfaces'

export interface IMovieBoxProps extends IComponentWithChildrenProps {
  heading: string[]
  height: string
  headingClassName: string
  isEmpty: boolean
}
