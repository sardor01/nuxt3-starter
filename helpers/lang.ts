import { localeCodes } from '~/config'

const _removeLocaleCode = (str: string | number | symbol) => {
  return str.toString().replace(new RegExp(`_(${localeCodes.join('|')})$`), '')
}

export const getLocaleValue = <O extends object, K extends keyof O>(obj: O, key: K, locale: string) => {
  const currentCode = localeCodes.find((code) => code === locale) ?? localeCodes[0]
  const noLocaleKey = _removeLocaleCode(key)
  if (noLocaleKey === key) return obj[key]
  return obj[`${noLocaleKey}_${currentCode}` as K]
}

export const handleArrayI18n = <A extends object, K extends keyof A>(arr: Array<A>, keys: K[], locale: string) => {
  const localizedValues: Array<Record<string, string | undefined> & Omit<A, (typeof keys)[number]>> = []
  const noLocaleKeys = keys.map((key) => _removeLocaleCode(key))

  for (const item of arr) {
    const localizedItem = new Map()

    let itemKey: keyof A
    for (itemKey in item) {
      const noLocaleKey = _removeLocaleCode(itemKey)

      if (noLocaleKey && noLocaleKeys.includes(noLocaleKey)) {
        localizedItem.set(noLocaleKey, item[`${noLocaleKey}_${locale}` as K])
        continue
      }

      localizedItem.set(itemKey, item[itemKey])
    }

    localizedValues.push(Object.fromEntries(localizedItem))
  }

  return localizedValues
}

export const omitLocaleCode = (key: string): [string, string] => {
  const result = _removeLocaleCode(key)
  const omittedLocale = key.replace(result, '').slice(1).toUpperCase()
  return [result, omittedLocale]
}
