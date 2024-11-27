import { useMovies } from '@/hooks'

export const useMoviesComponent = () => {
  const { filteredMovies, onRemove } = useMovies()

  const heading: string[] = ['Order', 'Title', 'Description']

  return {
    heading,
    filteredMovies,
    onRemove,
  }
}
