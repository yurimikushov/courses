import { FunctionComponent } from 'react'
import { TopLevelCategory } from '../enums'

interface IFirstLevelMenuItem {
  id: TopLevelCategory
  name: string
  route: string
  Icon: FunctionComponent
}

export type { IFirstLevelMenuItem }
