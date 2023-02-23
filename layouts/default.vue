<template>
  <div class="flex relative bg-white text-blue">
    <div class="flex-auto backface-hidden flex flex-col min-h-screen max-w-full relative">
      <TheHeader />
      <div class="w-full flex flex-[1_0_auto] p-0">
        <main class="flex-auto max-w-full relative">
          <slot />
        </main>
      </div>
      <TheFooter />
    </div>
  </div>
</template>
