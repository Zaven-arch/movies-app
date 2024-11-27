import React from 'react'

import classNames from 'classnames'

import { Grid } from '@/components/Grid'

import { IMovieBoxProps } from './IMovieBoxProps.interface'

export const MovieBox: React.FC<Partial<IMovieBoxProps>> = ({
  height = 'h-[210px]',
  isEmpty,
  children,
  className,
  heading,
  headingClassName,
}) => {
  return (
    <Grid
      className={classNames(
        'rounded-[14px]',
        height,
        {
          'border border-app-charcoal-gray': isEmpty,
        },
        className,
      )}
      placeItemsCenter={isEmpty}
    >
      {heading && (
        <Grid
          className={classNames(
            'text-app-medium-gray text-xs px-[15px] pt-[13px]',
            headingClassName,
          )}
        >
          {heading.map((title, index) => (
            <span key={index}>{title}</span>
          ))}
        </Grid>
      )}
      {children && (
        <div className="max-h-[calc(45px_*_12)] overflow-y-auto custom-overflow py-3 px-2">
          <Grid className="gap-1">{children}</Grid>
        </div>
      )}
    </Grid>
  )
}
