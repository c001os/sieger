<template>
    <section
        class="py-24 bg-default relative overflow-hidden"
        id="about"
    >
        <UContainer>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <!-- About Us Text (Left) -->
                <div class="flex flex-col gap-6 items-start">
                    <h2 class="text-3xl md:text-5xl font-black text-default uppercase tracking-wider">
                        {{ $t('about.title') }}
                    </h2>
                    <div class="w-20 h-1 bg-primary"></div>

                    <p class="text-muted leading-relaxed text-lg">
                        {{ $t('about.description') }}
                    </p>

                    <UButton
                        size="xl"
                        color="white"
                        variant="outline"
                        class="mt-6 hover:bg-primary hover:text-inverted uppercase tracking-widest font-bold px-10"
                        @click="isOpen = true"
                    >
                        {{ $t('buttons.book_table') }}
                    </UButton>

                    <BookingModal v-model:open="isOpen" />
                </div>

                <!-- Feature Cards (Right) -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div
                        v-for="(feature, index) in features"
                        :key="index"
                        class="bg-elevated border border-default rounded-xl p-6 md:p-8 flex flex-col items-center text-center gap-4 hover:border-primary transition-colors"
                    >
                        <div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                            <UIcon
                                :name="feature.icon"
                                class="w-7 h-7 text-primary"
                            />
                        </div>
                        <h3 class="text-default font-bold tracking-wider text-sm md:text-base uppercase">
                            {{ feature.label }}
                        </h3>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>

<script setup>
const { t } = useI18n();
const isOpen = ref(false);

const features = [
    { icon: 'i-lucide-utensils-crossed', label: t('about.features.premium_food_drink') },
    { icon: 'i-lucide-star', label: t('about.features.vip_room') },
    { icon: 'i-lucide-tv', label: t('about.features.screens_boxes') },
    { icon: 'i-lucide-trophy', label: t('about.features.live_matches') },
];
</script>
