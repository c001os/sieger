<script setup>
const { t, locale } = useI18n();

useHead(() => ({
    title: t('pages.esemenyek.title'),
    meta: [
        {
            name: 'description',
            content: t('pages.esemenyek.description'),
        },
    ],
}));

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
const events = [
    {
        id: 1,
        title: {
            hu: 'Szurkolj velünk óriáskivetítőn!',
            en: 'Cheer with us on the giant screen!',
            de: 'Feuere mit uns auf der Großbildleinwand an!',
        },
        date: {
            hu: '2026. július 19.',
            en: 'July 19, 2026',
            de: '19. Juli 2026',
        },
        time: '21:00',
        image: '/media/events/szurkolj_velunk_oriaskivetiton_1200x630.webp',
        description: {
            hu: 'Szurkolj velünk a világbajnokság legizgalmasabb mérkőzésein! Nézd a meccseket óriáskivetítőn, élvezd a fantasztikus hangulatot, és válassz finom fogásaink közül a Kezdő 11-es ajánlatból!',
            en: 'Cheer with us during the most exciting matches of the World Cup! Watch the games on our giant screen, enjoy the fantastic atmosphere, and choose from our delicious dishes in the Starting 11 offer!',
            de: 'Feuere mit uns bei den spannendsten Spielen der Weltmeisterschaft an! Sieh dir die Spiele auf unserer Großbildleinwand an, genieße die fantastische Atmosphäre und wähle aus unseren leckeren Gerichten des Startelf-Angebots!',
        },
        button: { label: 'reszletek', type: 'route', to: '/kezdo-11' },
    },
    {
        id: 2,
        title: {
            hu: 'Formula-1 Weekend – Movie Night',
            en: 'Formula-1 Weekend – Movie Night',
            de: 'Formula-1 Weekend – Movie Night',
        },
        date: {
            hu: '2026. július 25.',
            en: 'July 25, 2026',
            de: '25. Juli 2026',
        },
        time: '20:00',
        image: '/media/events/f1_movie_night_1200x630.webp',
        description: {
            hu: 'A délutáni időmérő után nálunk folytatódik az F1-hangulat: nagykivetítőnkön levetítjük az F1 – A filmet, hogy egy igazán motorsportos estét tölthess el velünk.',
            en: 'The F1 vibes continue at our place after the afternoon qualifying: we are screening F1 – The Movie on our big screen, so you can spend a truly motorsport evening with us.',
            de: 'Nach dem Nachmittags-Qualifying geht die F1-Stimmung bei uns weiter: Auf unserer Großbildleinwand zeigen wir F1 – Der Film, damit du einen echten Motorsport-Abend mit uns verbringen kannst.',
        },
        button: { label: 'info', type: 'external', to: 'https://www.facebook.com/siegersportbar' },
    },
    {
        id: 3,
        title: {
            hu: 'Sieger x Uni-Elite Sport Club – Formula-1 Weekend',
            en: 'Sieger x Uni-Elite Sport Club – Formula-1 Weekend',
            de: 'Sieger x Uni-Elite Sport Club – Formula-1 Weekend',
        },
        date: {
            hu: '2026. július 24–26.',
            en: 'July 24–26, 2026',
            de: '24.–26. Juli 2026',
        },
        time: '',
        image: '/media/events/f1_weekend_uni_elite_1200x630.webp',
        description: {
            hu: 'Szurkoljuk végig együtt a Magyar Nagydíjat! Hozd el a barátokat, éld át a száguldás élményét az autószimulátorokban, pörögj a dj ütemeire, és izguld végig a futamot a hatalmas nagykivetítőnkön! És ez még nem minden: brutális járművekkel és szuper nyereményekkel is várunk!',
            en: "Let's cheer through the Hungarian Grand Prix together! Bring your friends, experience the thrill of speed in the racing simulators, get into the groove with the DJ, and live through the race on our huge big screen! And that's not all: brutal vehicles and super prizes await you too!",
            de: 'Lass uns gemeinsam den Großen Preis von Ungarn anfeuern! Bring deine Freunde mit, erlebe das Gefühl des Rasens in den Rennsimulatoren, feiere zu den Beats des DJs und erlebe das Rennen auf unserer riesigen Großbildleinwand! Und das ist noch nicht alles: Brutale Fahrzeuge und super Preise erwarten dich ebenfalls!',
        },
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
                        v-for="event in events"
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
