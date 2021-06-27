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
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IReviewForm>()
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false)
  const [showErrorAlert, setShowErrorAlert] = useState<boolean>(false)

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
        reset()
        setShowSuccessAlert(true)
      } else {
        setShowErrorAlert(true)
      }
    } catch {
      setShowErrorAlert(true)
    }
  }

  return (
    <form
      className={cn(className, styles.form)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        className={cn(styles.name, {
          [styles.error]: 'name' in errors,
        })}
        {...register('name', {
          required: true,
        })}
        placeholder='Имя'
      />
      <Input
        className={cn(styles.title, {
          [styles.error]: 'title' in errors,
        })}
        {...register('title', {
          required: true,
        })}
        placeholder='Заголовок отзыва'
      />
      <div className={styles.estimation}>
        <span>Оценка:</span>
        <Controller
          name='rating'
          defaultValue={0}
          control={control}
          rules={{
            required: true,
            min: 1,
          }}
          render={({ field: { ref, value, onChange } }) => (
            <Rating
              ref={ref}
              className={cn(styles.rating, {
                [styles.error]: 'rating' in errors,
              })}
              editable={true}
              rating={value}
              setRating={onChange}
            />
          )}
        />
      </div>
      <Textarea
        className={cn(styles.description, {
          [styles.error]: 'description' in errors,
        })}
        {...register('description', {
          required: true,
        })}
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
          Спасибо, ваш отзыв будет опубликован после проверки
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
