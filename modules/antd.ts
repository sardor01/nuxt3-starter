import * as AntD from 'ant-design-vue'
import { addComponent, defineNuxtModule } from 'nuxt/kit'

export default defineNuxtModule({
  async setup() {
    for (const key in AntD) {
      if (['version', 'install'].includes(key)) continue
      await addComponent({
        filePath: 'ant-design-vue/es',
        name: `A${key}`,
        export: key,
      })
    }
  },
})
