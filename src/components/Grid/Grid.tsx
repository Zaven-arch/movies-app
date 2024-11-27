import React from 'react'

import classNames from 'classnames'

import { IGridProps } from './IGridProps.interface'

export const Grid: React.FC<Partial<IGridProps>> = ({
  children,
  className,
  placeItemsCenter,
}) => {
  return (
    <div
      className={classNames(
        'grid',
        {
          'place-items-center': placeItemsCenter,
        },
        className,
      )}
    >
      {children}
    </div>
  )
}
