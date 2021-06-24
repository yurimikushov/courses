import cn from 'classnames'
import { TextareaProps } from './Textarea.props'
import styles from './Textarea.module.css'
import { ForwardedRef, forwardRef } from 'react'

const Textarea = forwardRef(
  (
    { className, ...props }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => (
    <textarea ref={ref} className={cn(className, styles.textarea)} {...props} />
  )
)

export { Textarea }
