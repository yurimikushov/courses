import cn from 'classnames'
import htmlToReact from 'html-react-parser'
import { SeoTextProps } from './SeoText.props'
import styles from './SeoText.module.css'

const SeoText = ({
  text,
  className,
  ...props
}: SeoTextProps): JSX.Element => (
  <div className={cn(className, styles.seoText)} {...props}>
    {htmlToReact(text)}
  </div>
)

export { SeoText }
