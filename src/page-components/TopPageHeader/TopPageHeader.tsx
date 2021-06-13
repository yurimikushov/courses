import cn from 'classnames'
import { Heading, Label } from '../../components'
import { Sort } from '../../page-components'
import { TopPageHeaderProps } from './TopPageHeader.props'
import styles from './TopPageHeader.module.css'

const TopPageHeader = ({
  title,
  totalProducts,
  className,
  ...props
}: TopPageHeaderProps): JSX.Element => (
  <header className={cn(className, styles.header)} {...props}>
    <Heading className={styles.title} tag='h1'>
      {title}
    </Heading>
    {totalProducts > 0 && (
      <Label className={styles.totalProducts} color='gray'>
        {totalProducts}
      </Label>
    )}
    <Sort className={styles.sort} />
  </header>
)

export { TopPageHeader }
