<script setup>
definePageMeta({
  layout: 'default-admin',
})

const columns = [
  {
    prop: 'date',
    label: 'Date',
    width: 120,
  },
  {
    prop: 'name',
    label: 'Name',
    width: 150,
  },
  {
    prop: 'address',
    label: 'Address',
    minWidth: 250,
  },
]

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<template>
  <div>
    <div class="mb-4">
      <AdminLink type="primary" to="/admin/create">Create</AdminLink>
    </div>
    <AdminTable :columns="columns" :data="tableData" class="mb-4" />
  </div>
</template>
