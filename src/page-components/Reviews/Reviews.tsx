import cn from 'classnames'
import { Card, Rating, HLine } from '../../components'
import UserIcon from './assets/user.svg'
import { ReviewsProps } from './Reviews.props'
import styles from './Reviews.module.css'

const formatDate = (date: Date): string => {
  return new Date(date).toLocaleString('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const Reviews = ({
  reviews,
  className,
  ...props
}: ReviewsProps): JSX.Element => (
  <Card {...props} color='whiteBlue' className={cn(className, styles.reviews)}>
    {reviews.map(
      ({ _id, name: reviewer, title, description, rating, createdAt }) => (
        <div key={_id} className={styles.review}>
          <div className={styles.header}>
            <UserIcon />
            <div className={styles.reviewer}>{reviewer}:</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.createdAt}>{formatDate(createdAt)}</div>
            <Rating className={styles.reviewer} rating={rating} />
          </div>
          <div className={styles.description}>{description}</div>
        </div>
      )
    )}
    <HLine />
    Форма
  </Card>
)

export { Reviews }
