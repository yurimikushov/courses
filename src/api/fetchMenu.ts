import axios from 'axios'
import { TopLevelCategory } from '../enums'
import { IMenuItem } from '../interfaces'
import { API } from '../constants'

const fetchMenu = async (): Promise<IMenuItem[]> => {
  const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
    firstCategory: TopLevelCategory.Courses,
  })

  return menu
}

export { fetchMenu }
