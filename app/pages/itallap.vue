<script setup>
const { t } = useI18n();

useHead(() => ({
    title: t('pages.itallap.title'),
    meta: [
        {
            name: 'description',
            content: t('pages.itallap.description'),
        },
    ],
}));

const drinkMenuFile = '/documents/sieger_itallap_2026_weboldalra.pdf';
</script>

<template>
    <div>
        <!-- Hero -->
        <section class="relative py-32 bg-default border-b border-default">
            <UContainer class="text-center">
                <h1 class="text-4xl md:text-6xl font-black text-default tracking-wider mb-4">{{ $t('pages.itallap.heading') }}</h1>
                <p class="text-muted text-lg max-w-2xl mx-auto">
                    {{ $t('pages.itallap.description') }}
                </p>
            </UContainer>
        </section>

        <!-- Download -->
        <section class="py-24 bg-muted">
            <UContainer>
                <div class="max-w-2xl mx-auto">
                    <div
                        class="bg-elevated border border-default rounded-lg p-8 md:p-10 flex flex-col items-center text-center gap-6"
                    >
                        <div class="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                            <UIcon
                                name="i-lucide-file-text"
                                class="w-10 h-10 text-primary"
                            />
                        </div>

                        <div>
                            <h2 class="text-2xl font-bold text-default mb-2">{{ $t('pages.itallap.heading') }}</h2>
                            <p class="text-sm text-muted">{{ $t('pages.itallap.card_description') }}</p>
                        </div>

                        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                            <PdfModalButton
                                :file="drinkMenuFile"
                                :title="$t('pages.itallap.heading')"
                                :button-label="$t('common.view')"
                            />
                            <UButton
                                :to="drinkMenuFile"
                                external
                                download
                                color="primary"
                                variant="solid"
                                size="lg"
                                icon="i-lucide-download"
                                class="uppercase tracking-widest justify-center w-full sm:w-auto"
                            >
                                {{ $t('common.download') }}
                            </UButton>
                        </div>
                    </div>
                </div>
            </UContainer>
        </section>
    </div>
</template>
