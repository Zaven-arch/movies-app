import { createContext } from 'react'

import { IMoviesContextProps } from '@/interfaces'

export const MoviesContext = createContext<IMoviesContextProps | undefined>(
  undefined,
)
