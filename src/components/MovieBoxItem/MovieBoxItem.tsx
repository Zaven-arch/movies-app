import React from 'react'

import classNames from 'classnames'

import { IMovieBoxItemProps } from './IMovieBoxItemProps.interface'

import RemoveIcon from '@/assets/svg/remove-icon.svg'

import { Grid } from '@/components/Grid'

export const MovieBoxItem: React.FC<IMovieBoxItemProps> = ({
  title,
  description,
  className,
  removable,
  order,
  action,
}) => {
  return (
    <div className="flex items-center gap-2 group">
      <Grid
        className={classNames(
          'p-2 text-xs bg-app-charcoal-gray rounded-md select-none cursor-pointer transition-all group-hover:bg-app-white grow gap-3',
          className,
        )}
      >
        <span className="transition-all text-app-white group-hover:text-app-midnight-blue text-center">
          {order + 1}
        </span>
        <span className="transition-all text-app-white truncate group-hover:text-app-midnight-blue">
          {title || <>&mdash;</>}
        </span>
        <span className="transition-all text-app-white truncate group-hover:text-app-midnight-blue">
          {description || <>&mdash;</>}
        </span>
      </Grid>
      {removable && (
        <RemoveIcon
          className="w-4 h-4 group-hover:[&_path]:fill-app-salmon-pink cursor-pointer transition-all"
          onClick={action}
        />
      )}
    </div>
  )
}
