<script setup>
useHead({
    title: 'Események – Sieger Sport Bár',
    meta: [
        {
            name: 'description',
            content: 'Kövesd nyomon aktuális ajánlatainkat és közelgő sporteseményeinket a Sieger Sport Bárban!',
        },
    ],
});

const isBookingOpen = ref(false);
const localePath = useLocalePath();

const events = [
    {
        id: 1,
        title: 'El Clásico élőben a Siegerben',
        date: '2026. január 25.',
        time: '21:00',
        image: '/media/gallery/251026_sieger_el_classico_nemeth_kristof_9.webp',
        description:
            'Gyere és szurkolj velünk a szezon egyik legnagyobb rangadóján! Nagy képernyők, különleges italakciók és remek hangulat vár minden futballrajongót.',
        featured: true,
    },
];
</script>

<template>
    <div>
        <!-- Hero -->
        <section class="relative py-32 bg-default border-b border-default">
            <UContainer class="text-center">
                <h1 class="text-4xl md:text-6xl font-black text-default tracking-wider mb-4">Események</h1>
                <p class="text-muted text-lg max-w-2xl mx-auto">
                    Kövesd nyomon aktuális ajánlatainkat és közelgő sporteseményeinket! Ne maradj le a legjobb meccsekről!
                </p>
            </UContainer>
        </section>

        <!-- Events list -->
        <section class="py-24 bg-muted">
            <UContainer>
                <div class="max-w-5xl mx-auto space-y-12">
                    <article
                        v-for="event in events"
                        :key="event.id"
                        class="group bg-elevated border border-default rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                    >
                        <div class="grid md:grid-cols-2 gap-0">
                            <!-- Image -->
                            <div class="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                                <img
                                    :src="event.image"
                                    :alt="event.title"
                                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div
                                    class="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-md"
                                >
                                    {{ event.date }}
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="p-8 md:p-12 flex flex-col justify-center">
                                <div class="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-3">
                                    <UIcon name="i-lucide-clock" class="w-4 h-4" />
                                    <span>{{ event.time }}</span>
                                </div>
                                <h2 class="text-2xl md:text-4xl font-black text-default tracking-wider mb-4">
                                    {{ event.title }}
                                </h2>
                                <p class="text-muted text-lg leading-relaxed mb-8">
                                    {{ event.description }}
                                </p>
                                <div class="flex flex-col sm:flex-row gap-4">
                                    <UButton
                                        color="primary"
                                        variant="solid"
                                        size="lg"
                                        class="uppercase tracking-widest justify-center"
                                        @click="isBookingOpen = true"
                                    >
                                        Asztalfoglalás
                                    </UButton>
                                    <UButton
                                        :to="localePath('/itallap')"
                                        color="neutral"
                                        variant="outline"
                                        size="lg"
                                        class="uppercase tracking-widest justify-center"
                                    >
                                        Itallap
                                    </UButton>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                <!-- Empty state hint -->
                <div class="mt-16 text-center">
                    <p class="text-muted max-w-2xl mx-auto">
                        További események hamarosan érkeznek. Kövess minket közösségi oldalainkon, hogy első kézből értesülj a közelgő programjainkról!
                    </p>
                </div>
            </UContainer>
        </section>

        <BookingModal v-model:open="isBookingOpen" />
    </div>
</template>
