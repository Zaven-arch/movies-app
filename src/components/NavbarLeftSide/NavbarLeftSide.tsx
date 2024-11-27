import React from 'react'

import { NavbarMenuItem } from '@/components/NavbarMenuItem'

import { useNavbarLeftSide } from './useNavbarLeftSide.hook'

export const NavbarLeftSide: React.FC = () => {
  const { menuItems } = useNavbarLeftSide()

  return (
    <div className="flex gap-6 items-center">
      <div className="text-app-white font-semibold text-2xl">Movies App</div>
      <div className="flex items-center gap-2">
        {menuItems.map((item) => (
          <NavbarMenuItem
            key={item.value}
            text={item.text}
            value={item.value}
          />
        ))}
      </div>
    </div>
  )
}
