const formatDate = (date: Date): string => {
  return new Date(date).toLocaleString('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export { formatDate }
