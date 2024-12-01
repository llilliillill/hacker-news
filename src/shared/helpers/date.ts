export const getDate = (time: number) => {
  return new Date(time * 1000)
  .toLocaleString('ru', {
    year:  'numeric', 
    month: 'numeric', 
    day:   'numeric'
  })
}

export const getDataNumber = (date: string) => {
  return Number(date.replace(/([0-9]+).([0-9]+).([0-9]+)/, '$3$2$1'))
}