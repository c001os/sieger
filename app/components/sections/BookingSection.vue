<template>
  <section class="py-24 bg-[#0a0a0a] relative overflow-hidden" id="booking">
    <UContainer>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <!-- Floating Elements Area (Left) -->
        <div class="relative h-[300px] md:h-[500px] flex items-center justify-center">
          <div class="absolute w-48 h-48 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl"></div>
          
          <!-- Mockup Bubbles based on brief -->
          <div class="relative w-full max-w-sm md:max-w-md mx-auto">
            <div class="bg-black/80 backdrop-blur-md border border-white/10 p-4 md:p-6 shadow-2xl z-20 absolute top-0 -left-2 md:-left-12 hover:-translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group scale-90 md:scale-100 origin-top-left">
              <UIcon name="i-lucide-tv" class="w-6 h-6 md:w-8 h-8 text-primary mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-500" />
              <h3 class="text-white font-bold tracking-wider text-sm md:text-base">Nagy TV, Hanggal</h3>
            </div>
            
            <div class="bg-black/80 backdrop-blur-md border border-white/10 p-4 md:p-6 shadow-2xl z-10 absolute top-24 md:top-32 right-0 md:-right-8 hover:-translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group scale-90 md:scale-100 origin-top-right">
              <UIcon name="i-lucide-sofa" class="w-6 h-6 md:w-8 md:h-8 text-primary mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-500" />
              <h3 class="text-white font-bold tracking-wider text-sm md:text-base">Kényelmes boxok</h3>
            </div>
            
            <div class="bg-primary text-black p-4 md:p-6 shadow-2xl z-30 absolute -bottom-4 md:bottom-0 left-6 md:left-4 hover:-translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group scale-90 md:scale-100 origin-bottom-left">
              <UIcon name="i-lucide-star" class="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-500" />
              <h3 class="font-bold tracking-wider text-sm md:text-base">VIP terem</h3>
            </div>
          </div>
        </div>

        <!-- About Us Text (Right) -->
        <div class="flex flex-col gap-6 items-start">
          <h2 class="text-3xl md:text-5xl font-black text-white uppercase tracking-wider">{{ $t('about.title') }}</h2>
          <div class="w-20 h-1 bg-primary"></div>
          
          <h3 class="text-xl md:text-2xl text-primary font-medium mt-4">
            {{ $t('about.slogan1') }}
          </h3>
          <p class="text-lg text-gray-300 font-medium">
            {{ $t('about.slogan2') }}
          </p>
          <p class="text-gray-400 leading-relaxed">
            {{ $t('about.description') }}
          </p>
          
          <UButton 
            to="https://reservation.widget.url" 
            target="_blank"
            size="xl" 
            color="white" 
            variant="outline" 
            class="mt-6 hover:bg-white hover:text-black uppercase tracking-widest font-bold px-10"
          >
            {{ $t('buttons.book_table') }}
          </UButton>
        </div>
        
      </div>
    </UContainer>
  </section>
</template>
