import { useForm, Controller } from 'react-hook-form'
import cn from 'classnames'
import { Rating, Input, Textarea, Button } from '../../../components'
import { IReviewForm } from './ReviewForm.interface'
import { ReviewFormProps } from './ReviewForm.props'
import styles from './ReviewForm.module.css'

const ReviewForm = ({ className }: ReviewFormProps): JSX.Element => {
  const { register, control, handleSubmit } = useForm<IReviewForm>()

  const onSubmit = (data: IReviewForm): void => {
    console.log(data)
  }

  return (
    <form
      className={cn(className, styles.form)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        className={styles.reviewerName}
        {...register('reviewerName')}
        placeholder='Имя'
      />
      <Input
        className={styles.title}
        {...register('title')}
        placeholder='Заголовок отзыва'
      />
      <div className={styles.estimation}>
        <span>Оценка:</span>
        <Controller
          name='rating'
          defaultValue={0}
          control={control}
          render={({ field }) => (
            <Rating
              ref={field.ref}
              editable={true}
              rating={field.value}
              setRating={field.onChange}
            />
          )}
        />
      </div>
      <Textarea
        className={styles.description}
        {...register('description')}
        placeholder='Текст отзыва'
      />
      <div className={styles.submit}>
        <Button appearance='primary'>Отправить</Button>
        <div>
          * Перед публикацией отзыв пройдет предварительную модерацию и проверку
        </div>
      </div>
    </form>
  )
}

export { ReviewForm }
