import { describe, expect, it } from 'vitest'
import { getLocaleValue, handleArrayI18n, omitLocaleCode } from '../lang'

describe('getLocaleValue', () => {
  const obj = {
    name_en: 'Product (English)',
    name_ru: 'Product (Russian)',
    description_en: 'Product description (English)',
    description_ru: 'Product description (Russian)',
    rating: 5,
  }

  it('should return the correct value', () => {
    expect(getLocaleValue(obj, 'name_en', 'en')).toBe('Product (English)')
    expect(getLocaleValue(obj, 'description_en', 'en')).toBe('Product description (English)')
  })

  it('should return the wrong value for the specified key in the specified locale', () => {
    expect(getLocaleValue(obj, 'name_en', 'ru')).not.toBe('Product (English)')
    expect(getLocaleValue(obj, 'description_en', 'ru')).not.toBe('Product description (English)')
  })

  it('should return the correct value even if not locale key', () => {
    expect(getLocaleValue(obj, 'rating', 'ru')).toBe(5)
  })
})

describe('handleArrayI18n', () => {
  const arr = [
    { name_en: 'Product (English)', name_ru: 'Product (Russian)', price: 10 },
    { name_en: 'Item (English)', name_ru: 'Item (Russian)', price: 20 },
  ]

  it('should return an array with localized values for the specified keys and locale', () => {
    const result = handleArrayI18n(arr, ['name_en'], 'en')

    expect(result).toEqual([
      { name: 'Product (English)', price: 10 },
      { name: 'Item (English)', price: 20 },
    ])
  })

  it('should handle keys without locale suffix and return undefined', () => {
    const result = handleArrayI18n(arr, ['name_en', 'price'], 'en')

    expect(result).toEqual([
      { name: 'Product (English)', price: undefined },
      { name: 'Item (English)', price: undefined },
    ])
  })
})

describe('omitLocaleCode', () => {
  it('should omit the locale code from the key and return the result with the omitted locale', () => {
    expect(omitLocaleCode('name_en')).toEqual(['name', 'EN'])
    expect(omitLocaleCode('price_ru')).toEqual(['price', 'RU'])
    expect(omitLocaleCode('description')).toEqual(['description', ''])
  })

  it('should handle keys without locale codes and return the same key with a empty string for omitted locale', () => {
    expect(omitLocaleCode('name')).toEqual(['name', ''])
    expect(omitLocaleCode('price')).toEqual(['price', ''])
  })
})
