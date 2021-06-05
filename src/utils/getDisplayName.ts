import { FunctionComponent } from 'react'

const getDisplayName = <T extends Record<string, unknown>>(
  WrappedComponent: FunctionComponent<T>
): string => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export { getDisplayName }
