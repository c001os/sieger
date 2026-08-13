<script setup>
const { t, locale } = useI18n();

usePageSeo({
    title: t('pages.esemenyek.title'),
    description: t('pages.esemenyek.description'),
});

const isBookingOpen = ref(false);
const localePath = useLocalePath();

function text(obj) {
    return obj?.[locale.value] || obj?.hu || '';
}

// Eseménygomb felirat-opciók (a későbbi Directus adminban legördülő listából választható)
const buttonLabelOptions = computed(() => ({
    itallap: t('pages.esemenyek.button_labels.itallap'),
    etlap: t('pages.esemenyek.button_labels.etlap'),
    info: t('pages.esemenyek.button_labels.info'),
    reszletek: t('pages.esemenyek.button_labels.reszletek'),
}));

// button.type: 'route' = belső oldal, 'external' = külső link, 'pdf' = PDF dokumentum
// Képméret: 1200x630 px (public/media/events/)
const { data: events } = await useFetch('/api/events');
const eventsList = computed(() => events.value ?? []);

function eventButtonTo(button) {
    return button.type === 'route' ? localePath(button.to) : button.to;
}
</script>

<template>
    <div>
        <!-- Hero -->
        <section class="relative py-32 bg-default border-b border-default">
            <UContainer class="text-center">
                <h1 class="text-4xl md:text-6xl font-black text-default tracking-wider mb-4">{{ $t('pages.esemenyek.heading') }}</h1>
                <p class="text-muted text-lg max-w-2xl mx-auto">
                    {{ $t('pages.esemenyek.lead') }}
                </p>
            </UContainer>
        </section>

        <!-- Events list -->
        <section class="py-24 bg-muted">
            <UContainer>
                <div class="max-w-5xl mx-auto space-y-12">
                    <article
                        v-for="event in eventsList"
                        :key="event.id"
                        class="group bg-elevated border border-default rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                    >
                        <div class="grid md:grid-cols-2 gap-0">
                            <!-- Image (1200x630) – minden sarok egységesen lekerekítve -->
                            <div class="p-4 pb-0 md:p-6 md:pr-0">
                                <div class="relative w-full aspect-[1200/630] md:aspect-auto md:h-full overflow-hidden rounded-xl">
                                    <img
                                        :src="event.image"
                                        :alt="text(event.title)"
                                        width="1200"
                                        height="630"
                                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div
                                        class="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-md"
                                    >
                                        {{ text(event.date) }}
                                    </div>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="p-8 md:p-12 flex flex-col justify-center">
                                <div
                                    v-if="event.time"
                                    class="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-3"
                                >
                                    <UIcon name="i-lucide-clock" class="w-4 h-4" />
                                    <span>{{ event.time }}</span>
                                </div>
                                <h2 class="text-2xl md:text-4xl font-black text-default tracking-wider mb-4">
                                    {{ text(event.title) }}
                                </h2>
                                <p class="text-muted text-lg leading-relaxed mb-8">
                                    {{ text(event.description) }}
                                </p>
                                <div class="flex flex-col sm:flex-row gap-4">
                                    <UButton
                                        color="primary"
                                        variant="solid"
                                        size="lg"
                                        class="uppercase tracking-widest justify-center"
                                        @click="isBookingOpen = true"
                                    >
                                        {{ $t('buttons.book_table') }}
                                    </UButton>
                                    <PdfModalButton
                                        v-if="event.button?.type === 'pdf'"
                                        :file="event.button.to"
                                        :title="text(event.title)"
                                        :button-label="buttonLabelOptions[event.button.label]"
                                    />
                                    <UButton
                                        v-else-if="event.button"
                                        :to="eventButtonTo(event.button)"
                                        :target="event.button.type === 'external' ? '_blank' : undefined"
                                        color="neutral"
                                        variant="outline"
                                        size="lg"
                                        class="uppercase tracking-widest justify-center"
                                    >
                                        {{ buttonLabelOptions[event.button.label] }}
                                    </UButton>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                <!-- Empty state hint -->
                <div class="mt-16 text-center">
                    <p class="text-muted max-w-2xl mx-auto">
                        {{ $t('pages.esemenyek.more_coming') }}
                    </p>
                </div>
            </UContainer>
        </section>

        <BookingModal v-model:open="isBookingOpen" />
    </div>
</template>
