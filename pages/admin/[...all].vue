<script setup lang="ts">
definePageMeta({
  layout: 'admin-default',
  middleware: 'admin-auth',
})

const editorValue = ref('')

const data = [
  {
    id: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tel: '0575-22098909',
  },
  {
    id: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tel: '0571-22098333',
  },
  {
    id: 3,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tel: '0575-22098909',
  },
  {
    id: 4,
    name: 'Jim Red',
    age: 18,
    address: 'London No. 2 Lake Park',
    tel: '0575-22098909',
  },
  {
    id: 5,
    name: 'Jake White',
    age: 18,
    address: 'Dublin No. 2 Lake Park',
    tel: '0575-22098909',
  },
]

const columns = [
  { title: 'Name', dataIndex: 'name', minWidth: 150 },
  { title: 'Age', dataIndex: 'age', minWidth: 100 },
  { title: 'Address', dataIndex: 'address', minWidth: 250 },
  { title: 'Home phone', dataIndex: 'tel', minWidth: 200 },
]

const pagination = reactive({
  total: 100,
  current: 5,
  pageSize: 10,
})

const handleTableChange = (currentPage?: number) => {
  if (currentPage) {
    pagination.current = currentPage
  }
}
</script>

<template>
  <div class="bg-white p-6">
    <ARow :gutter="[24, 24]">
      <ACol :xs="24" :xl="16">
        <AdminFileUpload label="Choose an image" />
      </ACol>
      <ACol :xs="24" :xl="16">
        <AdminTinymceEditor v-model:value="editorValue" />
      </ACol>
      <ACol :span="24">
        <div class="mb-4">
          <AdminLink to="/admin/articles/create" :button-props="{ type: 'primary' }">
            Create an article
          </AdminLink>
        </div>
        <AdminTable
          :columns="columns"
          :data="data"
          :pagination="pagination"
          @change="handleTableChange"
        />
      </ACol>
    </ARow>
  </div>
</template>
