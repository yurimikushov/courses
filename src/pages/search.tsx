import { useRouter } from 'next/router'
import { withLayout } from '../layouts'

const SearchPage = (): JSX.Element => {
  const { query } = useRouter()

  return <div>Search page, query: {JSON.stringify(query)}</div>
}

export default withLayout(SearchPage)
