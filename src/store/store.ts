import { AppProps } from 'next/app'
import { createStore as createReduxStore, applyMiddleware, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { SortOptions, TopLevelCategory } from '../enums'
import { IMenuItem, IProduct } from '../interfaces'
import rootReducer from './reducers'

interface IStore {
  menu: IMenuItem[]
  activeFirstLevelMenu: TopLevelCategory
  products: IProduct[]
  sortProductsBy: SortOptions
}

const createStore = ({
  menu,
  activeFirstLevelMenu,
  products = [],
  sortProductsBy = SortOptions.Rating,
}: AppProps & IStore): Store => {
  const initialState = {
    menu,
    activeFirstLevelMenu,
    products,
    sortProductsBy,
  }

  const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

  return createReduxStore(rootReducer, initialState, composedEnhancer)
}

export { createStore }
export type { IStore }
