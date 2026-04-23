<template>
  <header class="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10 text-white">
    <UContainer class="flex items-center justify-between h-20">
      <!-- Logo -->
      <NuxtLink to="/" class="flex-shrink-0">
        <img src="/media/logos/sieger_feher_logo.png" alt="Sieger Logo" class="h-12 w-auto" />
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8 font-medium text-sm tracking-widest uppercase">
        <NuxtLink :to="localePath('/')" class="hover:text-primary transition-colors">{{ $t('nav.start') }}</NuxtLink>
        <NuxtLink :to="localePath('/#about')" class="hover:text-primary transition-colors">{{ $t('nav.about') }}</NuxtLink>
        <NuxtLink :to="localePath('/#specials')" class="hover:text-primary transition-colors">{{ $t('nav.specials') }}</NuxtLink>
        <NuxtLink :to="localePath('/#menu')" class="hover:text-primary transition-colors">{{ $t('nav.food_menu') }}</NuxtLink>
        <NuxtLink :to="localePath('/#gallery')" class="hover:text-primary transition-colors">{{ $t('nav.gallery') }}</NuxtLink>
      </nav>

      <!-- Right Actions (Lang + Social) -->
      <div class="flex items-center gap-4 md:gap-6">
        <div class="hidden md:flex items-center gap-4">
          <NuxtLink to="https://www.facebook.com/siegersportbar" target="_blank" class="text-white/70 hover:text-primary transition-all duration-300 transform hover:scale-110">
            <UIcon name="i-lucide-facebook" class="w-5 h-5" />
          </NuxtLink>
          <NuxtLink to="https://www.instagram.com/siegersportbar/" target="_blank" class="text-white/70 hover:text-primary transition-all duration-300 transform hover:scale-110">
            <UIcon name="i-lucide-instagram" class="w-5 h-5" />
          </NuxtLink>
        </div>
        <div class="h-6 w-px bg-white/10 hidden md:block"></div>
        <LangSwitcher />
        
        <!-- Mobile Menu Toggle -->
        <UButton 
          color="white" 
          variant="ghost" 
          :icon="isMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'" 
          class="md:hidden" 
          @click="isMenuOpen = !isMenuOpen" 
        />
      </div>
    </UContainer>

    <!-- Mobile Menu Overlay -->
    <div 
      v-if="isMenuOpen" 
      class="fixed inset-0 top-20 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300 min-h-[calc(100vh-5rem)] h-[calc(100vh-5rem)] overflow-y-auto"
    >
      <nav class="flex flex-col items-center gap-8 font-medium text-lg tracking-widest uppercase py-8">
        <NuxtLink :to="localePath('/')" @click="isMenuOpen = false" class="hover:text-primary transition-colors">{{ $t('nav.start') }}</NuxtLink>
        <NuxtLink :to="localePath('/#about')" @click="isMenuOpen = false" class="hover:text-primary transition-colors">{{ $t('nav.about') }}</NuxtLink>
        <NuxtLink :to="localePath('/#specials')" @click="isMenuOpen = false" class="hover:text-primary transition-colors">{{ $t('nav.specials') }}</NuxtLink>
        <NuxtLink :to="localePath('/#menu')" @click="isMenuOpen = false" class="hover:text-primary transition-colors">{{ $t('nav.food_menu') }}</NuxtLink>
        <NuxtLink :to="localePath('/#gallery')" @click="isMenuOpen = false" class="hover:text-primary transition-colors">{{ $t('nav.gallery') }}</NuxtLink>
      </nav>
      <div class="flex items-center gap-6 pb-8">
        <NuxtLink to="https://www.facebook.com/siegersportbar" target="_blank" class="text-white/70 hover:text-primary transition-all duration-300 transform hover:scale-110">
          <UIcon name="i-lucide-facebook" class="w-8 h-8" />
        </NuxtLink>
        <NuxtLink to="https://www.instagram.com/siegersportbar/" target="_blank" class="text-white/70 hover:text-primary transition-all duration-300 transform hover:scale-110">
          <UIcon name="i-lucide-instagram" class="w-8 h-8" />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
const localePath = useLocalePath()
const isMenuOpen = ref(false)

// Close menu when route changes
const route = useRoute()
watch(() => route.fullPath, () => {
  isMenuOpen.value = false
})
</script>
