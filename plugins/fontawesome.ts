import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faAnglesLeft,
  faAnglesRight,
  faChevronDown,
  faMagnifyingGlass,
  faSpinner,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

export default defineNuxtPlugin(() => {
  config.autoAddCss = false
  library.add(
    faAnglesLeft,
    faAnglesRight,
    faChevronDown,
    faMagnifyingGlass,
    faSpinner,
    faUser,
  )
})
