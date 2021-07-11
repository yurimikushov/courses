import { withLayout } from '../layouts'
import { Heading } from '../components'

const Error404 = (): JSX.Element => (
  <div>
    <Heading tag='h1'>Ошибка 404</Heading>
  </div>
)

export { Error404 }
export default withLayout(Error404)
