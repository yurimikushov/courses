import { useState, KeyboardEvent } from 'react'
import cn from 'classnames'
import { Input, Button } from '../../components'
import SearchIcon from './assets/search.svg'
import { SearchProps } from './Search.props'
import styles from './Search.module.css'

const Search = ({
  className,
  onSearch,
  ...props
}: SearchProps): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const onSearchHandler = () => onSearch(searchQuery)

  const onSearchByKeyHandler = (e: KeyboardEvent): void => {
    if (e.code === 'Enter') {
      e.preventDefault()
      onSearchHandler()
    }
  }

  return (
    <form className={cn(className, styles.search)} {...props} role='search'>
      <Input
        className={cn(styles.input, {
          [styles.filled]: searchQuery.length > 0,
        })}
        value={searchQuery}
        placeholder='Поиск...'
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={onSearchByKeyHandler}
      />
      <Button
        className={styles.button}
        appearance='primary'
        onClick={onSearchHandler}
        aria-label='Поиск по сайту'
      >
        <SearchIcon />
      </Button>
    </form>
  )
}

export { Search }
