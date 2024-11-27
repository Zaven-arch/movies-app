import React from 'react'

import classNames from 'classnames'

import { ITextFieldProps } from './ITextFieldProps.interface'

import { useTextField } from './useTextField.hook'

export const TextField: React.FC<Partial<ITextFieldProps>> = ({
  prepend,
  append,
  className,
  disabled,
  textArea,
  value,
  onChange,
  debounced,
}) => {
  const { isFocused, setIsFocused, onClickHandler, inputRef, inputAttrs } =
    useTextField({ disabled, debounced, onChange, value })

  return (
    <div
      className={classNames(
        'rounded-md p-2 bg-app-charcoal-gray flex items-center text-app-white select-none transition-all',
        disabled
          ? 'cursor-not-allowed opacity-50'
          : 'cursor-pointer hover:bg-app-white hover:text-app-space-black focus-within:text-app-space-black focus-within:bg-app-white [&_path]:hover:fill-current [&_path]:focus-within:fill-current',
        className,
      )}
      onClick={onClickHandler}
    >
      {prepend}
      {textArea ? (
        <textarea
          ref={inputRef}
          rows={10}
          disabled={disabled}
          className={classNames(
            'bg-transparent outline-none caret-app-white text-xs min-w-16 grow pointer-events-none resize-none',
            disabled ? 'cursor-not-allowed' : 'cursor-pointer',
            { 'cursor-text !caret-app-space-black': isFocused },
          )}
          {...inputAttrs}
          onBlur={() => setIsFocused(false)}
        />
      ) : (
        <input
          ref={inputRef}
          type="text"
          disabled={disabled}
          className={classNames(
            'bg-transparent outline-none caret-app-white text-xs min-w-16 grow pointer-events-none',
            disabled ? 'cursor-not-allowed' : 'cursor-pointer',
            { 'cursor-text !caret-app-space-black': isFocused },
          )}
          {...inputAttrs}
          onBlur={() => setIsFocused(false)}
        />
      )}
      {append}
    </div>
  )
}
