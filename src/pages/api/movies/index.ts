import { NextApiRequest, NextApiResponse } from 'next'

import { MovieController } from '@/controllers'

import { MovieService } from '@/services'

// Singleton instance of the MovieService
const movieService = MovieService.getInstance()

// Instantiate the controller with the service
const movieController = MovieController.getInstance(movieService)

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        return movieController.getMovies(res)

      case 'POST':
        return movieController.addMovie(req, res)

      default:
        res.setHeader('Allow', ['GET', 'POST'])

        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
  } catch (error: unknown) {
    movieController.handleError(res, error)
  }
}