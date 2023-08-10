<script setup lang="ts" generic="T">
import type { Placement, Strategy } from '@floating-ui/vue'
import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/vue'

const props = withDefaults(
  defineProps<{
    items: T[][]
    mode?: 'click' | 'hover'
    placement?: Placement
    strategy?: Strategy
    shift?: number
    triggerClass?: string
    tooltipClass?: string
    menuClass?: string
    itemsClass?: string
    itemClass?: string
  }>(),
  {
    mode: 'click',
    placement: 'bottom-start',
    strategy: 'absolute',
    shift: 8,
    triggerClass: '',
    tooltipClass: 'w-max',
    menuClass: '',
    itemsClass: 'p-1',
    itemClass: '',
  },
)

const route = useRoute()

const dropdown = ref<HTMLElement>()
const tooltip = ref<HTMLElement>()
const open = ref(false)

const { floatingStyles } = useFloating(dropdown, tooltip, {
  open,
  placement: props.placement,
  strategy: props.strategy,
  middleware: [flip(), offset(5), shift()],
  whileElementsMounted: autoUpdate,
})

const handleOpen = () => (open.value = true)

const handleClose = () => (open.value = false)

const handleToggle = () => (open.value = !open.value)

onClickOutside(dropdown, handleClose)

watch(
  () => route.path,
  () => {
    open.value = false
  },
)
</script>

<template>
  <div
    ref="dropdown"
    class="inline-flex h-auto cursor-pointer items-center justify-center leading-extra-normal"
    @keydown.esc="handleClose"
    @mouseover="mode === 'hover' ? handleOpen() : () => {}"
    @mouseleave="mode === 'hover' ? handleClose() : () => {}"
  >
    <BaseButton
      custom
      left
      :class="triggerClass"
      @click="mode === 'click' ? handleToggle() : () => {}"
    >
      <slot name="trigger" :open="open" />
    </BaseButton>
    <div
      v-show="open && (items.length || $slots.header || $slots.header)"
      ref="tooltip"
      class="z-30 will-change-transform"
      :class="tooltipClass"
      :style="floatingStyles"
    >
      <div
        class="divide-y overflow-y-auto rounded-md py-1 shadow-xl"
        :class="menuClass || 'divide-sky-600/50 bg-gray-100 text-neutral-950'"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <slot name="header" />
        <template v-if="items.length">
          <ul
            v-for="(subItems, index) of items"
            :key="index"
            class="my-0 max-h-[450px] overflow-y-auto"
            :class="itemsClass"
          >
            <li
              v-for="(item, i) of subItems"
              :key="i"
              role="menuitem"
              :class="itemClass"
              @click="handleClose"
            >
              <slot name="item" :item="item" />
            </li>
          </ul>
        </template>
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
