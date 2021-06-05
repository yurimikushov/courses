import { useEffect, useState } from 'react'
import cn from 'classnames'
import { RatingProps } from './Rating.props'
import styles from './Rating.module.css'
import StarIcon from './assets/star.svg'

const STAR_TOTAL = 5

const Rating = ({
  rating,
  editable = false,
  setRating,
  className,
  ...props
}: RatingProps): JSX.Element => {
  const [currentRating, setCurrentRating] = useState<number>(rating)

  useEffect(() => {
    setCurrentRating(rating)
  }, [rating])

  const onMouseMove = (rating: number): void => {
    if (editable) {
      setCurrentRating(rating)
    }
  }

  const onClick = (rating: number): void => {
    if (editable && setRating) {
      setRating(rating)
    }
  }

  const onKeyUp = (keyCode: string, rating: number): void => {
    if (editable && setRating && keyCode === 'Enter') {
      setRating(rating)
    }
  }

  return (
    <div className={className} {...props}>
      {Array<JSX.Element>(STAR_TOTAL)
        .fill(<></>)
        .map((_: JSX.Element, i: number) => (
          <span
            key={i}
            className={cn(styles.star, {
              [styles.editable]: editable
            })}
            tabIndex={editable ? 0 : -1}
            onMouseEnter={() => onMouseMove(i + 1)}
            onMouseLeave={() => onMouseMove(rating)}
            onClick={() => onClick(i + 1)}
            onKeyUp={({ code }) => onKeyUp(code, i + 1)}
          >
            <StarIcon
              className={cn(styles.starIcon, {
                [styles.filled]: i < currentRating,
              })}
            />
          </span>
        ))}
    </div>
  )
}

export { Rating }
