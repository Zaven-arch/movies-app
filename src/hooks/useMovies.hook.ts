import { useContext } from 'react'

import { IMoviesContextProps } from '@/interfaces'

import { MoviesContext } from '@/contexts/Movies'

export const useMovies = (): IMoviesContextProps => {
  const context = useContext(MoviesContext)

  if (!context) {
    throw new Error('useMovies must be used within a MoviesProvider')
  }

  return context
}
