import type { Config } from 'tailwindcss'

import { Colors } from './src/enums'

import { $getColor } from './src/utils'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    screens: {
      xs: { max: '600px' },
      sm: '600px',
      md: '960px',
      lg: '1264px',
      xl: '1904px',
    },
    extend: {
      boxShadow: {
        'navbar-scroll': '0 2px 20px 1px var(--appMidnightBlue)',
      },
      backgroundImage: {
        'trade-menu-gradient':
          'linear-gradient(to bottom right, var(--appSalmonPink), var(--appSpringGreen))',
      },
      colors: Object.fromEntries(
        Object.values(Colors).map((color: Colors) => [
          `app-${color}`,
          $getColor(color),
        ]),
      ),
    },
  },
  safelist: Object.values(Colors)
    .map((color: Colors) => [
      `text-app-${color}`,
      `bg-app-${color}`,
      `border-app-${color}`,
      `hover:text-app-${color}`,
      `hover:border-app-${color}`,
      `hover:bg-app-${color}`,
      `sm:hover:text-app-${color}`,
      `sm:hover:bg-app-${color}`,
      `!text-app-${color}`,
      `!bg-app-${color}`,
      `!border-app-${color}`,
      `hover:!text-app-${color}`,
      `hover:!border-app-${color}`,
      `hover:!bg-app-${color}`,
      `group-hover:!text-app-${color}`,
      `group-hover:!border-app-${color}`,
      `group-hover:!bg-app-${color}`,
      `group-hover:text-app-${color}`,
      `group-hover:border-app-${color}`,
      `group-hover:bg-app-${color}`,
    ])
    .flat(1),
  plugins: [],
} satisfies Config
