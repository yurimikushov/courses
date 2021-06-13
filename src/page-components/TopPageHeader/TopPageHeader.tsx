import { useReducer, useState } from 'react'
import cn from 'classnames'
import { Heading, Label, Sort } from '../../components'
import { TopPageHeaderProps } from './TopPageHeader.props'
import styles from './TopPageHeader.module.css'
import { SortOptions } from '../../enums'
import { sortReducer } from '../../reducers'

const TopPageHeader = ({
  title,
  totalProducts,
  sort,
  onSort,
  className,
  ...props
}: TopPageHeaderProps): JSX.Element => (
  <header className={cn(className, styles.header)} {...props}>
    <Heading tag='h1'>{title}</Heading>
    {totalProducts > 0 && <Label color='gray'>{totalProducts}</Label>}
    <Sort className={styles.sort} sort={sort} onSort={onSort} />
  </header>
)

export { TopPageHeader }
