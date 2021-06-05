import { FunctionComponent } from 'react'
import { getDisplayName } from '../utils'
import { Layout } from './Layout/Layout'

const withLayout = <T extends Record<string, unknown>>(
  WrappedComponent: FunctionComponent<T>
): FunctionComponent<T> => {
  function WithLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <WrappedComponent {...props} />
      </Layout>
    )
  }

  WithLayoutComponent.displayName = `withLayout(${getDisplayName(
    WrappedComponent
  )})`

  return WithLayoutComponent
}

export { withLayout }
