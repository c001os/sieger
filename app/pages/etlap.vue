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

const foodMenuPdf = '/documents/sieger_etlap_2026_tavasz_weboldalra.pdf';

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

        <!-- Downloadable food menu PDF -->
        <section class="py-24 bg-muted">
            <UContainer>
                <div class="max-w-5xl mx-auto space-y-8">
                    <div class="text-center">
                        <h2 class="text-3xl md:text-4xl font-black text-default tracking-wider mb-4">
                            Letölthető étlap
                        </h2>
                        <p class="text-muted max-w-2xl mx-auto">
                            Tekintsd meg aktuális étlapunkat böngészőben, vagy töltsd le PDF formátumban.
                        </p>
                    </div>

                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <PdfModalButton
                            :file="foodMenuPdf"
                            title="Sieger étlap"
                            button-label="Étlap megtekintése"
                        />
                        <UButton
                            :to="foodMenuPdf"
                            external
                            download
                            color="primary"
                            variant="solid"
                            size="lg"
                            icon="i-lucide-download"
                            class="uppercase tracking-widest justify-center"
                        >
                            Étlap letöltése
                        </UButton>
                    </div>
                </div>
            </UContainer>
        </section>

        <!-- Online menu from XLSX -->
        <section class="py-24 bg-default border-t border-default">
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


    </div>
</template>
