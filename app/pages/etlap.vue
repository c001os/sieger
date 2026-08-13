<script setup>
const { t, locale } = useI18n();

usePageSeo({
    title: t('pages.etlap.title'),
    description: t('pages.etlap.description'),
});

const { data: menu, pending, error } = await useFetch('/api/food-menu');
const { data: documents } = await useFetch('/api/documents');

const foodMenuPdf = computed(() => {
    return documents.value?.find((d) => d.slug === 'etlap')?.url ?? '';
});

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
                <h1 class="text-4xl md:text-6xl font-black text-default tracking-wider mb-4">{{ $t('pages.etlap.heading') }}</h1>
                <p class="text-muted text-lg max-w-2xl mx-auto">
                    {{ $t('pages.etlap.lead') }}
                </p>
            </UContainer>
        </section>

        <!-- Downloadable food menu PDF -->
        <section class="py-24 bg-muted">
            <UContainer>
                <div class="max-w-5xl mx-auto space-y-8">
                    <div class="text-center">
                        <h2 class="text-3xl md:text-4xl font-black text-default tracking-wider mb-4">
                            {{ $t('pages.etlap.download_title') }}
                        </h2>
                        <p class="text-muted max-w-2xl mx-auto">
                            {{ $t('pages.etlap.download_lead') }}
                        </p>
                    </div>

                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <PdfModalButton
                            :file="foodMenuPdf"
                            :title="$t('pages.etlap.pdf_title')"
                            :button-label="$t('pages.etlap.view_button')"
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
                            {{ $t('pages.etlap.download_button') }}
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
                    {{ $t('pages.etlap.error') }}
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
                                :images="category.images ?? []"
                            />
                        </div>
                    </div>
                </template>
            </UContainer>
        </section>


    </div>
</template>
