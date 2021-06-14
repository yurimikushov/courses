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
  
  const onKeyUpHandler = ({ key }: KeyboardEvent<HTMLInputElement>): void => {   
    if (key === 'Enter') {
      onSearchHandler()
    }
  }

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input
        className={cn(styles.input, {
          [styles.filled]: searchQuery.length > 0,
        })}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='Поиск...'
        onKeyUp={onKeyUpHandler}
      />
      <Button
        className={styles.button}
        appearance='primary'
        onClick={onSearchHandler}
      >
        <SearchIcon />
      </Button>
    </div>
  )
}

export { Search }
