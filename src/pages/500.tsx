import { withLayout } from '../layouts'
import { Heading } from '../components'

const Error500 = (): JSX.Element => (
  <div>
    <Heading tag='h1'>Ошибка 500</Heading>
  </div>
)

export { Error500 }
export default withLayout(Error500)
