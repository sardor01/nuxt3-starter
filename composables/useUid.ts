import type { Ref } from 'vue'
import { getUid } from '~/helpers/functions'

export const useUid = (prefix?: string): { uid: Readonly<Ref<string>> } => {
  return {
    uid: readonly(ref(getUid(prefix))),
  }
}
