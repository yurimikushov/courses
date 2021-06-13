import { IMenuItem } from '../../interfaces'
import { MenuActions } from '../actionTypes'

interface IMenuActions {
  type: MenuActions
  payload: {
    menu: IMenuItem[]
  }
}

const setMenu = (menu: IMenuItem[]): IMenuActions => ({
  type: MenuActions.SET,
  payload: {
    menu,
  },
})

export { setMenu }
export type { IMenuActions }
