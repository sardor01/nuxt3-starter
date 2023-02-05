import { config, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// icons
import { faUser } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

library.add(faUser)

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.component('FaIcon', FontAwesomeIcon)
})
