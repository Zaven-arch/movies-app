import { IMovie } from './IMovie.interface'
import { IUseInput } from './IUseInput.interface'

export interface IMoviesContextProps {
  filteredMovies: IMovie[]
  input: IUseInput
  onRemove: (id: string) => void
}
