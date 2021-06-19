const declOfNum = (
  number: number,
  titles: [string, string, string]
): string => {
  if (4 < number % 100 && number % 100 < 20) {
    return titles[2]
  }

  const cases = [2, 0, 1, 1, 1, 2]

  return titles[cases[number % 10 < 5 ? number % 10 : 5]]
}

export { declOfNum }
