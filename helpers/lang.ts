import { locales } from '~/config'

export const getLocaleValue = <V, T extends object>(obj: T, key: keyof T, locale?: string) => {
  const localeCodes = locales.map((opt) => opt.code)
  const currentCode = localeCodes.find((code) => code === locale) ?? localeCodes[0]
  const str = key
    .toString()
    .replace(new RegExp(`${localeCodes.map((i) => `_${i}`).join('|')}$`), '')
  if (str === key) return obj[key] as V
  else return obj[`${str}_${currentCode}` as keyof T] as V
}
