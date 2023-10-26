<script setup lang="ts">
import type { Link } from '~/composables/useSiteLinks'

defineProps<{ items: Link[] }>()
const { t } = useI18n()
</script>

<template>
    <nav class="flex" aria-label="breadcrumb">
        <ul
            class="inline-flex flex-nowrap items-center gap-x-2.5 overflow-x-auto whitespace-nowrap px-1 py-2"
        >
            <li
                v-for="(item, index) in items"
                :key="item.id"
                class="inline-flex h-7 select-none items-center gap-x-2 text-sm font-medium uppercase"
            >
                <span v-if="index" class="mb-0.5 leading-none">/</span>
                <AppLink
                    :to="item.to"
                    left
                    class="aria-current-page:pointer-events-none"
                >
                    {{ item.dynamic ? item.title : t(item.title) }}
                </AppLink>
            </li>
        </ul>
    </nav>
</template>
