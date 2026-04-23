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
      <div class="flex flex-col items-end gap-1">
        <LangSwitcher />
        <div class="flex gap-3 px-2">
          <NuxtLink to="https://www.facebook.com/siegersportbar" target="_blank" class="text-white hover:text-primary transition-colors">
            <UIcon name="i-lucide-facebook" class="w-4 h-4" />
          </NuxtLink>
          <NuxtLink to="https://www.instagram.com/siegersportbar/" target="_blank" class="text-white hover:text-primary transition-colors">
            <UIcon name="i-lucide-instagram" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </header>
</template>

<script setup>
const localePath = useLocalePath()
</script>
