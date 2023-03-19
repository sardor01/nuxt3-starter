<template>
  <div class="relative flex bg-white text-blue">
    <div class="relative flex min-h-screen max-w-full flex-auto flex-col backface-hidden">
      <TheHeader />
      <div class="flex w-full flex-[1_0_auto] p-0">
        <main class="relative max-w-full flex-auto">
          <slot />
        </main>
      </div>
      <TheFooter />
    </div>
  </div>
</template>
