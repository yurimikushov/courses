import { FunctionComponent } from 'react'
import { TopLevelCategory } from '../enums'

interface IPageItem {
  _id: string
  alias: string
  title: string
  category: string
}

interface IMenuItem {
  _id: {
    secondCategory: string
  }
  pages: IPageItem[]
}

interface IFirstLevelMenuItem {
  id: TopLevelCategory
  name: string
  route: string
  Icon: FunctionComponent
}

export type { IMenuItem, IFirstLevelMenuItem, IPageItem }
