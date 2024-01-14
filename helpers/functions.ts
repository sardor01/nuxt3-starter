export const formatDate = (date?: string | number | Date, separator: '/' | '-' | '.' = '.') => {
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

export const formatPrice = (number: number, n = 2, x = 3, s = ',', c = '.') => {
  const re = `\\d(?=(\\d{${x || 3}})+${n > 0 ? '\\D' : '$'})`
  const num = number.toFixed(Math.max(0, ~~n))

  return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), `$&${s || ','}`)
}

export const getFileName = (path: string) => {
  return path.replace(/^.*[\\\/]/, '')
}

export const getIdFromSlug = (slug: string) => {
  return slug.split('-')[slug.split('-').length - 1]
}

export const getLocation = (href: string) => {
  const match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/)
  return (
    match && {
      href,
      protocol: match[1],
      host: match[2],
      hostname: match[3],
      port: match[4],
      pathname: match[5],
      search: match[6],
      hash: match[7],
    }
  )
}

export const getUid = (prefix = '') => {
  const id = Date.now().toString(36) + Math.random().toString(36).substring(2)
  return prefix ? `${prefix}-${id}` : id
}

export const getUrl = (arr: string[], index: number) => {
  return arr.slice(0, index + 1).join('/') === '' ? '/' : `/${arr.slice(0, index + 1).join('/')}`
}

export const hyphenToCamelCase = (str: string) => {
  return str.replace(/-./g, (m) => m[1].toUpperCase())
}

export const isObject = (value: unknown) => {
  return value != null && typeof value === 'object' && Array.isArray(value) === false
}

export const isNullish = (val: any) => {
  return [null, undefined, false].includes(val)
}

export const parseJSON = (value: string) => {
  try {
    return JSON.parse(value) as unknown
  } catch (e) {
    return false
  }
}

// #region phoneNumber
export const formatPhoneNumber = (phone: string) => {
  return phone.replace(/[^0-9]/gi, '')
}

export const beautifyPhoneNumber = (phone: unknown) => {
  if (!phone || typeof phone !== 'string') return ''
  const cleaned = formatPhoneNumber(phone)
  const match = cleaned.match(/^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/)
  if (!match) return ''
  return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`
}
// #endregion

export const stripTags = (input?: string) => {
  if (!input) return ''
  return input.replace(/<(?:.|\n)*?>/gm, '')
}

export const wait = <T>(time: number) => {
  return new Promise<T>((resolve) => setTimeout(resolve, time))
}
