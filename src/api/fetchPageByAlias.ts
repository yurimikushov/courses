import axios from 'axios'
import { API } from '../constants'
import { ITopPage } from '../interfaces'

const fetchPageByAlias = async (alias: string): Promise<ITopPage> => {
  const { data: page } = await axios.get<ITopPage>(
    `${API.topPage.findByAlias}/${alias}`
  )

  return page
}

export { fetchPageByAlias }
