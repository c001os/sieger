<template>
  <footer class="bg-black text-white py-16 border-t border-white/10">
    <UContainer>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        
        <!-- Logo & Description -->
        <div class="flex flex-col items-center md:items-start gap-6">
          <img src="/media/logos/sieger_feher_logo.png" alt="Sieger Logo" class="h-16 w-auto" />
          <p class="text-sm text-gray-400 text-center md:text-left">
            Exkluzív környezet a campus szívében!
          </p>
        </div>

        <!-- Contact -->
        <div class="flex flex-col items-center md:items-start gap-4">
          <h3 class="text-lg font-bold text-primary uppercase tracking-wider">{{ $t('footer.contact') }}</h3>
          <div class="flex flex-col items-center md:items-start gap-2 text-sm text-gray-300">
            <span class="flex items-center gap-2"><UIcon name="i-lucide-map-pin" class="text-primary w-4 h-4" /> 9026 Győr, Egyetem tér 1.</span>
            <a href="mailto:info@sieger.hu" class="flex items-center gap-2 hover:text-primary transition-colors"><UIcon name="i-lucide-mail" class="text-primary w-4 h-4" /> info@sieger.hu</a>
            <a href="tel:+36206156491" class="flex items-center gap-2 hover:text-primary transition-colors"><UIcon name="i-lucide-phone" class="text-primary w-4 h-4" /> +36 20 615 6491</a>
          </div>
        </div>

        <!-- Hours -->
        <div class="flex flex-col items-center md:items-start gap-4">
          <h3 class="text-lg font-bold text-primary uppercase tracking-wider">{{ $t('footer.opening_hours') }}</h3>
          <ul class="text-sm text-gray-300 space-y-2 text-center md:text-left">
            <li><span class="font-semibold">{{ $t('footer.monday') }}:</span> 11:00 – 17:00</li>
            <li><span class="font-semibold">{{ $t('footer.tue_sat') }}:</span> 11:00 – 00:00</li>
            <li><span class="font-semibold">{{ $t('footer.sunday') }}:</span> <span class="text-red-500 font-bold">{{ $t('footer.closed') }}</span></li>
          </ul>
        </div>

        <!-- CTA & Socials -->
        <div class="flex flex-col items-center md:items-end gap-6 h-full justify-between">
          <UButton 
            to="#booking"
            size="xl" 
            color="white" 
            variant="solid" 
            class="hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 rounded-none tracking-widest font-bold uppercase"
          >
            {{ $t('buttons.book_table') }}
          </UButton>
          
          <div class="flex flex-col items-center md:items-end gap-2 text-sm">
            <span class="text-primary font-semibold tracking-widest">#siegersportbar</span>
            <div class="flex gap-4 mt-2">
              <NuxtLink to="https://www.facebook.com/siegersportbar" target="_blank" class="text-gray-400 hover:text-primary transition-colors">
                <UIcon name="i-lucide-facebook" class="w-6 h-6" />
              </NuxtLink>
              <NuxtLink to="https://www.instagram.com/siegersportbar/" target="_blank" class="text-gray-400 hover:text-primary transition-colors">
                <UIcon name="i-lucide-instagram" class="w-6 h-6" />
              </NuxtLink>
            </div>
          </div>
        </div>
        
      </div>
      
      <!-- Bottom Bar -->
      <div class="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>{{ $t('footer.rights') }}</p>
        <NuxtLink to="/adatvedelem" class="hover:text-white transition-colors">{{ $t('footer.privacy') }}</NuxtLink>
      </div>
    </UContainer>
  </footer>
</template>
