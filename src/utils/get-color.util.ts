import { $toCapitalize } from './to-capitalize.util'

export const $getColor = (color: string): string =>
  `var(--app${$toCapitalize(color)})`
