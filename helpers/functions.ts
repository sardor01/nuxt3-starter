export const isObject = (value: unknown) => {
  return value != null && typeof value === 'object' && Array.isArray(value) === false
}

export const stripTags = (input?: string) => {
  if (!input) return ''
  return input.replace(/<(?:.|\n)*?>/gm, '')
}

export const formatDate = (date?: string | number | Date, separator = '.') => {
  type numberOrString = number | string

  if (!date) date = new Date()

  const selectedDate = new Date(date)
  let dd: numberOrString = selectedDate.getDate()
  let mm: numberOrString = selectedDate.getMonth() + 1

  const yyyy = selectedDate.getFullYear()
  if (dd < 10) dd = `0${dd}`
  if (mm < 10) mm = `0${mm}`

  if (separator === '/') return `${mm}/${dd}/${yyyy}`
  if (separator === '-') return `${yyyy}-${mm}-${dd}`
  return `${dd}.${mm}.${yyyy}`
}

export const formatPhoneNumber = (phone: string) => {
  return phone.replace(/[^0-9]/gi, '')
}

export const beautifyPhoneNumber = (phone: unknown) => {
  if (!phone || typeof phone !== 'string') return ''
  const cleaned = formatPhoneNumber(phone)
  const match: any = cleaned.match(/^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/)
  return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`
}

export const parseJSON = (value: string) => {
  try {
    return JSON.parse(value) as unknown
  } catch (e) {
    return false
  }
}

export const getUrl = (arr: string[], index: number) => {
  return arr.slice(0, index + 1).join('/') === '' ? '/' : arr.slice(0, index + 1).join('/')
}
