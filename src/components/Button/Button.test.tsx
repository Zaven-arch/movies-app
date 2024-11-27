import React from 'react'

import { render, screen, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom'

import { Button } from './Button'

describe('Button Component', () => {
  const mockAction = jest.fn()

  it('renders children correctly', () => {
    render(<Button color="white">Click Me</Button>)

    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('applies custom classNames', () => {
    render(
      <Button color="white" className="custom-class">
        Styled Button
      </Button>,
    )

    const buttonElement = screen.getByText('Styled Button').parentElement

    expect(buttonElement).toHaveClass('custom-class')
  })

  it('applies correct color classes based on props', () => {
    render(<Button color="pink">Pink Button</Button>)

    const innerGrid = screen.getByText('Pink Button').closest('div')

    expect(innerGrid).toHaveClass('bg-app-salmon-pink-light')
  })

  it('applies disabled styles when disabled', () => {
    render(
      <Button color="white" disabled={true}>
        Disabled Button
      </Button>,
    )

    const innerGrid = screen.getByText('Disabled Button').closest('div')

    expect(innerGrid).toHaveClass(
      'bg-app-midnight-blue',
      'text-app-medium-gray',
      'cursor-not-allowed',
    )
  })

  it('calls the action when clicked', () => {
    render(
      <Button color="white" action={mockAction}>
        Click Me
      </Button>,
    )

    const buttonElement =
      screen.getByText('Click Me').parentElement?.parentElement

    fireEvent.click(buttonElement!)

    expect(mockAction).toHaveBeenCalledTimes(1)
  })

  it('renders with custom styles when `customize` prop is provided', () => {
    render(
      <Button color="white" customize="custom-style">
        Custom Styled Button
      </Button>,
    )

    const innerGrid = screen.getByText('Custom Styled Button').closest('div')

    expect(innerGrid).toHaveClass('custom-style')
  })
})
