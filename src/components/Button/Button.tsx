import React from 'react'

import classNames from 'classnames'

import { IButtonProps } from './IButtonProps.interface'

import { Grid } from '@/components/Grid'

import { useButton } from './useButton'

export const Button: React.FC<Partial<IButtonProps>> = ({
  children,
  className,
  color,
  disabled,
  customize,
  action,
}) => {
  const { colorClasses } = useButton({
    disabled,
    color,
  })

  return (
    <div onClick={action}>
      <Grid className={classNames('select-none gap-4 group', className)}>
        <Grid
          placeItemsCenter
          className={classNames(
            'rounded-lg transition-all leading-[1.17] gap-3 p-3 text-sm',
            disabled ? 'cursor-not-allowed' : 'cursor-pointer',
            colorClasses,
            customize,
          )}
        >
          {children}
        </Grid>
      </Grid>
    </div>
  )
}
