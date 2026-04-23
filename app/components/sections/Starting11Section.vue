<template>
  <section class="py-24 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
    <!-- Background visual -->
    <div class="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
      <div class="w-[800px] h-[800px] border border-primary rounded-full blur-[100px]"></div>
    </div>

    <UContainer class="relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-black text-white uppercase tracking-wider mb-4">Kezdő 11-es ajánlatunk</h2>
        <div class="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p class="text-gray-400 max-w-2xl mx-auto">Válogass a bajnokoknak kijáró fogások közül! Kézműves burgerek és különlegességek, egyedi felállásban.</p>
      </div>

      <!-- Mockup of Starting 11 Layout (Bubbles) -->
      <div class="max-w-5xl mx-auto relative min-h-[500px] flex flex-wrap justify-center gap-6">
        
        <!-- Render a few items to simulate the 'bubbles' layout from the brief -->
        <div v-for="i in 8" :key="i" class="relative group cursor-pointer w-48 h-48 md:w-56 md:h-56">
          <div class="absolute inset-0 rounded-full border-2 border-white/10 group-hover:border-primary transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden bg-black flex items-center justify-center p-2 z-10 group-hover:z-30 transform group-hover:scale-110 shadow-2xl">
            <img :src="`/media/starting11/sze_sieger_etlap_2025_11_04_adorjan_andras_${[25,27,30,31,32,43][i%6]}.webp`" alt="Burger" class="w-full h-full object-cover rounded-full opacity-60 group-hover:opacity-100 transition-all duration-700 ease-in-out" />
          </div>
          
          <!-- Hover Content (overlaps) -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 bg-black/95 backdrop-blur-xl border border-primary/50 p-6 shadow-[0_0_50px_rgba(var(--color-primary-500),0.3)] opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-40 pointer-events-none text-center">
            <h3 class="text-primary font-bold uppercase tracking-widest text-lg mb-2 drop-shadow-sm">Hamburger {{ i }}</h3>
            <p class="text-xs text-gray-300 mb-3 leading-relaxed">Szaftos marhahús, cheddar sajt, házi szósz, friss saláta.</p>
            <div class="text-white font-black text-xl tracking-tighter">5 690 Ft</div>
          </div>
        </div>
        
      </div>

      <!-- Cserek / Allergének CTA -->
      <div class="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 bg-white/5 border border-white/10 p-8 rounded-lg">
        <div class="text-center md:text-left flex-1">
          <h3 class="text-xl font-bold text-white uppercase tracking-wider mb-2">Cserepad / Köretek</h3>
          <p class="text-sm text-gray-400">Édesburgonya, friss saláta, grillezett zöldség, házi savanyúságok.</p>
        </div>
        <UButton 
          to="/documents/sieger_kezdo_11_altalanos_2025_10_a4.pdf" 
          target="_blank"
          color="primary" 
          variant="outline" 
          size="lg"
          class="uppercase tracking-widest font-bold"
        >
          Részletes ajánlat
        </UButton>
      </div>

    </UContainer>
  </section>
</template>
