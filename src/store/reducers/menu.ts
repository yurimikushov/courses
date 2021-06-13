import { IMenuItem } from '../../interfaces'
import { IMenuActions } from '../actions'
import { MenuActions } from '../actionTypes'

const initialState: IMenuItem[] = []

const menuReducer = (
  state = initialState,
  { type, payload }: IMenuActions
): IMenuItem[] => {
  switch (type) {
    case MenuActions.SET:
      return payload.menu
    default:
      return state
  }
}

export { menuReducer }
