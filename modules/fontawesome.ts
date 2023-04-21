import * as fontawesome from '@fortawesome/vue-fontawesome'
import { addComponent, defineNuxtModule } from 'nuxt/kit'

export default defineNuxtModule({
  async setup() {
    for (const key in fontawesome) {
      await addComponent({
        filePath: '@fortawesome/vue-fontawesome',
        name: key,
        export: key,
      })
    }
  },
})
