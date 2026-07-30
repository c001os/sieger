<script setup>
const { locale } = useI18n();

defineProps({
    title: {
        type: String,
        required: true,
    },
    items: {
        type: Array,
        required: true,
    },
    // Kategóriához tartozó fotók (rövid blokknál 1, hosszúnál 2-3, a blokkon belül maradnak)
    images: {
        type: Array,
        default: () => [],
    },
});

function text(obj) {
    return obj?.[locale.value] || obj?.hu || '';
}
</script>

<template>
    <div
        :class="
            images.length
                ? 'grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-6 md:gap-8'
                : ''
        "
    >
        <!-- Képoszlop: több kép esetén egyenlő magasságban oszlik el a blokk mentén -->
        <div
            v-if="images.length"
            class="flex flex-col gap-4"
        >
            <div
                v-for="(image, index) in images"
                :key="index"
                class="rounded-lg overflow-hidden aspect-[4/3] md:aspect-auto md:flex-1 md:min-h-32"
            >
                <img
                    :src="image"
                    :alt="title"
                    loading="lazy"
                    class="w-full h-full object-cover"
                />
            </div>
        </div>

        <div>
            <h3 class="text-xl font-bold text-primary uppercase tracking-widest mb-6 pb-4 border-b border-default">
                {{ title }}
            </h3>

            <ul class="space-y-4">
                <li
                    v-for="(item, index) in items"
                    :key="index"
                    class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2"
                >
                    <span class="text-default font-medium leading-snug">
                        {{ text(item) }}
                    </span>
                    <div class="flex flex-col gap-1 text-primary font-semibold whitespace-nowrap md:text-right">
                        <span
                            v-for="(price, pIndex) in item.prices"
                            :key="pIndex"
                        >
                            {{ price }}
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
