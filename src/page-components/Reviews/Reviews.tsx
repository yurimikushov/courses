import cn from 'classnames'
import { Card, HLine } from '../../components'
import { Review } from './Review/Review'
import { ReviewForm } from './ReviewForm/ReviewForm'
import { ReviewsProps } from './Reviews.props'
import styles from './Reviews.module.css'

const Reviews = ({
  reviews,
  className,
  ...props
}: ReviewsProps): JSX.Element => (
  <Card {...props} color='whiteBlue' className={cn(className, styles.reviews)}>
    {reviews.map((review) => (
      <Review key={review._id} review={review} />
    ))}
    {reviews.length === 0 && <div>Здесь ещё нет отзывов. Будьте первым</div>}
    <HLine />
    <ReviewForm />
  </Card>
)

export { Reviews }
