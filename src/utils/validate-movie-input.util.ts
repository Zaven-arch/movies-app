import { IMovie } from '@/interfaces'

type TMovieInput = Omit<IMovie, 'id'>

export const validateMovieInput = ({
  title,
  description,
}: TMovieInput): TMovieInput => {
  if (typeof title !== 'string' || !title.trim()) {
    throw new Error('Title must be a non-empty string.')
  }

  if (typeof description !== 'string' || !description.trim()) {
    throw new Error('Description must be a non-empty string.')
  }

  return { title: title.trim(), description: description.trim() }
}
