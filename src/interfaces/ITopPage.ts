import { TopLevelCategory } from '../enums'
import { ITopPageAdvantage } from './ITopPageAdvantage'
import { IHHData } from './IHHData'

interface ITopPage {
  tags: string[]
  _id: string
  secondCategory: string
  alias: string
  title: string
  category: string
  seoText?: string
  tagsTitle: string
  metaTitle: string
  metaDescription: string
  firstCategory: TopLevelCategory
  advantages?: ITopPageAdvantage[]
  createdAt: Date
  updatedAt: Date
  hh?: IHHData
}

export type { ITopPage }
