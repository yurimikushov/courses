import { TopLevelCategory } from '../../../enums'
import { IFirstLevelMenuItem } from '../../../interfaces'
import CoursesIcon from './assets/courses.svg'
import ServicesIcon from './assets/services.svg'
import BooksIcon from './assets/books.svg'
import ProductsIcon from './assets/products.svg'

const firstLevelMenuItems: IFirstLevelMenuItem[] = [
  {
    id: TopLevelCategory.Courses,
    name: 'Курсы',
    route: 'courses',
    Icon: CoursesIcon,
  },
  {
    id: TopLevelCategory.Services,
    name: 'Сервисы',
    route: 'services',
    Icon: ServicesIcon,
  },
  {
    id: TopLevelCategory.Books,
    name: 'Книги',
    route: 'books',
    Icon: BooksIcon,
  },
  {
    id: TopLevelCategory.Products,
    name: 'Продукты',
    route: 'products',
    Icon: ProductsIcon,
  },
]

export { firstLevelMenuItems }
