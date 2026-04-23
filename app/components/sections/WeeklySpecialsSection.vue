<template>
  <section class="py-24 bg-[#111] relative border-t border-white/5">
    <UContainer>
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-black text-white uppercase tracking-wider mb-4">Hét különlegességei</h2>
        <div class="w-20 h-1 bg-primary mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div class="group cursor-pointer">
          <div class="overflow-hidden relative aspect-[4/5] bg-black/50 border border-white/10">
            <img src="/media/food/specials/steak.webp" alt="Bélszín steak" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full p-6 text-left">
              <h3 class="text-xl font-bold text-primary uppercase tracking-wider mb-2">Bélszín steak</h3>
              <p class="text-gray-300 text-sm">Burgonyapüré, grillezett zöldségek</p>
            </div>
          </div>
        </div>

        <div class="group cursor-pointer">
          <div class="overflow-hidden relative aspect-[4/5] bg-black/50 border border-white/10">
            <img src="/media/food/burgerek.webp" alt="Sieger malacos krumpli" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full p-6 text-left">
              <h3 class="text-xl font-bold text-primary uppercase tracking-wider mb-2">Sieger malacos krumpli</h3>
              <p class="text-gray-300 text-sm">Hasábburgonya, pulled pork, cheddar sajt</p>
            </div>
          </div>
        </div>

        <div class="group cursor-pointer">
          <div class="overflow-hidden relative aspect-[4/5] bg-black/50 border border-white/10">
            <img src="/media/food/specials/csirkemell_steak_02.webp" alt="Csirkemell steak" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full p-6 text-left">
              <h3 class="text-xl font-bold text-primary uppercase tracking-wider mb-2">Csirkemell steak</h3>
              <p class="text-gray-300 text-sm">Édesburgonya püré</p>
            </div>
          </div>
        </div>

        <div class="group cursor-pointer">
          <div class="overflow-hidden relative aspect-[4/5] bg-black/50 border border-white/10">
            <img src="/media/food/specials/tarja_steak_vadasasn_01.webp" alt="Tarja steak" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full p-6 text-left">
              <h3 class="text-xl font-bold text-primary uppercase tracking-wider mb-2">Tarja steak</h3>
              <p class="text-gray-300 text-sm">Vadas mártás, zsemlegombóc</p>
            </div>
          </div>
        </div>

      </div>

      <div class="mt-16 text-center">
        <UButton to="#menu" color="primary" variant="outline" size="xl" class="uppercase tracking-widest font-bold px-10">
          {{ $t('buttons.full_menu') }}
        </UButton>
      </div>
    </UContainer>
  </section>
</template>
