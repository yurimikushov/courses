import { ReactNode } from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { createStore, IStore } from './store'

interface StoreProviderProps extends AppProps {
  children: ReactNode
}

const StoreProvider = (props: StoreProviderProps & IStore): JSX.Element => (
  <Provider store={createStore(props)}>{props.children}</Provider>
)

export { StoreProvider }
