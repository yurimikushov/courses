interface IReview {
  _id: string
  name: string
  title: string
  description: string
  rating: number
  createdAt: Date
}

export type { IReview }