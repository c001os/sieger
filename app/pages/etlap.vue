<script setup>
const { locale } = useI18n();

useHead({
    title: 'Étlapok – Sieger Sport Bár',
    meta: [
        {
            name: 'description',
            content:
                'Töltsd le aktuális étlapjainkat és ajánlatainkat PDF formátumban, vagy böngéssz az online étlapunk között.',
        },
    ],
});

const { data: menu, pending, error } = await useFetch('/api/menu');

const downloads = [
    {
        title: 'Chef ajánlata',
        description: 'Szezonális ajánlatunk a séfünk különleges válogatásával.',
        file: '/documents/sieger_chef_ajanlata_a4.pdf',
    },
    {
        title: 'Déli Félidő',
        description: 'Könnyedebb falatok és ínyencségek a meccsek mellé.',
        file: '/documents/sieger_deli_felido_01_19.pdf',
    },
    {
        title: 'Itallap',
        description: 'Aktuális italválasztékunk PDF formátumban.',
        file: '/documents/sieger_itallap_2026_weboldalra.pdf',
    },
];

function text(obj) {
    return obj?.[locale.value] || obj?.hu || '';
}

const categories = computed(() => menu.value?.categories ?? []);
</script>

<template>
    <div>
        <!-- Hero -->
        <section class="relative py-32 bg-default border-b border-default">
            <UContainer class="text-center">
                <h1 class="text-4xl md:text-6xl font-black text-default tracking-wider mb-4">Étlapok</h1>
                <p class="text-muted text-lg max-w-2xl mx-auto">
                    Böngéssz aktuális online étlapunkban, vagy töltsd le ajánlatainkat PDF formátumban.
                </p>
            </UContainer>
        </section>

        <!-- Online menu from XLSX -->
        <section class="py-24 bg-muted">
            <UContainer>
                <div
                    v-if="pending"
                    class="text-center py-12"
                >
                    <UIcon
                        name="i-lucide-loader-2"
                        class="w-8 h-8 animate-spin text-primary"
                    />
                </div>

                <div
                    v-else-if="error"
                    class="text-center text-error py-12"
                >
                    Hiba történt az étlap betöltése közben.
                </div>

                <template v-else-if="menu">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl md:text-4xl font-black text-default tracking-wider mb-4">
                            {{ text(menu.title) }}
                        </h2>
                    </div>

                    <div class="space-y-8">
                        <div
                            v-for="category in categories"
                            :key="category.hu"
                            class="bg-elevated border border-default rounded-lg p-6 md:p-8"
                        >
                            <MenuCategory
                                :title="text(category)"
                                :items="category.items"
                            />
                        </div>
                    </div>
                </template>
            </UContainer>
        </section>

        <!-- Downloadable PDFs -->
        <section class="py-24 bg-default border-t border-default">
            <UContainer>
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-black text-default tracking-wider mb-4">
                        Letölthető ajánlatok
                    </h2>
                    <p class="text-muted max-w-2xl mx-auto">Az alábbi PDF-eket letöltheted és elmentheted.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div
                        v-for="menuFile in downloads"
                        :key="menuFile.file"
                        class="bg-elevated border border-default rounded-lg p-8 md:p-10 flex flex-col items-center text-center gap-6 hover:border-primary transition-colors"
                    >
                        <div class="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                            <UIcon
                                name="i-lucide-file-text"
                                class="w-10 h-10 text-primary"
                            />
                        </div>

                        <div>
                            <h3 class="text-2xl font-bold text-default mb-2">{{ menuFile.title }}</h3>
                            <p class="text-sm text-muted">{{ menuFile.description }}</p>
                        </div>

                        <UButton
                            :to="menuFile.file"
                            download
                            color="primary"
                            variant="outline"
                            size="lg"
                            icon="i-lucide-download"
                            class="uppercase tracking-widest w-full justify-center"
                        >
                            Letöltés
                        </UButton>
                    </div>
                </div>
            </UContainer>
        </section>
    </div>
</template>
