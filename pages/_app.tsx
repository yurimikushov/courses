import type { AppProps } from 'next/app'
import './globals.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Component {...pageProps} />
)

export default App
