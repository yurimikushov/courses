import cn from 'classnames'
import { Card, HLine } from '../../../components'
import { Header } from './Header/Header'
import { Body } from './Body/Body'
import { Actions } from './Actions/Actions'
import { ProductProps } from './Product.props'
import styles from './Product.module.css'

const Product = ({ product, className }: ProductProps): JSX.Element => (
  <Card className={cn(className, styles.product)}>
    <Header {...product} />
    <HLine />
    <Body {...product} />
    <HLine />
    <Actions />
  </Card>
)

export { Product }
