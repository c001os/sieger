<script setup>
const localePath = useLocalePath();
</script>

<template>
    <section class="py-24 bg-default border-t border-default relative">
        <UContainer>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                <!-- Étlap -->
                <div
                    class="relative group cursor-pointer aspect-[16/9] md:aspect-square overflow-hidden border border-default"
                >
                    <img
                        src="/media/food/fejlec.webp"
                        :alt="$t('nav.offers.food_menu')"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60 group-hover:opacity-80"
                    />
                    <div
                        class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"
                    ></div>
                    <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                        <h2
                            class="text-4xl md:text-5xl font-black text-white uppercase tracking-widest mb-6 drop-shadow-xl"
                        >
                            {{ $t('nav.food_menu') }}
                        </h2>
                        <UButton
                            :to="localePath('/etlap')"
                            color="white"
                            variant="solid"
                            size="lg"
                            class="uppercase tracking-widest font-bold hover:bg-primary hover:text-inverted transition-all shadow-xl"
                        >
                            {{ $t('common.view') }}
                        </UButton>
                    </div>
                </div>

                <!-- Itallap -->
                <div
                    class="relative group cursor-pointer aspect-[16/9] md:aspect-square overflow-hidden border border-default"
                >
                    <img
                        src="/media/drinks/fejlec.webp"
                        :alt="$t('nav.drinks_menu')"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60 group-hover:opacity-80"
                    />
                    <div
                        class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"
                    ></div>
                    <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                        <h2
                            class="text-4xl md:text-5xl font-black text-white uppercase tracking-widest mb-6 drop-shadow-xl"
                        >
                            {{ $t('nav.drinks_menu') }}
                        </h2>
                        <UButton
                            :to="localePath('/itallap')"
                            color="white"
                            variant="solid"
                            size="lg"
                            class="uppercase tracking-widest font-bold hover:bg-primary hover:text-inverted transition-all shadow-xl"
                        >
                            {{ $t('common.view') }}
                        </UButton>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
