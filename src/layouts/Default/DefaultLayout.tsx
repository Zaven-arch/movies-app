import React from 'react'

import { IDefaultLayoutProps } from './IDefaultLayoutProps.interface'

import { Grid } from '@/components/Grid'
import { Navbar } from '@/components/Navbar'
import { Container } from '@/components/Container'

export const DefaultLayout: React.FC<IDefaultLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-app-space-black">
      <Grid className="gap-14 min-h-screen grid-rows-[min-content]">
        <Navbar />
        <Container>{children}</Container>
      </Grid>
    </div>
  )
}
