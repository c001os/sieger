<template>
  <div class="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-primary selection:text-black">
    <AppHeader />
    <main class="pt-20">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
