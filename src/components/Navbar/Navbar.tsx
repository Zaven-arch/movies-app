import React from 'react'

import { useWindowScroll } from 'react-use'

import { Container } from '@/components/Container'
import { NavbarLeftSide } from '@/components/NavbarLeftSide'

import classNames from 'classnames'

export const Navbar: React.FC = () => {
  const { y } = useWindowScroll()

  return (
    <Container
      fluid
      className={classNames('transition-all rounded-xl px-6', {
        'bg-app-charcoal-gray shadow-navbar-scroll sticky top-4 !py-2': y > 50,
      })}
    >
      <NavbarLeftSide />
    </Container>
  )
}
