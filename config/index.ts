import type { LocaleObject } from 'vue-i18n-routing'

export const localeCodes = <const>['en', 'ru']

export const defaultLocale = localeCodes[0]

export const locales: LocaleObject[] = [
  { code: localeCodes[0], iso: 'en', name: 'English', file: 'en.json' },
  { code: localeCodes[1], iso: 'ru', name: 'Русский', file: 'ru.json' },
]
