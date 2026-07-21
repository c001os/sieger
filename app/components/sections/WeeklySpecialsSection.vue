<script setup>
const specials = [
    {
        name: 'Bélszín steak',
        desc: 'Burgonyapüré, grillezett zöldségek',
        image: '/media/food/specials/steak.webp',
    },
    {
        name: 'Sieger „malacos krumpli”',
        desc: 'Hasábburgonya, pulled pork, cheddar sajt, jalapeno',
        image: '/media/food/burgerek.webp',
    },
    {
        name: 'Csirkemell steak',
        desc: 'Édesburgonya püré',
        image: '/media/food/specials/csirkemell_steak_02.webp',
    },
    {
        name: 'Tarja steak',
        desc: 'Vadas mártás, zsemlegombóc',
        image: '/media/food/specials/tarja_steak_vadasasn_01.webp',
    },
];
</script>

<template>
    <section class="py-24 bg-default relative border-t border-default">
        <UContainer>
            <!-- Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-5xl font-black text-default tracking-wider mb-6">Chef ajánlata</h2>
                <UButton
                    to="/etlap"
                    color="primary"
                    variant="outline"
                    class="rounded-full uppercase tracking-widest px-6"
                >
                    Specialitásaink
                </UButton>
            </div>
        </UContainer>

        <!-- Checkerboard grid – az „Italspecialitások" blokkokkal egyforma, teljes szélességű cellaméret -->
        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                <!-- Row 1 (mobilon/tableten átrendezve valódi sakktáblára) -->
                <div
                    class="aspect-square bg-default flex flex-col items-center justify-center p-4 md:p-6 text-center gap-4 order-1 lg:order-none"
                >
                    <div>
                        <h3 class="text-lg md:text-2xl font-bold text-default mb-2">{{ specials[0].name }}</h3>
                        <p class="text-xs md:text-sm text-muted">{{ specials[0].desc }}</p>
                    </div>
                    <UButton
                        to="/etlap"
                        color="primary"
                        variant="ghost"
                        size="sm"
                        class="uppercase tracking-widest"
                    >
                        Teljes étlap
                    </UButton>
                </div>

                <div class="aspect-square overflow-hidden order-2 lg:order-none">
                    <img
                        :src="specials[0].image"
                        :alt="specials[0].name"
                        class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>

                <div
                    class="aspect-square bg-default flex flex-col items-center justify-center p-4 md:p-6 text-center gap-4 order-4 lg:order-none"
                >
                    <div>
                        <h3 class="text-lg md:text-2xl font-bold text-default mb-2">{{ specials[1].name }}</h3>
                        <p class="text-xs md:text-sm text-muted">{{ specials[1].desc }}</p>
                    </div>
                    <UButton
                        to="/etlap"
                        color="primary"
                        variant="ghost"
                        size="sm"
                        class="uppercase tracking-widest"
                    >
                        Teljes étlap
                    </UButton>
                </div>

                <div class="aspect-square overflow-hidden order-3 lg:order-none">
                    <img
                        :src="specials[1].image"
                        :alt="specials[1].name"
                        class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>

                <!-- Row 2 -->
                <div class="aspect-square overflow-hidden order-6 lg:order-none">
                    <img
                        :src="specials[2].image"
                        :alt="specials[2].name"
                        class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>

                <div
                    class="aspect-square bg-default flex flex-col items-center justify-center p-4 md:p-6 text-center gap-4 order-5 lg:order-none"
                >
                    <div>
                        <h3 class="text-lg md:text-2xl font-bold text-default mb-2">{{ specials[2].name }}</h3>
                        <p class="text-xs md:text-sm text-muted">{{ specials[2].desc }}</p>
                    </div>
                    <UButton
                        to="/etlap"
                        color="primary"
                        variant="ghost"
                        size="sm"
                        class="uppercase tracking-widest"
                    >
                        Teljes étlap
                    </UButton>
                </div>

                <div class="aspect-square overflow-hidden order-7 lg:order-none">
                    <img
                        :src="specials[3].image"
                        :alt="specials[3].name"
                        class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>

                <div
                    class="aspect-square bg-default flex flex-col items-center justify-center p-4 md:p-6 text-center gap-4 order-8 lg:order-none"
                >
                    <div>
                        <h3 class="text-lg md:text-2xl font-bold text-default mb-2">{{ specials[3].name }}</h3>
                        <p class="text-xs md:text-sm text-muted">{{ specials[3].desc }}</p>
                    </div>
                    <UButton
                        to="/etlap"
                        color="primary"
                        variant="ghost"
                        size="sm"
                        class="uppercase tracking-widest"
                    >
                        Teljes étlap
                    </UButton>
                </div>
        </div>
    </section>
</template>
