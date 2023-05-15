<script setup lang="ts">
import type { TableColumn, TablePagination } from '~/helpers/types'

withDefaults(
  defineProps<{
    columns: TableColumn[]
    data: any[]
    rowKey?: string
    pagination?: TablePagination
    loading?: boolean
    can?: { edit?: boolean; delete?: boolean }
  }>(),
  {
    rowKey: 'id',
    can: () => ({ edit: true, delete: true }),
  },
)

const emit = defineEmits<{
  (e: 'pagination', page: number): void
  (e: 'actions', type: 'edit' | 'delete', rowKey: number): void
}>()

const handleDelete = (rowKey: number) => {
  ElMessageBox.confirm('Item will be permanently deleted. Continue?', 'Warning', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
  })
    .then(() => {
      emit('actions', 'delete', rowKey)
      ElMessage({
        type: 'error',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}

const handlePagination = (page: number) => {
  emit('pagination', page)
}
</script>

<template>
  <div>
    <ElTable v-loading="!!loading" :data="data" size="large" border>
      <ElTableColumn
        v-for="(col, colIndex) in columns"
        :key="colIndex"
        :prop="col.prop"
        :label="col.label"
        :width="col.width"
        :min-width="col.minWidth"
        :align="col.align"
        :class-name="col.className"
        :formatter="col.formatter"
        :resizable="false"
      >
        <template #default="{ column, row }">
          <slot :name="column.property" :current="row[column.property]" :row="row">
            {{ row[column.property] }}
          </slot>
        </template>
      </ElTableColumn>
      <ElTableColumn
        v-if="can.edit || can.delete"
        align="center"
        width="220"
        fixed="right"
        :resizable="false"
      >
        <template #default="scope">
          <ElButton
            v-if="can.edit"
            :loading="loading"
            @click="emit('actions', 'edit', scope.row[rowKey])"
          >
            Edit
          </ElButton>
          <ElButton
            v-if="can.delete"
            :loading="loading"
            type="danger"
            @click="handleDelete(scope.row[rowKey])"
          >
            Delete
          </ElButton>
        </template>
      </ElTableColumn>
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
    font-weight: 600;
  }

  &__empty-block {
    min-height: 150px;
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
