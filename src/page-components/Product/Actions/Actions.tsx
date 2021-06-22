import cn from 'classnames'
import { Button } from '../../../components'
import { ActionsProps } from './Actions.props'
import styles from './Actions.module.css'

const Actions = ({
  showReviews,
  onToggleShowReviews,
  className,
  ...props
}: ActionsProps): JSX.Element => (
  <div className={cn(className, styles.actions)} {...props}>
    <Button appearance='primary'>Узнать подробнее</Button>
    <Button
      appearance='ghost'
      arrow={showReviews ? 'down' : 'right'}
      onClick={onToggleShowReviews}
    >
      Читать отзывы
    </Button>
  </div>
)

export { Actions }
