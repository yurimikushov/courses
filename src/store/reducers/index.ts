import { combineReducers } from 'redux'
import { IStore } from '../store'
import { menuReducer } from './menu'
import { activeFirstLevelMenuReducer } from './activeFirstLevelMenu'
import { productsReducer } from './products'
import { sortProductsByReducer } from './sortProductsBy'

const rootReducer = combineReducers<IStore>({
  menu: menuReducer,
  activeFirstLevelMenu: activeFirstLevelMenuReducer,
  products: productsReducer,
  sortProductsBy: sortProductsByReducer,
})

export default rootReducer
