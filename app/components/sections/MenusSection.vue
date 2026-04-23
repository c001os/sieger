<template>
  <section class="py-24 bg-[#0a0a0a] border-t border-white/5 relative">
    <UContainer>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        
        <!-- Étlap -->
        <div class="relative group cursor-pointer aspect-[16/9] md:aspect-square overflow-hidden border border-white/10">
          <img src="/media/food/fejlec.webp" alt="Étlap" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60 group-hover:opacity-80" />
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <h2 class="text-4xl md:text-5xl font-black text-white uppercase tracking-widest mb-6 drop-shadow-xl">{{ $t('nav.food_menu') }}</h2>
            <UButton 
              to="/documents/sieger_etlap_2025_osz.pdf" 
              target="_blank"
              color="white" 
              variant="solid" 
              size="lg"
              class="uppercase tracking-widest font-bold hover:bg-primary hover:text-black transition-all shadow-xl"
            >
              Megtekintés
            </UButton>
          </div>
        </div>

        <!-- Itallap -->
        <div class="relative group cursor-pointer aspect-[16/9] md:aspect-square overflow-hidden border border-white/10">
          <img src="/media/drinks/fejlec.webp" alt="Itallap" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60 group-hover:opacity-80" />
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <h2 class="text-4xl md:text-5xl font-black text-white uppercase tracking-widest mb-6 drop-shadow-xl">{{ $t('nav.drinks_menu') }}</h2>
            <UButton 
              to="/documents/sieger_etlap_2025_osz.pdf" 
              target="_blank"
              color="white" 
              variant="solid" 
              size="lg"
              class="uppercase tracking-widest font-bold hover:bg-primary hover:text-black transition-all shadow-xl"
            >
              Megtekintés
            </UButton>
          </div>
        </div>

      </div>
    </UContainer>
  </section>
</template>
