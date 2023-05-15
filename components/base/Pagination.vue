<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    value?: number
    pageCount: number
    forcePage?: number
    clickHandler?: Function
    pageRange?: number
    marginPages?: number
    breakViewText?: string
    containerClass?: string
    pageClass?: string
    pageLinkClass?: string
    prevClass?: string
    prevLinkClass?: string
    nextClass?: string
    nextLinkClass?: string
    breakViewClass?: string
    breakViewLinkClass?: string
    activeClass?: string
    notActiveClass?: string
    disabledClass?: string
    firstLastButton?: boolean
    firstButtonText?: string
    lastButtonText?: string
    hidePrevNext?: boolean
  }>(),
  {
    clickHandler: () => {},
    pageRange: 3,
    marginPages: 1,
    breakViewText: '…',
    activeClass: 'active',
    notActiveClass: '',
    disabledClass: 'disabled',
    firstLastButton: false,
    firstButtonText: 'First',
    lastButtonText: 'Last',
    hidePrevNext: false,
  },
)

const emit = defineEmits<{
  (e: 'input', value: number): void
}>()

const {
  value,
  pageCount,
  forcePage,
  clickHandler,
  pageRange,
  marginPages,
  breakViewText,
  containerClass,
  pageClass,
  pageLinkClass,
  prevClass,
  prevLinkClass,
  nextClass,
  nextLinkClass,
  breakViewClass,
  breakViewLinkClass,
  activeClass,
  disabledClass,
  firstLastButton,
  firstButtonText,
  lastButtonText,
  hidePrevNext,
} = toRefs(props)

const innerValue = ref(1)

const selected = computed({
  get: () => value?.value || innerValue.value,
  set: (newValue) => {
    innerValue.value = newValue
  },
})

const pages = computed(() => {
  const items: any = {}
  if (pageCount.value <= pageRange.value) {
    for (let index = 0; index < pageCount.value; index++) {
      const page = {
        index,
        content: index + 1,
        selected: index === selected.value - 1,
      }
      items[index] = page
    }
  } else {
    const halfPageRange = Math.floor(pageRange.value / 2)
    const setPageItem = (index: number) => {
      const page = {
        index,
        content: index + 1,
        selected: index === selected.value - 1,
      }
      items[index] = page
    }
    const setBreakView = (index: number) => {
      const breakView = {
        disabled: true,
        breakView: true,
      }
      items[index] = breakView
    }
    for (let i = 0; i < marginPages.value; i++) setPageItem(i)

    let selectedRangeLow = 0
    if (selected.value - halfPageRange > 0) selectedRangeLow = selected.value - 1 - halfPageRange

    let selectedRangeHigh = selectedRangeLow + pageRange.value - 1
    if (selectedRangeHigh >= pageCount.value) {
      selectedRangeHigh = pageCount.value - 1
      selectedRangeLow = selectedRangeHigh - pageRange.value + 1
    }
    for (let i = selectedRangeLow; i <= selectedRangeHigh && i <= pageCount.value - 1; i++)
      setPageItem(i)

    if (selectedRangeLow > marginPages.value) setBreakView(selectedRangeLow - 1)

    if (selectedRangeHigh + 1 < pageCount.value - marginPages.value)
      setBreakView(selectedRangeHigh + 1)

    for (let i = pageCount.value - 1; i >= pageCount.value - marginPages.value; i--) setPageItem(i)
  }

  return items
})

const handlePageSelected = (pageSelected: number) => {
  if (selected.value === pageSelected) return

  innerValue.value = pageSelected
  emit('input', pageSelected)
  clickHandler.value(pageSelected)
}

const prevPage = () => {
  if (selected.value <= 1) return

  handlePageSelected(selected.value - 1)
}

const nextPage = () => {
  if (selected.value >= pageCount.value) return

  handlePageSelected(selected.value + 1)
}

const firstPageSelected = () => {
  return selected.value === 1
}

const lastPageSelected = () => {
  return selected.value === pageCount.value || pageCount.value === 0
}

const selectFirstPage = () => {
  if (selected.value <= 1) return

  handlePageSelected(1)
}

const selectLastPage = () => {
  if (selected.value >= pageCount.value) return

  handlePageSelected(pageCount.value)
}

onBeforeUpdate(() => {
  if (forcePage?.value === undefined) return

  if (forcePage.value !== selected.value) selected.value = forcePage.value
})
</script>

<template>
  <ul :class="containerClass">
    <li v-if="firstLastButton" :class="[pageClass, firstPageSelected() ? disabledClass : '']">
      <BaseButton
        variant="none"
        size="none"
        :class="pageLinkClass"
        :tabindex="firstPageSelected() ? -1 : 0"
        @click="selectFirstPage()"
        @keyup.enter="selectFirstPage()"
      >
        {{ firstButtonText }}
      </BaseButton>
    </li>

    <li
      v-if="!(firstPageSelected() && hidePrevNext)"
      :class="[prevClass, firstPageSelected() ? disabledClass : '']"
    >
      <BaseButton
        variant="none"
        size="none"
        :class="prevLinkClass"
        :tabindex="firstPageSelected() ? -1 : 0"
        @click="prevPage()"
        @keyup.enter="prevPage()"
      >
        <FontAwesomeIcon icon="fa-solid fa-angles-left" />
      </BaseButton>
    </li>

    <li
      v-for="(page, index) in pages"
      :key="index"
      :class="[
        pageClass,
        page.selected ? activeClass : notActiveClass,
        page.disabled ? disabledClass : '',
        page.breakView ? breakViewClass : '',
      ]"
    >
      <BaseButton
        v-if="page.breakView"
        variant="none"
        size="none"
        :class="[pageLinkClass, breakViewLinkClass]"
        tabindex="0"
      >
        <slot name="breakViewContent">
          {{ breakViewText }}
        </slot>
      </BaseButton>
      <BaseButton
        v-else-if="page.disabled"
        variant="none"
        size="none"
        :class="pageLinkClass"
        tabindex="0"
      >
        {{ page.content }}
      </BaseButton>
      <BaseButton
        v-else
        variant="none"
        size="none"
        :class="pageLinkClass"
        tabindex="0"
        @click="handlePageSelected(page.index + 1)"
        @keyup.enter="handlePageSelected(page.index + 1)"
      >
        {{ page.content }}
      </BaseButton>
    </li>

    <li
      v-if="!(lastPageSelected() && hidePrevNext)"
      :class="[nextClass, lastPageSelected() ? disabledClass : '']"
    >
      <BaseButton
        variant="none"
        size="none"
        :class="nextLinkClass"
        :tabindex="lastPageSelected() ? -1 : 0"
        @click="nextPage()"
        @keyup.enter="nextPage()"
      >
        <FontAwesomeIcon icon="fa-solid fa-angles-right" />
      </BaseButton>
    </li>

    <li v-if="firstLastButton" :class="[pageClass, lastPageSelected() ? disabledClass : '']">
      <BaseButton
        variant="none"
        size="none"
        :class="pageLinkClass"
        :tabindex="lastPageSelected() ? -1 : 0"
        @click="selectLastPage()"
        @keyup.enter="selectLastPage()"
      >
        {{ lastButtonText }}
      </BaseButton>
    </li>
  </ul>
</template>
