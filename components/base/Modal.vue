<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    show: boolean
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
    modalClass?: string
    headerClass?: string
    bodyClass?: string
    footerClass?: string
    headerText?: string
    cancelText?: string
    confirmText?: string
    centered?: boolean
    hideCloseButton?: boolean
    hideHeader?: boolean
    hideFooter?: boolean
  }>(), {
    size: 'md',
    headerText: 'Modal',
    cancelText: 'Cancel',
    confirmText: 'Confirm',
    centered: true,
  },
)
const emit = defineEmits(['update:show', 'cancel', 'confirm'])

const modalActive = computed({
  get: () => props.show,
  set: value => emit('update:show', value),
})

const modalSize = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'max-w-md'
    case 'sm':
      return 'max-w-md sm:max-w-lg'
    case 'md':
      return 'max-w-md sm:max-w-lg md:max-w-xl'
    case 'lg':
      return 'max-w-md sm:max-w-lg md:max-w-xl lg:max-w-[800px]'
    case 'xl':
      return 'max-w-md sm:max-w-lg md:max-w-xl lg:max-w-[800px] xl:max-w-6xl'
    default:
      return 'max-w-full'
  }
})

const modalCentered = computed(() => {
  return props.centered ? 'items-center' : 'items-start'
})

const modalPadding = computed(() => {
  const bodyPaddingTop = props.hideHeader ? 'pt-4 md:pt-6' : ''
  const bodyPaddingBottom = props.hideFooter ? 'pb-4 md:pb-6' : ''
  return {
    header: 'pt-4 pb-3 px-6',
    body: `${bodyPaddingTop} ${bodyPaddingBottom} px-4 md:px-6`,
    footer: 'pt-3 pb-4 px-6',
  }
})

const handleClose = () => {
  modalActive.value = false
}

const handleKeydown = (e: KeyboardEvent) => {
  if (!modalActive.value)
    return

  if (e.key === 'Escape')
    handleClose()
}

watch(modalActive, (value) => {
  if (value)
    document.addEventListener('keydown', handleKeydown)
  else
    document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <div v-if="modalActive" class="relative z-modal">
      <div class="fixed inset-0 bg-black bg-opacity-50" />

      <div class="fixed inset-0" @keydown.esc="handleClose">
        <div class="w-full h-full flex items-center justify-center p-4">
          <div
            class="flex align-middle h-full w-full"
            :class="[modalSize, modalCentered]"
          >
            <div
              class="w-full max-h-full flex flex-col shadow-xl transition-all overflow-hidden"
              :class="[
                modalClass || 'bg-white rounded-xl',
              ]"
            >
              <div
                v-if="!hideHeader"
                data-test="dialog-header"
                class="shrink-0 flex items-center"
                :class="headerClass || modalPadding.header"
              >
                <slot name="header">
                  <h3
                    class="flex-1 text-xl font-bold leading-8"
                    :class="{ 'mr-2': !hideCloseButton }"
                  >
                    {{ headerText }}
                  </h3>
                  <BaseButton
                    variant="red"
                    size="none"
                    class="w-8 h-8 rounded-full"
                    @click="handleClose"
                  >
                    <fa-icon icon="fa-solid fa-xmark" class="fa-md" />
                  </BaseButton>
                </slot>
              </div>

              <div class="flex-1 overflow-auto" :class="bodyClass || modalPadding.body">
                <slot name="body" />
              </div>

              <div
                v-if="!hideFooter"
                data-test="dialog-footer"
                class="shrink-0"
                :class="footerClass || modalPadding.footer"
              >
                <slot name="footer">
                  <div class="flex flex-wrap justify-center items-center gap-4">
                    <BaseButton
                      data-test="cancel-button"
                      variant="red"
                      class="w-full max-w-[160px]"
                      @click="emit('cancel')"
                    >
                      {{ cancelText }}
                    </BaseButton>
                    <BaseButton
                      data-test="confirm-button"
                      variant="blue"
                      class="w-full max-w-[160px]"
                      @click="emit('confirm')"
                    >
                      {{ confirmText }}
                    </BaseButton>
                  </div>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
