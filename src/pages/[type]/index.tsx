import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { fetchMenu } from '../../api'
import { firstLevelMenuItems } from '../../constants'
import { IMenuItem } from '../../interfaces'
import { withLayout } from '../../layouts'

interface TypePageProps extends Record<string, unknown> {
  menu: IMenuItem[]
  type: string
}

const TypePage = ({ type }: TypePageProps): JSX.Element => (
  <div>{type} page</div>
)

const getStaticPaths: GetStaticPaths = async () => ({
  paths: firstLevelMenuItems.map(({ route }) => `/${route}`),
  fallback: true,
})

const getStaticProps: GetStaticProps = async ({
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

  const menu = await fetchMenu(activeMenuItem.id)

  return {
    props: {
      menu,
      activeFirstLevelMenu: activeMenuItem.id,
      type: params.type,
    },
  }
}

export default withLayout(TypePage)
export { getStaticPaths, getStaticProps }
