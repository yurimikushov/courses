import Head from 'next/head'
import type { AppProps } from 'next/app'
import './globals.css'
import { AppContextProvider } from '../contexts'

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>Курсы здесь</title>
      <link rel='shortcut icon' href='/favicon.png' type='image/png'></link>
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap'
        rel='stylesheet'
      />
    </Head>
    <AppContextProvider
      {...pageProps}
    >
      <Component {...pageProps} />
    </AppContextProvider>
  </>
)

export default App
