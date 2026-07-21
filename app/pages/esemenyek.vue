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

// Eseménygomb felirat-opciók (a későbbi Directus adminban legördülő listából választható)
const buttonLabelOptions = {
    itallap: 'Itallap',
    etlap: 'Étlap',
    info: 'További információ',
    reszletek: 'Részletek',
};

// button.type: 'route' = belső oldal, 'external' = külső link, 'pdf' = PDF dokumentum
// Képméret: 1200x630 px (public/media/events/)
const events = [
    {
        id: 1,
        title: 'Szurkolj velünk óriáskivetítőn!',
        date: '2026. július 19.',
        time: '21:00',
        image: '/media/events/szurkolj_velunk_oriaskivetiton_1200x630.webp',
        description:
            'Szurkolj velünk a világbajnokság legizgalmasabb mérkőzésein! Nézd a meccseket óriáskivetítőn, élvezd a fantasztikus hangulatot, és válassz finom fogásaink közül a Kezdő 11-es ajánlatból!',
        button: { label: 'reszletek', type: 'route', to: '/kezdo-11' },
    },
    {
        id: 2,
        title: 'Formula-1 Weekend – Movie Night',
        date: '2026. július 25.',
        time: '20:00',
        image: '/media/events/f1_movie_night_1200x630.webp',
        description:
            'A délutáni időmérő után nálunk folytatódik az F1-hangulat: nagykivetítőnkön levetítjük az F1 – A filmet, hogy egy igazán motorsportos estét tölthess el velünk.',
        button: { label: 'info', type: 'external', to: 'https://www.facebook.com/siegersportbar' },
    },
    {
        id: 3,
        title: 'Sieger x Uni-Elite Sport Club – Formula-1 Weekend',
        date: '2026. július 24–26.',
        time: '',
        image: '/media/events/f1_weekend_uni_elite_1200x630.webp',
        description:
            'Szurkoljuk végig együtt a Magyar Nagydíjat! Hozd el a barátokat, éld át a száguldás élményét az autószimulátorokban, pörögj a dj ütemeire, és izguld végig a futamot a hatalmas nagykivetítőnkön! És ez még nem minden: brutális járművekkel és szuper nyereményekkel is várunk!',
        featured: true,
        button: { label: 'info', type: 'external', to: 'https://www.facebook.com/siegersportbar' },
    },
];

function eventButtonTo(button) {
    return button.type === 'route' ? localePath(button.to) : button.to;
}
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
                            <!-- Image (1200x630) -->
                            <div class="relative aspect-[1200/630] md:aspect-auto overflow-hidden">
                                <img
                                    :src="event.image"
                                    :alt="event.title"
                                    width="1200"
                                    height="630"
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
                                <div
                                    v-if="event.time"
                                    class="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-3"
                                >
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
                                    <PdfModalButton
                                        v-if="event.button?.type === 'pdf'"
                                        :file="event.button.to"
                                        :title="event.title"
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
                        További események hamarosan érkeznek. Kövess minket közösségi oldalainkon, hogy első kézből értesülj a közelgő programjainkról!
                    </p>
                </div>
            </UContainer>
        </section>

        <BookingModal v-model:open="isBookingOpen" />
    </div>
</template>
