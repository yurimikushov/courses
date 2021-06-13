import { useState } from 'react'
import cn from 'classnames'
import { Heading, Label, Sort } from '../../components'
import { TopPageHeaderProps } from './TopPageHeader.props'
import styles from './TopPageHeader.module.css'
import { SortOptions } from '../../enums'

const TopPageHeader = ({
  title,
  totalProducts,
  className,
  ...props
}: TopPageHeaderProps): JSX.Element => {
  const [sort, setSort] = useState<SortOptions>(SortOptions.Rating)

  return (
    <header className={cn(className, styles.header)} {...props}>
      <Heading tag='h1'>{title}</Heading>
      {totalProducts > 0 && <Label color='gray'>{totalProducts}</Label>}
      <Sort className={styles.sort} sort={sort} setSort={setSort} />
    </header>
  )
}

export { TopPageHeader }
