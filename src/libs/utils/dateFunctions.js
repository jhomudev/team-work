export const formatDate = (dateToFormated, separator = '/') => {
  const originalDate = new Date(dateToFormated)
  const day = String(originalDate.getDate()).padStart(2, '0')
  const month = String(originalDate.getMonth() + 1).padStart(2, '0')
  const year = String(originalDate.getFullYear())

  const dateFormated = `${day}${separator}${month}${separator}${year}`
  return dateFormated
}

export const getLeftTime = (date) => {
  const currentDate = new Date()
  const originalDate = new Date(date)
  const millisecondsPerDay = 1000 * 60 * 60 * 24
  const millisecondsPerMonth = millisecondsPerDay * 30.44 // On average, a month has 30.44 days.
  const millisecondsPerYear = millisecondsPerDay * 365 // A year has 365 days.

  const differenceInMilliseconds = currentDate - originalDate
  const differenceInDays = Math.floor(differenceInMilliseconds / millisecondsPerDay)
  const differenceInMonths = Math.floor(differenceInMilliseconds / millisecondsPerMonth)
  const differenceInYears = Math.floor(differenceInMilliseconds / millisecondsPerYear)

  if (differenceInDays === 0) {
    return 'hoy día'
  } else if (differenceInDays === 1) {
    return 'ayer'
  } else if (differenceInDays < 30) {
    return `hace ${differenceInDays} días`
  } else if (differenceInMonths === 1) {
    return 'hace un mes'
  } else if (differenceInMonths < 12) {
    return `hace ${differenceInMonths} meses`
  } else if (differenceInYears === 1) {
    return 'hace un año'
  } else {
    return `hace ${differenceInYears} años`
  }
}
