import { addComponent, defineNuxtModule } from 'nuxt/kit'
import * as fontawesome from '@fortawesome/vue-fontawesome'

export default defineNuxtModule({
  async setup() {
    for (const key in fontawesome) {
      if (['version', 'install'].includes(key)) continue
      await addComponent({
        filePath: '@fortawesome/vue-fontawesome',
        name: key,
        export: key,
      })
    }
  },
})
