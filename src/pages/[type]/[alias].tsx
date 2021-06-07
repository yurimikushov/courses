import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { fetchMenu, fetchPageByAlias, fetchProducts } from '../../api'
import { firstLevelMenuItems } from '../../constants'
import { IMenuItem, ITopPage, IProduct } from '../../interfaces'
import { withLayout } from '../../layouts'

interface TopPageProps extends Record<string, unknown> {
  menu: IMenuItem[]
  page: ITopPage
  products: IProduct[]
}

const TopPage = ({ products }: TopPageProps): JSX.Element => (
  <pre className='products-data' style={{ whiteSpace: 'pre-wrap' }}>
    {JSON.stringify(products, null, 2)}
  </pre>
)

const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = []

  for (const { id, route } of firstLevelMenuItems) {
    const menu = await fetchMenu(id)

    paths = paths.concat(
      menu.flatMap(({ pages }) =>
        pages.map(({ alias }) => `/${route}/${alias}`)
      )
    )
  }

  return {
    paths,
    fallback: true,
  }
}

const getStaticProps: GetStaticProps<TopPageProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    }
  }

  const menu: IMenuItem[] = await fetchMenu(TopLevelCategory.Courses)
  const page: ITopPage = await fetchPageByAlias(params.alias as string)
  const products: IProduct[] = await fetchProducts(page.category)

  return {
    props: {
      menu,
      page,
      products,
    },
  }
}

export default withLayout(TopPage)
export { getStaticPaths, getStaticProps }
