import cn from 'classnames'
import { useState } from 'react'
import { Input, Button } from '../../components'
import SearchIcon from './assets/search.svg'
import { SearchProps } from './Search.props'
import styles from './Search.module.css'

const Search = ({
  className,
  onSearch,
  ...props
}: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('')

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input
        className={cn(styles.input, {
          [styles.filled]: search.length > 0,
        })}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Поиск...'
      />
      <Button className={styles.button} appearance='primary' onClick={onSearch}>
        <SearchIcon />
      </Button>
    </div>
  )
}

export { Search }
