<script setup>
const { t, locale } = useI18n();

useHead(() => ({
    title: t('pages.deli.title'),
    meta: [
        {
            name: 'description',
            content: t('pages.deli.description'),
        },
    ],
}));

function text(obj) {
    return obj?.[locale.value] || obj?.hu || '';
}

// Heti menü – a későbbi Directus adminban egyetlen szöveges blokk + egy kép
// (PDF feltöltés megszűnt, a menü az egész hétre egységesen vonatkozik)
const weeklyMenu = {
    week: {
        hu: '2026. július 21. – 27.',
        en: 'July 21 – 27, 2026',
        de: '21. – 27. Juli 2026',
    },
    image: '/media/food/fejlec.webp',
    text: {
        hu: `Frankfurti leves

Csirkepaprikás galuskával
vagy Sertésszűz erdei gombamártással, hasábburgonyával

Túrógombóc vaníliasodóval`,
        en: `Frankfurt soup

Chicken paprikash with nokedli dumplings
or Pork tenderloin with forest mushroom sauce and steak fries

Curd cheese dumplings with vanilla sauce`,
        de: `Frankfurter Suppe

Hühnerpaprikasch mit Nockerln
oder Schweinefilet mit Waldpilzsoße und Pommes frites

Quarkknödel mit Vanillesoße`,
    },
    price: '2 990 Ft',
};
</script>

<template>
    <div>
        <!-- Hero -->
        <section class="relative py-32 bg-default border-b border-default">
            <UContainer class="text-center">
                <h1 class="text-4xl md:text-6xl font-black text-default tracking-wider mb-4">{{ $t('pages.deli.heading') }}</h1>
                <p class="text-muted text-lg max-w-2xl mx-auto">
                    {{ $t('pages.deli.lead') }}
                </p>
            </UContainer>
        </section>

        <!-- Weekly menu -->
        <section class="py-24 bg-muted">
            <UContainer>
                <div class="max-w-5xl mx-auto">
                    <article class="bg-elevated border border-default rounded-2xl overflow-hidden shadow-sm">
                        <div class="grid md:grid-cols-2 gap-0">
                            <!-- Image – minden sarok egységesen lekerekítve -->
                            <div class="p-4 pb-0 md:p-6 md:pr-0">
                                <div class="relative w-full aspect-[4/3] md:aspect-auto md:h-full overflow-hidden rounded-xl">
                                    <img
                                        :src="weeklyMenu.image"
                                        :alt="$t('pages.deli.menu_title')"
                                        class="w-full h-full object-cover"
                                    />
                                    <div
                                        class="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-md"
                                    >
                                        {{ text(weeklyMenu.week) }}
                                    </div>
                                </div>
                            </div>

                            <!-- Single weekly text block -->
                            <div class="p-8 md:p-12 flex flex-col justify-center">
                                <div class="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-3">
                                    <UIcon name="i-lucide-calendar-days" class="w-4 h-4" />
                                    <span>{{ $t('pages.deli.all_week') }}</span>
                                </div>
                                <h2 class="text-2xl md:text-4xl font-black text-default tracking-wider mb-6">{{ $t('pages.deli.menu_title') }}</h2>
                                <p class="text-muted text-lg leading-relaxed whitespace-pre-line mb-8">{{ text(weeklyMenu.text) }}</p>
                                <div class="text-2xl font-black text-primary">{{ weeklyMenu.price }}</div>
                            </div>
                        </div>
                    </article>
                </div>
            </UContainer>
        </section>
    </div>
</template>
