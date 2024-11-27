import React from 'react'

import { render, screen } from '@testing-library/react'

import { Container } from './Container'

describe('Container Component', () => {
  it('renders with default classes', () => {
    render(<Container>Test Content</Container>)

    const container = screen.getByText('Test Content').closest('div')

    // Check if the default classes are applied
    expect(container).toHaveClass('container')
    expect(container).toHaveClass('mx-auto')
    expect(container).toHaveClass('p-3')
    expect(container).toHaveClass('max-w-[1200px]')
  })

  it('applies "fluid" class when fluid prop is true', () => {
    render(<Container fluid>Test Content</Container>)

    const container = screen.getByText('Test Content').closest('div')

    // Check if the fluid class is applied
    expect(container).toHaveClass('max-w-[calc(100%_-_36px)]')
  })

  it('does not apply "fluid" class when fluid prop is false', () => {
    render(<Container>Test Content</Container>)

    const container = screen.getByText('Test Content').closest('div')

    // Check if the "fluid" class is not applied
    expect(container).not.toHaveClass('max-w-[calc(100%_-_36px)]')
  })

  it('applies custom className passed in props', () => {
    render(
      <Container fluid={false} className="custom-class">
        Test Content
      </Container>,
    )

    const container = screen.getByText('Test Content').closest('div')

    // Check if the custom className is applied
    expect(container).toHaveClass('custom-class')
  })
})
