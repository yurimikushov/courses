import { AppProps } from 'next/app'
import { createStore as createReduxStore, applyMiddleware, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { TopLevelCategory } from '../enums'
import { IMenuItem, IProduct } from '../interfaces'
import rootReducer from './reducers'

interface IStore {
  menu: IMenuItem[]
  activeFirstLevelMenu: TopLevelCategory
  products: IProduct[]
}

const createStore = ({
  menu,
  activeFirstLevelMenu,
  products = [],
}: AppProps & IStore): Store => {
  const initialState = {
    menu,
    activeFirstLevelMenu,
    products,
  }

  const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

  return createReduxStore(rootReducer, initialState, composedEnhancer)
}

export { createStore }
export type { IStore }
