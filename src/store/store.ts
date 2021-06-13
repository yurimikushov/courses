import { AppProps } from 'next/app'
import { createStore as createReduxStore, applyMiddleware, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { TopLevelCategory } from '../enums'
import { IMenuItem } from '../interfaces'
import rootReducer from './reducers'

interface IStore {
  menu: IMenuItem[]
  activeFirstLevelMenu: TopLevelCategory
}

const createStore = ({
  menu,
  activeFirstLevelMenu,
}: AppProps & IStore): Store => {
  const initialState = {
    menu,
    activeFirstLevelMenu,
  }

  const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

  return createReduxStore(rootReducer, initialState, composedEnhancer)
}

export { createStore }
export type { IStore }
