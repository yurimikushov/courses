const splitToThousands = (number: number): string => {
  const thousands = /\B(?=(\d{3})+(?!\d))/g

  return number.toString().replace(thousands, ' ')
}

export { splitToThousands }
