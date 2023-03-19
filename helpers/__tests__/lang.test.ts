import { describe, expect, it } from 'vitest'
import { getLocaleValue } from '../lang'

describe('lang', () => {
  it('tests getLocaleValue function', () => {
    const locale = 'ru'
    const obj = {
      title_en: 'Title en',
      title_ru: 'Title ru',
    }

    expect(getLocaleValue(obj, 'title_en', locale)).toBe('Title ru')
  })
})
