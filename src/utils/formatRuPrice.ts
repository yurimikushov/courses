const formatRuPrice = (price: number): string => {
  const thousands = /\B(?=(\d{3})+(?!\d))/g
  const formattedPrice = price.toString().replace(thousands, ' ')

  return `${formattedPrice} ₽`
}

export { formatRuPrice }
