import { config, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// icons
import { faChevronDown, faMagnifyingGlass, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

library.add(faChevronDown, faMagnifyingGlass, faSpinner, faUser)

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.component('FaIcon', FontAwesomeIcon)
})
