import cn from 'classnames'
import { Heading, Label } from '../../components'
import { TopPageHeaderProps } from './TopPageHeader.props'
import styles from './TopPageHeader.module.css'

const TopPageHeader = ({
  title,
  totalProducts,
  className,
  ...props
}: TopPageHeaderProps): JSX.Element => (
  <header className={cn(className, styles.header)} {...props}>
    <Heading tag='h1'>{title}</Heading>
    {totalProducts > 0 && <Label color='gray'>{totalProducts}</Label>}
  </header>
)

export { TopPageHeader }
