import {
  ForwardedRef,
  forwardRef,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import cn from 'classnames'
import { dummy } from '../../utils'
import { RatingProps } from './Rating.props'
import styles from './Rating.module.css'
import StarIcon from './assets/star.svg'

const STAR_TOTAL = 5

const Rating = forwardRef(
  (
    {
      rating,
      editable = false,
      setRating = dummy,
      className,
      ...props
    }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const ratingRefs = useRef<(HTMLSpanElement | null)[]>([])
    const [selectedRating, setSelectedRating] = useState<number>(rating)

    useEffect(() => {
      setSelectedRating(rating)
    }, [rating])

    const onKeyDownHandler = (e: KeyboardEvent, rating: number): void => {
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault()
        setRating(rating)
      }

      if (e.code === 'ArrowRight' || e.code === 'ArrowUp') {
        e.preventDefault()
        ratingRefs.current[rating]?.focus()
      }

      if (e.code === 'ArrowLeft' || e.code === 'ArrowDown') {
        e.preventDefault()
        ratingRefs.current[rating - 2]?.focus()
      }
    }

    return (
      <div ref={ref} className={cn(className, styles.rating)} {...props}>
        {Array<JSX.Element>(STAR_TOTAL)
          .fill(<></>)
          .map((_: JSX.Element, i: number) => (
            <span
              key={i}
              ref={(ref) => ratingRefs.current.push(ref)}
              className={cn(styles.star, {
                [styles.editable]: editable,
              })}
              tabIndex={editable ? 0 : -1}
              onMouseEnter={() => editable && setSelectedRating(i + 1)}
              onMouseLeave={() => editable && setSelectedRating(rating)}
              onClick={() => editable && setRating(i + 1)}
              onKeyDown={(e: KeyboardEvent) =>
                editable && onKeyDownHandler(e, i + 1)
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
)

export { Rating }
