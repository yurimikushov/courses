import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { fetchMenu, fetchPageByAlias, fetchProducts } from '../../api'
import { TopPageTitle, HHData, Advantages } from '../../page-components'
import { Card } from '../../components'
import { firstLevelMenuItems } from '../../constants'
import { IMenuItem, ITopPage, IProduct } from '../../interfaces'
import { withLayout } from '../../layouts'

interface TopPageProps extends Record<string, unknown> {
  menu: IMenuItem[]
  page: ITopPage
  products: IProduct[]
}

const TopPage = ({ page, products }: TopPageProps): JSX.Element => {
  const { title, advantages, hh } = page

  return (
    <>
      <TopPageTitle title={title} totalProducts={products.length} />
      {hh && <HHData {...hh} />}
      {advantages && advantages.length > 0 && (
        <Advantages advantages={advantages} />
      )}
      <pre className='products-data' style={{ whiteSpace: 'pre-wrap' }}>
        <Card>{JSON.stringify(page, null, 2)}</Card>
        <Card color='whiteBlue'>{JSON.stringify(products, null, 2)}</Card>
      </pre>
    </>
  )
}

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

  const activeMenuItem = firstLevelMenuItems.find(
    ({ route }) => route === params.type
  )

  if (!activeMenuItem) {
    return {
      notFound: true,
    }
  }

  const menu: IMenuItem[] = await fetchMenu(activeMenuItem.id)
  const page: ITopPage = await fetchPageByAlias(params.alias as string)
  const products: IProduct[] = await fetchProducts(page.category)

  return {
    props: {
      menu,
      page,
      products,
      activeFirstLevelMenu: activeMenuItem.id,
    },
  }
}

export default withLayout(TopPage)
export { getStaticPaths, getStaticProps }
