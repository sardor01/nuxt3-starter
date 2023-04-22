import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faAnglesLeft,
  faAnglesRight,
  faChevronDown,
  faDownload,
  faFingerprint,
  faList,
  faLock,
  faRotate,
  faSpinner,
  faUpload,
} from '@fortawesome/free-solid-svg-icons'

export default defineNuxtPlugin(() => {
  config.autoAddCss = false
  library.add(
    faAnglesLeft,
    faAnglesRight,
    faChevronDown,
    faDownload,
    faFingerprint,
    faList,
    faLock,
    faRotate,
    faSpinner,
    faUpload,
  )
})
