import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'
import cn from 'classnames'
import { Rating, Input, Textarea, Button, Alert } from '../../../components'
import { API } from '../../../constants'
import { IReviewForm } from './ReviewForm.interface'
import { IReviewFormResponse } from './IReviewFormResponse.interface'
import { ReviewFormProps } from './ReviewForm.props'
import styles from './ReviewForm.module.css'

const ReviewForm = ({ productId, className }: ReviewFormProps): JSX.Element => {
  const { register, control, handleSubmit } = useForm<IReviewForm>()
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(true)
  const [showErrorAlert, setShowErrorAlert] = useState<boolean>(true)

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { status } = await axios.post<IReviewFormResponse>(
        API.review.create,
        {
          productId,
          ...formData,
        }
      )

      if (status === 201) {
        console.log('Success')
      } else {
        console.error('Error')
      }
    } catch {
      console.error('Error')
    }
  }

  return (
    <form
      className={cn(className, styles.form)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input className={styles.name} {...register('name')} placeholder='Имя' />
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
      {showSuccessAlert && (
        <Alert
          className={styles.alert}
          appearance='success'
          onClose={() => setShowSuccessAlert(false)}
        >
          Спасибо, ваш отзыв будет опубликован после проверки.
        </Alert>
      )}
      {showErrorAlert && (
        <Alert
          className={styles.alert}
          appearance='error'
          onClose={() => setShowErrorAlert(false)}
        >
          Что-то пошло не так, попробуйте обновить страницу
        </Alert>
      )}
    </form>
  )
}

export { ReviewForm }
