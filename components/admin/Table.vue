<script setup lang="ts">
import type { MenuProps, TableColumnType, TableProps } from 'ant-design-vue'

const props = defineProps<{
  columns: TableColumnType[]
  data: any[]
  pagination?: { total: number; current: number; pageSize: number }
  loading?: boolean
  hideActions?: boolean
}>()

const emit = defineEmits(['change', 'actions'])

const tableScrollX = ref(0)
const tableActions = [
  {
    key: 'edit',
    label: 'Edit',
    icon: 'fa-solid fa-pen-to-square',
    className: 'text-antd-primary',
  },
  {
    key: 'delete',
    label: 'Delete',
    icon: 'fa-solid fa-trash',
    className: 'text-antd-error',
  },
]

const tableColumns = computed(() => {
  const columns = props.columns
  if (!props.hideActions && !columns.some((column) => column.dataIndex === 'actions')) {
    columns.push({ title: '', dataIndex: 'actions', minWidth: 66, fixed: 'right' })
  }
  return columns.map((column) => ({ ...column, width: column.minWidth }))
})

const handleTableChange: TableProps['onChange'] = (pagination) => {
  emit('change', pagination.current)
}

const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
  const [type, id] = key.toString().split('_')
  emit('actions', { id, type })
}

onBeforeMount(() => {
  tableScrollX.value = props.columns.reduce((prev, curr) => prev + curr.minWidth!, 0)
})
</script>

<template>
  <div class="overflow-x-auto" style="-webkit-overflow-scrolling: touch">
    <ATable
      :scroll="{ x: tableScrollX }"
      :columns="tableColumns"
      :data-source="data"
      :pagination="!!pagination && { ...pagination, showSizeChanger: false }"
      :loading="loading"
      :row-key="(record) => record.id"
      bordered
      @change="handleTableChange"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'actions' && !hideActions">
          <ADropdown
            overlay-class-name="!min-w-[120px]"
            placement="bottomRight"
            :trigger="['click']"
          >
            <template #overlay>
              <AMenu @click="handleMenuClick">
                <AMenuItem
                  v-for="action in tableActions"
                  :key="`${action.key}_${record.id}`"
                  class="min-h-[34px]"
                >
                  <FontAwesomeIcon :icon="action.icon" class="mr-1" :class="action.className" />
                  {{ action.label }}
                </AMenuItem>
              </AMenu>
            </template>
            <AButton class="!h-8 !w-8 !p-0">
              <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" size="lg" />
            </AButton>
          </ADropdown>
        </template>
        <slot :name="column.dataIndex" :record="record" />
      </template>
    </ATable>
  </div>
</template>
