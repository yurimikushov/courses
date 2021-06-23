import cn from 'classnames'
import { Rating } from '../../../components'
import { formatDate } from '../../../utils'
import UserIcon from './assets/user.svg'
import { ReviewProps } from './Review.props'
import styles from './Review.module.css'

const Review = ({ review, className, ...props }: ReviewProps): JSX.Element => {
  const {
    _id,
    name: reviewerName,
    title,
    description,
    rating,
    createdAt,
  } = review

  return (
    <div key={_id} className={cn(className, styles.review)} {...props}>
      <div className={styles.header}>
        <UserIcon className={styles.userIcon}/>
        <div className={styles.reviewerName}>{reviewerName}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.createdAt}>{formatDate(createdAt)}</div>
        <Rating className={styles.rating} rating={rating} />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  )
}

export { Review }
