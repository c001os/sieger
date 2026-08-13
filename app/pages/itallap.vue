<script setup>
const { t, locale } = useI18n();

usePageSeo({
    title: t('pages.itallap.title'),
    description: t('pages.itallap.description'),
});

const { data: drinks, pending, error } = await useFetch('/api/drinks-menu');

function text(obj) {
    return obj?.[locale.value] || obj?.hu || '';
}

const categories = computed(() => drinks.value?.categories ?? []);
</script>

<template>
    <div>
        <!-- Hero -->
        <section class="relative py-32 bg-default border-b border-default">
            <UContainer class="text-center">
                <h1 class="text-4xl md:text-6xl font-black text-default tracking-wider mb-4">{{ $t('pages.itallap.heading') }}</h1>
                <p class="text-muted text-lg max-w-2xl mx-auto">
                    {{ $t('pages.itallap.lead') }}
                </p>
            </UContainer>
        </section>

        <!-- Online drinks menu -->
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
                    {{ $t('pages.itallap.error') }}
                </div>

                <template v-else-if="drinks">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl md:text-4xl font-black text-default tracking-wider mb-4">
                            {{ text(drinks.title) }}
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
                                :images="(category.images ?? []).slice(0, 1)"
                            />
                        </div>
                    </div>
                </template>
            </UContainer>
        </section>
    </div>
</template>
