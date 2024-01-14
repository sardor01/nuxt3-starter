<template>
  <ElContainer>
    <AdminSidebar />
    <ElContainer direction="vertical">
      <AdminHeader />
      <ElMain>
        <BaseContainer>
          <slot />
        </BaseContainer>
      </ElMain>
    </ElContainer>
  </ElContainer>
</template>
