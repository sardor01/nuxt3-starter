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
    <AdminTable :columns="columns" :data="tableData" class="mb-4" />
    <div class="prose max-w-none">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure temporibus reiciendis
        non dicta eveniet impedit sequi vel ipsam voluptatem quas, sit perspiciatis, aspernatur
        provident iusto voluptatibus pariatur quidem, ut magni. Corporis voluptas eos eligendi
        soluta repellendus excepturi et quis nihil. Voluptates, at. Blanditiis reiciendis eius, at
        adipisci hic quos illum aliquam enim perferendis amet natus eos eligendi dolorem fuga nam.
        Molestiae, quaerat voluptates officiis autem esse cum cupiditate obcaecati quod quis
        recusandae deleniti excepturi iste debitis nihil incidunt deserunt dolores quas perspiciatis
        dolor fugit eum? Necessitatibus vero optio eligendi, tempora alias eveniet! Fugit, nobis
        velit. Recusandae fuga neque dolor.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure temporibus reiciendis
        non dicta eveniet impedit sequi vel ipsam voluptatem quas, sit perspiciatis, aspernatur
        provident iusto voluptatibus pariatur quidem, ut magni. Corporis voluptas eos eligendi
        soluta repellendus excepturi et quis nihil. Voluptates, at. Blanditiis reiciendis eius, at
        adipisci hic quos illum aliquam enim perferendis amet natus eos eligendi dolorem fuga nam.
        Molestiae, quaerat voluptates officiis autem esse cum cupiditate obcaecati quod quis
        recusandae deleniti excepturi iste debitis nihil incidunt deserunt dolores quas perspiciatis
        dolor fugit eum? Necessitatibus vero optio eligendi, tempora alias eveniet! Fugit, nobis
        velit. Recusandae fuga neque dolor.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure temporibus reiciendis
        non dicta eveniet impedit sequi vel ipsam voluptatem quas, sit perspiciatis, aspernatur
        provident iusto voluptatibus pariatur quidem, ut magni. Corporis voluptas eos eligendi
        soluta repellendus excepturi et quis nihil. Voluptates, at. Blanditiis reiciendis eius, at
        adipisci hic quos illum aliquam enim perferendis amet natus eos eligendi dolorem fuga nam.
        Molestiae, quaerat voluptates officiis autem esse cum cupiditate obcaecati quod quis
        recusandae deleniti excepturi iste debitis nihil incidunt deserunt dolores quas perspiciatis
        dolor fugit eum? Necessitatibus vero optio eligendi, tempora alias eveniet! Fugit, nobis
        velit. Recusandae fuga neque dolor.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure temporibus reiciendis
        non dicta eveniet impedit sequi vel ipsam voluptatem quas, sit perspiciatis, aspernatur
        provident iusto voluptatibus pariatur quidem, ut magni. Corporis voluptas eos eligendi
        soluta repellendus excepturi et quis nihil. Voluptates, at. Blanditiis reiciendis eius, at
        adipisci hic quos illum aliquam enim perferendis amet natus eos eligendi dolorem fuga nam.
        Molestiae, quaerat voluptates officiis autem esse cum cupiditate obcaecati quod quis
        recusandae deleniti excepturi iste debitis nihil incidunt deserunt dolores quas perspiciatis
        dolor fugit eum? Necessitatibus vero optio eligendi, tempora alias eveniet! Fugit, nobis
        velit. Recusandae fuga neque dolor.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure temporibus reiciendis
        non dicta eveniet impedit sequi vel ipsam voluptatem quas, sit perspiciatis, aspernatur
        provident iusto voluptatibus pariatur quidem, ut magni. Corporis voluptas eos eligendi
        soluta repellendus excepturi et quis nihil. Voluptates, at. Blanditiis reiciendis eius, at
        adipisci hic quos illum aliquam enim perferendis amet natus eos eligendi dolorem fuga nam.
        Molestiae, quaerat voluptates officiis autem esse cum cupiditate obcaecati quod quis
        recusandae deleniti excepturi iste debitis nihil incidunt deserunt dolores quas perspiciatis
        dolor fugit eum? Necessitatibus vero optio eligendi, tempora alias eveniet! Fugit, nobis
        velit. Recusandae fuga neque dolor.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure temporibus reiciendis
        non dicta eveniet impedit sequi vel ipsam voluptatem quas, sit perspiciatis, aspernatur
        provident iusto voluptatibus pariatur quidem, ut magni. Corporis voluptas eos eligendi
        soluta repellendus excepturi et quis nihil. Voluptates, at. Blanditiis reiciendis eius, at
        adipisci hic quos illum aliquam enim perferendis amet natus eos eligendi dolorem fuga nam.
        Molestiae, quaerat voluptates officiis autem esse cum cupiditate obcaecati quod quis
        recusandae deleniti excepturi iste debitis nihil incidunt deserunt dolores quas perspiciatis
        dolor fugit eum? Necessitatibus vero optio eligendi, tempora alias eveniet! Fugit, nobis
        velit. Recusandae fuga neque dolor.
      </p>
    </div>
  </div>
</template>
