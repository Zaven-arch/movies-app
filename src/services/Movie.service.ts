import { v4 as uuidv4 } from 'uuid'

import { IMovie } from '@/interfaces'

/**
 * Singleton service for managing movies in memory.
 */
export class MovieService {
  private static instance: MovieService // Singleton instance

  private movies: Map<string, IMovie> = new Map() // In-memory storage

  private constructor() {} // Private constructor to enforce singleton

  /**
   * Retrieves the singleton instance.
   * @returns {MovieService} Singleton instance.
   */
  public static getInstance(): MovieService {
    if (!this.instance) {
      this.instance = new MovieService()
    }

    return this.instance
  }

  /**
   * Retrieves all movies.
   * @returns {IMovie[]} List of movies.
   */
  public getMovies(): IMovie[] {
    return [...this.movies.values()]
  }

  /**
   * Adds a new movie.
   * @param {string} title - Movie title.
   * @param {string} description - Movie description.
   * @returns {IMovie} The created movie object.
   */
  public addMovie(title: string, description: string): IMovie {
    const movie: IMovie = {
      id: uuidv4(),
      title,
      description,
    }

    this.movies.set(movie.id, movie)

    return movie
  }

  /**
   * Deletes a movie by ID.
   * @param {string} id - Movie ID.
   * @returns {boolean} Whether the deletion was successful.
   */
  public deleteMovie(id: string): boolean {
    const initialLength = this.movies.size

    this.movies.delete(id)

    return this.movies.size < initialLength
  }
}
