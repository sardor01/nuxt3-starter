import type { Ref } from 'vue'

const uid = (prefix = '') => {
  const id = Date.now().toString(36) + Math.random().toString(36).substring(2)
  return prefix ? `${prefix}-${id}` : id
}

export const useUid = (prefix?: string): { uid: Readonly<Ref<string>> } => {
  return {
    uid: readonly(ref(uid(prefix))),
  }
}
