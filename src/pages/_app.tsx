import Head from 'next/head'
import type { AppProps } from 'next/app'
import { StoreProvider } from '../store'
import './globals.css'

const App = ({ Component, pageProps, router }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>Курсы здесь</title>
      <link rel='shortcut icon' href='/favicon.png' type='image/png'></link>
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap'
        rel='stylesheet'
      />
      <meta
        property='og:url'
        content={process.env.NEXT_PUBLIC_API + router.asPath}
      />
      <meta
        property='og:locale'
        content='ru_RU'
      />
    </Head>
    <StoreProvider {...pageProps}>
      <Component {...pageProps} />
    </StoreProvider>
  </>
)

export default App
