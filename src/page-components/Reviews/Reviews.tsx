import cn from 'classnames'
import { Card, Rating, HLine } from '../../components'
import { formatDate } from '../../utils'
import UserIcon from './assets/user.svg'
import { ReviewsProps } from './Reviews.props'
import styles from './Reviews.module.css'

const Reviews = ({
  reviews,
  className,
  ...props
}: ReviewsProps): JSX.Element => (
  <Card {...props} color='whiteBlue' className={cn(className, styles.reviews)}>
    {reviews.map(
      ({ _id, name: reviewerName, title, description, rating, createdAt }) => (
        <div key={_id} className={styles.review}>
          <div className={styles.header}>
            <UserIcon />
            <div className={styles.reviewerName}>{reviewerName}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.createdAt}>{formatDate(createdAt)}</div>
            <Rating className={styles.rating} rating={rating} />
          </div>
          <div className={styles.description}>{description}</div>
        </div>
      )
    )}
    {reviews.length === 0 && <div>Здесь ещё нет отзывов. Будьте первым</div>}
    <HLine />
    Форма
  </Card>
)

export { Reviews }
