import { NextApiRequest, NextApiResponse } from 'next'

import { MovieService } from '@/services'

import { $validateMovieInput } from '@/utils'

export class MovieController {
  private static instance: MovieController // Singleton instance

  private movieService: MovieService

  constructor(movieService: MovieService) {
    this.movieService = movieService
  }

  public static getInstance(movieService: MovieService): MovieController {
    if (!this.instance) {
      this.instance = new MovieController(movieService)
    }

    return this.instance
  }

  /**
   * Handles the GET request to retrieve all movies.
   */
  public getMovies(res: NextApiResponse) {
    const movies = this.movieService.getMovies()

    res.status(200).json(movies)
  }

  /**
   * Handles the POST request to add a new movie.
   */
  public addMovie(req: NextApiRequest, res: NextApiResponse) {
    const { title, description } = $validateMovieInput(JSON.parse(req.body))

    const newMovie = this.movieService.addMovie(title, description)

    res.status(201).json(newMovie)
  }

  /**
   * Handles the DELETE request to remove a movie by ID.
   */
  public deleteMovie(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query

    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Invalid or missing movie ID.' })
    }

    const wasDeleted = this.movieService.deleteMovie(id)

    if (!wasDeleted) {
      return res.status(404).json({ error: 'Movie not found.' })
    }

    res.status(200).json({ message: 'Movie deleted successfully.' })
  }

  /**
   * Centralized error handling.
   */
  public handleError(res: NextApiResponse, error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred.'

    res.status(400).json({ error: errorMessage })
  }
}
