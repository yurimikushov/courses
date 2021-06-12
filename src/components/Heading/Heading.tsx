import { HeadingProps } from './Heading.props'

const Heading = ({
  tag,
  children,
  className,
  ...props
}: HeadingProps): JSX.Element => {
  switch (tag) {
    case 'h1':
      return (
        <h1 className={className} {...props}>
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2 className={className} {...props}>
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3 className={className} {...props}>
          {children}
        </h3>
      )
    default:
      return <></>
  }
}

export { Heading }
