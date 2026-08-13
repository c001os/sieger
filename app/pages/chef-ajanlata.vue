<script setup>
const { t } = useI18n();

usePageSeo({
    title: t('pages.chef.title'),
    description: t('pages.chef.description'),
});

const { data: documents } = await useFetch('/api/documents');

const pdfFile = computed(() => {
    return documents.value?.find((d) => d.slug === 'chef-ajanlata')?.url ?? '';
});
</script>

<template>
    <div>
        <!-- Hero -->
        <section class="relative py-32 bg-default border-b border-default">
            <UContainer class="text-center">
                <h1 class="text-4xl md:text-6xl font-black text-default tracking-wider mb-4">{{ $t('pages.chef.heading') }}</h1>
                <p class="text-muted text-lg max-w-2xl mx-auto">
                    {{ $t('pages.chef.lead') }}
                </p>
            </UContainer>
        </section>

        <!-- PDF viewer -->
        <section class="py-24 bg-muted">
            <UContainer>
                <div class="max-w-5xl mx-auto space-y-8 text-center">
                    <h2 class="text-2xl font-bold text-default">{{ $t('pages.chef.heading') }}</h2>
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <PdfModalButton
                            :file="pdfFile"
                            :title="$t('pages.chef.heading')"
                            :button-label="$t('common.view')"
                        />
                        <UButton
                            :to="pdfFile"
                            download
                            color="primary"
                            variant="solid"
                            size="lg"
                            icon="i-lucide-download"
                            class="uppercase tracking-widest justify-center"
                        >
                            {{ $t('common.download') }}
                        </UButton>
                    </div>
                </div>
            </UContainer>
        </section>
    </div>
</template>
