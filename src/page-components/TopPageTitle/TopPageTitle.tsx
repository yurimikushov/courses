import cn from 'classnames'
import { Heading, Label } from '../../components'
import { TopPageTitleProps } from './TopPageTitle.props'
import styles from './TopPageTitle.module.css'

const TopPageTitle = ({
  title,
  totalProducts,
  className,
  ...props
}: TopPageTitleProps): JSX.Element => (
  <div className={cn(className, styles.title)} {...props}>
    <Heading tag='h1'>{title}</Heading>
    {totalProducts > 0 && <Label color='gray'>{totalProducts}</Label>}
  </div>
)

export { TopPageTitle }
