import React from 'react'
import cn from 'classnames'
import { HeadingProps } from './Heading.props'
import styles from './Heading.module.css'

const Heading = ({
  tag,
  children,
  className,
  ...props
}: HeadingProps): JSX.Element => {
  switch (tag) {
    case 'h1':
      return (
        <h1 className={cn(styles.h1, className)} {...props}>
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2 className={cn(styles.h2, className)} {...props}>
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3 className={cn(styles.h3, className)} {...props}>
          {children}
        </h3>
      )
    default:
      return <></>
  }
}

export { Heading }
