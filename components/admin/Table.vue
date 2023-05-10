<script setup lang="ts">
import type { TableColumn } from '~/types'

defineProps<{
  columns: TableColumn[]
  data: any[]
  pagination?: { currentPage: number; pageSize: number; total: number }
}>()

const emit = defineEmits(['pagination'])

const handlePagination = (page: number) => {
  emit('pagination', page)
}
</script>

<template>
  <div>
    <ElTable :data="data" size="large" :border="true">
      <ElTableColumn
        v-for="(column, columnIndex) in columns"
        :key="columnIndex"
        :prop="column.prop"
        :label="column.label"
        :width="column.width"
        :min-width="column.minWidth"
        :resizable="false"
      />
    </ElTable>
    <ElPagination
      v-if="pagination"
      :current-page="pagination.currentPage"
      :page-size="pagination.pageSize"
      :total="pagination.total"
      layout="prev, pager, next"
      background
      hide-on-single-page
      class="mt-2 justify-end"
      @current-change="handlePagination"
    />
  </div>
</template>

<style lang="scss">
.el-table {
  --el-table-text-color: var(--el-text-color-primary);
  --el-table-header-text-color: var(--el-text-color-regular);

  thead th {
    font-weight: 500;
  }
}

.el-pagination {
  &.is-background {
    .btn-next,
    .btn-prev,
    .el-pager li {
      margin: 0;
    }
  }
}

.el-pagination,
.el-pager {
  flex-wrap: wrap;
  gap: 6px;
}

.el-pager li {
  padding: 0 8px;
}
</style>
