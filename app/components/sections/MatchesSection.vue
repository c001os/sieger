<template>
  <section class="py-24 bg-[#111] border-t border-white/5 relative">
    <UContainer>
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-black text-white uppercase tracking-wider mb-4">Meccslista</h2>
        <div class="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p class="text-gray-400 max-w-2xl mx-auto">Kövesd nálunk a legfontosabb sporteseményeket! Foglalj asztalt időben a kiemelt mérkőzésekre.</p>
      </div>

      <!-- Match Bubbles -->
      <div class="flex flex-wrap justify-center gap-8 md:gap-12">
        
        <div v-for="match in matches" :key="match.id" class="group cursor-pointer flex flex-col items-center">
          <!-- Bubble -->
          <div class="w-40 h-40 md:w-48 md:h-48 rounded-full border border-white/10 overflow-hidden bg-black flex items-center justify-center p-6 relative transition-all duration-300 group-hover:scale-110 group-hover:border-primary">
            <!-- Logos -->
            <div class="flex items-center justify-between w-full relative z-10 group-hover:grayscale transition-all duration-300">
              <img :src="`/media/teams/${match.team1_logo}.webp`" alt="Team 1" class="w-12 h-12 object-contain" />
              <span class="text-white font-bold text-lg mx-2">VS</span>
              <img :src="`/media/teams/${match.team2_logo}.webp`" alt="Team 2" class="w-12 h-12 object-contain" />
            </div>
            
            <!-- Hover CTA Overlay -->
            <div class="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
              <UButton 
                to="#booking" 
                color="primary" 
                variant="solid" 
                size="sm"
                class="uppercase tracking-wider font-bold"
              >
                Foglalás
              </UButton>
            </div>
          </div>
          
          <!-- Info below bubble -->
          <div class="text-center mt-6 group-hover:text-primary transition-colors">
            <div class="text-sm text-gray-400 font-bold tracking-widest uppercase mb-1">{{ match.date }}</div>
            <div class="text-white font-medium text-lg">{{ match.time }}</div>
            <div class="text-xs text-gray-500 mt-1 uppercase">{{ match.league }}</div>
          </div>
        </div>

      </div>

    </UContainer>
  </section>
</template>

<script setup>
// Mock data based on the extracted team logos and brief
const matches = [
  { id: 1, date: 'Október 26.', time: '21:00', league: 'El Classico', team1_logo: 'eszkoz_100', team2_logo: 'eszkoz_110' },
  { id: 2, date: 'Október 27.', time: '18:30', league: 'Premier League', team1_logo: 'eszkoz_120', team2_logo: 'eszkoz_130' },
  { id: 3, date: 'Október 28.', time: '20:45', league: 'Serie A', team1_logo: 'eszkoz_140', team2_logo: 'eszkoz_150' },
  { id: 4, date: 'Október 29.', time: '21:00', league: 'Bajnokok Ligája', team1_logo: 'eszkoz_160', team2_logo: 'eszkoz_170' }
]
</script>
