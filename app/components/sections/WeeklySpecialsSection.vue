<script setup>
const { locale } = useI18n();
const localePath = useLocalePath();

function text(obj) {
    return obj?.[locale.value] || obj?.hu || '';
}

const specials = [
    {
        name: { hu: 'Bélszín steak', en: 'Beef tenderloin steak', de: 'Rinderfiletsteak' },
        desc: {
            hu: 'Burgonyapüré, grillezett zöldségek',
            en: 'Mashed potatoes, grilled vegetables',
            de: 'Kartoffelpüree, gegrilltes Gemüse',
        },
        image: '/media/food/specials/steak.webp',
    },
    {
        name: {
            hu: 'Sieger „malacos krumpli”',
            en: 'Sieger Pulled Pork Potatoes',
            de: 'Sieger Spanferkel-Kartoffeln',
        },
        desc: {
            hu: 'Hasábburgonya, pulled pork, cheddar sajt, jalapeno',
            en: 'French fries, pulled pork, cheddar cheese, jalapeno',
            de: 'Pommes Frites, Pulled Pork, Cheddar-Käse, Jalapeno',
        },
        image: '/media/food/burgerek.webp',
    },
    {
        name: { hu: 'Csirkemell steak', en: 'Chicken breast steak', de: 'Hähnchenbruststeak' },
        desc: {
            hu: 'Édesburgonya püré',
            en: 'Sweet potato purée',
            de: 'Süßkartoffelpüree',
        },
        image: '/media/food/specials/csirkemell_steak_02.webp',
    },
    {
        name: { hu: 'Tarja steak', en: 'Pork neck steak', de: 'Nackensteak' },
        desc: {
            hu: 'Vadas mártás, zsemlegombóc',
            en: 'Vadas sauce, bread dumpling',
            de: '„Vadas“-Soße, Semmelknödel',
        },
        image: '/media/food/specials/tarja_steak_vadasasn_01.webp',
    },
];
</script>

<template>
    <section class="py-24 bg-default relative border-t border-default">
        <UContainer>
            <!-- Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-5xl font-black text-default tracking-wider mb-6">{{ $t('sections.specials.title') }}</h2>
                <UButton
                    :to="localePath('/etlap')"
                    color="primary"
                    variant="outline"
                    class="rounded-full uppercase tracking-widest px-6"
                >
                    {{ $t('sections.specials.button') }}
                </UButton>
            </div>
        </UContainer>

        <!-- Checkerboard grid – az „Italspecialitások" blokkokkal egyforma, teljes szélességű cellaméret -->
        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                <!-- Row 1 (mobilon/tableten átrendezve valódi sakktáblára) -->
                <div
                    class="aspect-square bg-default flex flex-col items-center justify-center p-4 md:p-6 text-center gap-4 order-1 lg:order-none"
                >
                    <div>
                        <h3 class="text-lg md:text-2xl font-bold text-default mb-2">{{ text(specials[0].name) }}</h3>
                        <p class="text-xs md:text-sm text-muted">{{ text(specials[0].desc) }}</p>
                    </div>
                    <UButton
                        :to="localePath('/etlap')"
                        color="primary"
                        variant="ghost"
                        size="sm"
                        class="uppercase tracking-widest"
                    >
                        {{ $t('buttons.full_menu') }}
                    </UButton>
                </div>

                <div class="aspect-square overflow-hidden order-2 lg:order-none">
                    <img
                        :src="specials[0].image"
                        :alt="text(specials[0].name)"
                        class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>

                <div
                    class="aspect-square bg-default flex flex-col items-center justify-center p-4 md:p-6 text-center gap-4 order-4 lg:order-none"
                >
                    <div>
                        <h3 class="text-lg md:text-2xl font-bold text-default mb-2">{{ text(specials[1].name) }}</h3>
                        <p class="text-xs md:text-sm text-muted">{{ text(specials[1].desc) }}</p>
                    </div>
                    <UButton
                        :to="localePath('/etlap')"
                        color="primary"
                        variant="ghost"
                        size="sm"
                        class="uppercase tracking-widest"
                    >
                        {{ $t('buttons.full_menu') }}
                    </UButton>
                </div>

                <div class="aspect-square overflow-hidden order-3 lg:order-none">
                    <img
                        :src="specials[1].image"
                        :alt="text(specials[1].name)"
                        class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>

                <!-- Row 2 -->
                <div class="aspect-square overflow-hidden order-6 lg:order-none">
                    <img
                        :src="specials[2].image"
                        :alt="text(specials[2].name)"
                        class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>

                <div
                    class="aspect-square bg-default flex flex-col items-center justify-center p-4 md:p-6 text-center gap-4 order-5 lg:order-none"
                >
                    <div>
                        <h3 class="text-lg md:text-2xl font-bold text-default mb-2">{{ text(specials[2].name) }}</h3>
                        <p class="text-xs md:text-sm text-muted">{{ text(specials[2].desc) }}</p>
                    </div>
                    <UButton
                        :to="localePath('/etlap')"
                        color="primary"
                        variant="ghost"
                        size="sm"
                        class="uppercase tracking-widest"
                    >
                        {{ $t('buttons.full_menu') }}
                    </UButton>
                </div>

                <div class="aspect-square overflow-hidden order-7 lg:order-none">
                    <img
                        :src="specials[3].image"
                        :alt="text(specials[3].name)"
                        class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>

                <div
                    class="aspect-square bg-default flex flex-col items-center justify-center p-4 md:p-6 text-center gap-4 order-8 lg:order-none"
                >
                    <div>
                        <h3 class="text-lg md:text-2xl font-bold text-default mb-2">{{ text(specials[3].name) }}</h3>
                        <p class="text-xs md:text-sm text-muted">{{ text(specials[3].desc) }}</p>
                    </div>
                    <UButton
                        :to="localePath('/etlap')"
                        color="primary"
                        variant="ghost"
                        size="sm"
                        class="uppercase tracking-widest"
                    >
                        {{ $t('buttons.full_menu') }}
                    </UButton>
                </div>
        </div>
    </section>
</template>
