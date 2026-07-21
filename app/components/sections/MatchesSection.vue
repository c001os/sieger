<template>
    <section class="py-24 bg-muted border-t border-default relative">
        <UContainer>
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-black text-default uppercase tracking-wider mb-4">{{ $t('sections.matches.title') }}</h2>
                <div class="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p class="text-muted max-w-2xl mx-auto">
                    {{ $t('sections.matches.description') }}
                </p>
            </div>

            <!-- Match Cards -->
            <div class="flex flex-col items-center gap-4 md:gap-6 max-w-3xl mx-auto">
                <div
                    v-for="match in matches"
                    :key="match.id"
                    class="w-full bg-elevated hover:bg-default border border-default rounded-2xl px-4 py-4 md:px-8 md:py-5 transition-colors duration-300"
                >
                    <div class="flex items-center justify-between gap-3 md:gap-6">
                        <!-- Home team -->
                        <div class="flex items-center gap-2 md:gap-3 w-[42%] justify-end">
                            <span class="text-default font-bold text-sm md:text-xl text-right leading-tight truncate">
                                {{ match.team1.name }}
                            </span>
                            <span
                                class="w-1 md:w-1.5 h-6 md:h-8 rounded-full flex-shrink-0"
                                :style="{ backgroundColor: match.team1.color }"
                            ></span>
                        </div>

                        <!-- Center time & date -->
                        <div class="flex flex-col items-center w-[16%] min-w-[5.5rem] md:min-w-[7rem] px-2 md:px-4">
                            <span class="text-default font-black text-lg md:text-2xl tracking-wide">
                                {{ match.time }}
                            </span>
                            <span class="text-muted text-[10px] md:text-xs font-bold tracking-wider uppercase">
                                {{ text(match.date) }}
                            </span>
                        </div>

                        <!-- Away team -->
                        <div class="flex items-center gap-2 md:gap-3 w-[42%] justify-start">
                            <span
                                class="w-1 md:w-1.5 h-6 md:h-8 rounded-full flex-shrink-0"
                                :style="{ backgroundColor: match.team2.color }"
                            ></span>
                            <span class="text-default font-bold text-sm md:text-xl leading-tight truncate">
                                {{ match.team2.name }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>

<script setup>
const { locale } = useI18n();

function text(obj) {
    return obj?.[locale.value] || obj?.hu || '';
}

const matches = [
    {
        id: 1,
        team1: { name: 'Real Madrid', color: '#FEBE10' },
        team2: { name: 'Barcelona', color: '#A50044' },
        time: '21:00',
        date: { hu: 'Holnap', en: 'Tomorrow', de: 'Morgen' },
    },
    {
        id: 2,
        team1: { name: 'Bayern Munich', color: '#DC052D' },
        team2: { name: 'Dortmund', color: '#FDE100' },
        time: '18:30',
        date: { hu: 'Szombat, okt. 14.', en: 'Saturday, Oct 14', de: 'Samstag, 14. Okt.' },
    },
    {
        id: 3,
        team1: { name: 'Arsenal', color: '#EF0107' },
        team2: { name: 'Chelsea', color: '#034694' },
        time: '15:00',
        date: { hu: 'Vasárnap, okt. 15.', en: 'Sunday, Oct 15', de: 'Sonntag, 15. Okt.' },
    },
    {
        id: 4,
        team1: { name: 'Man City', color: '#6CABDD' },
        team2: { name: 'Liverpool', color: '#C8102E' },
        time: '12:30',
        date: { hu: 'Vasárnap, okt. 15.', en: 'Sunday, Oct 15', de: 'Sonntag, 15. Okt.' },
    },
];
</script>
