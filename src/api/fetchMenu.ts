import axios from "axios"
import { API, FIRST_CATEGORY_ID } from "../constants"
import { IMenuItem } from "../interfaces"

const fetchMenu = async (): Promise<IMenuItem[]> => {
  const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
    firstCategory: FIRST_CATEGORY_ID,
  })

  return menu
}

export { fetchMenu }
