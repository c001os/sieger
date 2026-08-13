<script setup>
const { locale } = useI18n();

function text(obj) {
    return obj?.[locale.value] || obj?.hu || '';
}

const { data: starting11 } = await useFetch('/api/starting11');
const { data: allergensData } = await useFetch('/api/allergens');

const starters = computed(() => starting11.value?.starters ?? []);
const substitutes = computed(() => starting11.value?.substitutes ?? []);
const allergens = computed(() => allergensData.value ?? []);
</script>

<template>
    <section class="py-24 bg-default border-t border-default relative overflow-hidden">
        <UContainer class="relative z-10">
            <!-- Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-5xl font-black text-default uppercase tracking-wider mb-4">
                    {{ $t('sections.starting11.title') }}
                </h2>
                <div class="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p class="text-muted max-w-2xl mx-auto">
                    {{ $t('sections.starting11.intro') }}
                </p>
            </div>

            <!-- Desktop pitch layout: szögletes, hogy illeszkedjen a Cserék blokkhoz -->
            <div class="hidden md:block relative max-w-7xl mx-auto aspect-[4/3] rounded-none overflow-hidden shadow-2xl">
                <img
                    src="/media/starting11/backgrounds/kezdo_11_fooldal_hatter_fekvo.webp"
                    :alt="$t('sections.starting11.pitch_alt')"
                    class="absolute inset-0 w-full h-full object-cover"
                />

                <Starting11Bubble
                    v-for="(item, index) in starters"
                    :key="index"
                    :item="item"
                    :tooltip="parseFloat(item.position.top) > 60 ? 'top' : 'bottom'"
                    :delay="index * 100"
                    class="absolute w-[13%]"
                    :style="{
                        top: item.position.top,
                        left: item.position.left,
                        transform: 'translate(-50%, -50%)',
                    }"
                />
            </div>

            <!-- Mobile list layout -->
            <div
                class="md:hidden relative rounded-none overflow-hidden bg-cover bg-center p-6"
                style="background-image: url('/media/starting11/backgrounds/kezdo_11_fooldal_hatter_allo.webp')"
            >
                <div class="absolute inset-0 bg-black/40"></div>
                <div class="relative z-10 flex flex-col gap-4">
                    <Starting11Bubble
                        v-for="(item, index) in starters"
                        :key="index"
                        :item="item"
                        :delay="index * 80"
                        class="self-start"
                    />
                </div>
            </div>

            <!-- Substitutes -->
            <div
                class="mt-0 bg-[#0B1E33] border border-t-0 border-default/30 py-12 max-w-7xl mx-auto rounded-none"
            >
                <UContainer>
                    <div class="text-center mb-8">
                        <!-- Csere jelző ikon -->
                        <div class="flex justify-center mb-4">
                            <span
                                class="w-11 h-11 rounded-full border-2 border-white/70 flex items-center justify-center shadow-lg"
                            >
                                <UIcon name="i-lucide-arrow-up-down" class="w-5 h-5 text-white" />
                            </span>
                        </div>
                        <h3 class="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">{{ $t('sections.starting11.substitutes') }}</h3>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-items-start md:justify-items-center">
                        <Starting11Bubble
                            v-for="(item, index) in substitutes"
                            :key="index"
                            :item="item"
                            tooltip="bottom"
                            :delay="index * 100"
                            class="md:w-40 lg:w-44"
                        />
                    </div>
                </UContainer>
            </div>

            <!-- Allergens -->
            <div class="mt-16 md:mt-24 max-w-7xl mx-auto">
                <div class="text-center mb-8">
                    <h3 class="text-2xl md:text-3xl font-black text-default uppercase tracking-wider">{{ $t('sections.starting11.allergens') }}</h3>
                </div>
                <div class="bg-elevated border border-default rounded-xl p-6 md:p-8">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                        <div
                            v-for="allergen in allergens"
                            :key="allergen.code"
                            class="flex items-start gap-3 text-sm text-muted"
                        >
                            <span
                                class="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                            >
                                {{ allergen.code }}
                            </span>
                            <span class="block">{{ text(allergen) }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
