import { combineReducers } from 'redux'
import { menuReducer } from './menu'
import { activeFirstLevelMenuReducer } from './activeFirstLevelMenu'

const rootReducer = combineReducers({
  menu: menuReducer,
  activeFirstLevelMenu: activeFirstLevelMenuReducer,
})

export default rootReducer
