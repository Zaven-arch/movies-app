import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { INavbarMenuItemProps } from './INavbarMenuItemProps.interface'
import classNames from 'classnames'

export const NavbarMenuItem: React.FC<INavbarMenuItemProps> = ({
  text,
  value,
}) => {
  const currentPath = usePathname()

  return (
    <Link href={value} className="py-[7px]">
      <div
        className={classNames(
          'min-w-[86px] flex items-center justify-center p-4 cursor-pointer group hover:bg-app-midnight-blue rounded-md transition-all',
          { 'bg-app-midnight-blue': currentPath === value },
        )}
      >
        <span
          className={classNames(
            'text-app-medium-gray text-sm leading-[9px] transition-all group-hover:text-app-white',
            { 'text-app-white': currentPath === value },
          )}
        >
          {text}
        </span>
      </div>
    </Link>
  )
}
