import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faMagnifyingGlass, faSpinner, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'

export default defineNuxtPlugin(() => {
  config.autoAddCss = false
  library.add(faChevronDown, faMagnifyingGlass, faSpinner, faUser, faXmark)
})
