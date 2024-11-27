import React from 'react'

import classNames from 'classnames'

import { IContainerProps } from './IContainerProps.interface'

export const Container: React.FC<Partial<IContainerProps>> = ({
  children,
  className,
  fluid,
}) => (
  <div
    className={classNames(
      'container mx-auto p-3 max-w-[1200px]',
      { 'max-w-[calc(100%_-_36px)]': fluid },
      className,
    )}
  >
    {children}
  </div>
)
