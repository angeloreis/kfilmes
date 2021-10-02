import { AppProps } from 'next/app'

import 'bootstrap/scss/bootstrap.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
