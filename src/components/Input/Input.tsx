import cn from 'classnames'
import { InputProps } from './Input.props'
import styles from './Input.module.css'
import { ForwardedRef, forwardRef } from 'react'

const Input = forwardRef(
  (
    { className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => (
    <input ref={ref} className={cn(className, styles.input)} {...props} />
  )
)

export { Input }
