<template>
  <section class="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
    <!-- Background Video/Image -->
    <div class="absolute inset-0 w-full h-full">
      <div class="absolute inset-0 bg-black/50 z-10"></div>
      <img src="/media/interior/sze_sieger_bl_donto35_majer_csaba_jozsef.webp" alt="Sieger Interior" class="w-full h-full object-cover" />
    </div>

    <!-- Content -->
    <UContainer class="relative z-20 text-center flex flex-col items-center gap-8">
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-lg">
        {{ $t('hero.welcome') }}
      </h1>
      
      <div class="flex items-center justify-center gap-4 text-primary font-bold tracking-[0.2em] md:tracking-[0.4em] text-xs md:text-sm uppercase bg-black/30 px-6 py-3 border border-white/10 backdrop-blur-sm">
        {{ $t('hero.subtitle') }}
      </div>

      <UButton 
        to="#booking"
        size="xl" 
        color="primary" 
        variant="solid" 
        class="mt-8 text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform"
      >
        {{ $t('buttons.book_table') }}
      </UButton>
    </UContainer>
  </section>
</template>
