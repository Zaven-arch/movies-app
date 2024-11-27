import { useMemo } from 'react'

import { IButtonProps } from './IButtonProps.interface'

export const useButton = ({ color, disabled }: Partial<IButtonProps>) => {
  const colorClasses = useMemo(() => {
    if (disabled) {
      return 'bg-app-midnight-blue text-app-medium-gray'
    }

    switch (color) {
      case 'pink':
        return 'bg-app-salmon-pink-light group-hover:bg-app-dusty-rose'
      case 'green':
        return `bg-app-spring-green group-hover:bg-app-dusty-green`
      case 'white':
        return 'bg-app-white group-hover:bg-app-medium-gray-light'
      default:
        return ''
    }
  }, [color, disabled])

  return {
    colorClasses,
  }
}
