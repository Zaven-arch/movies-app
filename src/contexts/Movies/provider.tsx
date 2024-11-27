import { useEffect, useState } from 'react'

import { MoviesContext } from './context'

import { IMovie, IMoviesProviderProps } from '@/interfaces'

import { useInput } from '@/hooks'

export const MoviesProvider: React.FC<IMoviesProviderProps> = ({
  children,
}) => {
  const [movies, setMovies] = useState<IMovie[]>([])
  const [filteredMovies, setFilteredMovies] = useState<IMovie[]>([])

  const { value, onChange, setValue } = useInput()

  const fetchData = async () => {
    try {
      const res = await fetch('/api/movies')

      const data = await res.json()

      setMovies(data)
      setFilteredMovies(data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (!value.trim()) {
      setFilteredMovies(movies)

      return
    }

    setFilteredMovies(
      movies.filter((movie: IMovie) =>
        movie.title.startsWith(value.toLowerCase()),
      ),
    )
  }, [value, movies])

  const onRemove = async (id: string) => {
    try {
      await fetch(`/api/movies/${id}`, {
        method: 'DELETE',
      })

      await fetchData()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <MoviesContext.Provider
      value={{ filteredMovies, input: { value, onChange, setValue }, onRemove }}
    >
      {children}
    </MoviesContext.Provider>
  )
}
