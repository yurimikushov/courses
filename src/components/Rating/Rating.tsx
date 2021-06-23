import { useEffect, useState } from 'react'
import cn from 'classnames'
import { dummy } from '../../utils'
import { RatingProps } from './Rating.props'
import styles from './Rating.module.css'
import StarIcon from './assets/star.svg'

const STAR_TOTAL = 5

const Rating = ({
  rating,
  editable = false,
  setRating = dummy,
  className,
  ...props
}: RatingProps): JSX.Element => {
  const [selectedRating, setSelectedRating] = useState<number>(rating)

  useEffect(() => {
    setSelectedRating(rating)
  }, [rating])

  return (
    <div className={cn(className, styles.rating)} {...props}>
      {Array<JSX.Element>(STAR_TOTAL)
        .fill(<></>)
        .map((_: JSX.Element, i: number) => (
          <span
            key={i}
            className={cn(styles.star, {
              [styles.editable]: editable,
            })}
            tabIndex={editable ? 0 : -1}
            onMouseEnter={() => editable && setSelectedRating(i + 1)}
            onMouseLeave={() => editable && setSelectedRating(rating)}
            onClick={() => editable && setRating(i + 1)}
            onKeyUp={({ code }) =>
              editable && code === 'Space' && setRating(i + 1)
            }
          >
            <StarIcon
              className={cn(styles.starIcon, {
                [styles.filled]: i < selectedRating,
              })}
            />
          </span>
        ))}
    </div>
  )
}

export { Rating }
