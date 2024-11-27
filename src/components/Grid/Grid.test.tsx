import React from 'react'

import { render, screen } from '@testing-library/react'

import { Grid } from './Grid'

describe('Grid Component', () => {
  it('renders with default grid class', () => {
    render(<Grid placeItemsCenter={false}>Test Content</Grid>)

    const grid = screen.getByText('Test Content').closest('div')

    // Check if the default 'grid' class is applied
    expect(grid).toHaveClass('grid')
  })

  it('applies "place-items-center" class when placeItemsCenter prop is true', () => {
    render(<Grid placeItemsCenter={true}>Test Content</Grid>)

    const grid = screen.getByText('Test Content').closest('div')

    // Check if the "place-items-center" class is applied
    expect(grid).toHaveClass('place-items-center')
  })

  it('does not apply "place-items-center" class when placeItemsCenter prop is false', () => {
    render(<Grid placeItemsCenter={false}>Test Content</Grid>)

    const grid = screen.getByText('Test Content').closest('div')

    // Check if the "place-items-center" class is not applied
    expect(grid).not.toHaveClass('place-items-center')
  })

  it('applies custom className passed in props', () => {
    render(
      <Grid placeItemsCenter={false} className="custom-class">
        Test Content
      </Grid>,
    )

    const grid = screen.getByText('Test Content').closest('div')

    // Check if the custom className is applied
    expect(grid).toHaveClass('custom-class')
  })
})
