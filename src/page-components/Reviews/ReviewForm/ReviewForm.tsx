import { FormEvent, useState } from 'react'
import cn from 'classnames'
import { Rating, Input, Textarea, Button } from '../../../components'
import { ReviewFormProps } from './ReviewForm.props'
import styles from './ReviewForm.module.css'

const ReviewForm = ({ className }: ReviewFormProps): JSX.Element => {
  const [reviewerName, setReviewerName] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [rating, setRating] = useState<number>(0)

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault()

    console.log('submitting...', {
      reviewerName,
      title,
      description,
      rating,
    })
  }

  return (
    <form className={cn(className, styles.form)}>
      <Input
        className={styles.reviewerName}
        value={reviewerName}
        onChange={({ target }) => setReviewerName(target.value)}
        placeholder='Имя'
      />
      <Input
        className={styles.title}
        value={title}
        onChange={({ target }) => setTitle(target.value)}
        placeholder='Заголовок отзыва'
      />
      <div className={styles.estimation}>
        <span>Оценка:</span>
        <Rating editable={true} rating={rating} setRating={setRating} />
      </div>
      <Textarea
        className={styles.description}
        value={description}
        onChange={({ target }) => setDescription(target.value)}
        placeholder='Текст отзыва'
      />
      <div className={styles.submit}>
        <Button appearance='primary' onClick={onSubmit}>
          Отправить
        </Button>
        <div>
          * Перед публикацией отзыв пройдет предварительную модерацию и проверку
        </div>
      </div>
    </form>
  )
}

export { ReviewForm }
