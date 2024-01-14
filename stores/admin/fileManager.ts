export interface BlobInfo {
  id: () => string
  name: () => string
  filename: () => string
  blob: () => Blob
  base64: () => string
  blobUri: () => string
  uri: () => string | undefined
}

export const useAdminFileManagerStore = defineStore('adminFileManager', () => {
  const { $adminFetch, $config } = useNuxtApp()

  const isLoading = ref(false)

  const uploadImage = async (blobInfo: BlobInfo, success: any, failure: any) => {
    const formData = new FormData()
    formData.append('file', blobInfo.blob(), blobInfo.filename())

    const { data, error } = await $adminFetch('/file-manager/upload').post(formData).json<{ data: unknown }>()

    if (error.value) {
      failure('Error uploading image')
      return
    }

    if (!data.value || typeof data.value.data !== 'string') {
      failure('Invalid JSON')
      return
    }
    const dataPath = data.value.data
    success(`${$config.public.assetURL}/${dataPath}`)
  }

  const uploadFile = async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)

    isLoading.value = true
    const { data, error } = await $adminFetch('/file-manager/upload').post(formData).json<{ data: unknown }>()

    if (!error.value && data.value && typeof data.value.data === 'string') {
      return data.value.data
    }
    isLoading.value = false
  }

  const uploadFiles = async (file: File[]) => {
    if (!file.length) return Promise.resolve([])

    const formData = new FormData()
    for (let i = 0; i < file.length; i++) {
      formData.append('files[]', file[i])
    }

    isLoading.value = true
    const { data, error } = await $adminFetch('/file-manager/multiple-upload').post(formData).json<{ data: unknown }>()

    if (!error.value && data.value && Array.isArray(data.value.data)) {
      return data.value.data
    }
    isLoading.value = false
  }

  const deleteFile = async (path: string) => {
    isLoading.value = true
    await $adminFetch(`/file-manager/delete?file_path=${path}`).post()
    isLoading.value = false
  }

  return {
    isLoading,
    uploadImage,
    uploadFile,
    uploadFiles,
    deleteFile,
  }
})
