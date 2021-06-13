import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { fetchMenu, fetchPageByAlias, fetchProducts } from '../../api'
import {
  TopPageHeader,
  HHData,
  Advantages,
  SeoText,
} from '../../page-components'
import { Card } from '../../components'
import { firstLevelMenuItems } from '../../constants'
import { IMenuItem, ITopPage, IProduct } from '../../interfaces'
import { withLayout } from '../../layouts'
import { useSortedProducts } from '../../store/hooks'
import { cleanUpPageData } from '../../utils'

interface TopPageProps extends Record<string, unknown> {
  menu: IMenuItem[]
  page: ITopPage
  products: IProduct[]
}

const TopPage = ({ page }: TopPageProps): JSX.Element => {
  const products: IProduct[] = useSortedProducts()

  if (!page) {
    return <></>
  }

  const { title, category, hh, advantages, seoText } = page

  return (
    <>
      <TopPageHeader title={title} totalProducts={products.length} />
      <ul>
        {products.map(({ _id, title, initialRating, price }) => (
          <li key={_id}>
            {title}, {initialRating}, {price}
          </li>
        ))}
      </ul>
      {hh && <HHData category={category} {...hh} />}
      {advantages && advantages.length > 0 && (
        <Advantages advantages={advantages} />
      )}
      {seoText && <SeoText text={seoText} />}
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
      page: cleanUpPageData(page),
      products,
      activeFirstLevelMenu: activeMenuItem.id,
    },
  }
}

export default withLayout(TopPage)
export { getStaticPaths, getStaticProps }
