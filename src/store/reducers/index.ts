import { combineReducers } from 'redux'
import { IStore } from '../store'
import { menuReducer } from './menu'
import { activeFirstLevelMenuReducer } from './activeFirstLevelMenu'
import { productsReducer } from './products'

const rootReducer = combineReducers<IStore>({
  menu: menuReducer,
  activeFirstLevelMenu: activeFirstLevelMenuReducer,
  products: productsReducer,
})

export default rootReducer
