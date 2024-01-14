<script setup>
definePageMeta({
  layout: 'default-admin',
  middleware: 'admin-auth',
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
    <div class="prose max-w-none">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, nobis reprehenderit maiores ipsum officiis
        quasi beatae ut placeat aspernatur quia, deserunt possimus officia. Nesciunt ipsum praesentium mollitia porro
        dolores? Labore vero, eos aliquid quibusdam quasi iusto consequuntur minus, magnam voluptas aspernatur in.
        Accusantium itaque numquam dignissimos fugit consequuntur distinctio culpa enim, porro nostrum, harum rerum a
        odit provident? Quae similique expedita illum, voluptate deserunt, perspiciatis, earum iusto labore officia
        cumque necessitatibus culpa ab. Doloremque delectus aperiam harum, quo porro assumenda nulla dignissimos
        possimus distinctio ut, laudantium perferendis. Et alias sint similique deserunt non, distinctio itaque
        cupiditate repellendus iste, dolorem eaque.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, nobis reprehenderit maiores ipsum officiis
        quasi beatae ut placeat aspernatur quia, deserunt possimus officia. Nesciunt ipsum praesentium mollitia porro
        dolores? Labore vero, eos aliquid quibusdam quasi iusto consequuntur minus, magnam voluptas aspernatur in.
        Accusantium itaque numquam dignissimos fugit consequuntur distinctio culpa enim, porro nostrum, harum rerum a
        odit provident? Quae similique expedita illum, voluptate deserunt, perspiciatis, earum iusto labore officia
        cumque necessitatibus culpa ab. Doloremque delectus aperiam harum, quo porro assumenda nulla dignissimos
        possimus distinctio ut, laudantium perferendis. Et alias sint similique deserunt non, distinctio itaque
        cupiditate repellendus iste, dolorem eaque.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, nobis reprehenderit maiores ipsum officiis
        quasi beatae ut placeat aspernatur quia, deserunt possimus officia. Nesciunt ipsum praesentium mollitia porro
        dolores? Labore vero, eos aliquid quibusdam quasi iusto consequuntur minus, magnam voluptas aspernatur in.
        Accusantium itaque numquam dignissimos fugit consequuntur distinctio culpa enim, porro nostrum, harum rerum a
        odit provident? Quae similique expedita illum, voluptate deserunt, perspiciatis, earum iusto labore officia
        cumque necessitatibus culpa ab. Doloremque delectus aperiam harum, quo porro assumenda nulla dignissimos
        possimus distinctio ut, laudantium perferendis. Et alias sint similique deserunt non, distinctio itaque
        cupiditate repellendus iste, dolorem eaque.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, nobis reprehenderit maiores ipsum officiis
        quasi beatae ut placeat aspernatur quia, deserunt possimus officia. Nesciunt ipsum praesentium mollitia porro
        dolores? Labore vero, eos aliquid quibusdam quasi iusto consequuntur minus, magnam voluptas aspernatur in.
        Accusantium itaque numquam dignissimos fugit consequuntur distinctio culpa enim, porro nostrum, harum rerum a
        odit provident? Quae similique expedita illum, voluptate deserunt, perspiciatis, earum iusto labore officia
        cumque necessitatibus culpa ab. Doloremque delectus aperiam harum, quo porro assumenda nulla dignissimos
        possimus distinctio ut, laudantium perferendis. Et alias sint similique deserunt non, distinctio itaque
        cupiditate repellendus iste, dolorem eaque.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, nobis reprehenderit maiores ipsum officiis
        quasi beatae ut placeat aspernatur quia, deserunt possimus officia. Nesciunt ipsum praesentium mollitia porro
        dolores? Labore vero, eos aliquid quibusdam quasi iusto consequuntur minus, magnam voluptas aspernatur in.
        Accusantium itaque numquam dignissimos fugit consequuntur distinctio culpa enim, porro nostrum, harum rerum a
        odit provident? Quae similique expedita illum, voluptate deserunt, perspiciatis, earum iusto labore officia
        cumque necessitatibus culpa ab. Doloremque delectus aperiam harum, quo porro assumenda nulla dignissimos
        possimus distinctio ut, laudantium perferendis. Et alias sint similique deserunt non, distinctio itaque
        cupiditate repellendus iste, dolorem eaque.
      </p>
    </div>
  </div>
</template>
