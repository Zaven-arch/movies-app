import '@/assets/scss/main.scss'
import { DefaultLayout } from '@/layouts/Default'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}
