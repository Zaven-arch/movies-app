import React from 'react'

import { MovieBox } from '@/components/MovieBox'
import { MovieBoxItem } from '@/components/MovieBoxItem'

import { IMovie } from '@/interfaces'

import { useMoviesComponent } from './useMovies'

export const Movies = () => {
  const { heading, filteredMovies, onRemove } = useMoviesComponent()

  return (
    <>
      {filteredMovies.length ? (
        <MovieBox
          className="bg-app-midnight-blue grid-rows-[min-content]"
          height="max-h-[510px]"
          heading={heading}
          headingClassName="grid-cols-[35px_repeat(2,_1fr),_24px] gap-3"
        >
          {filteredMovies.map((movie: IMovie, idx: number) => (
            <MovieBoxItem
              key={`movie-item-${movie.id}`}
              removable
              order={idx}
              title={movie.title}
              description={movie.description}
              className="grid-cols-[35px_repeat(2,_1fr)]"
              action={() => onRemove(movie.id)}
            />
          ))}
        </MovieBox>
      ) : (
        <MovieBox isEmpty>
          <span className="text-sm text-app-medium-gray">Empty data</span>
        </MovieBox>
      )}
    </>
  )
}
